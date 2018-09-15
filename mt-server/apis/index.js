import {INDEX} from "../commions/commion"
export class Index {
  static getCat(cb){
    fetch(INDEX).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
