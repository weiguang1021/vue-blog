import axios from 'axios'

export function request(config) {
  //创建一个axios基础实例,并返回
  const instance = axios.create({
    baseURL: "http://127.0.0.1:9999/",
    timeout: 5000
  })



  // 拦截器
  instance.interceptors.request.use(config => {
      // 中间可以做些事情
      return config
    },
    error => {
      console.log(error)
    }
  )
  instance.interceptors.response.use(reslove => {
      // 中间可以做些事情
      return reslove.data
    },
    error => {
      console.log(error)
    }
  )



  // 根据config发送请求
  return instance(config)
}
