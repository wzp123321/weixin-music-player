// package-search/pages/search/search-nav-bar/search-nav-bar.js
import {
  COMMON_REQUEST_PATH
} from '../../../../config/path';
import {
  COMMON_SEARCH_TYPES
} from '../../../../config/index';
import {
  sendRequest
} from '../../../../services/request'

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    searchLabel: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    type: 1,
    COMMON_SEARCH_TYPES
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 搜索
     */
    async handleQuery() {
      const res = await sendRequest(COMMON_REQUEST_PATH.搜索.搜索, 'GET', {
        keywords: this.properties.searchLabel,
        type: this.data.type
      })
      console.log(res)
    },
  },
  lifetimes: {
    ready() {
      this.handleQuery();
    }
  }
})