<template>
  <header>
    <div class="h_left">
      <span>西安</span>
      <img src="../../assets/yuan/img/index/header_city_bg.jpg" alt=""/>
    </div>
    <div class="h_center">
      <input type="text" placeholder="输入商家/品类/商圈">
    </div>
    <div class="h_right">
      <a href="#">
        <img src="../../assets/yuan/img/index/header_user_bg.jpg" alt=""/>
        <span>我的</span>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
      name: "indexHeader"
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
        width: .15rem;
      }
    }
    .h_center{
      input{
        width: 2.6rem;
        height: .32rem;
        background: #05A494 url("../../assets/yuan/img/index/header_search_bg.jpg") no-repeat .1rem center;
        background-size: .16rem;
        border: none;
        outline: none;
        font-size: .13rem;
        text-indent: .3rem;
        border-radius: .03rem;
        color: white;
      }
    }
    .h_right{
      a{
        font-size: .1rem;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: .25rem;
        }
      }

    }
  }
</style>
