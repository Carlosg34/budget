import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Column, Cell, SelectionModes, Regions } from '@blueprintjs/table'

import formatDate from 'utils/formatDate'
import formatCurrency from 'utils/formatCurrency'

import EditTransactionDialog from './EditTransactionDialog'

import './TabContent.scss'

import * as transactionActions from 'store/transactions/actions'

class TabContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: this.getTransactionList(props.transactions, props.accountId),
      selectedRegions: [],
      editingRow: false,
    }
  }

  componentWillReceiveProps(newProps) {

    if (this.props.transactions !== newProps.transactions) {
        this.setState({transactions: this.getTransactionList(newProps.transactions, newProps.accountId)})
    }
  }

  getChildAccountIds(accounts, currentAccountId, list) {
    Object.keys(accounts.byId).forEach(accountId => {
      const account = accounts.byId[accountId]
      if( account.parentId === currentAccountId ) {
        list.push(Number(accountId))
        this.getChildAccountIds(accounts, account.id, list)
      }
    })
    return list
  }

  getTransactionList = (transactions, accountId) => {

    const accountList = [accountId]
    this.getChildAccountIds(this.props.accounts, accountId, accountList)

    return Object.keys(transactions.byId).reduce((list, id) => {
      const transaction = transactions.byId[id]
      if (accountList.includes(transaction.inAccountId) || accountList.includes(transaction.outAccountId)) {
        list.push(transaction)
      }
      return list
    }, [])
  }

  renderDateCell = (rowIndex) => {
    return (
      <Cell>
        <div onDoubleClick={this.onEditRow}>
          {formatDate(this.state.transactions[rowIndex].date)}
        </div>
      </Cell>
    )
  }

  renderDescriptionCell = (rowIndex) => {
    return (
      <Cell>
        <div onDoubleClick={this.onEditRow}>
          {this.state.transactions[rowIndex].description}
        </div>
      </Cell>
    )
  }

  renderAmountCell = (rowIndex) => {
    return (
      <Cell>
        <div onDoubleClick={this.onEditRow}>
          {formatCurrency(this.state.transactions[rowIndex].amount)}
        </div>
      </Cell>
    )
  }

  renderInAccountCell = (rowIndex) => {
    const accountId = this.state.transactions[rowIndex].inAccountId
    const account = this.props.accounts.byId[accountId]
    return (
      <Cell>
        <div onDoubleClick={this.onEditRow}>
          {account && account.name}
        </div>
      </Cell>
    )
  }

  renderOutAccountCell = (rowIndex) => {
    const accountId = this.state.transactions[rowIndex].outAccountId
    const account = this.props.accounts.byId[accountId]
    return (
      <Cell>
        <div onDoubleClick={this.onEditRow}>
          {account && account.name}
        </div>
      </Cell>
    )
  }

  onSelection = (regions) => {
    if (regions.length > 0) {
      this.setState({selectedRegions: [{rows: regions[0].rows}]})
    } else {
      this.setState({selectedRegions: []})
    }
  }

  onEditRow = (val) => {
    this.setState({editingRow: true})
  }

  render() {
    const {transactions, actions} = this.props

    let editingId
    if(this.state.selectedRegions.length > 0) {
      const rowIndex = this.state.selectedRegions[0].rows[0]
      editingId = this.state.transactions[rowIndex].id
    }

    return(
      <div>
        <Table
          fillBodyWithGhostCells={true}

          selectedRegions={this.state.selectedRegions}
          allowMultipleSelection={false}
          onSelection={this.onSelection}
          selectionModes={SelectionModes.ROWS_AND_CELLS}
          numRows={this.state.transactions.length}>

          <Column name='Date' renderCell={this.renderDateCell} />
          <Column name='Description' renderCell={this.renderDescriptionCell} />
          <Column name='In' renderCell={this.renderInAccountCell} />
          <Column name='Out' renderCell={this.renderOutAccountCell} />
          <Column name='Amount' renderCell={this.renderAmountCell} />
        </Table>
        <EditTransactionDialog
          isOpen={this.state.editingRow}
          transaction={transactions && transactions.byId[editingId]}
          onClose={() => this.setState({editingRow: false})}
          actions={actions}
        />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  transactions: state.transactions,
  accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...transactionActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)
