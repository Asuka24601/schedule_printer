# 课程表PlusMax

一个微信小程序，应课程期末作业需要而生。

## 基本结构

以下为 `app.json` 的基本内容。

```json
{
    //四个页面
  "pages": [
    //今日课程
    "pages/index/index",
    //交流与信息发表
    "pages/information/information",
    //用户信息
    "pages/user/user",
    //全部课程信息
    "pages/select/select"
  ],

  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    //将导航栏设为custom，自定义导航栏
    "navigationStyle": "custom",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle": "black"
  },

  "tabBar": {
    //将tabbar设为custom，自定义底部栏
    "custom": true,
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "index"
      },
      {
        "pagePath": "pages/select/select",
        "text": "list"
      },
      {
        "pagePath": "pages/user/user",
        "text": "user"
      },
      {
        "pagePath": "pages/information/information",
        "text": "information"
      }
    ]
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

