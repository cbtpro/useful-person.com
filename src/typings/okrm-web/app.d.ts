interface IPane {
    name: string;
    key: string;
    icon?: JSX.Element;
    content: JSX.Element;
}
interface ITabs {
    [x: string]: JSX.Element;
}
interface IProvince {
    uuid: string; // "a572f8fe-9013-4e19-908a-5c28607205df"
    code: string; // "110000"
    name: string; // 北京市
    upperCode: string; // "86" | "110000"
    description?: string; // null | ""
    updateTime: string; // "2020-08-08T14:18:45.359+00:00"
    createTime: string; // "2020-08-08T14:18:45.359+00:00"
    children: IProvince[];
}
interface IProvinceCascade {
    label: string
    value: string
    children?: IProvinceCascade[]
}

interface ISchool {
    uuid: string; // 用来标志全局唯一性
    name: string; // 学校名称
    competentDepartment: string; // 主管部门：教育部、北京市、工业和信息化部、中央办公厅、国家卫生健康委员会、应急管理部、外交部、公安部、国家体育总局、国家民委、中华妇女联合会、北京市教委、共青团中央、中华全国总工会等
    educationCourse: string; // 办学层次：本科、专科等
    identificationCode: string; // 学校标识码
    province: string; // 所在省份
    location: string; // 地址
    latitude: number; // 经纬度：纬度
    longitude: number; // 经纬度：经度
    number: integer; // 序号，不具有排名意义
    officialWebsite: string; // 官网
    remark: string; // 备注：民办或着其他值
    type: string; // 类型：全日制、非全日制
    updateTime: string; // 更新时间，UTC
    createTime: string; // 创建时间，UTC
}

interface IResponseData<T> {
  code: number,
  content: string,
  data: T
}

interface IPageableParam { size: number, page: number }
interface ISort { sorted: boolean, unsorted: boolean, empty: boolean }
interface IPageable<T> {
  content: T[],
  pageable: {
    sort: ISort,
    offset: number,
    pageSize: number,
    pageNumber: number,
    paged: boolean,
    unpaged: boolean
  },
  totalPages: number,
  totalElements: number,
  last: boolean,
  size: number,
  numberOfElements: number,
  first: boolean,
  number: number,
  sort: ISort,
  empty: boolean
}

interface ISignin {
  username: string;
  password: string;
  imageCode: string;
  'remember-me'?: boolean;
}
interface ISignup {
  username: string;
  nickname?: string;
  password: string;
  imageCode: string;
}
interface IUserInfo {
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
interface IUsersRequest {
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
interface IRole {
  uuid?: string
  rolename: string | undefined
  description?: string
  updateTime?: string
  createTime?: string
}
type ISigninRequest = ISignin
type ISignupRequest = ISignup
type IUserInfoResponse = IUserInfo | undefined
type IProvincesResponse = IProvince[] | undefined
type IUsersResponse = IUserInfo[] | undefined

type IRolesResponse = IRole[] | undefined

interface IEmailCodeRequest {
  email: string;
  imageCode: string;
}
interface ISmsCodeRequest {
  mobile: string;
  imageCode: string;
}

interface IValidatorEmailCodeRequest {
  email: string;
  emailCode: string;
}

interface IValidatorSmsCodeRequest {
  mobile: string;
  smsCode: string;
}

interface IToast {
  isError?: boolean;
  message: string;
}
interface INotification {
  isError?: boolean;
  message: string;
  description?: string;
}