import { request } from "./request";
export function getDataList() {
    return request({
      url:'/news/latest',
      method:"get"
    })
  }

  export function getDeatil(id) {
    return request({
      url:`/story/${id}`,
      method:"get"
    })
  }

  export function getBeforeNews(time){
    return request({
      url:`/news/before/${time}`,
      method:"get"
    })
  }

