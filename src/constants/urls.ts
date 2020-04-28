export const GET_DEMO_URL = '/api/user/me'


export const DEFAULT_AVATAR_URL = 'https://resources.useful-person.com/avatar/default/avatar.png'
export const BLANK_AVATAR_URL = 'https://useful-person.com/assets/images/user/blank.png'

export const GET_USERINFO_ME_URL = '/api/user/me'

export const SIGNIN_URL = '/api/authentication/form'

export const SIGNUP_URL = '/api/signup'

export const SIGNOUT_URL = '/api/logout'

// 发送邮箱验证码
export const SEND_EMAIL_URL = '/api/code/mail'
// 绑定邮箱
export const UPDATE_EMAIL_URL = '/api/user/email'
// 解绑邮箱
export const UNBIND_EMAIL_URL = '/api/user/email/unbindOldEmail'
// 发送短信验证码
export const SEND_SMS_URL = '/api/code/sms'
// 绑定手机号
export const UPDATE_MOBILE_URL = '/api/user/mobile'
// 解绑手机号
export const UNBIND_MOBILE_URL = '/api/user/mobile/unbindOldMobile'

// 验证身份证是否合法
export const VALIDATOR_IDCARD_NO_URL = '/api/utils/validator/idcardno'

// 更新实名制信息
export const UPDATE_REALNAME_URL = '/api/user/realname'

// 更新用户信息
export const UPDATE_USERINFO_URL = '/api/user'

// 更新密码
export const UPDATE_USER_PASSWORD_URL = '/api/user/passwd'


// 增加角色、更新角色、删除角色
export const ADD_ROLE_URL = '/api/admin/role'
export const UPDATE_ROLE_URL = ADD_ROLE_URL
export const DEL_ROLE_URL = ADD_ROLE_URL

// 根据UUID查询角色
export const QUERY_ROLE_URL = '/api/admin/role'
// 查询角色列表
export const QUERY_ROLES_URL = '/api/admin/roles'
// 查询用户列表
export const QUERY_USERS_URL  = '/api/admin/users'