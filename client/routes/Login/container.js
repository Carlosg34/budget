import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login, logout } from 'store/auth/actions'

import Login from './component/Login'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    login, logout
  }, dispatch)
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login)
