import originAxios from 'axios'
import qs from 'qs'
import { message } from 'antd';
import { IResponseData } from '../interfaces/ResponseData';
import MediaType from '../constants/MediaType'
import HttpStatus from '../constants/HttpStatus'


const axios = originAxios.create({
  timeout: 20000
})

axios.interceptors.response.use(
  function(response) {
    if (response.data && response.data.code === 1) {
        let errorMsg = response.data.content;
        message.error(errorMsg);
        return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function(error) {
    let { response } = error
    if (response) {
      let { status, data } = response
      let { content } = data
      if (status === HttpStatus.UNAUTHORIZED) {
        message.error('用户未登录，请登录！');
      } else if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        message.error(content)
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