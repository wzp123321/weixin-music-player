// pages/singer-detail/singer-detail.js
import {
  sendRequest
} from '../../../services/request'
import {
  COMMON_REQUEST_PATH
} from '../../../config/path'

Page({
  options: {
    addGlobalClass: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    name: '',
    loadErrorFlag: false,
    singerInfo: {
      briefDesc: '', // 简介
      img1v1Url: '', // 头像
      name: '', // 名字
      picUrl: '', // 背景
      musicSize: 0, // 作品数
      mvSize: 0, // mv
      albumSize: 0, // 专辑
    },
    navList: [], //tab
    selectedCode: '',
    loadErrorFlag: false,
    loading: true
  },
  /**
   * 查询歌手详情
   */
  async querySingerDetail() {
    try {
      const res = await sendRequest(`${COMMON_REQUEST_PATH.歌手.歌手详情}?id=${this.data.id}`)
      if (res.data.code === 200) {
        const navList = [{
            code: '1',
            name: '主页',
            count: null
          },
          {
            code: '2',
            name: '单曲',
            count: res.data.artist.musicSize
          },
          {
            code: '3',
            name: '专辑',
            count: res.data.artist.albumSize
          },
          {
            code: '4',
            name: '视频',
            count: res.data.artist.mvSize
          }
        ]
        this.setData({
          singerInfo: {
            briefDesc: res?.data?.artist?.briefDesc,
            img1v1Url: res?.data?.artist?.img1v1Url,
            name: res?.data?.artist?.name,
            picUrl: res?.data?.artist?.picUrl,
            mvSize: res?.data?.artist?.mvSize,
            musicSize: res?.data?.artist?.musicSize,
            albumSize: res?.data?.artist?.albumSize,
          },
          navList,
          selectedCode: '1'
        })
      }
      this.setData({
        loading: false,
        loadErrorFlag: res.data.code !== 200
      })
    } catch (error) {
      console.log(error)
    }
  },
  /**
   * 切换tab
   * @param {*} event 
   */
  handleCodeChange(event) {
    this.setData({
      selectedCode: event.detail.currentTarget.dataset.code
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      // id: options.id,
      id: 2116,
      loadErrorFlag: false
    });
    this.querySingerDetail();
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