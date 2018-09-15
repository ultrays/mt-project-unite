<template>
    <div class="location">
      <div class="loc-top">
        <div class="icon-map">
          <img src="../../assets/yuan/img/ktv/loc-map.jpg" alt=""/>
        </div>
        <p class="address">雁塔区小寨十字西南角省军区军人服务社购物中心8层</p>
        <div class="icon-phone">
          <img src="../../assets/yuan/img/ktv/loc-phone.jpg" alt=""/>
        </div>
      </div>
      <div class="loc-bottom">
        <a href="#"><img src="../../assets/yuan/img/ktv/loc-collect.jpg" alt=""/>收藏</a>
        <a href="#"><img src="../../assets/yuan/img/ktv/loc-share.jpg" alt=""/>分享</a>
        <a href="#"><img src="../../assets/yuan/img/ktv/loc-error.jpg" alt=""/>报错</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ktvLocation"
    }
</script>

<style lang="scss" scoped>
  .location{
    background: white;
    padding-left: .1rem;
    font-size: .14rem;
    .loc-top{
      height: .47rem;
      display: flex;
      align-items: center;
      .icon-map{
        img{
          width: .2rem;
        }
      }
      .address{
        margin-left: .1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon-phone{
        padding: .05rem .15rem .05rem .2rem;
        border-left: 1px solid #F1F0EC;
        img{
          width: .2rem;
        }
      }
    }
    .loc-bottom{
      height: .43rem;
      border-top: 1px solid #EAE7E1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: .1rem;
      a{
        width: .95rem;
        height: .3rem;
        color: #06C1AE;
        border: 1px solid #06C1AE;
        border-radius: .03rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: .2rem;
        }
      }
      a:first-child{
        width: 1.45rem;
        color: #FF9F10;
        border-color: #FF9F10;
      }
    }
  }
</style>
