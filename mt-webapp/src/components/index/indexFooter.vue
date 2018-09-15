<template>
    <footer>
      <div class="top">
        <div class="login">
          <a href="#">登录</a>
          <a href="#">注册</a>
        </div>
        <div class="city">
          <span>城市：</span>
          <a href="#">西安</a>
        </div>
      </div>
      <div class="nav">
        <a href="#/index">首页</a>
        <a href="#">我的</a>
        <a href="#">美团下载</a>
        <a href="#">电脑版</a>
        <a href="#">帮助</a>
      </div>
      <div class="link">
        友情链接：
        <a href="#">猫眼电影</a>
        <a href="#">大众点评</a>
        <a href="#">美团旅行</a>
        <a href="#">榛果民宿</a>
        <a href="#">大众点评下载</a>
        <a href="#">美团收银官网</a>
        <a href="#">美团点评餐饮学院</a>
        <a href="#">快驴进货商家合作</a>
      </div>
      <div class="bottom">
        <span>©2018 美团网 京ICP证070791号</span>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "indexFooter"
    }
</script>

<style lang="scss" scoped>
  footer{
    padding: .15rem .1rem .2rem;
    .top{
      display: flex;
      justify-content: space-between;
      .login{
        display: flex;
        a{
          display: block;
          width: .6rem;
          height: .3rem;
          font-size: .14rem;
          line-height: .3rem;
          text-align: center;
          color: #06C1AE;
          border: 1px solid #06C1AE;
          border-radius: .03rem;
          margin-right: .1rem;
          box-sizing: border-box;
        }
      }
      .city{
        display: flex;
        align-items: center;
        span{
          font-size: .14rem;
          color: #333333;
        }
        a{
          display: block;
          width: .9rem;
          height: .3rem;
          font-size: .14rem;
          line-height: .3rem;
          text-align: center;
          color: #06C1AE;
          border: 1px solid #06C1AE;
          border-radius: .03rem;
          box-sizing: border-box;
        }
      }
    }
    .nav{
      margin-top: .28rem;
      a{
        font-size: .12rem;
        color: #06C1AE;
        padding: 0 .19rem;
        border-right: 1px solid #666;
      }
      a:last-child{
        border: none;
      }
    }
    .link{
      font-size: .12rem;
      padding: .2rem .4rem 0;
      a{
        color: #06C1AE;
        padding-left: .25rem;
        display: inline-block;
        padding-bottom: .05rem;
      }
      a:first-child{
        padding-left: 0;
      }
    }
    .bottom{
      text-align: center;
      border-bottom: 1px solid #BCBBBB;
      span{
        padding: 0 .2rem;
        font-size: .11rem;
        color: #999999;
        background: #F0EFED;
        position: relative;
        top: .08rem;
      }
    }
  }
</style>
