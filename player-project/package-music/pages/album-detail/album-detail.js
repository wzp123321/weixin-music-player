// package-music/pages/album-detail/album-detail.js
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
    id: null,
    albumDetail: {},
    songList: []
  },
  async query() {
    const res = await sendRequest(COMMON_REQUEST_PATH.歌曲.获取专辑详情, 'GET', {
      id: this.data.id
    })
    this.setData({
      albumDetail: res.album,
      songList: res.songs,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
    });
    this.query();
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