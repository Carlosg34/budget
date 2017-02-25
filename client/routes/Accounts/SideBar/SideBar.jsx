import React, { Component } from 'react'

import { Classes, Tree, TreeNode } from '@blueprintjs/core'

import styles from './SideBar.scss'

class SideBar extends Component {

  componentDidMount() {
    this.props.actions.fetchAccounts()
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

  onNodeCollapse = (node, nodePath, event) => {

  }

  onNodeExpand = (node, nodePath, event) => {
    console.log(node, nodePath, event)
  }

  generateTree = (accountsArray, parent) => {

    const {activeTabIndex, tabs} = this.props.main
    const activeTab = tabs[activeTabIndex]
    const activeTabId = activeTab ? activeTab.id : null

    let accounts, nodes
    if (!parent) {
      accounts = accountsArray.filter(account => !account.parentId)
      nodes = []
    } else {
      accounts = accountsArray
        .filter(account => account.parentId === parent.id)
        .sort((a, b) => a.name.localeCompare(b.name))
      nodes = parent.childNodes
    }

    accounts.forEach(account => {
      const node = {
        id: account.id,
        label: account.name + ' - $' + (account.amount / 100).toFixed(2),
        hasCaret: false,
        isExpanded: true,
        isSelected: account.id === activeTabId,
        iconName: 'th',
        childNodes: []
      }
      nodes.push(node)
      this.generateTree(accountsArray, node)
    })
    return nodes
  }

  render() {

    let accountsArray = Object.keys(this.props.accounts.byId).map(id => this.props.accounts.byId[id])
    let treeContents = this.generateTree(accountsArray)


    return (
      <div className={'SideBar ' + Classes.ELEVATION_2}>
        <div>Jan 1, 2017 to Feb 1, 2017</div>
        <Tree
          onNodeClick={this.onNodeClick}
          onNodeCollapse={this.onNodeCollapse}
          onNodeExpand={this.onNodeExpand}
          contents={treeContents}
        />

        <button>Add Account</button>
      </div>
    )
  }
}

export default SideBar
