import { VALIDATOR_IDCARD_NO_URL } from '../constants/urls';
import { get } from '../http';

export const asyncValidatorIdcardNo = (request: { idcardno: string }) => {
    return get<IResponseData<string>>(VALIDATOR_IDCARD_NO_URL, request)
}