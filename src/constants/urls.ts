export const GET_DEMO_URL = '/user/me'

export const DEFAULT_X_OSS_PROCESS = '?x-oss-process=style/circle'
export const DEFAULT_AVATAR_URL = 'https://resources.useful-person.com/avatar/default/avatar.png'
export const BLANK_AVATAR_URL = 'https://resources.useful-person.com/avatar/default/avatar.png'

export const GET_USERINFO_ME_URL = '/user/me'

export const SIGNIN_URL = '/authentication/form'

export const SIGNUP_URL = '/signup'

export const SIGNOUT_URL = '/logout'

// 发送邮箱验证码
export const SEND_EMAIL_URL = '/code/mail'
// 绑定邮箱
export const UPDATE_EMAIL_URL = '/user/email'
// 解绑邮箱
export const UNBIND_EMAIL_URL = '/user/email/unbindOldEmail'
// 发送短信验证码
export const SEND_SMS_URL = '/code/sms'
// 绑定手机号
export const UPDATE_MOBILE_URL = '/user/mobile'
// 解绑手机号
export const UNBIND_MOBILE_URL = '/user/mobile/unbindOldMobile'

// 验证身份证是否合法
export const VALIDATOR_IDCARD_NO_URL = '/utils/validator/idcardno'

// 更新实名制信息
export const UPDATE_REALNAME_URL = '/user/realname'

// 更新用户信息
export const UPDATE_USERINFO_URL = '/user'

// 更新密码
export const UPDATE_USER_PASSWORD_URL = '/user/passwd'


// 增加角色、更新角色、删除角色
export const ADD_ROLE_URL = '/admin/role'
export const UPDATE_ROLE_URL = ADD_ROLE_URL
export const DEL_ROLE_URL = ADD_ROLE_URL
// 查询拥有管理员角色的用户
export const QUERY_USERS_HASADMIN = '/admin/admins'
// 添加给用户添加管理员权限
export const ADD_USERS_TO_ADMIN_ROLE = '/admin/admins'
export const REMOVE_USER_FROM_ADMIN_ROLE = ADD_USERS_TO_ADMIN_ROLE

// 根据UUID查询角色
export const QUERY_ROLE_URL = '/admin/role'
// 查询角色列表
export const QUERY_ROLES_URL = '/admin/roles'
// 查询用户列表
export const QUERY_USERS_URL  = '/admin/users'
