<template>
    <div>
      <div class="foot" v-for="f in list3" :key="f.id">
        <p>
          <span>视频</span>
          <span>{{f.four}}</span>
          <img src="../../assets/Geng/hekuo.jpg">
        </p>
        <p>
          <span>剧照</span>
          <span>{{f.two}}</span>
          <img src="../../assets/Geng/hekuo.jpg">
        </p>
      </div>
      <CatEye_Detail_in_Six :sidesix="sidefive" :itemseven="itemsix" :msgseven="msgsix" :fseven="fsix"></CatEye_Detail_in_Six>
    </div>
</template>

<script>
    import CatEye_Detail_in_Six from "./CatEye_Detail_in_Six";
    export default {
        name: "CatEye_Detail_in_Five",
      components: {CatEye_Detail_in_Six},
      props:["sidefive","itemsix","msgsix","fsix"],
      data(){
           return{
               list3:[
                 {four:"43",two:"281"}
               ]
           }
        }
    }
</script>

<style lang="scss" scoped>
.foot{
  width:100%;
  height:0.4rem;
  display: flex;
  background:white;
  margin-top:0.11rem;
    p:nth-child(1){
        display: flex;
      margin-left:0.12rem;
        span:nth-child(1){
          font-size:0.12rem;
          color:#666;
          margin-top:0.16rem;
        }
      span:nth-child(2){
        font-size:0.12rem;
        color:#666;
        margin-top:0.16rem;
        margin-left:0.44rem;
      }
      img{
        width:0.06rem;
        height:0.09rem;
        margin-top:0.2rem;
        margin-left:0.09rem;
      }
    }
    p:nth-child(2){
         display: flex;
      margin-left:0.16rem;
      span:nth-child(1){
        font-size:0.12rem;
        color:#666;
        margin-top:0.16rem;
      }
      span:nth-child(2){
        font-size:0.12rem;
        color:#666;
        margin-top:0.16rem;
        margin-left:1.77rem;

      }
      img{
        width:0.06rem;
        height:0.09rem;
        margin-top:0.2rem;
        margin-left:0.11rem;
      }
    }
}
</style>
