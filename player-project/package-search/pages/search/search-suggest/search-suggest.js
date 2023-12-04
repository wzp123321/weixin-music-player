// package-search/pages/search/search-suggest/search-suggest.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    suggestList: Array
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
    handleSearch(event){
      this.triggerEvent('search', event.currentTarget.dataset.label)
    }
  }
})