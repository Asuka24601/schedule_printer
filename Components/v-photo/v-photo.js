// Components/v-photo/v-photo.js
const {timestampToDate} = require("../../miniprogram_npm/date-str-timestamp/index");
const {GB} = require("../../javascript/imgShow").default;

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
    userPhoto:[],
    photoRealtime:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPhotoList() {

      let items = [{timestamp:"1684530121",imgs:["/static/image/EVA3.png","/static/image/EVAR.png","/static/image/fw1201.jpg"],like:114514,dslike:0},{timestamp:"1684530123",imgs:['/static/image/bitch.jpg'],like:114514,dslike:2}];

      let realtime = [];

      for(let i =0;i<items.length;i++) {
        const timestamp = parseInt(items[i].timestamp);
        const realtime_s = timestampToDate(timestamp)
        const pair_time = realtime_s.split(' ');
        // console.log(realtime_s);
        realtime.push(pair_time);
      }

      this.setData({
        photoRealtime:realtime,
      });

      return items;
    },
    getUserPhoto(val) {
      // console.log('Timeline attached!');
      this.showlog();
      const id = val.userid;
      const photoList = this.getPhotoList(id);
      this.setData({
        userPhoto:photoList,
      })
    },

    showlog() {
      console.log("v-photo attached!");
    },

    
  },

  lifetimes: {
    attached: function() {
      this.getUserPhoto(this.properties.userinfo);
      this.setData({
        userInfo:{name:this.properties.userinfo.name}
      })
    },
  }
})
