import { Dispatch } from 'redux'
import { GET_SIDE_STATUS, SET_SIDE_STATUS, GET_PANES, ADD_PANE, REMOVE_PANE, TOGGLE_PANE, GET_PROVINCES } from '../../constants/actions'
import { GET_PROVINCES_URL } from '../../constants/urls'
import { IResponseData } from '../../interfaces/ResponseData'
import { get } from '../../http'
import { IProvincesResponse } from '../../interfaces/UserInfo'
import { processProvinces } from '../../utils/dataProcess'

type State = Readonly<{
  theme: string
  sideCollapsed: boolean
  activeSideMenu: string | undefined
  panes: IPane[]
  provinces: IProvince[]
}>

type Action = {
  type: string;
  payload: State[keyof State] | IPane;
}

const initialState: State = {
  theme: 'light',
  sideCollapsed: false,
  activeSideMenu: undefined,
  panes: [],
  provinces: []
}

// TODO 更改side的函数修改成toggleSideCollapsed
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

export function getPanes() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_PANES
    })
  }
}

export function addPane(pane: IPane) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_PANE,
      payload: pane
    })
  }
}
export function removePane(key: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REMOVE_PANE,
      payload: key
    })
  }
}
export function togglePane(key: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TOGGLE_PANE,
      payload: key
    })
  }
}
export function getProvinces() {
  return (dispatch: Dispatch) => {
    get<IResponseData<IProvincesResponse>>(GET_PROVINCES_URL).then(response => {
      dispatch({
        type: GET_PROVINCES,
        payload: response as IProvince[]
      })
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
    case GET_PANES:
      return {
        ...state,
        panes: state.panes
      }
    case ADD_PANE:
      return {
        ...state,
        panes: state.panes.concat(action.payload as IPane)
      }
    case REMOVE_PANE:
      let newPanes = state.panes.filter(pane => pane.key !== action.payload)
      if (state.activeSideMenu === action.payload) {
        let newPaneKey: string | undefined
        if (newPanes.length === 0) {
          newPaneKey = undefined
        } else if (newPanes.length === 1) {
          newPaneKey = newPanes[0].key
        } else {
          let closePaneIndex = state.panes.findIndex(pane => pane.key === action.payload)
          let newActivePane: number
          closePaneIndex > 0 ? newActivePane = closePaneIndex - 1 : newActivePane = closePaneIndex
          newPaneKey = newPanes[newActivePane].key
        }
        return {
          ...state,
          panes: newPanes,
          activeSideMenu: newPaneKey
        }
      }
      return {
        ...state,
        panes: newPanes
      }
    case TOGGLE_PANE:
      return {
        ...state,
        activeSideMenu: action.payload
      }
    case GET_PROVINCES:
      let data = processProvinces([], action.payload as IProvince[])
      return {
        ...state,
        provinces:  data
      }
    default: 
      return state
  }
}
