// pages/login/login.js
import {
  sendRequest
} from '../../../services/request.js'
import {
  FSetStorageData
} from '../../../utils/storage.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13225542838',
    password: 'wzp13225542838',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  /**
   * 登录
   */
  handleSubmit: async function () {
    const res = await sendRequest(`/login/cellphone?phone=${this.data.phone}&password=${this.data.password}`, 'GET')
    console.log(res)
    FSetStorageData('common-token', res.data.token)
    FSetStorageData('common-profile', res.data.profile)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})