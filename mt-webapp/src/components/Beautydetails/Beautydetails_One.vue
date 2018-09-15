<template>
  <div>
    <div class="banner">
  <div class="swiper-container">
         <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../assets/imagewu/banner.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../../assets/imagewu/banner1.png" alt=""></div>
         </div>
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>


    </div>
</div>
    <div class="nav">
      <div class="nav1">
        <div class="nav11">
          <p>￥</p>
          <span>59</span>
          <h6>门市价￥80</h6>
        </div>
        <a href="javascript:;">立即抢购</a>
      </div>
      <div class="nav2">
        <div>
          <img src="../../assets/imagewu/tk.png" alt="">
          <span>支持随时退款</span>
        </div>
        <div>
          <img src="../../assets/imagewu/tk.png" alt="">
          <span>支持过期自动退</span>
        </div>
        <div class="tkk">
          <img src="../../assets/imagewu/tk1.png" alt="">
          <span class="span">已售1616</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.js'
    export default {
        name: "Beautydetails_One",
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',

        })
      }
    }
</script>

<style lang="scss" scoped>
  .banner{
  width:100%;
  height:2.28rem;
  .swiper-container {
    width:100%;
    height:2.28rem;
    img{
      width:3.75rem;
      height:2.28rem;
    }
  }
}
  .nav{
    width:100%;
    height:1.14rem;
    background: #fff;
    padding-left: 0.18rem;
    box-sizing: border-box;
    .nav1{
      height:0.57rem;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav11{
        display: flex;
        width:1.9rem;
        p{
          font-size: 0.12rem;
          color:#00b9a4;
          /*line-height: 0.7rem;*/
          padding-top: 0.15rem;
          box-sizing: border-box;
        }
        span{
          font-size: 0.28rem;
          color:#00b9a4;
          margin-left: 0.05rem;
          margin-right: 0.04rem;
          /*line-height: 0.5rem;*/
        }
        h6{
          font-weight: 100;
          font-size: 0.13rem;
          padding-top: 0.15rem;
          box-sizing: border-box;
          color:#8d8d8d;
          /*line-height: 0.7rem;*/
        }
      }
      a{
        display: block;
        width:0.88rem;
        height:0.4rem;
        background: #ff9900;
        color: #fff;
        font-size: 0.15rem;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 7px;
        margin-right: 0.12rem;
      }
    }
    .nav2{
      height:0.57rem;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      div{
        width:1.19rem;
        display: flex;

        img{
          width:0.18rem;
          height:0.19rem;
        }
        span{
          font-size: 0.13rem;
          color:#6dbe16;
          margin-left: 0.09rem;
        }
        .span{
          color:#626262;
        }
      }
      .tkk{
        padding-left: 0.1rem;
        box-sizing: border-box;
      }
    }
  }
</style>
<style>
  @import 'swiper/dist/css/swiper.css'



</style>
