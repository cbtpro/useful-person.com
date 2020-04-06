export interface ISignin {
  username: string;
  password: string;
  imageCode: string;
  'remember-me'?: boolean;
}
export interface IUserInfo {
  uuid: string;
  username: string;
  nickname: string;
  avatar: string;
  mobile: string;
  birthday: string;
  identityCard: string;
  email: string;
  longitude: number | undefined;
  latitude: number | undefined;
  hourlyWage: number;
  updateTime: string;
  createTime: string;
  authorities: [{}]
}

export type ISigninRequest = ISignin
export type IUserInfoResponse = IUserInfo | undefined