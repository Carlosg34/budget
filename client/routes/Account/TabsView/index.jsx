import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as mainActions from 'store/main/actions'

import TabsView from './TabsView'

const mapStateToProps = (state) => ({
  main: state.main,
  accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TabsView)
