// components/common-nav-bar/common-nav-bar.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    transparentFlag: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBack() {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})