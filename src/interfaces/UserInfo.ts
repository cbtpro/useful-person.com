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
  uuid?: string;
  username?: string;
  nickname?: string;
  avatar?: string;
  mobile?: string;
  birthday?: string;
  identityCardName?: string;
  identityCardNo?: string;
  email?: string;
  longitude?: number | undefined;
  latitude?: number | undefined;
  hourlyWage?: number;
  updateTime?: string;
  createTime?: string;
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
export type ISigninRequest = ISignin
export type ISignupRequest = ISignup
export type IUserInfoResponse = IUserInfo | undefined
export type IUsersResponse = IUserInfo[] | undefined