// components/common-mv-card/common-mv-card.js
import {
  formatDuration
} from '../../utils/index'

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    mvInfo: {
      id: null,
      artistName: '',
      artistId: '',
      duration: '',
      picUrl: '',
      playCount: '',
      type: '',
      name: '',
      copywriter: ''
    }
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
    formatDuration: formatDuration
  }
})