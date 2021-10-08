import moment from 'moment'
import { BLANK_AVATAR_URL } from '../constants/urls'

export default (userInfo: IUserInfo) => {
    let { uuid, username, nickname, avatar, mobile, birthday, identityCardName, identityCardNo, email, longitude, latitude, province, city, county, hourlyWage, updateTime, createTime } = userInfo
    // @ts-ignore
    document.getElementById('favicon').href = (avatar || BLANK_AVATAR_URL)
    return {
        uuid,
        username,
        nickname,
        avatar: avatar || BLANK_AVATAR_URL,
        mobile,
        region: [province, city, county],
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
