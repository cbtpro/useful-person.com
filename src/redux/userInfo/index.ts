import { Dispatch } from 'redux'
import { DO_SIGNIN, DO_SIGNOUT, DO_SIGNUP, GET_USERINFO_ME, SET_USERINFO_ME } from '../../constants/actions'
import { GET_USERINFO_ME_URL, SIGNIN_URL, SIGNOUT_URL, SIGNUP_URL } from '../../constants/urls'
import { get, post } from '../../http'
import HttpStatus from '../../constants/HttpStatus'
import { IResponseData } from '../../interfaces/ResponseData'
import { ISigninRequest, ISignupRequest, IUserInfo, IUserInfoResponse } from '../../interfaces/UserInfo'
import userInfoProcess from '../../utils/userInfoProcess'
import qs from 'qs'
import MediaType from '../../constants/MediaType'


type State = Readonly<{
  userIsLogin: boolean
  userInfo: IUserInfoResponse;
}>

type Action = {
  type: string;
  payload: IUserInfoResponse
}

const initialState: State = {
  userIsLogin: true,
  userInfo: {
    username: '未登录',
    nickname: '未登录',
  },
}

export function getUserInfoMe(callback?: () => void) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await get<IResponseData<IUserInfoResponse>>(GET_USERINFO_ME_URL)
      dispatch({
        type: GET_USERINFO_ME,
        payload: userInfoProcess(response as IUserInfo)
      })
      callback && callback();
    } catch (error) {
      const { response } = error
      const { status } = response
      if (status === HttpStatus.UNAUTHORIZED) {
        console.error('用户未登录')
      }
      dispatch({
        type: SET_USERINFO_ME,
        payload: {}
      })
    }
  }
}

export function doSignin(param: ISigninRequest, callback?: () => void) {
  return (dispatch: Dispatch) => {
    post<IResponseData<IUserInfoResponse>>(SIGNIN_URL, qs.stringify(param), { headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }}).then(response => {
      dispatch({
        type: DO_SIGNIN,
        payload: response
      })
      callback && callback();
    })
  }
}

export function doSignup(param: ISignupRequest, callback?: () => void) {
  return (dispatch: Dispatch) => {
    post<IResponseData<IUserInfoResponse>>(SIGNUP_URL, qs.stringify(param)).then(response => {
      dispatch({
        type: DO_SIGNUP,
        payload: response
      })
      callback && callback()
    })
  }
}
export function doSignout(callback?: () => void) {
  return (dispatch: Dispatch) => {
    get(SIGNOUT_URL).then(response => {
      dispatch({
        type: DO_SIGNOUT,
        payload: response
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
        userInfo: action.payload,
        userIsLogin: true,
      }
    case SET_USERINFO_ME:
      return {
        ...state,
        userInfo: action.payload,
        userIsLogin: false,
      }
    case DO_SIGNIN: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case DO_SIGNUP: {
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