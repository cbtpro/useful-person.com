import { message as Message, notification } from 'antd'
import originAxios, { AxiosRequestConfig } from 'axios'
import HttpStatus from '../constants/HttpStatus'
import MediaType from '../constants/MediaType'
import ReturnCode from '../constants/ReturnCode'
import { IResponseData } from '../interfaces/ResponseData'

const BASE_URL = process.env.REACT_APP_BASE_SERVICE_URL
const axios = originAxios.create({
  baseURL: `${BASE_URL}`,
  timeout: 20000
})

axios.interceptors.response.use(
  function (response) {
    if (response.data && response.data.code === ReturnCode.ERROR) {
      let errorMsg = response.data.content
      errorMsg && notification.error({
        message: '消息',
        description: errorMsg
      })
      return Promise.reject(errorMsg)
    } else {
      let { content } = response.data
      content && notification.info({
        message: '消息',
        description: content
      })
    }
    return response.data
  },
  function (error) {
    let { response } = error
    if (response) {
      let { status, data: { content } } = response
      if (status === HttpStatus.UNAUTHORIZED) {
        console.warn('用户未登录，请登录！')
      } else if (status === HttpStatus.FORBIDDEN) {
        Message.error('没有请求的权限！')
      } else if (status === HttpStatus.INTERNAL_SERVER_ERROR || status === HttpStatus.BAD_REQUEST) {
        content && notification.error({
          message: '消息',
          description: content
        })
      } else if (status === HttpStatus.GATEWAY_TIMEOUT) {
        Message.error('服务器好像出问题了😅！')
      }
    }
    return Promise.reject(error)
  }
)

export function get<T>(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get<IResponseData<T>>(url, {
      params: data
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function post<T>(url: string, data: any, config?: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios.post<IResponseData<T>>(url, data, config).then(res => resolve(res.data)).catch(error => reject(error))
  })
}

export function put<T>(url: string, data: any, config?: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios.put<IResponseData<T>>(url, data, {
      ...{
        headers: { 'content-type': MediaType.APPLICATION_JSON_UTF8_VALUE }
      }, ...config
    }).then(res => resolve(res.data)).catch(error => reject(error))
  })
}

export function del<T>(url: string, data: any) {
  return new Promise((resolve, reject) => {
    axios.delete<IResponseData<T>>(url, {
      params: data
    }).then(res => resolve(res.data)).catch(error => reject(error))
  })
}