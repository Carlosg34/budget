import constants from './constants'

const handlers = {
  [constants.OPEN_TAB]: (state, action) => {
    // If tab is already open
    let activeTabIndex = state.tabs.findIndex(tab => tab.id === action.payload.id)

    if (activeTabIndex >= 0) {
      return {...state,
        activeTabIndex: activeTabIndex
      }
    } else {
      return {...state,
        tabs: [...state.tabs, {
          id: action.payload.id
        }],
        activeTabIndex: state.tabs.length
      }
    }
  },
  [constants.CLOSE_TAB]: (state, action) => {
    let closingTabIndex

    const remainingTabs = state.tabs.filter((tab, index) => {
      if (tab.id === action.payload.id) {
        closingTabIndex = index
        return false
      } else {
        return true
      }
    })

    return {...state,
      tabs: remainingTabs,
      activeTabIndex: state.activeTabIndex >= closingTabIndex ? state.activeTabIndex - 1 : state.activeTabIndex
    }
  },
  [constants.SET_TAB]: (state, action) => {
    return {...state,
      activeTabIndex: action.payload.index
    }
  }
}

const defaultState = {
  tabs: [],
  activeTabIndex: 1
}

export default function (state = defaultState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(state, action)
  } else {
    return state
  }
}
