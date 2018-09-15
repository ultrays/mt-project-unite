<template>
    <div>
      <div class="wdj">
        <p>问大家</p>
        <p>895个问题</p>
        <img src="../../assets/Zhang/uykh.jpg" alt="">
      </div>

      <div class="st">
        <p>问</p>
        <p>里面有水獭吗</p>
        <a href="">12个答案</a>
      </div>
      <div class="st">
        <p>问</p>
        <p>今天有木有要去的，做好攻略。我们...</p>
        <a href="">4个答案</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wdj",
      props:["wdj"]
    }
</script>

<style scoped>
 .wdj{
   width: 100%;
   display: flex;
 }
  .wdj :nth-child(1){
    font-size: 0.16rem;
    /*margin-right: 2.5rem;*/
    /*margin-top: 0.13rem;*/
    /*margin-bottom: 0.18rem;*/
    /*margin-left: 0.18rem;*/
    margin: 0.13rem 2.3rem 0.18rem 0.18rem;
  }
 .wdj :nth-child(2){
    font-size: 0.11rem;
   margin-right: 0.05rem;
   margin-top: 0.18rem;
 }
 .wdj :nth-child(3){
    width: 0.07rem;
    height: 0.1rem;
   margin-top: 0.2rem;

 }
  .st{
    width: 100%;
    display: flex;
  }
  .st :nth-child(1){
    font-size: 0.12rem;
    width: 0.18rem;
    height: 0.18rem;
    background: #ff6131;
    color: #fdfeeb;
    text-align: center;
    border-radius: 3px;
    margin-left: 0.15rem;margin-right: 0.1rem;
  }
  .st :nth-child(2){
    font-size: 0.13rem;
    width: 2.58rem;
    margin-bottom: 0.04rem;
  }
 .st :nth-child(3){
   font-size: 0.09rem;
   color: #73787a;
 }
</style>
