import request from "./request.js";

export function getBanners() {
  // 首页轮播
  return request({
    url: "/api/banners",
    method: "get",
  });
}

export function getAnnouncements() {
  // 获取公告
  return request({
    url: "/api/announcements",
    method: "get",
  });
}
export function checkEnable(data) {
  // 校验报名
  return request({
    url: "/api/application/enable",
    method: "get",
    params: data
  });
}

export function getIdentification() {
  // 获取密码
  return request({
    url: "/api/identification",
    method: "get",
  });
}

export function postApplication(data) {
  // 报名接口
  return request({
    url: "/api/application",
    method: "post",
    data
  });
}

export function postBid(data) {
  // 投标接口
  return request({
    url: "/api/bid",
    method: "post",
    data
  });
}

export function getBid(data) {
  // 投标接口
  return request({
    url: "/api/bid",
    method: "get",
    params: data
  });
}

export function checkPassword(data) {
  // 密码校验
  return request({
    url: "/api/application/check",
    method: "get",
    params: data
  });
}

export function clarification(data) {
  // 澄清校验
  return request({
    url: "/api/clarification",
    method: "get",
    params: data
  });
}
// 开标阶段
export function bidCheck(data) {
  // 开标校验
  return request({
    url: "/api/bid/check",
    method: "get",
    params: data
  });
}
// 签到
export function signIn(data) {
  // 签到
  return request({
    url: "/api/signIn",
    method: "post",
    params: data
  });
}
// 投标列标(签到阶段)
export function getBids(data) {
  // 投标列标(签到阶段)
  return request({
    url: "/api/bids",
    method: "get",
    params: data
  });
}

export function postClarification(data) {
  // 更新澄清
  return request({
    url: "/api/clarification",
    method: "post",
    data
  });
}