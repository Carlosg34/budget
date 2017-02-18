import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Column, Cell } from '@blueprintjs/table'

import * as transactionActions from 'store/transactions/actions'

class TabContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    this.props.actions.fetchTransactions(this.props.accountId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.transactions !== newProps.transactions) {
      if (newProps.transactions) {
        const transactions = Object.keys(newProps.transactions.byId).map(id => {
          return newProps.transactions.byId[id]
        })

        this.setState({transactions: transactions})
      }
    }
  }

  renderDateCell = (rowIndex) => {
    return <Cell>{this.state.transactions[rowIndex].date}</Cell>
  }

  renderDescriptionCell = (rowIndex) => {
    return <Cell>{this.state.transactions[rowIndex].description}</Cell>
  }

  renderAmountCell = (rowIndex) => {
    return <Cell>{`$${(this.state.transactions[rowIndex].amount / 2).toFixed(2)}`}</Cell>
  }

  renderInAccountCell = (rowIndex) => {
    const accountId = this.state.transactions[rowIndex].inAccountId
    const account = this.props.accounts.byId[accountId]
    return <Cell>{account && account.name}</Cell>
  }

  renderOutAccountCell = (rowIndex) => {
    const accountId = this.state.transactions[rowIndex].outAccountId
    const account = this.props.accounts.byId[accountId]
    return <Cell>{account && account.name}</Cell>
  }

  render() {
    const { transactions } = this.props
    return(
      <div>
        Tab Content: {this.props.accountId}

        <Table numRows={this.state.transactions.length}>
          <Column name='Date' renderCell={this.renderDateCell} />
          <Column name='Description' renderCell={this.renderDescriptionCell} />
          <Column name='In' renderCell={this.renderInAccountCell} />
          <Column name='Out' renderCell={this.renderOutAccountCell} />
          <Column name='Amount' renderCell={this.renderAmountCell} />
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  transactions: state.transactions.byAccountId[ownProps.accountId],
  accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...transactionActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)
