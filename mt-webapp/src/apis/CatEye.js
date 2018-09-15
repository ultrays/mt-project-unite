import {CATEYE} from "../commions/commion"
export class CatEye {
  static getCat(cb){
    fetch(CATEYE).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
