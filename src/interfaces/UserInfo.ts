export interface ISignin {
  username: string;
  password: string;
  imageCode: string;
  'remember-me'?: boolean;
}
export interface ISignup {
  username: string;
  nickname?: string;
  password: string;
  imageCode: string;
}
export interface IUserInfo {
  uuid?: string
  username?: string
  nickname?: string
  avatar?: string
  mobile?: string
  birthday?: string
  identityCardName?: string
  identityCardNo?: string
  email?: string
  longitude?: number | undefined
  latitude?: number | undefined
  province?: string
  city?: string
  county?: string
  hourlyWage?: number
  updateTime?: string
  createTime?: string
  authorities?: [{}]
}
export interface IUsersRequest {
  username?: string
  nickname?: string
  mobile?: string
  email?: string
  signUpStartTime?: string
  signUpEndTime?: string
  registerTimeFrom?: string | number
  registerTimeTo?: string | number
  enabled?: "true" | "false" | undefined
}
export interface IRole {
  uuid?: string
  rolename: string | undefined
  description?: string
  updateTime?: string
  createTime?: string
}
export type ISigninRequest = ISignin
export type ISignupRequest = ISignup
export type IUserInfoResponse = IUserInfo | undefined
export type IProvincesResponse = IProvince[] | undefined
export type IUsersResponse = IUserInfo[] | undefined

export type IRolesResponse = IRole[] | undefined