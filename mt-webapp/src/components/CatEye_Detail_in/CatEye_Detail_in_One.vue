<template>
    <div>
      <div class="sec" v-for="b in DetailOne" :key="b.id">
        <img :src=b.imgs>
        <div class="detail">
          <p>{{b.title}}</p>
          <p>{{b.subtitle}}</p>
          <img :src=b.dian alt="">
          <p>{{b.pin}}</p>
          <p><span>{{b.act}}</span><img :src=b.img></p>
          <p>{{b.time}}</p>
          <p>{{b.start}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CatEye_Detail_in_One",
      props:["DetailOne"],
      data(){
        return{
        }
      }
    }
</script>

<style lang="scss" scoped>
  .sec{
    width:100%;
    height:100%;
    display: flex;
    background:url('../../assets/Geng/f4eb3a97b659f8cb814a55f07a32609.png') no-repeat;
    background-size:cover;

    img:nth-child(1){
      width:1rem;
      height:1.5rem;
      margin-top:0.16rem;
      margin-left:0.12rem;
    }
    .detail{
      margin-top:0.16rem;
      margin-left:0.09rem;
      display:flex;
      margin-bottom:0.14rem;
      flex-direction: column;
      p:nth-child(1){
        font-size:0.17rem;
        color:white;
        font-weight:600;
      }
      p:nth-child(2){
        font-size:0.12rem;
        color:white;
        margin-top:0.05rem;
      }
      img:nth-child(3){
        width:1.1rem;
        height:0.17rem;
        margin-top:0.05rem;
        margin-left:0;
      }
      p:nth-child(4){
        font-size:0.12rem;
        color:#d3d1cd;
      }
      p:nth-child(5){
        display: flex;
        margin-top:0.06rem;
        span{
          font-size:0.12rem;
          color:#d3d1cd;
        }
        img{
          width:0.34rem;
          height:0.11rem;
          margin-left:0.03rem;
          margin-top:0.03rem;
        }
      }
      p:nth-child(6){
        font-size:0.12rem;
        color:#d3d1cd;
        margin-top:0.08rem;
      }
      p:nth-child(7){
        font-size:0.12rem;
        color:#d3d1cd;
        margin-top:0.06rem;
        margin-bottom:0.07rem;
      }
    }
  }
</style>
