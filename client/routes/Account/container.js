import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppLayout from './AppLayout'

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
