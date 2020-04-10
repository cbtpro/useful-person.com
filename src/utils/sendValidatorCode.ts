
import { SEND_EMAIL_URL, UPDATE_EMAIL_URL } from '../constants/urls';
import { get, put } from '../http';
import { IResponseData } from '../interfaces/ResponseData';
import { IEmailCodeRequest, IValidatorEmailCodeRequest } from '../interfaces/ValidatorCode';

export const sendEmailCode = (request: IEmailCodeRequest) => {
    return new Promise((resolve, reject) => {
        get<IResponseData<string>>(SEND_EMAIL_URL, request)
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}

export const updateEmail = (request: IValidatorEmailCodeRequest) => {
    return put<IResponseData<string>>(UPDATE_EMAIL_URL, request)
}