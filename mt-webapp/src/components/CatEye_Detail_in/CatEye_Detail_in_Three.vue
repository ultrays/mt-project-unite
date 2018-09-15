<template>
    <div>
        <div class="sec">
             <ul>
               <li v-for="v in Detailthree" :key="v.id">
                 <a href="#">
                   <img :src=v.imgs alt="">
                   <span>{{v.title}}</span>
                   <span>{{v.yan}}</span>
                 </a>
               </li>
             </ul>
             <div class="sec_all">
                 <span>全体演员人员</span>
                 <img src="../../assets/Geng/baijian.jpg">
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatEye_Detail_in_Three",
      props:["Detailthree"],
        data(){
           return{
           }
        }
    }
</script>

<style lang="scss" scoped>
.sec{
  width:100%;
  background:white;
   ul{
     width:100%;
     display: flex;
     margin-top:0.1rem;
     overflow-x: scroll;
     padding-left:0.12rem;
     box-sizing: border-box;
     border-bottom:2px solid #f2f2f2;
     li{
       display: flex;
       margin-top:0.14rem;
       a{
         width:0.66rem;
         display: flex;
         flex-direction: column;
         img{
           width:0.53rem;
           height:0.74rem;
         }
         span:nth-child(2){
           font-size:0.12rem;
           color:black;
           width:100%;
           margin-top:0.07rem;
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
         }
         span:nth-child(3){
           font-size:0.12rem;
           color:#999;
           width:100%;
           margin-top:0.04rem;
           padding-left:0.15rem;
           box-sizing: border-box;
           margin-bottom:0.1rem;
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
         }
       }
     }
   }
  .sec_all{
    width:100%;
    height:0.34rem;
    display: flex;
    border-bottom:2px solid #e5e5e5;
      span{
        font-size:0.12rem;
        color:#666;
        margin-top:0.10rem;
        margin-left:0.12rem;
      }
      img{
        width:0.08rem;
        height:0.11rem;
        margin-top:0.13rem;
        margin-left:2.70rem;
      }
  }
}
</style>
