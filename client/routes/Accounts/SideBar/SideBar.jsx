import React, { Component } from 'react'
import { Classes, Tree, TreeNode } from '@blueprintjs/core'
import formatCurrency from 'utils/formatCurrency'

import styles from './SideBar.scss'

class SideBar extends Component {

  componentDidMount() {
    this.props.actions.fetchAccounts()
    this.props.actions.fetchTransactions()
  }

  onNodeClick = (node, nodePath, event) => {
    this.props.actions.openTab(node.id)

    // For whatever reason, it won't switch to the new tabs if the new tab is
    // both created and set to be the active tab at the same time.
    // calling openTab twice in a row works around this issue.
    window.setTimeout(() => {
      this.props.actions.openTab(node.id)
    }, 0)
  }

  getChildAccounts = (currentAccountId) => {
    const { accounts } = this.props
    const currentAccount = accounts.byId[currentAccountId]

    const {activeTabIndex, tabs} = this.props.main
    const activeTab = tabs[activeTabIndex]
    const activeTabId = activeTab ? activeTab.id : null

    const node = {
      id: currentAccount.id,
      label: currentAccount.name + ' - ' + formatCurrency(currentAccount.amount),
      hasCaret: false,
      isExpanded: true,
      isSelected: currentAccount.id === activeTabId,
      iconName: 'th',
      childNodes: []
    }

    currentAccount.children.forEach(childId => {
      node.childNodes.push(this.getChildAccounts(childId))
    })
    return node
  }

  render() {
    const { accounts } = this.props

    const treeContents = []
    Object.keys(this.props.accounts.byId).forEach(id => {
      const account = accounts.byId[id]
      if (!account.parentId) {
        treeContents.push(this.getChildAccounts(id))
      }
    })

    return (
      <div className={'SideBar ' + Classes.ELEVATION_2}>
        <div>Jan 1, 2017 to Feb 1, 2017</div>
        <Tree
          onNodeClick={this.onNodeClick}
          contents={treeContents}
        />

        <button>Add Account</button>
      </div>
    )
  }
}

export default SideBar
