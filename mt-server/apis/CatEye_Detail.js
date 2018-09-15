import {CATEYEDETAIL} from "../commions/commion";
export  class CatEye_Detail{
  static getCat_Detail(id,cb){
    fetch(CATEYEDETAIL + id).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          cb(data)
        })
      }
    })
  }
}
