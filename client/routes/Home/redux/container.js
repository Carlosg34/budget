import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import Home from '../index'

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
