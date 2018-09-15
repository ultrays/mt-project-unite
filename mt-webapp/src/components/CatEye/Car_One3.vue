<template>
    <div>
        <div class="sec">
             <div class="sec_head">
                 <span>近期最受期待</span>
             </div>
             <div class="sec_sec">
                  <ul>
                    <li v-for="n in two1.lists" :key="n.id" @click="go(n.id)" >
                      <a href="javascript:;">
                          <img :src=n.img>
                          <span>{{n.nm}}</span>
                          <span>{{n.comingTitle}}</span>
                      </a>
                    </li>
                  </ul>
                 <Car_One4 :two2="two1"></Car_One4>
             </div>
        </div>
    </div>
</template>

<script>
    import Car_One4 from "./Car_One4";
    export default {
      name: "Car_One3",
      components: {Car_One4},
      props:["two1"],
      methods:{
         go(id){
             this.$router.push({
               path:"/CatEye_Detail",
               query:{
                  id:id
               }
             })
         }
      }
    }
</script>

<style lang="scss" scoped>
.sec{
   width:100%;
  margin-bottom:0.1rem;
   .sec_head{
     width:100%;
     height:0.44rem;
     display: flex;
     background:white;
     span{
       font-size:0.14rem;
       color:#363636;
       margin-top:0.16rem;
       margin-left:0.15rem;
     }
   }
  .sec_sec{
    width:100%;
    background:white;
      ul{
        width:3.16rem;
        margin-left:0.16rem;
        display: flex;
        overflow-x:scroll;
        li{
          display: flex;
          margin-left:0.14rem;
          a{
            width:0.86rem;
            display: flex;
            flex-direction: column;
            img{
              width:0.86rem;
              height:1.16rem;
            }
            span:nth-child(2){
              font-size:0.14rem;
              color:black;
              font-weight:600;
              margin-top:0.09rem;
            }
            span:nth-child(3){
              font-size:0.14rem;
              color:#cacaca;
              margin-top:0.07rem;
            }
          }
        }
      }
  }
}
</style>

