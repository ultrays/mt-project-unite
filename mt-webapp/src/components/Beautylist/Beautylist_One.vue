<template>
<div class="header">
  <img @click="index1" src="../../assets/imagewu/zjt1.png" alt="">
  <a href="javascript:;">
    <img src="../../assets/imagewu/ss1.png" alt="">
    <p>输入商家/品类/商圈</p>
  </a>
  <div class="my">
    <img src="../../assets/imagewu/wd1.png" alt="">
    <p>我的</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "Beautylist_One",
      methods:{
        index1(){
          this.$router.go(-1)
        }

      }
    }
</script>

<style lang="scss" scoped>
  .header{
    width:100%;
    height:0.5rem;
    background: #06c1ae;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
      width:0.18rem;
      height:0.26rem;
    }
    a{
     display: flex;
      width:2.76rem;
      height:0.33rem;
      background: #05a494;
      border-radius: 2px;
      align-items: center;
      /*justify-content: center;*/
      img{
        width:0.16rem;
        height:0.14rem;
        margin-left: 0.09rem;
        margin-right: 0.05rem;
      }
      p{
        font-size: 0.14rem;
        color:#5fd6c9;
      }
    }
    .my{
      img{
        width:0.22rem;
        height:0.20rem;
        margin: 0 auto;
      }
      p{
        margin-top: 0.01rem;
        font-size: 0.1rem;
        color:#fff;
      }
    }
  }
</style>
