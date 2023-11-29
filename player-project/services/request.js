import {
  COMMON_REQUEST_SUFFIX
} from '../config/index'
import {
  FGetStorageData
} from '../utils/storage'
import {
  responseInterceptor
} from "../utils/interceptor";
/**
 * 封装request请求
 * @param {*} url 
 * @param {*} method 
 * @param {*} data 
 * @param {*} contentType 
 */
const sendRequest = (url, method = 'GET', data = {}, contentType) => {
  var token = FGetStorageData('token') || '';
  return new Promise(function (resolve, reject) {
    wx.request({
      url: `${COMMON_REQUEST_SUFFIX}${url}`,
      data: data,
      method: method,
      header: {
        'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded',
        'Authorization': token
      },
      success: function (res) {
        if (res.header.Authorization || res.header.authorization) {
          wx.setStorageSync('token', res.header.Authorization || res.header.authorization);
        }
        var code = res.statusCode;
        switch (code) {
          case 401:
            wx.showModal({
              title: '登录提示',
              content: '身份已过期，请重新登录后再来操作！',
              success(res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '/package-login/pages/login/login',
                  })
                }
              }
            })
            break;
          default:
            resolve(res);
            break;
        }
        // 调用拦截器对响应进行处理
        const interceptedResponse = responseInterceptor(res);
      },
      fail: function (err) {
        reject(err);
      }
    })
  })
}

module.exports = {
  sendRequest
}