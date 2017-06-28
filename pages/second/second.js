//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    timeStamp: "",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    cells: [
      { position: 0, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 1, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 2, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 3, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 4, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 5, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 6, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" },
      { position: 7, title: "今天", des: "今天银行利率调整到1.1，对于购房者和卖房者都不是好消息" }
    ],
    array: [{
      src: 'http://bj.bcebos.com/v1/gaopin-preview/134206530162.jpg%40%21305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-06-16T00%3A45%3A05Z%2F60%2F%2F35e48f1ef0f7ce072417498cfb71fe11eff882b1eff11cb6dc09662a5cb06b90',
      mode: 'aspectFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    },
    {
      src: 'http://bj.bcebos.com/v1/gaopin-preview/134206530332.jpg%40%21305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-06-16T00%3A45%3A05Z%2F60%2F%2F856fd3ef9ac990324096f6fd88e956470a53ab00239011ade6fd01878f6760d1',
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      var time = "" + util.formatTime(new Date());
      //更新数据
      that.setData({
        userInfo: userInfo,
        timeStamp: time,
        motto: 'Welcome GitReader'
      })
    })
  }
})
