import {ZBYC} from"../commions/commion"
export class zbyc {
  static getCat(cb){
    fetch(ZBYC).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
