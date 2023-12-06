// package-music/pages/singer-detail/sd-main/sd-main.js
import {
  sendRequest
} from '../../../../services/request'
import {
  COMMON_REQUEST_PATH
} from '../../../../config/path'

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    singerId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    singerInfo: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 
     */
    async querySingerDesc() {
      try {
        const res = await sendRequest(`${COMMON_REQUEST_PATH.歌手.获取歌手描述}?id=${this.properties.singerId}`)
        if (res.data.code === 200) {
          this.setData({
            singerInfo: res.data
          })
        }
        this.setData({
          loading: false,
          loadErrorFlag: res.data.code !== 200
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  lifetimes: {
    ready() {
      this.querySingerDesc();
    }
  }
})