import request from './request.js'

export function login() {
    return request({
        // url: 'helloWorld/login',
        url: 'hello',
        // url: 'https://mock.apifox.cn/m1/1551374-0-default/pet/2',
        method: 'get',
    })
}