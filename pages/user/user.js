// pages/user/user.js
const app = getApp();

Page({
  data: {
    image:{
      topimage:"/static/image/EVA3.png",
      headIcon:"/static/image/sfk09.jpg"
    },
    userSet: {
      showID:true,
      showGender:true,
      showClass:true,
      showMajor:true,
    },
    userInfo:{
      name:"AntiGone",
      class:"9999级9班",
      major:"软件工程",
      id:"1111111111111",
      gender:"woman",
      profile:"霜冻中复苏的我们，将前几章遗忘，煎熬不止的灵魂重生，将至天晴，世界的青春，是盛夏。",
    },
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

})