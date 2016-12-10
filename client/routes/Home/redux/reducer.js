import constants from './constants'

const handlers = {
  [constants.ADD]: (state, action) => {
    return {...state,
      value: state.value + 1
    }
  }
}

const defaultState = {
  value: 0
}

export default function (state = defaultState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(state, action)
  } else {
    return state
  }
}
