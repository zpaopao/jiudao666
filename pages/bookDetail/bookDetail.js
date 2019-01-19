import { BookModel } from '../../models/book.js'
import { LikeModel } from '../../models/like.js'

let bookModel = new BookModel
let likeModel = new LikeModel
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posting:false,
    bookDetail:null,
    contents:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    bookModel.getBookDetail(
      id, 
      (res) => {
      this.setData({
        bookDetail: res
      })
      console.log(res)
    }
    )
    bookModel.getComments(id,(res)=>{
     this.setData({
       contents:res.comments,
     })
     console.log(res)
    })
    bookModel.getLikeStatus(id,(res)=>{
      this.setData({
        like:res
      })
      console.log(res);
    })
  },

  onLike:function(e){
      let behavior= e.detail.behavior
      likeModel.like(behavior,this.data.bookDetail.id,400)
  },
  onPostTap:function(e){
    this.setData({
      posting:true
    })
  },
  onCancle:function(e){
     this.setData({
       posting:false
     })
  },
  onTapingTap:function(e){
    console.log(e)
    let content=e.detail.content || e.detail.value
    if(content.length>12){
      wx.showToast({
        title: '短评最多12个字',
        icon:'none'
      })
      return 
    }
    if(!content){
      return
    }
    bookModel.postComment(this.data.bookDetail.id, content,(res)=>{
      wx.showToast({
        title:'+1',
        icon:'none'
      })
  
      this.data.contents.unshift({
        content:content,
        nums:1
      })
      this.setData({
        contents: this.data.contents
      })   
    })
    this.setData({
      posting:false
    })
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

  }
})