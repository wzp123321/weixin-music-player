// package-music/pages/mv-detail/mv-detail.js
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
    url: '', // 播放地址
    mvDetail: {
      artistId: 0,
      artistName: '',
      artists: {
        followed: '',
        id: '',
        img1v1Url: '',
        name: '',
      },
      commentCount: '',
      commentThreadId: '',
      cover: '',
      coverId: '',
      coverId_str: '',
      desc: '',
      duration: '',
      id: '',
      nType: '',
      name: '',
      playCount: '',
      price: '',
      publishTime: '',
      shareCount: '',
      subCount: '',
    }, // 详情
    commentDetail: {
      comments: [],
      hotComments: [],
    }, // 评论详情
  },
  /**
   * 查询详情
   */
  async queryMVDetail() {
    const res = await sendRequest(COMMON_REQUEST_PATH.歌曲.根据id获取MV详情, 'GET', {
      mvid: this.data.id
    })
    if (res) {
      this.setData({
        mvDetail: res?.data?.data
      })
      wx.setNavigationBarTitle({
        title: res?.data?.data.name,
      })
    }
  },
  /**
   * 查询播放地址
   */
  async queryUrl() {
    const res = await sendRequest(`${COMMON_REQUEST_PATH.歌曲.获取MV播放地址}?id=${this.data.id}`)
    if (res) {
      this.setData({
        url: res?.data?.data.url
      })
    }
  },
  /**
   * 查询评论
   */
  async queryCommentList() {
    const res = await sendRequest(`${COMMON_REQUEST_PATH.歌曲.获取MV评论}?id=${this.data.id}`)
    if (res) {
      this.setData({
        commentDetail: {
          comments: res?.data?.comments,
          hotComments: res?.data?.hotComments
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
    });
    this.queryMVDetail();
    this.queryUrl();
    this.queryCommentList();
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