<template>
<div class="three">
  <div class="tg1">
    <div class="tg11">
      <p>团购详情</p>
      <img src="../../assets/imagewu/tg1.png" alt="">
    </div>
  </div>
  <div class="tg2">
    <div class="tg22">
      <span>单人设计师精剪造型</span>
      <img src="../../assets/imagewu/jf.png" alt="">
      <div class="tg222">
        <p>洗剪吹</p>
        <div>
          <p class="p">1次</p>
          <p>80元</p>
        </div>
      </div>
      <h6>资深设计师</h6>
    </div>
  </div>
  <div class="tg3">
    <div class="tg31">
      <div class="tg311"></div>
      <div class="tg312">
        <p>总价</p>
        <span>80元</span>
      </div>
    </div>
    <div class="tg32">
      <div class="tg321"></div>
      <div class="tg322">
        <p>团购价</p>
        <span>59元</span>
      </div>
    </div>
  </div>
  <div class="tg4">
    <p>
      更多图文详情 （建议Wi-Fi环境下打开,土豪请随意）</p>
    <img src="../../assets/imagewu/yjt1.png" alt="">
  </div>
</div>
</template>

<script>
    export default {
        name: "Beautydetalis_Three"
    }
</script>

<style lang="scss" scoped>
.three{
  height:2.76rem;
  background: #fff;
  width:100%;
  .tg1{
    width:100%;
    height:0.48rem;
    .tg11{
      /*width:100%;*/
      height:0.48rem;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      margin-left: 0.18rem;
      p{
        font-size: 0.14rem;
        color:#414141;
        margin-right: 0.06rem;
      }
      img{
        width:0.15rem;
        height:0.15rem;
      }
    }
  }
  .tg2{
    width:100%;
    height:1.04rem;
    .tg22{
      height:0.83rem;
      border-bottom: 1px solid #eeeeee;
      margin-left: 0.18rem;
      margin-right: 0.18rem;
      padding-top: 0.21rem;
      position: relative;
      span{
        font-size: 0.14rem;
        color:#505050;
        height: 0.19rem;
        border-left:2px solid #ff6430;
        display: block;
        padding-left: 0.1rem;
      }
      img{
        width:0.2rem;
        height:0.2rem;
        position: absolute;
        left:0px;
        top: 60px;
      }
      .tg222{
        margin-top: 0.18rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.14rem;
        color: #282828;
        padding-left: 0.32rem;
        div{
          display: flex;
          .p{
            margin-right: 0.44rem;
          }
        }
      }
      h6{
        font-size: 0.13rem;
        color:#8f8f8f;
        padding-left: 0.32rem;
        font-weight: 100;
      }

    }
  }
  .tg3{
    height:0.71rem;
    width:100%;
    border-bottom: 1px solid #eeeeee;
    .tg31{
      margin-top: 0.1rem;
        display: flex;
      align-items: center;
      .tg311{

        width: 70%;
      }
      .tg312{
        width:30%;
        display: flex;
        color: #333333;
        font-size: 0.13rem;
        span{
          margin-left: 0.43rem;
          text-decoration: line-through;
        }
      }
    }
    .tg32{
      margin-top: 0.1rem;
      display: flex;
      align-items: center;
      .tg321{

        width: 65%;
      }
      .tg322{
        width:35%;
        display: flex;
        color: #333333;
        font-size: 0.14rem;
        span{
          color:#00baa3;
          font-size: 0.18rem;
          margin-left: 0.36rem;
        }
      }
    }
  }
  .tg4{
    height:0.43rem;
    width:100%;
    display: flex;
    align-items: center;
    padding-left: 0.18rem;
    box-sizing: border-box;
    img{
      width:0.09rem;
      height:0.14rem;
    }
    p{
      font-size: 0.14rem;
      color:#00bba7;
    }
  }
}
</style>
