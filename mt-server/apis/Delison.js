import {DElISON} from "../commions/commion"
export class Delison {
  static getCat(id,cb){
    fetch(DElISON + id).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
