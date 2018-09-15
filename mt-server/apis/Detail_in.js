import {DETAILIN} from "../commions/commion";
export  class Detailin{
  static getCat(id,cb){
    fetch(DETAILIN + id).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          cb(data)
        })
      }
    })
  }
}
