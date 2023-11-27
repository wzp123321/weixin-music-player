// pages/home/home-tab-bar/home-tab-bar.js
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
    tabBarList: [{
        name: '搜索',
        icon: 'icon-sousuo',
        color: '#5074b4',
        url: '/package-search/pages/search/search',
      },
      {
        name: '精选视频',
        icon: 'icon-24gf-play',
        color: '#83bef0',
        url: '/package-login/pages/login/login',
      },
      {
        name: '热门歌曲',
        icon: 'icon-remenx',
        color: '#e88b6c',
        url: '',
      },
      {
        name: '分类',
        icon: 'icon-fenlei',
        color: '#83bef0',
        url: '',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePageTo(event){
      console.log(event)
      wx.navigateTo({
        url: event.currentTarget.dataset.url,
      })
    }
  }
})