<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="w">
      <p>查看43598条评论</p>
      <img src="../../assets/Zhang/yjkh.jpg" alt="">
    </div>

      <div class="v">
        <img class="i1" src="../../assets/Zhang/wd.jpg" alt="">
        <div class="yy">
          <p>能提前预约不</p>
          <p>不知道耶，每次去人都很多，但是每次...</p>
        </div>
        <img class="i2" src="../../assets/Zhang/yjkh.jpg" alt="">
      </div>

    <p class="sj">商家信息</p>
    <div class="rx"><img src="../../assets/Zhang/bang.jpg" alt="">
      <p>入选【这十家餐厅在西安火的不得了】</p>
      <img src="../../assets/Zhang/yjkh.jpg" alt="">
    </div>

    <div class="xjb">
      <img src="../../assets/Zhang/mei.jpg" alt="">
      <p>西安十大年度高性价比餐厅</p>
    </div>
    <p class="fj">附近推荐</p>

</div>
</template>



<script>
    export default {
        name: "eighth"
    }
</script>

<style scoped>
.w{
  width:3.6rem;
  height: 0.48rem;
  display: flex;
  margin-left: 0.15rem;
}
  .w p{
    font-size: 0.14rem;
    margin: 0.13rem 0 0 0.6rem;
  }
  .w img{
    width: 0.07rem;
    height: 0.1rem;
    margin-top: 0.15rem;
    margin-left: 1.5rem;
  }
  .v{
    width: 100%;
    display: flex;
  }
  .v .i1{
    width: 0.21rem;
    height: 0.13rem;
    margin-left: 0.16rem;
    margin-top: 0.02rem;
    margin-right: 0.06rem;
  }
  .yy{
      margin-right: 0.8rem;

  }
  .yy :nth-child(1){
      font-size: 0.14rem;

  }
  .yy :nth-child(2){
    font-size: 0.12rem;
    margin-top: 0.11rem;
  }
  .i2{
    width: 0.07rem;
    height: 0.1rem;
    margin-top:0.3rem ;

  }
  .sj{
    font-size: 0.21rem;
    margin-top: 0.3rem;
    margin-left: 0.18rem;
  }
  .rx{
    width: 100%;
    display: flex;
    margin-left: 0.14rem;
    margin-top: 0.15rem;
  }
  .rx :nth-child(1){
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.05rem;
  }
.rx :nth-child(2){
  font-size: 0.15rem;
  margin-right:0.5rem ;
}
.rx :nth-child(3){
  width: 0.07rem;
  height: 0.11rem;
}
  .xjb{
    width: 100%;
    display: flex;
    padding-top: 0.13rem;
    padding-left: 0.14rem;
    margin-right: 0.05rem;
  }
  .xjb p{
    font-size: 0.14rem;
    /*border-bottom: 2px solid #f8f8f8;*/
  }
.xjb img{
  margin-right: 0.05rem;
}
.fj{
  width: 100%;
  font-size: 0.17rem;
  padding-left: 0.18rem;
  margin-top: 0.38rem;
  margin-bottom: 0.18rem;
}
</style>
