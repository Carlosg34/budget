import constants from './constants'

export function openTab(id) {
  return {
    type: constants.OPEN_TAB,
    payload: {
      id: id
    }
  }
}

export function closeTab(id) {
  return {
    type: constants.CLOSE_TAB,
    payload: {
      id: id
    }
  }
}

export function setTab(index) {
  return {
    type: constants.SET_TAB,
    payload: {
      index: index
    }
  }
}
