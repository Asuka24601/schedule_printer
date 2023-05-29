// pages/select/select.js
const app = getApp();
const leapyear = require("../../miniprogram_npm/smltime/index");
const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: {
      backgroundImg: "/static/image/bitch.jpg",
    },
    title_text:"",
    style_template: "",
    week_day: [],
    o_week_day: [],
    week_name: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    this_week: 0,
    durn: {
      week: 13,
      day: 3,
      h: 0,
      m: 0,
    },
    table_time: [
      {
        s: "08:15",
        e: "09:00",
        flag: false,
        done: false,
      },
      {
        s: "09:10",
        e: "10:05",
        flag: false,
        done: false,
      },
      {
        s: "10:15",
        e: "11:00",
        flag: false,
        done: false,
      },
      {
        s: "11:10",
        e: "11:55",
        flag: false,
        done: false,
      },
      {
        s: "14:50",
        e: "15:35",
        flag: false,
        done: false,
      },
      {
        s: "15:45",
        e: "16:30",
        flag: false,
        done: false,
      },
      {
        s: "16:40",
        e: "17:25",
        flag: false,
        done: false,
      },
      {
        s: "17:35",
        e: "18:20",
        flag: false,
        done: false,
      },
      {
        s: "19:10",
        e: "19:55",
        flag: false,
        done: false,
      },
      {
        s: "20:05",
        e: "20:50",
        flag: false,
        done: false,
      },
      {
        s: "21:00",
        e: "21:45",
        flag: false,
        done: false,
      },
    ],
    class_table: [],
    currretTable: [],
  },

  getTitleText() {
    const y = (new Date()).getFullYear();
    const m = (new Date()).getMonth();

    const str = `${y}，${(m>=7 && m<2)?'上':'下'}学期。`;

    this.setData({
      title_text:str,
    });

  },

  getTable() {
    // 连接数据库
    //测试数据
    const table = [
      {
        name: "离散数学",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              day: 1,
              order: 1,
              tips: "None",
            },
            {
              location: "812",
              week: 14,
              day: 2,
              order: 1,
              tips: "None",
            },
            {
              location: "812",
              week: 12,
              day: 3,
              order: 1,
              tips: "None",
            },
          ]
      },
      {
        name: "高等数学",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              order: 2,
              day: 5,
              tips: "None",
            },
            {
              location: "812",
              week: 12,
              order: 2,
              day: 4,
              tips: "None",
            },
          ]
      },
      {
        name: "线性代数",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              order: 3,
              day: 6,
              tips: "None",
            },
            {
              location: "812",
              week: 14,
              day: 1,
              order: 3,
              tips: "None",
            },
          ]
      },
      {
        name: "概率论",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              day: 2,
              order: 4,
              tips: "None",
            },
          ]
      },
      {
        name: "计算机网络",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              order: 7,
              day: 3,
              tips: "None",
            },
          ]
      },
      {
        name: "计算机组成原理",
        teacher: "李华",
        curriculum:
          [
            {
              location: "812",
              week: 13,
              day: 1,
              order: 8,
              tips: "None",
            },
            {
              location: "812",
              week: 15,
              day: 2,
              order: 8,
              tips: "None",
            },
            {
              location: "812",
              week: 11,
              order: 8,
              day: 4,
              tips: "None",
            },
          ]
      },
      {
        name: "数据结构",
        teacher: "李华",
        curriculum: [
          {
            location: "812",
            week: 13,
            day: 4,
            order: 9,
            tips: "None",
          },
          {
            location: "812",
            week: 12,
            day: 7,
            order: 9,
            tips: "None",
          },
          {
            location: "812",
            week: 11,
            order: 9,
            day: 1,
            tips: "None",
          }
        ],
      },
    ];

    const that = this;

    this.setData({
      class_table: table,
      this_week: that.data.durn.week
    });

    // console.log(this.data.class_table);
  },

  getCurrretTable(idx) {
    let arr = [[], [], [], [], [], [], []];

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 11; j++) {
        const temp = {
          name: "None",
          teacher: "None",
          location: "None",
          week: 999,
          day: 999,
          order: 999,
          tips: "None",
        }
        arr[i][j] = temp;
      }
    }

    for (let i = 0; i < this.data.class_table.length; i++) {
      const now = this.data.class_table[i];
      for (let j = 0; j < now.curriculum.length; j++) {
        const item = now.curriculum[j];
        // console.log(item);
        if (idx == item.week) {
          let temp = {
            name: now.name,
            teacher: now.teacher,
            location: item.location,
            week: item.week,
            day: item.day,
            order: item.order,
            tips: item.tips,
          }
          arr[item.day - 1][item.order - 1] = temp;
        }
      }
    }
    // console.log(arr)
    this.setData({
      currretTable: arr,
    })

  },

  getWeekDay() {
    //测试用例
    const wd = ["05/29", "05/30", "05/31", "06/01", "06/02", "06/03", "06/04"];
    this.setData({
      week_day: wd,
      o_week_day: Array.from(wd),
    });
    // console.log(wd);
  },

  setWeekDay(idx) {
    let owd = [];
    const isP = leapyear.default.leapyear;
    const b = isP((new Date()).getFullYear());

    if (idx == 0) {
      owd = this.data.o_week_day;
      // console.log(owd);
    }
    else if (idx == 1) {
      owd = this.data.week_day;
      let tmp = owd[0].split('/');
      let m = parseInt(tmp[0]);
      let d = parseInt(tmp[1]);
      for (let i = 1; i <= 7; i++) {
        let tmp = owd[i-1].split('/');
      let m = parseInt(tmp[0]);
      let d = parseInt(tmp[1]);
        d += 7;
        if (m == 2 && b && d > monthDay[m - 1] + 1) {
          m += 1;
          d = (d - (monthDay[m - 1] + 1));
        }
        else if (d > monthDay[m - 1]) {
          m = (m + 1) % 13;
          if (m == 0) m = 1;
          d = (d - (monthDay[m - 1] + 1));
        }
        owd[i - 1] = (m >= 10 ? m.toString() : `0${m}`) + '/' + (d >= 10 ? d.toString() : `0${d}`);
      }
    }
    else {
      owd = this.data.week_day;
      for (let i = 7; i >= 1; i--) {
        let tmp = owd[i-1].split('/');
      let m = parseInt(tmp[0]);
      let d = parseInt(tmp[1]);
        d -= 7;
        if (m == 3 && b && d <= 0) {
          m -= 1;
          d = 29+d;
        }
        else if (d <= 0) {
          m -= 1;
          if (m == 0) m = 12
          d = monthDay[m - 1]+d;
        }
        owd[i - 1] = (m >= 10 ? m.toString() : `0${m}`) + '/' + (d >= 10 ? d.toString() : `0${d}`);
      }
    }

    // console.log(owd);
    this.setData({
      week_day: owd,
    })
  },

  setTemplate() {
    const base_top = '"a b c d e f g h" 6vh\n';

    let base_main = '';

    const base_bottle = '/12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw 12.5vw';

    const len = this.data.table_time.length;

    for (let i = 0; i < len; i++) {
      base_main += '"x m m m m m m m" 20vh\n';
    }

    const style_temlpate_ = base_top + base_main + base_bottle;

    // console.log(style_temlpate);

    this.setData({
      style_template: style_temlpate_,
    })
  },

  intoleft() {
    console.log("into left...");
    const nw = this.data.this_week - 1;
    if (nw > 0) {
      this.setData({
        this_week: nw
      })
      this.getCurrretTable(nw);
      this.setWeekDay(-1);
    }
  },
  intoright() {
    console.log("into right...")
    const nw = this.data.this_week + 1;
    if (nw < 24) {
      this.setData({
        this_week: nw
      })
      this.getCurrretTable(nw);
      this.setWeekDay(1);
    }
  },
  goback() {
    if (this.data.this_week == this.data.durn.week) return;
    console.log("go back...")
    const nw = this.data.durn.week;
    this.setData({
      this_week: nw
    })
    this.getCurrretTable(nw);
    this.setWeekDay(0);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTable();
    this.getWeekDay();
    this.getTitleText();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
        flag: app.globalData.isShow
      })
    };
    this.getCurrretTable(this.data.durn.week);
    this.setTemplate();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})