<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <SwiperNav1 :items="data"></SwiperNav1>
        </div>
        <div class="swiper-slide">
          <SwiperNav2 :items="data"></SwiperNav2>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
  import SwiperNav1 from "./indexSwiperNav1"
  import SwiperNav2 from "./indexSwiperNav2"
  export default {
    name: "indexSwipper",
    components:{
      SwiperNav1,
      SwiperNav2
    },
    props:{
      data:{}
    },
    mounted(){
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container{
    background: white;
    border-bottom: 1px solid #EAE7E1;
    margin-bottom: .1rem;
  }
</style>
<style>
  /*引入swiper样式一定要放在scoped之外，否则会出错*/
  @import "swiper/dist/css/swiper.css";
  /*改变分页器样式*/
  .swiper-pagination{
  }
  .swiper-pagination-bullet{
    background: #F0EFED;
  }
  .swiper-pagination-bullet-active{
    background: #06C1AE;
  }
</style>
