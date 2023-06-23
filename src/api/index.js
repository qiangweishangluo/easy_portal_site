import request from "./request.js";

export function login() {
  return request({
    // url: 'helloWorld/login',
    // url: "/api/banner",
    url: "banner",
    // url: 'https://mock.apifox.cn/m1/1551374-0-default/pet/2',
    method: "get",
  });
}
export function homePageImages() {
  // 首页轮播
  return request({
    url: "home/homePageImages",
    method: "get",
  });
}
