// components/common-mv-card/common-mv-card.js
import {
  formatDuration
} from '../../utils/index'

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    mvInfo: Object
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
    formatDuration: formatDuration,
    /**
     * 跳转详情
     */
    handlePageTo() {
      wx.navigateTo({
        url: `/package-music/pages/mv-detail/mv-detail?id=${this.data.mvInfo.id}`,
      })
    }
  }
})