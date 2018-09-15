<template>
    <div class="banner">
      <div class="banner-img">
        <img src="../../assets/yuan/img/ktv/banner.png" alt=""/>
      </div>
      <div class="info">
        <div class="name">音悦汇量贩KTV（军人服务社店）</div>
        <div class="star">
          <!--<img src="../../assets/yuan/img/ktv/item-score.jpg" alt=""/>-->
          <em>★</em>
          <em>★</em>
          <em>★</em>
          <em>★</em>
          <em>★</em>
          <span class="score">5.0</span>
        </div>
        <div class="sort">KTV</div>
        <div class="album1">
          <img src="../../assets/yuan/img/ktv/banner.png" alt=""/>
          <span class="img-count">50</span>
        </div>
        <div class="album2"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ktvBanner"
    }
</script>

<style lang="scss" scoped>
  .banner{
    position: relative;
    margin-bottom: .2rem;
    .banner-img{
      height: 1.6rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
      }
    }
    .info{
      bottom: .35rem;
      background-color: rgba(0,0,0,.6);
      width: 100%;
      padding: .1rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
      color: white;
      position: absolute;
      bottom: -.2rem;
      z-index: 1;
      .name{
        font-size: .16rem;
        line-height: .16rem;
      }
      .star{
        color: #f90;
        em{
          font-size: .2rem;
          font-style: normal;
        }
        .score{
          font-size: .14rem;
        }
      }
      .sort{
        font-size: .14rem;
      }
      .album1{
        width: .9rem;
        height: .82rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 1px solid white;
        position: absolute;
        right: .14rem;
        top: .01rem;
        z-index: 1;
        img{
          height: 100%;
        }
        .img-count{
          display: block;
          width: .35rem;
          height: .24rem;
          color: white;
          font-size: .15rem;
          line-height: .24rem;
          text-align: center;
          position: absolute;
          left: .1rem;
          bottom: .03rem;
          z-index: 2;
          border: .1rem;
          border-radius: .5rem;
          background: rgba(0,0,0,.6);
        }
      }
      .album2{
        width: .9rem;
        height: .82rem;
        background: black;
        border: 1px solid white;
        position: absolute;
        right: .11rem;
        top: -.02rem;
      }
    }
  }
</style>
