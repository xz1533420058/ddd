// pages/wait/wait.js
const app = getApp()
let djs = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0 ,   // 秒
    qidian:'',
    zhongdian:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      qidian:app.globalData.Startingaddress,
      zhongdian:app.globalData.endaddress
    })
    this.setInterval()
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var ss=Number(this.data.second);
    console.log(ss)
    if(ss=='00'){
      wx.navigateTo({
        url: '../waitdriver/waitdriver',
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearTimeout(djs);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  setInterval: function () {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours   
   
    djs = setInterval(function () {  // 设置定时器
        second++
        if (second >= 60) {
            second = 0  //  大于等于60秒归零
            minute++
            if (minute >= 60) {
                minute = 0  //  大于等于60分归零
                hours++
                if (hours < 10) {
                    // 少于10补零
                    that.setData({
                        hours: '0' + hours
                    })
                } else {
                    that.setData({
                        hours: hours
                    })
                }
            }
            if (minute < 10) {
                // 少于10补零
                that.setData({
                    minute: '0' + minute
                })
            } else {
                that.setData({
                    minute: minute
                })
            }
        }
        if (second < 10) {
            // 少于10补零
            that.setData({
                second: '0' + second
            })
        } else {
            that.setData({
                second: second
            })
        }
       
    }, 1000)
  
},
  quxiao(){
    wx.showModal({
      title:'您要取消订单吗',
      content:'正在为您安排司机，确定不要再等一下吗？',
      cancelText:"取消订单",
      confirmText:"暂不取消",
      confirmColor: '#EE7621',
      success(res){
        if(res.confirm){
          
        }else if(res.cancel){
          wx.showToast({
            title: '取消成功 为您返回主页',
            icon:'none',
            duration:2000,
          })

          wx.redirectTo({
            url: '../index/index',
          })
        }
      }
      
    })
  },
})