<template>
    <div>
        <div class="section">
             <div class="sec_heads">
                 <span>正版周边</span>
                 <span>全部</span>
                 <img src="../../assets/Geng/hekuo.jpg">
             </div>
             <div class="sec_nav">
                  <ul>
                    <li v-for="p in sidesix" :key="p.id">
                      <a href="#">
                          <img :src=p.img>
                          <span>{{p.title}}</span>
                          <p><span>{{p.price}}</span><span>{{p.prices}}</span></p>
                      </a>
                    </li>
                  </ul>
             </div>
        </div>
        <CatEye_Detail_in_Seven :itemnight="itemseven" :msgeight="msgseven" :fnight="fseven"></CatEye_Detail_in_Seven>
    </div>
</template>

<script>
    import CatEye_Detail_in_Seven from "./CatEye_Detail_in_Seven";
    export default {
        name: "CatEye_Detail_in_Six",
      components: {CatEye_Detail_in_Seven},
      props:["sidesix","itemseven","msgseven","fseven"],
      data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
.section{
  width:100%;
  background:white;
  margin-top:0.09rem;
   .sec_heads{
     width:100%;
     height:0.34rem;
     display: flex;
     span:nth-child(1){
       font-size:0.12rem;
       color:#666;
       margin-top:0.1rem;
       margin-left:0.12rem;
     }
     span:nth-child(2){
       font-size:0.12rem;
       color:#666;
       margin-left:2.67rem;
       margin-top:0.1rem;
     }
     img{
       width:0.07rem;
       height:0.09rem;
       margin-left:0.1rem;
       margin-top:0.13rem;
     }
   }
  .sec_nav{
    width:100%;
    ul{
      width:3.52rem;
      display: flex;
      overflow-x: scroll;
      li{
        display: flex;
        margin-left:0.08rem;
        a{
          display: flex;
          flex-direction: column;
           img{
             width:1.2rem;
             height:1.1rem;
           }
           span:nth-child(2){
             font-size:0.16rem;
             color:black;
             font-weight:600;
             margin-top:0.15rem;
             text-align: center;
           }
           p:nth-child(3){
             display: flex;
             margin-left:0.1rem;
                span:nth-child(1){
                  font-size:0.12rem;
                  color:#e54847;
                  margin-top:0.15rem;
                  margin-bottom:0.12rem;
                }
                span:nth-child(2){
                  font-size:0.12rem;
                  color:#999;
                  margin-top:0.15rem;
                  margin-bottom:0.25rem;
                }
           }
        }
      }
    }
  }
}
</style>
