import axios from 'axios'
import qs from 'qs'
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:"/zhihu",
    withCredentials: false,
    timeout: 10000,
    responseType:'json',
    responseEncoding: 'utf8'
  })

    // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    if(config.method==='post' || config.method==='POST'){
        config.data=qs.stringify(config.data)
    }
    return config
  }, err => {
    console.log(err);
  })
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}