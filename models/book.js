import {HTTP} from '../utils/http.js'

class BookModel extends HTTP{
  getBookList(sCallback){
    this.request({
      url:'book/hot_list',
      success:(res)=>{
        console.log(res)
        sCallback(res)
      }
    })
  }
  getBookDetail(id,sCallback){
    console.log(id)
    this.request({
      url:`book/${id}/detail`,
      success:(res)=>{
        sCallback(res)
      }
    })
  }
  getLikeStatus(book_id, sCallback){
    this.request({
      url: `book/${book_id}/favor`,
      success: (res) => {
        sCallback(res)
      }
    })
  }
  getComments(book_id, sCallback){
    this.request({
      url: `/book/${book_id}/short_comment`,
      success: (res) => {
        sCallback(res)
      }   
    })  
  }
  postComment(id,content, sCallback){
    this.request({
      url:`book/add/short_comment`,
      method:'POST',
      data:{
        book_id:id,
        content:content
     },
     success:(res)=>{
       sCallback(res)
     }
    })
  }
}

export{BookModel}