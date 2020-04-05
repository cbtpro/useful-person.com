import { Dispatch } from 'redux'

import { get } from '../../http'
import { GET_DEMO_URL } from '../../constants/urls'
import { GET_DEMO } from '../../constants/actions'
import { DemoRequest, DemoResponse } from '../../interfaces/Demo'

type State = Readonly<{
  demoList: DemoResponse;
}>

type Action = {
  type: string;
  payload: DemoRequest;
}

const initialState: State = {
  demoList: undefined
}

export function getDemo(param: DemoRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    get(GET_DEMO_URL, param).then(response => {
      dispatch({
        type: GET_DEMO,
        payload: response.data
      })
      callback();
    })
  }
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_DEMO:
      return {
        ...state,
        demoList: action.payload
      }
    default: return state
  }
}