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
    src: 'http://bj.bcebos.com/v1/gaopin-preview/134206530332.jpg%40%21305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-06-16T00%3A45%3A05Z%2F60%2F%2F856fd3ef9ac990324096f6fd88e956470a53ab00239011ade6fd01878f6760d1', array: [{
      src:'http://bj.bcebos.com/v1/gaopin-preview/134206530162.jpg%40%21305?authorization=bce-auth-v1%2F8297d8317b7e4592b641a2ee98e08e95%2F2017-06-16T00%3A45%3A05Z%2F60%2F%2F35e48f1ef0f7ce072417498cfb71fe11eff882b1eff11cb6dc09662a5cb06b90',
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
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
