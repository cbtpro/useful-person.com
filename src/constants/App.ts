export const isDev = process.env.NODE_ENV === 'development'
export const isTest = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

const getEnv = () => {
    return isDev ? '开发' : (isTest ? '测试' : '生产')
}
export const RELEASE_INFO = Object.freeze({
    ENV: getEnv(),
})

export const AVATAR_ACCEPT_IMAGE = ['.png', '.gif', '.jpg', '.jpeg', '.webp'].join(',')

export const MOBILE_FORM_RULES = [
    { required: true, message: '请输入手机号地址！' },
    { min: 11, message: '手机号不够11位！' },
    { max: 11, message: '手机号不能超过11位！' },
    { pattern: /1[3456789][0-9]{9}$/, message: '手机号格式不正确！' }]

export const QQ_MAP_KEY = process.env.REACT_APP_QQ_MAP_KEY as string
// if (!QQ_MAP_KEY) throw Error('请配置腾讯地图KEY！')

export const QQ_MAP_JS_URI = process.env.REACT_APP_QQ_MAP_JS_URI as string
// if (!QQ_MAP_JS_URI) throw Error('请配置地图js地址！')
