// index.js
// 获取应用实例
const app = getApp();
const stoicQuote = require('../../miniprogram_npm/stoic-quotes/index');

Page({
  data: {
    text: {
      title: "curriculum",
    },
    quote: {
      text:"",
      author:""
    },

    swiper_ops: {
      indicatorDots: false,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },

    durn: {
      week: 13,
      day: 3,
      h:0,
      m:0,
    },

    date: [
      {
        s: "08:15",
        e: "09:00",
        flag:false,
      },
      {
        s: "09:10",
        e: "10:05",
        flag:false,
      },
      {
        s: "10:15",
        e: "11:00",
        flag:false,
      },
      {
        s: "11:10",
        e: "11:55",
        flag:false,
      },
      {
        s: "14:50",
        e: "15:35",
        flag:false,
      },
      {
        s: "15:45",
        e: "16:30",
        flag:false,
      },
      {
        s: "16:40",
        e: "17:25",
        flag:false,
      },
      {
        s: "17:35",
        e: "18:20",
        flag:false,
      },
      {
        s: "19:10",
        e: "19:55",
        flag:false,
      },
      {
        s: "20:05",
        e: "20:50",
        flag:false,
      },
      {
        s: "21:00",
        e: "21:45",
        flag:true,
      },
    ],

    list: [
      {
        name: "None",
        teacher: "None",
        curriculum:
          {
            location: "None",
            week: NaN,
            order: 1,
            tips:"None",
          },
      },
      {
        name: "高等数学",
        teacher: "李华",
        curriculum:
          {
            location: "812",
            week: 13,
            order: 2,
            tips:"None",
          },
      },
      {
        name: "线性代数",
        teacher: "李华",
        curriculum:{
          location: "812",
          week: 13,
          order: 3,
          tips:"None",
        },
      },
      {
        name: "概率论",
        teacher: "李华",
        curriculum: {
          location: "812",
          week: 13,
          order: 4,
          tips:"None",
        },
      },
      {
        name: "None",
        teacher: "None",
        curriculum:
          {
            location: "None",
            week: NaN,
            order: 5,
            tips:"None",
          },
      },
      {
        name: "None",
        teacher: "None",
        curriculum:
          {
            location: "None",
            week: NaN,
            order: 6,
            tips:"None",
          },
      },
      {
        name: "计算机网络",
        teacher: "李华",
        curriculum: {
          location: "812",
          week: 13,
          order: 7,
          tips:"None",
        },
      },
      {
        name: "计算机组成原理",
        teacher: "李华",
        curriculum: {
          location: "812",
          week: 13,
          order: 8,
          tips:"None",
        },
      },
      {
        name: "数据结构",
        teacher: "李华",
        curriculum: {
          location: "812",
          week: 13,
          order: 9,
          tips:"None",
        },
      },
      {
        name: "None",
        teacher: "None",
        curriculum:
          {
            location: "None",
            week: NaN,
            order: 10,
            tips:"None",
          },
      },
      {
        name: "None",
        teacher: "None",
        curriculum:
          {
            location: "None",
            week: NaN,
            order: 11,
            tips:"None",
          },
      },
    ],
  },
  onLoad() {
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getQuote();
      this.getTime();
      this.getTabBar().setData({
        selected: 0,
        flag: app.globalData.isShow
      });
      console.log(this.data.quote)
    }
  },

  getQuote() {
    const temp = stoicQuote();
    this.setData({
      quote:{
        text:temp.quote,
        author:temp.author,
      }
    });
  },

  getTime() {
    const time = new Date();
    const mh = time.getHours();
    const mm = time.getMinutes();
    this.setData({
      durn: {
        week: 13,
        day: 3,
        h:mh,
        m:mm,
      },
    })
  },

  str2RealTime(s, e) {
    const sh = parseInt(s.substr(0,2));
    const sm = parseInt(s.substr(3,5));
    const eh = parseInt(e.substr(0,2));
    const em = parseInt(e.substr(3,5));
    return [sh,sm,eh,em];
    // return this.inThisTime(sh,sm,eh,em);
  },

  inThisTime(sh,sm,eh,em) {
    const H = this.data.durn.h;
    const M = this.data.durn.m;
    return (H>=sh && M>=sm) || (H<=eh && M<=em);
  },

  setTimeNowFlag() {
    const len = this.data.date.length();
    //TODO completed it.
  }

})
