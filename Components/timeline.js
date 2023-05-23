// Components/timeline.js

const {timestampToDate} = require("../miniprogram_npm/date-str-timestamp/index");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userinfo :{},
  },

  /**
   * 组件的初始数据
   */
  data: {
    userid:null,
    userTimeline:[],
    timelineRealtime:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTimelineList(id) {

      let items = [{text:"Hello, World_test1",timestamp:"1684530121",imgs:["/static/image/EVA3.png","/static/image/EVAR.png","/static/image/EVA3.png"],like:114514,dslike:0},{text:"Hello, World_test2",timestamp:"1684530122",imgs:[],like:114514,dslike:1},{text:"Hello, World_test3",timestamp:"1684530123",imgs:[],like:114514,dslike:2}];

      let realtime = [];

      for(let i =0;i<items.length;i++) {
        const timestamp = parseInt(items[i].timestamp);
        const realtime_s = timestampToDate(timestamp)
        // console.log(realtime_s);
        realtime.push(realtime_s);
      }

      this.setData({
        timelineRealtime:realtime,
      });

      return items;
    },
    getUserTimeline(val) {
      console.log('Timeline attached!');
      const id = val.userid;
      const timelineList = this.getTimelineList(id);
      this.setData({
        userTimeline:timelineList,
      })
    },
    sentLength2father() {
      const len = this.data.userTimeline.length;
      let nl = 0;
      let hl = 0;
      for(let i =0; i< len;i++) {
        if (this.data.userTimeline[i].imgs.length>0) hl+=1
        else nl+=1;
      }
      this.triggerEvent("itemlen",{nl,hl});
    }
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getUserTimeline(this.properties.userinfo)
      this.sentLength2father()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
