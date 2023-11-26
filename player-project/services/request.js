import {
  COMMON_REQUEST_SUFFIX
} from '../config/index'
// 请求拦截https://juejin.cn/post/6977247932051537933
//封装request请求
const sendRequest = (url, method = 'GET', data = {}, contentType) => {
  var token = wx.getStorageSync('token') || '';
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
                    url: '../accredit/accredit',
                  })
                }
              }
            })
            break;
          case 403:
            wx.showModal({
              title: '温馨提示',
              content: '请认证后再来操作！',
              success(res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../register/register',
                  })
                }
              }
            })
            break;
          default:
            resolve(res);
            break;
        }
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