import React, { Component } from 'react'

import { Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core'
import CloseableTab from './CloseableTab'
import TabContent from './TabContent'

import styles from './TabsView.scss'

class TabsView extends Component {

  componentWillReceiveProps(newProps) {
  }

  render() {
    const {main, accounts, actions} = this.props

    let tabs = []
    let tabPanels = []
    main.tabs.forEach(tab => {
      const account = accounts.byId[tab.id]
      tabs.push(
        <Tab key={tab.id}>
          <CloseableTab account={account} close={actions.closeTab} />
        </Tab>
      )
      tabPanels.push(
        <TabPanel key={account.id}>
          <TabContent accountId={account.id} />
        </TabPanel>
      )
    })

    return (
      <div className='TabsView'>
        <Tabs
          selectedTabIndex={main.activeTabIndex}
          onChange={index => actions.setTab(index)}
          >
          <TabList>
            {tabs}
          </TabList>
          {tabPanels}
        </Tabs>
      </div>
    )
  }
}

export default TabsView
