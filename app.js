// app.js
var { watchData, } = require('/miniprogram_npm/wx-watch/index.js');

App({
  onLaunch() {
    this.watchData();
  },
  watchData,
  globalData: {
    isShow:true,
  }
})
