// pages/MyWelfare/MyWelfare.js
var token = wx.getStorageSync('usertoken')
var keshiyongpage = 1
var keshiyongpageend=Number
var bukeyongpage = 1
var bukeyongpageend = Number
var keyonglist=[]
var bukeyonglist=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pbttact:1,
    color:'black',
    guoqi:[
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:1},
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:2},
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:3},
    ],
    keyong:[],
    zanwushuj:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(token)
    var that = this
    //获取可使用红包
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://172.16.1.224:5000/get_unuse_coupon',
      method:'POST',
      header:{
        "content-type":"application/json"
      },
      data:{
        "token":token,
        "page":keshiyongpage
      },
      success(res){
        if(res.data.code==200&&res.data.back_data.length!=0){
          var pagedata = res.data.back_data
          var list = []
          for(var i = 0;i<pagedata.length;i++){
            list.push({coupon_amount:Number(pagedata[i].coupon_amount).toFixed(2),coupon_id:pagedata[i].coupon_id,
              end_time:pagedata[i].end_time,status:"可使用"})
          }
          keyonglist =list
          that.setData({
            keyong:keyonglist,
            zanwushuj:false
          })
          keshiyongpage++
          keshiyongpageend = pagedata[0].total_page
        }
        else{
          that.setData({
            zanwushuj:true
          })
        }
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail(){
        that.setData({
          zanwushuj:true
        })
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
    //获取不可使用红包
    
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
    var that = this
    wx.showLoading({
     title:'加载中',
    })
    //加载可使用红包
    if (this.data.pbttact==1) {
      console.log(keshiyongpage,keshiyongpageend)
      console.log(typeof(keshiyongpage))
      console.log(typeof(keshiyongpageend))
      if(keshiyongpage<=keshiyongpageend){
        wx.request({
          url: 'http://172.16.1.224:5000/get_unuse_coupon',
          method:'POST',
          header:{
            "content-type":"application/json"
          },
          data:{
            "token":token,
            "page":keshiyongpage
          },
          
          success(res){
            console.log(res.data)
            console.log(keshiyongpage)
            if(res.data.code==200){
              var pagedata = res.data.back_data
              var list = []
              for(var i = 0;i<pagedata.length;i++){
              list.push({coupon_amount:Number(pagedata[i].coupon_amount).toFixed(2),coupon_id:pagedata[i].coupon_id,
                end_time:pagedata[i].end_time,status:"可使用"})
              }
              keyonglist = keyonglist.concat(list)
              console.log(keyonglist)
              that.setData({
                keyong:keyonglist
              })
              keshiyongpage++
            }
          }
        })
      }
      else{
        wx.showToast({
          title: '已经到底了',
          icon:'none',
          duration:2000
        })
      }
      
    }
    //加载不可使用红包
    else{
      wx.showLoading({
        title: '加载中',
      })
      if(bukeyongpage<=bukeyongpageend){
        wx.request({
          url: 'http://172.16.1.224:5000/get_unuse_coupon',
          method:'POST',
          header:{
            "content-type":"application/json"
          },
          data:{
            "token":token,
            "page":bukeyongpage
          },
          success(res){
            if(res.data.code==200){
              var pagedata = res.data.back_data
              var list = []
              for(var i = 0;i<pagedata.length;i++){
              list.push({coupon_amount:Number(pagedata[i].coupon_amount).toFixed(2),coupon_id:pagedata[i].coupon_id,
                end_time:pagedata[i].end_time,status:"不可用"})
              }
              bukeyonglist = bukeyonglist.concat(list)
              console.log(bukeyonglist)
              that.setData({
                keyong:bukeyonglist
              })
              bukeyongpage++
            }
            wx.hideLoading({
              success: (res) => {},
            })
          },
          fail(res){
            wx.hideLoading({
              success: (res) => {},
            })
          }
        })
      }
      else{
        wx.showToast({
          title: '已经到底了',
          icon:'none',
          duration:2000
        })
      }
    }
    wx.hideLoading({
      success: (res) => {},
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changetitle1(){
    if(this.data.pbttact!=1){
      this.setData({
        pbttact:1,
        color:'black',
        keyong:keyonglist
      })
    }
  },
  changetitle2(){
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    if(bukeyonglist.length==0){
      if(this.data.pbttact!=2){
        that.setData({
          pbttact:2,
          color:'#A9A9A9',
          zanwushuj:true
        })
        wx.request({
          url: 'http://172.16.1.224:5000//get_used_coupon',
          method:'POST',
          header:{
            "content-type":"application/json"
          },
          data:{
            "token":token,
            "page":bukeyongpage
          },
          success(res){
            console.log(res.data)
            if(res.data.code==200&&res.data.back_data.length!=0){
              var pagedata = res.data.back_data
              var list = []
              for(var i = 0;i<pagedata.length;i++){
                list.push({coupon_amount:Number(pagedata[i].coupon_amount).toFixed(2),coupon_id:pagedata[i].coupon_id,
                  end_time:pagedata[i].end_time,status:"不可用"})
              }
              bukeyonglist =list
              that.setData({
                keyong:bukeyonglist,
                pbttact:2,
                color:'#A9A9A9',
                zanwushuj:false
              })
              bukeyongpage++
              bukeyongpageend = pagedata[0].total_page
            }
            else{
              that.setData({
                zanwushuj:true
              })
              wx.hideLoading({
                success: (res) => {},
              })
            }
          },
          fail(){
            that.setData({
              zanwushuj:true
            })
            wx.hideLoading({
              success: (res) => {},
            })
          }
        
        })
        // this.setData({
        //   pbttact:2,
        //   color:'#A9A9A9',
        //   keyong:bukeyonglist
        // })
      }
    }
    else{
      that.setData({
        keyong:bukeyonglist,
        pbttact:2,
        color:'#A9A9A9',
      })
      wx.hideLoading({
        success: (res) => {},
      })
    }
    
  }
})