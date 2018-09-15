<template>

    <div class="pro0">
    <ul class="pro">
      <li class="pro1">
        <div class="aa">
        <img class="chu" src="../../assets/imagewu/xjt1.png" alt="">
        <p class="lan">全部</p>
        </div>
        <span>13378</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>甜点饮品</p>
        </div>
        <span>2429</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>生日蛋糕</p>
        </div>
        <span>1474</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>火锅</p>
        </div>
        <span>2977</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>自助餐</p>
        </div>
        <span>373</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>小吃快餐</p>
        </div>
        <span>5173</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>日韩料理</p>
        </div>
        <span>363</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>西餐</p>
        </div>
        <span>495</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>聚餐宴请</p>
        </div>
        <span>1047</span>
      </li>
      <li>
        <div class="aa">
          <img src="../../assets/imagewu/xjt1.png" alt="">
          <p>烧烤烤肉</p>
        </div>
        <span>629</span>
      </li>
      <li>
        <div class="aa">
          <img src="../../assets/imagewu/xjt1.png" alt="">
          <p>川湘菜</p>
        </div>
        <span>1299</span>
      </li>
      <li>
        <div class="aa">
          <img src="../../assets/imagewu/xjt1.png" alt="">
          <p>江浙菜</p>
        </div>
        <span>87</span>
      </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>香锅烤肉</p>
      </div>
      <span>588</span>
    </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>粤菜</p>
      </div>
      <span>588</span>
    </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>西北菜</p>
      </div>
      <span>899</span>
    </li>
      <li>
        <div class="aa">
        <img src="../../assets/imagewu/xjt1.png" alt="">
        <p>咖啡酒吧</p>
      </div>
      <span>617</span>
    </li>

    </ul>
    </div>

</template>

<script>
    export default {
        name: "Meishi_Three_One_One"
    }
</script>
Jd-cart-shop
<style lang="scss" scoped>
  .pro0{
    /*opacity: 1;*/
    /*display: none;*/
    background: #fff;
    position: absolute;
    z-index: 9999;
    top:40px;
    left: 0px;
    width:100%;
    height:3.74rem;
    overflow-y: scroll;
    .pro{
      width:100%;
      height:3.74rem;
      overflow-y: scroll;
      .pro1{
        width:100%;
        height:0.35rem;
        background: #f2f2f2;
        display: flex;

        .chu{
          width:0.12rem;
          height:0.08rem;
          /*display: block;*/
          opacity: 1;
        }

        .lan{
          font-size: 0.11rem;
          color:#35cbbc;
        }
        span{
          font-size: 0.11rem;
          color:#35cbbc;
          display: block;
        }
      }
      li{
        width:100%;
        height:0.35rem;
        background: #fff;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #faf9f7;
        justify-content: space-between;
        /*display: inline;*/
        .aa{
        display: flex;
        align-items: center;
        img{
          width:0.12rem;
          margin-left: 0.1rem;
          margin-right: 0.09rem;
          height:0.08rem;
          opacity: 0;
          /*display: none;*/
        }
        p{
          font-size: 0.11rem;
          color:#333333;
        }

      }
      }
      span{
        font-size: 0.11rem;
        margin-right: 0.08rem;
        color:#333333;
        display: block;
      }
    }
  }
</style>
