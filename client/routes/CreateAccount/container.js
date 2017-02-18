import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createAccount, logout } from 'store/auth/actions'

import CreateAccount from './component/CreateAccount'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    createAccount, logout
  }, dispatch)
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateAccount)
