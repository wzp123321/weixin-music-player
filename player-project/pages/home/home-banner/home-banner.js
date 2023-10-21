// pages/home/home-banner/home-banner.js
import {
  sendRequest
} from '../../../services/request'
import {
  requestUrl
} from '../../../config/path'

Component({
  /**
   * 组件的初始数据
   */
  data: {
    loading: true,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    indicatorColor: 'var(--music-color-default)',
    indicatorActiveColor: 'var(--music-color-primary)',
    bannerList: []
  },
  created() {
    this.queryBanner()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async queryBanner() {
      this.setData({
        loading: true,
      })
      const res = await sendRequest(requestUrl.首页.获取Banner, {
        type: 1
      })
      this.setData({
        bannerList: res?.data?.banners,
        loading: false,
      })
    }
  },

})