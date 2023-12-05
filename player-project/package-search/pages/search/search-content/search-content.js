// package-search/pages/search/search-content/search-content.js
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
  options: {
    addGlobalClass: true
  },
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
    loading: true, // loading
    type: COMMON_SEARCH_TYPES[0].value, // tab
    COMMON_SEARCH_TYPES,
    dataList: [], // 歌曲列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 切换tab
     */
    handleTabChange(event) {
      this.handleQuery(event.detail.name);
    },
    /**
     * 搜索
     */
    async handleQuery(type) {
      this.setData({
        loading: true
      })
      try {
        let list = [];
        const res = await sendRequest(COMMON_REQUEST_PATH.搜索.搜索, 'GET', {
          keywords: '兰',
          type: type
        })
        switch (type) {
          case 1:
            list = res.data.result.songs
            break;
        }
        this.setData({
          type,
          dataList: list
        })
      } catch (error) {

      } finally {
        this.setData({
          loading: false
        })
      }
    },

  },
  lifetimes: {
    ready() {
      this.handleQuery(this.data.type);
    }
  }
})