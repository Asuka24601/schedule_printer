// custom-tab-bar/index.js
const app = getApp();

Component({
  properties: {
  },
  data: {
    flag:false,
    selected: 0,

    list: [{
      pagePath: "/pages/index/index",
      text: "index"
    },
    {
      pagePath: "/pages/select/select",
      text: "list"
    },
    {
      pagePath: "/pages/user/user",
      text: "user"
    },
    {
      pagePath: "/pages/information/information",
      text: "information"
    }
    ]
  },

  methods: {
    switchTab(e) {
      const idx = e.currentTarget.dataset.index;
      if (idx == this.data.selected) return;

      const url = this.data.list[idx].pagePath;
      // console.log(url)
      wx.switchTab({
        url
      })
      console.log('switch to',url);
      this.setData({
        selected: idx
      })
    },
    tap() {
      this.setData({
        flag:!this.data.flag,
      });
      app.globalData.isShow = this.data.flag;
      console.log('tabBar_State:',app.globalData.isShow);
    },
  },

})

