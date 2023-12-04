// package-search/pages/search/search-initial/search-initial.js
import {
  COMMON_REQUEST_PATH
} from '../../../../config/path';
import {
  sendRequest
} from '../../../../services/request'

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
    historyList: ['我测试是', '测测试试', '测试我是', '测试', '我是', '测试', '我是', '测试', ],
    hotSearchList: ['测测猜测从', '测测猜测从', '测测猜测从', '测测猜测从'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(event) {
      this.triggerEvent('search', event.currentTarget.dataset.label)
    },
    /**
     * 热搜
     */
    async queryHotList() {
      const res = await sendRequest(COMMON_REQUEST_PATH.搜索['热搜列表(详细)'], 'GET')
      this.setData({
        hotSearchList: res.data.data
      })
    }
  },
  lifetimes: {
    ready() {
      this.queryHotList();
    }
  }
})