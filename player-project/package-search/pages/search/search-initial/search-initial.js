// package-search/pages/search/search-initial/search-initial.js
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
    historyList: ['我测试是', '测测试试','测试我是', '测试','我是', '测试','我是', '测试',],
    hotSearchList: ['测测猜测从', '测测猜测从', '测测猜测从', '测测猜测从'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(event){
      this.triggerEvent('search', event.currentTarget.dataset.label)
    },
    /**
     * 查询默认关键字
     */
    queryDefaultKeyword(){

    }
  }
})