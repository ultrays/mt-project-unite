<template>
    <div>
        <div class="head">
            <span>短评</span>
        </div>
        <div class="father" v-for="t in msgnine" :key="t.id">
             <p><img :src=t.img><span>{{t.day}}</span></p>
             <p>{{t.msg}}</p>
             <div class="fa1">
                  <img :src=t.img1>
                  <span>{{t.name}}</span>
                  <img :src=t.img2>
                  <img src="../../assets/Geng/hao.jpg">
                  <span>{{t.zan}}</span>
                  <img src="../../assets/Geng/msg.jpg">
                  <span>{{t.message}}</span>
             </div>
        </div>
      <div class="fal_foot">
        <span>查看全部</span>
        <span>36598</span>
        <span>条短评</span>
      </div>
      <CatEye_Detail_in_nine :ften="fnine"></CatEye_Detail_in_nine>
    </div>
</template>

<script>
    import CatEye_Detail_in_nine from "./CatEye_Detail_in_nine";
    export default {
        name: "CatEye_Detail_in_eight",
      components: {CatEye_Detail_in_nine},
      props:["msgnine","fnine"],
      data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
  .head{
    width:100%;
    border-top:1px solid #f1f1f1;
    border-bottom:1px solid #f1f1f1;
    background:white;
    display: flex;
      span{
        font-size:0.13rem;
        color:black;
        font-weight:600;
        margin-top:0.13rem;
        margin-left:0.12rem;
        margin-bottom:0.15rem;
      }
  }
.father{
  width:100%;
  background:white;
  p:nth-child(1){
      display: flex;
      margin-left:0.13rem;

    img{
      width:0.6rem;
      height:0.1rem;
      margin-top:0.1rem;
    }
    span{
      font-size:0.13rem;
      color:#999;
      margin-top:0.05rem;
      margin-left:0.04rem;
    }
  }
  p:nth-child(2){
      font-size:0.12rem;
      color:#999;
      margin-top:0.07rem;
      margin-left:0.12rem;
  }
   .fa1{
     width:100%;
     display: flex;
     border-bottom:1px solid #f1f1f1;
      img:nth-child(1){
        width:0.19rem;
        height:0.24rem;
        margin-left:0.1rem;
        margin-top:0.17rem;
        margin-bottom:0.11rem;
      }
     span:nth-child(2){
       font-size:0.12rem;
       color:#999;
       display: block;
       margin-bottom:0.11rem;
       margin-top:0.19rem;
       margin-left:0.11rem;
     }
     img:nth-child(3){
       width:0.12rem;
       height:0.12rem;
       margin-top:0.21rem;
       margin-bottom:0.11rem;
       margin-left:0.04rem;
     }
     img:nth-child(4){
       width:0.11rem;
       height:0.11rem;
       margin-left:1.6rem;
       margin-top:0.21rem;
     }
     span:nth-child(5){
       font-size:0.13rem;
       color:#999;
       margin-top:0.17rem;
       margin-left:0.05rem;
     }
     img:nth-child(6){
         width:0.12rem;
         height:0.12rem;
         margin-top:0.21rem;
         margin-left:0.08rem;
     }
     span:nth-child(7){
       font-size:0.13rem;
       color:#999;
       margin-top:0.17rem;
       margin-left:0.05rem;
     }
   }
}
  .fal_foot{
    width:100%;
    background:white;
    display: flex;
    span:nth-child(1){
      font-size:0.12rem;
      color:#ff7b50;
      margin-top:0.1rem;
      margin-left:1.33rem;
      margin-bottom:0.11rem;
    }
    span:nth-child(2){
      font-size:0.12rem;
      color:#ff7b50;
      margin-top:0.1rem;
    }
    span:nth-child(3){
      font-size:0.12rem;
      color:#ff7b50;
      margin-top:0.1rem;
    }
  }
</style>
