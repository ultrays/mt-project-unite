import {DELICIOUS} from"../commions/commion"
export class delicious {
  static getCat(cb){
    fetch(DELICIOUS).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          cb(data)
        })
      }
    })
  }
}
