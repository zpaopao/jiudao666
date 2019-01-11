import {HTTP} from '../utils/http.js'

class ClassicModel extends HTTP{
  getLatest(sCallback){
      this.request({
        url:'classic/latest',
        success:(res)=>{
          console.log(res)
          sCallback(res)
          this._setLatestIndex(res.index)
        }
      })
  }
  // getPrevious(index,sCallback){
  //   this.request({
  //     url:'classic/' + index + '/previous',
  //     success:(res)=>{
  //       sCallback(res)
  //     }
  //   })
  // }

  // getNext(index, sCallback) {
  //   this.request({
  //     url: 'classic/' + index + '/next',
  //     success: (res) => {
  //       sCallback(res)
  //     }
  //   })
  // }
 
  getClassic(index,nextOrPrevious,sCallback){
    this.request({
      url:'classic/' + index + '/' + nextOrPrevious,//动态获取url
      success:(res)=>{
        sCallback(res)
      }
    })
  }

  isFirst(index){
     return index == 1 ? true :false
  }
  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true :false
  }
  _setLatestIndex(index){
    wx.setStorageSync('latest',index)
  }
  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }
}



export {ClassicModel}