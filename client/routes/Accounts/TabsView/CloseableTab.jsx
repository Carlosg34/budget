import React, { Component } from 'react'

class CloseableTab extends Component {
  render() {
    return (
      <span>
        {this.props.account.name}
        <button
          type="button"
          className="pt-button pt-minimal pt-icon-small-cross"
          onClick={(e) => {
            e.stopPropagation()
            this.props.close(this.props.account.id)
          }}
          />
      </span>
    )
  }
}

export default CloseableTab
