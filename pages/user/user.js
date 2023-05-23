// pages/user/user.js
const app = getApp();

Page({
  data: {
    image:{
      topimage:"/static/image/EVA3.png",
      headIcon:"/static/image/sfk09.jpg"
    },
    swiper_ops: {
      indicatorDots: false,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      index:0,
    },
    showConfigItems:false,
    userSet: {
      showID:true,
      showGender:true,
      showClass:true,
      showMajor:true,
      isOwn:true
    },
    userInfo:{
      userid:1,
      name:"AntiGone",
      class:"9999级9班",
      major:"软件工程",
      id:"1111111111111",
      gender:"woman",
      profile:"霜冻中复苏的我们，将前几章遗忘，煎熬不止的灵魂重生，将至天晴，世界的青春，是盛夏。",
      following:31,
      followers:59,
      moments:3367,
    },
    timeline_len:0,
    timer:"",
    greeting:"",
    greeting_len:"",
    greetings:{
      seasons:{
        spring: "冬眠的春风已渐渐苏醒，我从没要求过，你给我，那无法触及的距离。",
        summer:"那个夏天，光阴会记得，一个人曾爱上另一个人。",
        full:"秋是第二个春，此时，每一片叶子都是一朵鲜花。",
        winter:"在隆冬，我终于知道，我身上有一个不可战胜的夏天。",
      },
      daytime:{
        morning:"早上好！",
        midday:"中午好！",
        afternoom:"下午好！",
        sunset:"太阳下山了...",
        evening:"晚上好！",
        midnignt:"夜深了...",
      },
      special:{
        sp:{
          sp1:"霜冻中复苏的我们，将前几章遗忘，煎熬不止的灵魂重生，将至天晴，世界的青春，是盛夏。"
        }
      },
    },
  },

  onShow() {
    this.getGreeting();
    this.getTimer();
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2,
          flag:app.globalData.isShow
        })
      }
  },

  getGreeting() {
    const greeting_ = this.data.greetings.seasons.summer;
    const len = (100 / 21 * 15 / (greeting_.length)) * 0.9;
    this.setData({
      greeting: greeting_,
      greeting_len: String(len)+'vw',
    })
  },

  getTimer() {
    const t = new Date();
    const h = t.getHours();
    const daytime_ = this.data.greetings.daytime;
    let words = "";
    if (h>=6 && h<11) words = daytime_.morning;
    else if (h>=12 && h<14) words =daytime_.midday;
    else if (h>=14 && h<17) words = daytime_.afternoom;
    else if(h>=17 && h<19) words = daytime_.sunset;
    else if(h>=19 && h<24) words = daytime_.evening;
    else words = daytime_.midnignt;
    this.setData({
      timer:words,
    })
  },

  intoConfig() {
    this.setData({
      showConfigItems:!this.data.showConfigItems,
    });
    console.log('config...');
  },

  outConfig() {
    console.log('outConfig...');
    this.intoConfig();
  },

  intoProfileSet() {
    console.log('profileset...')
  },

  intoFunctionSet() {
    console.log('functionset...')
  },

  intoOtherSet() {
    console.log('otherset...')
  },

  intoChat() {
    console.log('chat...')
  },

  intoFollow() {
    console.log('follow..')
  },

  chilckOwn() {
    let userSet_ = this.data.userSet;
    userSet_.isOwn = app.globalData.isOwn;
    this.data.setData({
      userSet:userSet_,
    })
  },

  switch2idx(e) {
    const idx = parseInt(e.target.dataset.index);
    let temp = this.data.swiper_ops;
    temp.index = idx;
    this.setData({
      swiper_ops:temp,
    })
  },

  onTouchMove(e) {
    // console.log(e)
    return;
  },

  getTimelineLen(e) {
    const item = e.detail;
    const height_ = item.nl * 20 + item.hl * 40;
    this.setData({
      timeline_height:height_,
    })
  }
})