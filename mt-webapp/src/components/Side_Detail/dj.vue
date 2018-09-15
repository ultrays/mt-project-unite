<template>
  <div>
    <div class="t">
      <img src="../../assets/Zhang/29.jpg" alt="">
      <p>多景点联票</p>
    </div>
    <div class="xz" v-for="d in dj" :key="d.id">
      <ul class="xl">
        <li>
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
  </div>
</template>

<script>
    export default {
        name: "dj",
     props:["dj"]

    }
</script>

<style scoped>
  .t{
    width: 100%;
    display: flex;
    margin-left: 0.15rem;
    border-bottom: 1px solid #f7f5fa;
  }
  .t img{
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.15rem 0.12rem 0.18rem 0;
  }
  .t p{
    font-size: 0.18rem;
    margin-top: 0.2rem;
  }
  /*.sf{*/
    /*width: 100%;*/
    /*display: flex;*/
    /*border-bottom: 1px solid #f7f6fa;*/
  /*}*/
  /*.sf .ssf{*/
    /*font-size: 0.15rem;*/
    /*padding: 0.17rem 0.7rem 0.24rem 0.17rem;*/
    /*margin-right: 0.3rem;*/
  /*}*/
  /*.sf div{*/
    /*display: flex;*/
    /*margin-top: 0.17rem;*/
    /*height: 0.14rem;*/
  /*}*/
  /*.sf :nth-child(2) :nth-child(1){*/
    /*height: 0.14rem;*/
    /*font-size: 0.12rem;*/
    /*color: #ff3e03;*/
  /*}*/
  /*.sf :nth-child(2) :nth-child(2){*/
    /*font-size: 0.08rem;*/
    /*color: #848a8c;*/
    /*margin-top: 0.04rem;*/
  /*}*/
  /*.ys{*/
    /*font-size: 0.08rem;*/
    /*color: #848a8c;*/
    /*margin-top: 0.05rem;*/
    /*display: block;*/
    /*margin-left: 0.1rem;*/
  /*}*/

  .xl{
    width: 2.5rem;
  }
  .xl :nth-child(1){
    display: flex;
  }
  .xl :nth-child(1) :nth-child(1){
  font-size: 0.1rem;
  height: 0.16rem;
  /*width: 0.5rem;*/
  /*color: #fff;*/
  /*background: #ff454a;*/
  line-height: 0.16rem;
  text-align: center;
  border-radius: 3px;
  margin-top: 0.05rem;
  padding-left: 0.04rem;

  }

  .xl :nth-child(1) :nth-child(1){
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
    /*margin-left: 0.5rem;*/
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
    color:#3ff2e0 ;
    margin-left: 0.18rem;
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
    /*margin-left:0.5rem ;*/
    line-height: 0.32rem;
  }
</style>
