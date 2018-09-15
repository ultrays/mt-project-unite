<template>
    <div>
       <div class="new">
            <div class="new_head">
                <span>资源</span>
            </div>
           <div class="news" v-for="n in itemnight" :key="n.id">
               <div class="new_nav">
                 <img :src=n.img>
                 <p>{{n.sec}}</p>
                   <img :src=n.img1>
               </div>
               <div class="bb"></div>
               <div class="new_sec">
                 <a href="#">
                   <span>{{n.one}}</span>
                   <span>昨日票房排行榜</span>
                 </a>
                 <a href="#">
                   <span>{{n.five}}</span>
                   <span>首周票房(万)</span>
                 </a>
                 <a href="#">
                   <span>{{n.nine}}</span>
                   <span>累计票房(万)</span>
                 </a>
                 <img src="../../assets/Geng/hekuo.jpg">
               </div>
           </div>
       </div>
       <CatEye_Detail_in_eight :msgnine="msgeight" :fnine="fnight"></CatEye_Detail_in_eight>
    </div>
</template>

<script>
    import CatEye_Detail_in_eight from "./CatEye_Detail_in_eight";
    export default {
        name: "CatEye_Detail_in_Seven",
      components: {CatEye_Detail_in_eight},
      props:["itemnight","msgeight","fnight"],
      data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
.new{
  width:100%;
  background:white;
  .new_head{
    width:100%;
    height:0.37rem;
    display: flex;
    span{
      margin-left:0.12rem;
      margin-top:0.12rem;
      font-size:0.13rem;
      color:black;
    }
  }
  .news{
    width:100%;
     .new_nav{
       width:100%;
       display: flex;
       img:nth-child(1){
         width:0.83rem;
         height:0.62rem;
         margin-left:0.12rem;
       }
       p{
         font-size:0.13rem;
         color:black;
         width:2.1rem;
         margin-top:0.15rem;
         margin-left:0.08rem;
       }
        img:nth-child(3){
          width:0.07rem;
          height:0.09rem;
          margin-top:0.24rem;
          margin-left:0.3rem;
        }
     }
     .bb{
       width:100%;
       height:0.1rem;
       background:#f4f4f4;
       margin-top:0.12rem;
     }
    .new_sec{
      display: flex;
      justify-content: space-around;
         a{
           display: flex;
           flex-direction: column;
           span:nth-child(1){
             font-size:0.16rem;
             color:#e54847;
             margin-top:0.19rem;
             text-align: center;
           }
           span:nth-child(2){
             font-size:0.12rem;
             color:#999;
             margin-top:0.1rem;
             text-align: center;
             margin-bottom:0.14rem;
           }
         }
      img{
        width:0.07rem;
        height:0.09rem;
        margin-top:0.27rem;
      }
    }
  }
}
</style>
