import originAxios from 'axios'
import { message } from 'antd';

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
    return Promise.reject(error)
  }
)

export function get(url: string, data: any) {
  return axios.get(url, {
    params: data
  })
}

export function post(url: string, data: any) {
  return axios({
    method: 'post',
    url,
    data
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