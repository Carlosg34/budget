import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as mainActions from 'store/main/actions'
import * as accountActions from 'store/accounts/actions'

import SideBar from './SideBar'

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  main: state.main
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...mainActions,
    ...accountActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
