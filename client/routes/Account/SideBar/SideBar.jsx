import React, { Component } from 'react'

import { Classes, Tree, TreeNode } from '@blueprintjs/core'

import styles from './SideBar.scss'

class SideBar extends Component {

  componentDidMount() {
    this.props.actions.fetchAccounts()
  }

  onNodeClick = (node, nodePath, event) => {
    this.props.actions.openTab(node.id)
  }

  onNodeCollapse = (node, nodePath, event) => {

  }

  onNodeExpand = (node, nodePath, event) => {
    console.log(node, nodePath, event)
  }

  generateTree = (accountsArray, parent) => {

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
