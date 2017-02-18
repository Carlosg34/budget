import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthSection from './AuthSection'
import { logout } from 'store/auth/actions'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    logout
  }, dispatch)
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(AuthSection)
