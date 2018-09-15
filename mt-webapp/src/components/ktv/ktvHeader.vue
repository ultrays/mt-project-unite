<template>
  <header>
    <div class="h_left">
      <a href="#/ktvlist">
        <img src="../../assets/yuan/img/ktvList/header-back.jpg" alt=""/>
      </a>
    </div>
    <div class="h_center">
      <span>商家详情</span>
    </div>
    <div class="h_right">
      <a href="#">
        <img src="../../assets/yuan/img/ktv/header-menu.jpg" alt=""/>
        <span>导航</span>
      </a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "ktvHeader"
    }
</script>

<style lang="scss" scoped>
  header{
    height: .51rem;
    padding: .1rem ;
    background: #06C1AE;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #11AB9B;
    .h_left{
      display: flex;
      align-items: center;
      img{
        width: .23rem;
      }
    }
    .h_center{
      margin-left: .35rem;
      span{
        font-size: .18rem;
        color: white;
      }
    }
    .h_right{
      display: flex;
      a{
        font-size: .1rem;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: .3rem;
        img{
          width: .3rem;
        }
      }

    }
  }
</style>
