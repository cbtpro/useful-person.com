import moment from 'moment'
import { DEFAULT_X_OSS_PROCESS, BLANK_AVATAR_URL } from '../constants/urls'
import { IUserInfo } from '../interfaces/UserInfo'

export default (userInfo: IUserInfo) => {
    let { uuid, username, nickname, avatar, mobile, birthday, identityCardName, identityCardNo, email, longitude, latitude, hourlyWage, updateTime, createTime } = userInfo
    // @ts-ignore
    document.getElementById('favicon').href = (avatar || BLANK_AVATAR_URL) + DEFAULT_X_OSS_PROCESS
    return {
        uuid,
        username,
        nickname,
        avatar: avatar || BLANK_AVATAR_URL,
        mobile,
        birthday: birthday ? moment(birthday) : moment('1990-09-20'),
        identityCardName,
        identityCardNo,
        email,
        longitude,
        latitude,
        hourlyWage,
        updateTime,
        createTime
    }
}
