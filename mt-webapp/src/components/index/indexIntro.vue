<template>
  <div class="intro">
    <div class="tit">猜你喜欢</div>
    <IntroItem :items="data"></IntroItem>
    <div class="more">查看全部团购<span>></span></div>
  </div>
</template>

<script>
  import IntroItem from './indexIntroItem'
  export default {
    name: "indexIntro",
    components:{
      IntroItem
    },
    props:{
      data:{}
    }
  }
</script>

<style lang="scss" scoped>
  .intro{
    padding-left: .1rem;
    background: white;
    border-top: 1px solid #EBE9E4;
    border-bottom: 1px solid #EBE9E4;
    .tit{
      padding: .12rem 0 .08rem;
      font-size: .17rem;
      color: #333333;
      border-bottom: 1px solid #F1EFEB;
    }
    .more{
      padding-right: .1rem;
      font-size: .15rem;
      line-height: .4rem;
      color: #06C1AE;
      span{
        float: right;
        font-size: .2rem;
      }
    }
  }
</style>
