import {
  sendRequest
} from '../../services/request'
import {
  requestUrl
} from '../../config/path'

Page({
  data: {
    singerList: [], // 歌手列表
    recommendMusicList: [], // 每日推荐歌曲
  },

  // 是用于组件间代码共享的特性，类似于一些编程语言中的 “mixins” 或 “traits”。
  behaviors: [],
  // 查询热门歌手列表
  queryHotSingerList: async function () {
    const that = this;
    const res = await sendRequest(`${requestUrl.首页.查询热门歌手列表}?limit=30`, {})
    that.setData({
      singerList: res.data?.artists?.map(item => ({
        name: item.name,
        imageUrl: item?.img1v1Url,
        id: item?.id,
      })) ?? []
    })
  },
  // 查询每日推荐歌曲
  queryRecommendMusicList: async function () {
    const that = this;
    const res = await sendRequest(`${requestUrl.首页.获取每日推荐歌曲}?limit=30`, {})
    console.log(res)
    that.setData({
      recommendMusicList: res.data?.data?.dailySongs?.map(item => ({
        name: item.name,
        imageUrl: item?.al?.picUrl,
        id: item?.al?.id,
      })) ?? []
    })
  },
  /**
   * 页面跳转
   */
  handlePageTo: function (event) {
    const {
      id,
      name
    } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/singer-detail/singer-detail?id=${id}&name=${name}`,
    })
  },
  onLoad: function (e) {
    this.queryHotSingerList();
    this.queryRecommendMusicList();
    console.log('onLoad,页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。--------------', e)
  },
  onShow: () => {
    console.log('onShow,页面显示/切入前台时触发。--------------')
  },
  onReady: () => {
    console.log('onReady,页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。--------------')
  },
  onHide: () => {
    console.log('onHide,页面隐藏/切入后台时触发。--------------')
  },
  onUnload: () => {
    console.log('onUnload,页面卸载时触发。--------------', )
  },
  onRouteDone: () => {
    console.log('onRouteDone,路由动画完成时触发。如 wx.navigateTo 页面完全推入后 或 wx.navigateBack 页面完全恢复时。--------------', )
  },
  onPullDownRefresh: () => {
    console.log('onPullDownRefresh,监听用户下拉刷新事件。--------------', )
  },
  onReachBottom: () => {
    console.log('onReachBottom,监听用户上拉触底事件。--------------', )
  },
  onPageScroll: (args) => {
    console.log('onPageScroll,监听用户滑动页面事件。--------------', args)
  },
  onShareAppMessage: (args) => {
    console.log('onShareAppMessage,用户点击右上角转发。--------------', args)
  },

})