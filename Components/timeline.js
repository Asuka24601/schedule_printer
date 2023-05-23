// Components/timeline.js
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
    userTimeline:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTimelineList(id) {
      return [{text:"Hello, World_test1",timestamp:"1684530121",img:[],like:114514,dslike:0},{text:"Hello, World_test2",timestamp:"1684530122",img:[],like:114514,dslike:1},{text:"Hello, World_test3",timestamp:"1684530123",img:[],like:114514,dslike:2}]
    },
    getUserTimeline(val) {
      console.log('Timeline attached!');
      const id = val.userid;
      const timelineList = this.getTimelineList(id);
      this.setData({
        userTimeline:timelineList,
      })
    },
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getUserTimeline(this.properties.userinfo)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
