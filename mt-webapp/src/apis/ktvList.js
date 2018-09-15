import {KTVLIST} from "../commions/commion"
export class KtvList {
  static getCat(cb){
    fetch(KTVLIST).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
