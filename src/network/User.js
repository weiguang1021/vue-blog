import {request} from './requests'

export function getHomeMultiData(){
  return request({
    url: 'query/'
  })
}

export  function  geiMeinvData(type , page) {
  return request({
    url: 'meinvdata/',
    params: {
      type,
      page,
    }
  })
}
