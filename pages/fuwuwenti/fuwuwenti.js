// pages/burenke/burenke.js
var chekbox=[]
var chek=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chek:{style:"background:white",yn:0},
    chek1:{style:"background:white",yn:'0'},
    chek2:{style:"background:white",yn:'0'},
    chek3:{style:"background:white",yn:'0'},
    chkbox:[],
    fontcolor:"color:#696969"
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
  chekbox(){
    if(this.data.chek.yn==0){
     chekbox.push('chek')
      chek++
      this.setData({
        chek:{style:"background:orange",yn:1},
        chkbox:chekbox
      })
    }
    else{
      // chekbox =  chekbox.remove('chek')
      delete chekbox['chek']
      chek--
      this.setData({
        chek:{style:"background:white",yn:0},
        chkbox:chekbox
      })
    }
    this.fontcolorchange()
  },
  chekbox1(){
    if(this.data.chek1.yn==0){
    chekbox.push('chek1')
    chek++
      this.setData({
        chek1:{style:"background:orange",yn:1},
        chkbox:chekbox
      })
    }
    else{
      delete chekbox['chek1']
      chek--
      this.setData({
        chek1:{style:"background:white",yn:0},
        chkbox:chekbox
      })
    }
    this.fontcolorchange()
  },
  chekbox2(){
    if(this.data.chek2.yn==0){
    chekbox.push('chek2')
    chek++
      this.setData({
        chek2:{style:"background:orange",yn:1},
        chkbox:chekbox
      })
    }
    else{
      delete chekbox['chek2']
      chek--
      this.setData({
        chek2:{style:"background:white",yn:0},
        chkbox:chekbox
      })
    }
    this.fontcolorchange()
  },
  chekbox3(){
    if(this.data.chek3.yn==0){
    chekbox.push('chek3')
    chek++
      this.setData({
        chek3:{style:"background:orange",yn:1},
        chkbox:chekbox
      })
    }
    else{
      delete chekbox['chek3']
      chek--
      this.setData({
        chek3:{style:"background:white",yn:0},
        chkbox:chekbox
      })
    }
    this.fontcolorchange()
  },
  fontcolorchange(){
    console.log(1)
    if(chek!=0){
      
      this.setData({
        fontcolor:"color:orange"
      })
    }
    else{
      this.setData({
        fontcolor:"color:#696969"
      })
    }
  },
  tijiao(){
    if(chekbox.length!=0){
    }
    else{
      wx.showToast({
        title: '请选择提交的问题',
        icon:"none",
        duration:2000
      })
    }
  }
})