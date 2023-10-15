import template from '../../template/template'
import myBehavior from '../../behaviors/my-behavior'

Page({
  data: {
    list: [{
      id: 1,
      name: '测试1'
    }],
    id: 9527,
    name: 'init'
  },
  behaviors: [myBehavior],
  handleTextTap: template.handleTextTap,
  handleComponentEvent: function (event) {
    this.setData({
      name: event.detail
    })
  },
  // 是用于组件间代码共享的特性，类似于一些编程语言中的 “mixins” 或 “traits”。
  behaviors: [],
  onLoad: (e) => {
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