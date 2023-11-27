const app = getApp();
Component({
  data: {
    selected: 0,
    list: [{
        "pagePath": "/pages/home/home",
        "text": "音乐",
        "iconPath": "../assets/images/tabbar/music-unselected.png",
        "selectedIconPath": "../assets/images/tabbar/music-selected.png"
      },
      {
        "pagePath": "/pages/user/user",
        "text": "我的",
        "iconPath": "../assets/images/tabbar/user-unselected.png",
        "selectedIconPath": "../assets/images/tabbar/user-selected.png"
      }
    ],
    coverImage: app.globalData.coverImage
  },

  methods: {
    /**
     * 点击tabbar
     * @param {*} e 
     */
    handleClick(e) {
      let path = e.currentTarget.dataset.path;
      let index = e.currentTarget.dataset.index;
      wx.switchTab({
        url: path
      })
      // 如果tabbar点击的时候出现闪动，可以去掉 this.setData({ selected: index })
      this.setData({
        selected: index
      })
    }
  }
});