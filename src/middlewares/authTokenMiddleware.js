// import {
//     GET_USERINFO_ME,
// } from '../constants/actions'

export const authTokenMiddleware = store => next => action => {
    // const {
    //     type,
    //     payload,
    // } = action
    // switch (type) {
    //     case GET_USERINFO_ME:
    //         // DO Something
    //         break;
    
    //     default:
    //         break;
    // }
    return next(action)
}