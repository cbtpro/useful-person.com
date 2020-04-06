import { Dispatch } from 'redux'

import { get, post } from '../../http'
import { GET_USERINFO_ME_URL, SIGNIN_URL, SIGNOUT_URL } from '../../constants/urls'
import { GET_USERINFO_ME, DO_SIGNIN, DO_SIGNOUT } from '../../constants/actions'
import { IResponseData } from '../../interfaces/ResponseData'
import { ISigninRequest, IUserInfoResponse } from '../../interfaces/UserInfo'

type State = Readonly<{
  userInfo: IUserInfoResponse;
}>

type Action = {
  type: string;
  payload: IUserInfoResponse
}

const initialState: State = {
  userInfo: undefined
}

export function getUserInfoMe(callback?: () => void) {
  return (dispatch: Dispatch) => {
    get<IResponseData<IUserInfoResponse>>(GET_USERINFO_ME_URL).then(response => {
      dispatch({
        type: GET_USERINFO_ME,
        payload: response
      })
      callback && callback();
    })
  }
}

export function doSignin(param: ISigninRequest, callback?: () => void) {
  return (dispatch: Dispatch) => {
    post<IResponseData<IUserInfoResponse>>(SIGNIN_URL, param).then(response => {
      dispatch({
        type: DO_SIGNIN,
        payload: response
      })
      callback && callback();
    })
  }
}

export function doSignout(callback?: () => void) {
  return (dispatch: Dispatch) => {
    get(SIGNOUT_URL).then(response => {
      dispatch({
        type: DO_SIGNOUT
      })
      callback && callback()
    })
  }
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_USERINFO_ME:
      return {
        ...state,
        userInfo: action.payload
      }
    case DO_SIGNIN: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case DO_SIGNOUT: {
      return {
        ...state,
        userInfo: initialState.userInfo
      }
    }
    default:
      return state
  }
}