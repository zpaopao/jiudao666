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
}

export{BookModel}