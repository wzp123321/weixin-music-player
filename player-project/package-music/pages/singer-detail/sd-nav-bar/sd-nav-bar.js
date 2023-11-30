// package-music/pages/singer-detail/sd-nav-bar/sd-nav-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    dataList: Array,
    selectedCode: String
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleSelect(code) {
      this.triggerEvent('select', code)
    }
  },
  lifetimes: {
    ready() {
      this.setData({
        selectedCode: this.properties.dataList[0].code
      })
    }
  }
})