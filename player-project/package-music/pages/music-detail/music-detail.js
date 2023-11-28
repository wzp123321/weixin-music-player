// pages/music-detail/music-detail.js
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
    musicDetail: {
      name: '',
      id: 0,
      ar: [],
      alia: [],
      al: {
        id: 0,
        name: '',
        picUrl: '',
        pic_str: '',
        pic: 0,
      },
      dt: 0,
      copyright: 0,
      mark: 0,
      publishTime: 0,
    }, // 歌曲详情
    lyric: ''
  },
  /**
   * 查询歌曲详情
   */
  async queryDetail() {
    const res = await sendRequest(COMMON_REQUEST_PATH.歌曲.查询歌曲详情, 'GET', {
      ids: this.data.id
    })
    if (res?.songs) {
      this._musicDetail$.next(res?.songs?.[0]);
      this.queryLyric();
    }
  },
  /**
   * 查询歌词
   */
  async queryLyric() {
    const res = await sendRequest(COMMON_REQUEST_PATH.歌曲.查询歌词, 'GET', {
      id: this.data.id
    })
    console.log(res);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
    });
    this.queryDetail();
    this.queryLyric();
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