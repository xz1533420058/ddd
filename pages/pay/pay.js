// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhifuboxshow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  gobaojin(){
    wx.navigateTo({
      url: '../baojin/baojin',
    })
  },
  dianhua(){
    wx.showModal({
      title:'匿名联系司机',
      content:'为了保护您的隐私，使用15656565654匿名拨打',
      cancelText:"关闭",
      confirmText:"联系司机",
      confirmColor: '#EE7621',
      success(res){
        if(res.confirm){
          wx.showToast({
            title: '为您接通',
            icon:'none',
            duration:2000,
          })
         wx.makePhoneCall({
           phoneNumber: '18040310120',
         })
        }else if(res.cancel){       
        }
      }
    })
  },
  gokefu(){
    wx.navigateTo({
      url: '../kefu/kefu',
    })
  },
  zhifubox(){
    this.setData({
      zhifuboxshow:true
    })
  },
  zhifuboxclose(){
    this.setData({
      zhifuboxshow:false
    })
  }
})