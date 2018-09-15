<template>
  <div>
    <div class="tj">
      <img src="../../assets/Zhang/dz.jpg" alt="">
      <p>美团推荐</p>
    </div>
    <div class="xz" v-for="d in tj" :key="d.id">
      <ul class="xl">
        <li class="qzx">
          <p>{{d.xl}}</p>
          <p>{{d.mp}}</p>
        </li>
        <li>
          <span>{{d.sm}}</span>
        </li>
        <li>
          <a href="">{{d.ss}}</a>
          <a href="">{{d.wx}}</a>
        </li>
        <li>
          <h6>{{d.ys}}</h6>
        </li>
      </ul>

      <ul class="xr">
        <li>
          <p>{{d.sb}}</p>
          <p>{{d.se}}</p>
        </li>
        <li>
          <span>{{d.fj}}</span>
        </li>
        <li>
          <a href="">{{d.lj}}</a>
        </li>
      </ul>
    </div>
    <img src="../../assets/Zhang/lb.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "tj",
    props:["tj"]
  }
</script>

<style scoped>
  .tj{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    margin-left: 0.15rem;
    height: 0.55rem;
    border-bottom: 2px solid #f5f7f8;
  }
  .tj img{
    margin-top: 0.18rem;
    width: 0.2rem;
    height: 0.21rem;
    margin-right: 0.07rem;
  }
  .tj p{
    margin-top: 0.15rem;
    font-size: 0.2rem;
    color: #ff8843;
  }
  .xl{
    width: 2rem;
  }
  .xl .qzx{
    display: flex;
  }
  .xl .qzx :nth-child(1){
    font-size: 0.1rem;
    height: 0.16rem;
    width: 0.5rem;
    color: white;
    background: #ff454a;
    line-height: 0.16rem;
    text-align: center;
    border-radius: 3px;
    margin-top: 0.05rem;
    padding-left: 0.04rem;

  }

  .xl :nth-child(1) :nth-child(2){
    font-size: 0.12rem;
  }
  .xl :nth-child(2){

  }
  .xl :nth-child(2) :nth-child(1){
    color: #0072eb;
    font-size: 0.1rem;
    display: block;
  }
  .xl :nth-child(3){
    display: flex;
    text-align: center;
  }
  .xl :nth-child(3) :nth-child(1){
    border: 2px solid #f4f3f4;
    font-size: 0.09rem;
    display: block;
    width: 0.39rem;
    border-radius: 5px;
    margin-right: 0.06rem;
    color: black;
  }
  .xl :nth-child(3) :nth-child(2){
    border: 2px solid #f4f3f4;
    font-size: 0.09rem;
    display: block;
    width: 0.5rem;
    border-radius: 5px;
    color: black;
  }
  .xl :nth-child(4){

  }
  .xl :nth-child(4) :nth-child(1){
    font-size: 0.12rem;
    color: #515251;
    font-weight: 400;
  }
  .xz{
    display: flex;
    width: 100%;
    padding-top: 0.1rem;
    margin-left: 0.14rem;
    line-height: 0.24rem;
    border-bottom: 2px solid #f8f8f8;
    padding-bottom: 0.1rem;
  }
  .xr{
    display: flex;
    flex-direction:column ;
  }
  .xr :nth-child(1){
    display: flex;
  }
  .xr :nth-child(1) :nth-child(1){
    font-size: 0.12rem;
    margin-left: 0.5rem;
    color: #ff2e00;
  }
  .xr :nth-child(1) :nth-child(2){
    font-size: 0.08rem;
    color: #858b8d;
  }
  .xr :nth-child(2){

  }
  .xr :nth-child(2) :nth-child(1){
    font-size: 0.08rem;
    color:#3ff2e0;
    margin-left: 0.68rem;
  }
  .xr :nth-child(3){

  }
  .xr :nth-child(3) :nth-child(1){
    width: 0.66rem;
    height: 0.32rem;
    display: block;
    background: #ff5900;
    color: white;

    font-size: 0.13rem;
    border-radius: 15px;
    text-align: center;
    margin-top:0.01rem;
    margin-left:0.5rem ;
    line-height: 0.32rem;


  }

</style>
