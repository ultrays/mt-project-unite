<template>
  <header>
    <div class="h_left">
      <a href="#/">
        <img src="../../assets/yuan/img/ktvList/header-back.jpg" alt=""/>
      </a>
    </div>
    <div class="h_center">
      <span>分类</span>
    </div>
    <div class="h_right">
      <a href="#">
        <img src="../../assets/yuan/img/ktvList/header-user.jpg" alt=""/>
        <span>我的</span>
      </a>
      <a href="#">
        <img src="../../assets/yuan/img/ktvList/header-search.jpg" alt=""/>
        <span>搜索</span>
      </a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "ktvListHeader"
    }
</script>

<style lang="scss" scoped>
  header{
    height: .51rem;
    padding: .1rem ;
    padding-right: .13rem;
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
      span{
        font-size: .16rem;
        color: white;
        margin-right: .03rem;
      }
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
          width: .23rem;
        }
      }

    }
  }
</style>
