<template>
  <div>
    <div class="cq" v-for="z in cq" :key="z.id">
      <div class="cw">
        <p>{{z.qj}}</p>
        <p>{{z.qk}}</p>
      </div>
      <div class="ce">
        <p>{{z.ql}}</p>
        <p>{{z.qz}}</p>
      </div>
      <img :src="z.qp" alt="">
    </div>

    <div class="mj">
      <img src="../../assets/Zhang/jd.jpg" alt="">
      <p>门票加酒店</p>
      <a href="">选择出游日期</a>
      <img src="../../assets/Zhang/uykh.jpg" alt="">
    </div>
    <div class="yu">
      <a href="">住景点旁边</a>
      <a href="">高星酒店</a>
      <a href="">含餐</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cq",
    props:["cq"]
  }
</script>

<style scoped>
  .cq{
    width: 100%;
    display: flex;
  }
  .cw{

  }
  .cw :nth-child(1){
    font-size: 0.12rem;
    width: 2.3rem;
    height: 0.36rem;
    margin-top: 0.13rem;
    margin-left: 0.17rem;
    margin-right: 0.5rem;
  }
  .cw :nth-child(2){
    font-size: 0.1rem;
    color: #626a6c;
    margin-left: 0.17rem;
    margin-bottom: 0.15rem;
  }
  .ce{

  }
  .ce :nth-child(1){
    font-size: 0.13rem;
    color: #ff6433;
    margin-top: 0.27rem;
    margin-right: 0.09rem;

  }
  .ce :nth-child(2){
    font-size: 0.09rem;
    color: #7e8385;
  }
  .cq img{
    width: 0.07rem;
    height: 0.1rem;
    margin-top: 0.33rem;
  }
  .mj{
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f4f6f7;
  }
  .mj :nth-child(1){
    margin-left: 0.15rem;
    margin-top: 0.15rem;
    width: 0.2rem;
    height: 0.19rem;
  }
  .mj :nth-child(2){
    font-size: 0.16rem;
    margin-left: 0.13rem;
    margin-top: 0.2rem;
    margin-bottom: 0.18rem;
  }
  .mj :nth-child(3){
    font-size: 0.09rem;
    margin-left: 1.47rem;
    margin-top: 0.2rem;
    color: #adb0b2;
  }
  .mj :nth-child(4){
    width: 0.07rem;
    height: 0.1rem;
    margin-left: 0.05rem;
    margin-top: 0.21rem;
  }
  .yu{
    width: 100%;
    display: flex;
    margin-left: 0.15rem;
    height: 0.57rem;
  }
  .yu a{
    display: block;
    background: #f7f7ff;
    border-radius: 8px;
    font-size: 0.12rem;
    margin-right: 0.09rem;
    color: #2c302c;
    height: 0.26rem;
    padding-left:0.1rem ;
    padding-right: 0.1rem;
    margin-top: 0.14rem;
    line-height: 0.26rem;
  }
</style>

