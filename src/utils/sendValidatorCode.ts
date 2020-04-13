
import { SEND_EMAIL_URL, UNBIND_EMAIL_URL, UPDATE_EMAIL_URL } from '../constants/urls';
import { get, post, put } from '../http';
import { IResponseData } from '../interfaces/ResponseData';
import { IEmailCodeRequest, IValidatorEmailCodeRequest } from '../interfaces/ValidatorCode';

export const sendEmailCode = (request: IEmailCodeRequest) => {
    return get<IResponseData<string>>(SEND_EMAIL_URL, request)
}

export const updateEmail = (request: IValidatorEmailCodeRequest) => {
    return put<IResponseData<string>>(UPDATE_EMAIL_URL, request)
}

export const unbindEmail = (request: IValidatorEmailCodeRequest) => {
    return post<IResponseData<string>>(UNBIND_EMAIL_URL, request)
}