// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onShareAppMessage: function (res) {
    // 如果该参数存在，则以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数
    // const promise = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       title: '测试标题1231'
    //     })
    //   }, 2000)
    // })
    return {
      title: '测试标题',
      path: '/page/user?id=123',
      imageUrl:'../../assets/images/login/login-bg.jpg',
      // promise
    }
  },
  handleShare() {
    console.log(123);
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
})