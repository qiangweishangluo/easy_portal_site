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