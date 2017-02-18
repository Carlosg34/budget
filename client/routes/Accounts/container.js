import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'store/main/actions'

import Accounts from './Accounts'

const mapStateToProps = (state) => ({
  main: state.main
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
