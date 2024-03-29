
import { SEND_EMAIL_URL, SEND_SMS_URL, UNBIND_EMAIL_URL, UNBIND_MOBILE_URL, UPDATE_EMAIL_URL, UPDATE_MOBILE_URL } from '../constants/urls';
import { get, post, put } from '../http';
import { IResponseData } from '../interfaces/ResponseData';
import { IEmailCodeRequest, ISmsCodeRequest, IValidatorEmailCodeRequest, IValidatorSmsCodeRequest } from '../interfaces/ValidatorCode';
import qs from 'qs';
import MediaType from '../constants/MediaType';

export const sendEmailCode = (request: IEmailCodeRequest) => {
    return get<IResponseData<string>>(SEND_EMAIL_URL, request)
}

export const updateEmail = (request: IValidatorEmailCodeRequest) => {
    return put<IResponseData<string>>(UPDATE_EMAIL_URL, qs.stringify(request), {
        headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }
      })
}

export const unbindEmail = (request: IValidatorEmailCodeRequest) => {
    return post<IResponseData<string>>(UNBIND_EMAIL_URL, qs.stringify(request), {
        headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }
      })
}

export const sendSmsCode = (request: ISmsCodeRequest) => {
    return get<IResponseData<string>>(SEND_SMS_URL, request)
}

export const updateMobile = (request: IValidatorSmsCodeRequest) => {
    return put<IResponseData<string>>(UPDATE_MOBILE_URL, qs.stringify(request), {
        headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }
      })
}
export const unbindMobile = (request: IValidatorSmsCodeRequest) => {
    return post<IResponseData<string>>(UNBIND_MOBILE_URL, qs.stringify(request), {
        headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }
      })
}