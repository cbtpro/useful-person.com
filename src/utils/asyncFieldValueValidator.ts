import { VALIDATOR_IDCARD_NO_URL } from '../constants/urls';
import { get } from '../http';
import { IResponseData } from '../interfaces/ResponseData';

export const asyncValidatorIdcardNo = (request: { idcardno: string }) => {
    return get<IResponseData<string>>(VALIDATOR_IDCARD_NO_URL, request)
}