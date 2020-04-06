import { Dispatch } from 'redux'
import { GET_SIDE_STATUS, SET_SIDE_STATUS } from '../../constants/actions'

type State = Readonly<{
  theme: string;
  sideCollapsed: boolean;
  activeSideMenu: string;
}>

type Action = {
  type: string;
  payload: State[keyof State];
}

const initialState: State = {
  theme: 'light',
  sideCollapsed: false,
  activeSideMenu: 'dashboard'
}

export function getSideCollapsed() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_SIDE_STATUS
    })
  }
}

export function setSideCollapsed(param: boolean) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SET_SIDE_STATUS,
      payload: param
    })
  }
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_SIDE_STATUS:
      return {
        ...state,
        sideCollapsed: state.sideCollapsed
      }
    case SET_SIDE_STATUS:
      return {
        ...state,
        sideCollapsed: action.payload
      }
    default: 
      return state
  }
}
