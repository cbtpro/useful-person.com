export const AVATAR_ACCEPT_IMAGE = ['.png', '.gif', '.jpg', '.jpeg', '.webp'].join(',')

export const MOBILE_FORM_RULES = [
    { required: true, message: '请输入手机号地址！' },
    { min: 11, message: '手机号不够11位！' },
    { max: 11, message: '手机号不能超过11位！' },
    { pattern: /1[3456789][0-9]{9}$/, message: '手机号格式不正确！' }]

export const QQ_MAP_JS_URI = process.env.REACT_APP_QQ_MAP_JS_URI as string
if (!QQ_MAP_JS_URI) throw Error('地图js不正确！')
