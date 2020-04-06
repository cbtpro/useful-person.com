import originAxios from 'axios'
import qs from 'qs'
import { message as Message } from 'antd';
import { IResponseData } from '../interfaces/ResponseData';
import MediaType from '../constants/MediaType'
import HttpStatus from '../constants/HttpStatus'
import ReturnCode from '../constants/ReturnCode'


const axios = originAxios.create({
  timeout: 20000
})

axios.interceptors.response.use(
  function(response) {
    if (response.data && response.data.code === ReturnCode.ERROR) {
        let errorMsg = response.data.content;
        Message.error(errorMsg);
        return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function(error) {
    let { response } = error
    if (response) {
      let { status, data: { content } } = response
      if (status === HttpStatus.UNAUTHORIZED) {
        Message.error('用户未登录，请登录！');
      } else if (status === HttpStatus.INTERNAL_SERVER_ERROR || status === HttpStatus.BAD_REQUEST) {
        Message.error(content)
      } else if (status === HttpStatus.GATEWAY_TIMEOUT) {
        Message.error('服务器好像出问题了😅！')
      }
    }
    return Promise.reject(error)
  }
)

export function get<T>(url: string, data = {}) {
  return axios.get<IResponseData<T>>(url, {
    params: data
  })
  .then(res => res.data)
  .catch(error => {
    console.log(error)
    return undefined
  })
}

export function post<T>(url: string, data: any) {
  return axios.post<IResponseData<T>>(url, qs.stringify(data), {
    headers: { 'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE }
  })
}

export function put(url: string, data: any) {
  return axios({
    method: 'put',
    url,
    data
  })
}

export function del(url: string, data: any) {
  return axios.delete(url, {
    params: data
  })
}