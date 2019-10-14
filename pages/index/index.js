//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //扫描二维码
  scanQRCode: function () {
    var that = this;
    wx.scanCode({
      success: function (res) {
        console.log(res);
        that.showModal('扫描二维码/条形码', res.result, false);
      },
      fail: function (err) {
        that.showModal('扫描二维码/条形码', '扫描失败，请重试', false);
      }
    })
  },
})
