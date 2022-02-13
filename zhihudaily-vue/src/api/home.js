import { request } from "./request";
export function getDataList() {
    return request({
      url:'/news/latest',
      method:"get"
    })
  }