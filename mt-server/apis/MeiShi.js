import {MEISHI} from "../commions/commion"
export class MeiShi {
  static getCat(cb){
    fetch(MEISHI).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}





