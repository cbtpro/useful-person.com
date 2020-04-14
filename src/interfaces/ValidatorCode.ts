export interface IEmailCodeRequest {
    email: string;
    imageCode: string;
}
export interface ISmsCodeRequest {
    mobile: string;
    imageCode: string;
}

export interface IValidatorEmailCodeRequest {
    email: string;
    emailCode: string;
}

export interface IValidatorSmsCodeRequest {
    mobile: string;
    smsCode: string;
}