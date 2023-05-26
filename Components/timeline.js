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
    userInfo:{
      name:"",
    },
    userid:null,
    userTimeline:[],
    timelineRealtime:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTimelineList(id) {
      //TODO 连接数据库

      let items = [{text:"请不要磨去棱角，你要变成星星✨",timestamp:"1684530121",imgs:["/static/image/EVA3.png","/static/image/EVAR.png","/static/image/fw1201.jpg"],like:114514,dslike:0},{text:"很小的时候，我学到一件事：\n我们都会被生活所伤，无一幸免。\n但现在，我学到另一件事：\n我们都能被修复，我们修复彼此。",timestamp:"1684530122",imgs:[],like:114514,dslike:1},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas corrupti expedita atque, natus commodi cum magnam voluptatibus autem neque voluptates distinctio amet sapiente nostrum, in minus delectus sit qui.",timestamp:"1684530123",imgs:[],like:114514,dslike:2},{text:"なんて短い\n夏の歌\n聞こえたら\n追いかけよう\nさあ手を取り",timestamp:"1684530123",imgs:['/static/image/bitch.jpg'],like:114514,dslike:2}];

      let realtime = [];

      for(let i =0;i<items.length;i++) {
        const timestamp = parseInt(items[i].timestamp);
        const realtime_s = timestampToDate(timestamp)
        const pair_time = realtime_s.split(' ');
        // console.log(realtime_s);
        realtime.push(pair_time);
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
      this.getUserTimeline(this.properties.userinfo);
      this.setData({
        userInfo:{name:this.properties.userinfo.name}
      })
      this.sentLength2father();
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
