<template>
    <div>
      <div class="pj">
        <div class="yhl">
          <p>餐厅评价</p>
          <a href="">更多评论(43598条)</a>
        </div>
        <div class="gzp">
          <a href="">晒图评价(5425)</a>
          <a href="">低分评价(2682)</a>
          <a href="">最新评价</a>
        </div>
        <div class="gzp">

          <a href="">回头客(2531)</a>
          <a href="">上菜快(1457)</a>
          <a href="">干净卫生(64)</a>
        </div>
      </div>

      <div class="yh" v-for="i in seventh" :key="i.id">
        <div class="sq">
          <img class="t" :src=i.img alt="">

          <div class="x">
            <p>{{i.mt}}</p>
            <img  :src=i.img2 alt="">
          </div>
            <img class="j" :src=i.img1 alt="">
          <span>{{i.time}}</span>
        </div>
        <p class="gen">{{i.sec}}</p>

        <p class="fxt">
          <img :src=i.img3 alt="">
          <img :src=i.img4 alt="">
          <img :src=i.img5 alt="">
        </p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "seventh",
        props:["seventh"]
    }
</script>

<style scoped>
  .pj{
    width: 100%;

  }
  .yhl{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .yhl p{
    font-size: 0.21rem;
    margin-left: 0.17rem;
    margin-top: 0.26rem;
    margin-bottom: 0.18rem;
  }
  .yhl a{
    font-size: 0.14rem;
    margin-top: 0.3rem;
    color: #00bba4;
  }
  .gzp{
    width: 100%;
    padding-left: 0.15rem;
    height: 0.45rem;
    display: flex;
  }

  .gzp a{
    border:2px solid #e1e1e1;
    border-radius: 14px;
    color: #414341;
    display: block;
    padding-left: 0.11rem;
    padding-right: 0.11rem;
    /*padding-top: 0.07rem;*/
    /*padding-bottom: 0.07rem;*/
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.32rem;
    height: 0.32rem;
    margin-right: 0.12rem;
  }
  .yh{
    width: 100%;


  }
  .yh .t{
    width: 0.53rem;
    height:0.54rem;
    margin: 0.15rem 0.12rem 0 0.15rem;
  }
  .x{


  }
  .sq{
    display: flex;
  }
  .x p{
    font-size: 0.14rem;
    margin-top: 0.19rem;
    display: block;

  }
  .x img{
    width: 0.8rem;
    height: 0.14rem;
    margin-top: 0.19rem;
  }
  .j{
      width:0.14rem;
      height:0.14rem;
      margin-top: 0.23rem;
  }
  .yh span{
    font-size: 0.1rem;
    color: #918f91;
    margin-top: 0.2rem;
    margin-left: 1.3rem;
  }
  .gen{
    font-size: 0.12rem;
    margin-left: 0.79rem;
    margin-right: 0.19rem;
  }
  .fxt{
    display: flex;
    padding: 0.1rem 0 0 0.78rem;
  }
  .fxt img{
    margin-right: 0.08rem;
    width: 0.62rem;
    height:0.64rem;
  }
</style>
