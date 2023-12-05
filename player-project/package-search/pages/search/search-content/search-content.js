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
          case 100:
            list = res.data.result.artists?.map(item => ({
              name: item.name,
              imageUrl: item.img1v1Url,
              id: item.id,
              type: 'singer'
            }))
            break;
          case 1004:
            list = res.data?.result?.mvs?.map(item => ({
              id: item?.id,
              artistName: item?.artistName,
              artistId: item.artistId,
              duration: item.duration,
              picUrl: item.cover,
              playCount: item.playCount,
              name: item.name,
              copywriter: item?.copywriter ?? ''
            }))
            break;
          case 1014:
            list = res.data?.result?.videos;
            break
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
    /**
     * 页面跳转
     */
    handlePageTo: function (event) {
      const {
        id,
        name,
        type
      } = event.currentTarget.dataset
      switch (type) {
        case 'singer':
          wx.navigateTo({
            url: `/package-music/pages/singer-detail/singer-detail?id=${id}&name=${name}`,
          })
          break;
      }

    },
  },
  lifetimes: {
    ready() {
      this.handleQuery(this.data.type);
    }
  }
})