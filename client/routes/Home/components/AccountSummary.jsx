import React, { Component } from 'react'
import { Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core'

class AccountSummary extends Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   defaultExpandedKeys: ['00', '01'],
    //   defaultSelectedKeys: ['00', '01'],
    //   defaultCheckedKeys: ['00', '01']
    // }
  }

  // onSelect = (info) => {
  //   console.log('selected', info)
  // }
  //
  // onCheck = (info) => {
  //   console.log('onCheck', info)
  // }

  render () {
    return (
      <div>
        <h2>Account Summary</h2>
        <Tabs>
          <TabList>
              <Tab>First tab</Tab>
              <Tab>Second tab</Tab>
              <Tab>Third tab</Tab>
              <Tab isDisabled={true}>Fourth tab</Tab>
          </TabList>
          <TabPanel>
              First panel
          </TabPanel>
          <TabPanel>
            <div className="pt-non-ideal-state">
              <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
                <span className="pt-icon pt-icon-folder-open"></span>
              </div>
              <h4 className="pt-non-ideal-state-title">This Folder Is Empty</h4>
              <div className="pt-non-ideal-state-description">
                Create a new file to populate the folder.
              </div>
            </div>
          </TabPanel>
          <TabPanel>
              Third panel
          </TabPanel>
          <TabPanel>
              Fourth panel
          </TabPanel>
      </Tabs>
      </div>
    )
  }
}

export default AccountSummary
