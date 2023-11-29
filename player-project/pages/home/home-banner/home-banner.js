// pages/home/home-banner/home-banner.js
import {
  sendRequest
} from '../../../services/request'
import {
  COMMON_REQUEST_PATH
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
  lifetimes:{
    created: function() {
      this.queryBanner()
      // 在组件实例刚刚被创建时执行，该节点不能使用this.setData({}),
      console.log('home-banner组件————————created')
    },
    attached: function() {
      // 在组件实例进入页面节点树时执行，该节点可以开始使用this,setData({})
      console.log('home-banner组件————————attached')
    },
    ready: function() {
      // 在组件在视图层布局完成后执行
      console.log('home-banner组件————————ready')
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('home-banner组件————————detached')
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async queryBanner() {
      this.setData({
        loading: true,
      })
      const res = await sendRequest(COMMON_REQUEST_PATH.首页.获取Banner, {
        type: 1
      })
      this.setData({
        bannerList: res?.data?.banners,
        loading: false,
      })
    }
  },

})