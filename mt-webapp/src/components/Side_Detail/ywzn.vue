张琛 15:18:36
<template>
  <div>
    <div class="yw">
      <p>游玩指南</p>
      <p>一站汇集景区内玩乐</p>
      <img src="../../assets/Zhang/uykh.jpg" alt="">
    </div>

    <ul class="qu" v-for="f in ywzn" :key="f.id">
      <li >
        <img :src="f.qo"  alt="">
        <p>{{f.qp}}</p>
      </li>
      <li>
        <img :src="f.qa" alt="">
        <p>{{f.qs}}</p>
      </li>
      <li>
        <img :src="f.qd" alt="">
        <p>{{f.qf}}</p>
      </li>
      <li>
        <img :src="f.qg"  alt="">
        <p>{{f.qh}}</p>
      </li>
    </ul>
    <img src="../../assets/Zhang/lb.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "ywzn",
    props:["ywzn"]
  }
</script>

<style scoped>
  .yw{
    width: 100%;
    display: flex;
  }
  .yw :nth-child(1){
    margin-top: 0.13rem;
    margin-left: 0.18rem;
    font-size: 0.18rem;
  }
  .yw :nth-child(2){
    margin-top: 0.22rem;
    margin-left: 1.3rem;
    margin-right: 0.07rem;
    font-size: 0.12rem;
  }
  .yw img{
    width: 0.07rem;
    height: 0.1rem;
    margin-top: 0.24rem;
  }
  .qu{
    display: flex;
    overflow-x: scroll;
    margin-left: 0.16rem;
  }
  .qu :nth-child(1){
    margin-right: 0.08rem;
  }
  .qu li p{
    margin-top: 0.08rem;
    margin-bottom: 0.17rem;

  }
  .qu :nth-child(2){

    font-size: 0.14rem;
  }
</style>

