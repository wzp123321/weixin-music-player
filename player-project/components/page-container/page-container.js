// components/page-container/page-container.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: '400px'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created() {
    const height = wx.getWindowInfo().windowHeight;
    console.log(height)
    if (height) {
      this.setData({
        windowHeight: `${height}px`
      })
      console.log(this.data)
    }
  }
})