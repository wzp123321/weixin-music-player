// pages/search/search.js
import {
  COMMON_REQUEST_PATH
} from '../../../config/path';
import {
  sendRequest
} from '../../../services/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '',
    searchLabel: '兰', // 关键词
    searchFlag: true, // 是否处于搜索
    inputFlag: false, // 输入提示状态
    suggestList: [], // 搜索建议列表
  },
  /**
   * 搜索
   */
  handleSearch(event) {
    this.setData({
      searchLabel: event.detail,
      searchFlag: true,
      inputFlag: false
    })
  },
  /**
   * 取消搜索
   */
  handleCancel() {
    this.setData({
      searchFlag: false,
      searchLabel: '',
    })
  },
  /**
   * 输入内容变化时触发
   */
  handleChange(event) {
    this.setData({
      searchLabel: event.detail,
    })
    this.querySuggestList();
  },
  /**
   * 搜索建议
   */
  async querySuggestList() {
    const res = await sendRequest(COMMON_REQUEST_PATH.搜索.搜索建议, 'GET', {
      keywords: this.data.searchLabel,
      type: 'mobile'
    })
    this.setData({
      searchFlag: false,
      inputFlag: true,
      suggestList: res.data.result.allMatch
    })
  },
  /**
   * 查询默认关键字
   */
  async queryDefaultKeyword() {
    const res = await sendRequest(COMMON_REQUEST_PATH.搜索.默认搜索关键词, 'GET')
    this.setData({
      searchLabel: '',
      placeholder: res.data.data.showKeyword
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.queryDefaultKeyword()
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