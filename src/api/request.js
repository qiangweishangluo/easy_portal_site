import axios from 'axios';
import { ElMessage as Message } from 'element-plus';

// 发起请求
let baseURL;
// if (window.__POWERED_BY_QIANKUN__) {
console.log(process.env.NODE_ENV);
if (window.__POWERED_BY_QIANKUN__ && (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development')) {
  baseURL = window.$parentStore.state.baseURL;
  console.log(baseURL);
} else {
  baseURL = process.env.VUE_APP_BASE_API;
}
// window.$baseURL = baseURL;
export const request = axios.create({
  baseURL: baseURL, // url = base url + request url
  // baseURL: 'http://172.16.110.228:3020', // url = base url + request url
  timeout: 20000 // request timeout
});
window.$vueApp.config.globalProperties.request = request;
window.request = request;
// 前置拦截器
request.interceptors.request.use(
  config => {
    if (window.__POWERED_BY_QIANKUN__) {
      config.headers.Authorization = window.$parentStore.state.getToken();
      config.headers.userId = window.$parentStore.state.userId;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// 后置拦截器
request.interceptors.response.use(
  res => {
    if (res?.data?.status) {
      return Promise.resolve(res.data);
    } else {
      Message({
        type: 'error',
        message: res.data.message
      });
      return Promise.reject(res);
    }
  },
  error => {
    // 以下几种错误码时，不弹顶部弹窗，通知主应用跳页面
    if ([401, 403, 404].indexOf(error.response.status) == -1) {
      Message({
        type: 'error',
        message: error
      });
    }
    if (window.__POWERED_BY_QIANKUN__) {
      ce.emit('networkError', error);
    }
  }
);
// 快速发起get请求
export const getRequest = (url, query) => {
  return request({
    url: url,
    params: query,
    method: 'GET'
  });
};

// 快速发起post请求
export const postRequest = (url, data) => {
  return request({
    url: url,
    data: data,
    method: 'POST'
  });
};

// 快速发起delete请求
export const deleteRequest = (url, data) => {
  return request({
    url: url,
    params: data,
    method: 'DELETE'
  });
};
// 快速发起put请求
export const putRequest = (url, data) => {
  return request({
    url: url,
    data: data,
    method: 'PUT'
  });
};
