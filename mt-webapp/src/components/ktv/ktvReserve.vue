<template>
    <div class="reserve">
      <div class="header"><span class="reserve-icon">订</span>预订</div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/yuan/img/ktv/reverse-item1.png" alt=""/>
        </div>
        <div class="info">
          <div class="tit">一键预订，K歌特快通道</div>
          <div class="price"><span>100</span>起</div>
          <span class="icon"><img src="../../assets/yuan/img/ktv/icon-go.jpg" alt=""/></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ktvReserve"
    }
</script>

<style lang="scss" scoped>
  .reserve{
    background: white;
    padding-left: .1rem;
    border-top: 1px solid #ECEAE5;
    border-bottom: 1px solid #ECEAE5;
    margin-top: .1rem;
    .header{
      font-size: .18rem;
      display: flex;
      align-items: center;
      height: .45rem;
      border-bottom: 1px solid #ECE9E4;
      .reserve-icon{
        display: inline-block;
        background: #f5716e;
        color: #fff;
        font-size: .12rem;
        padding: .03rem;
        border-radius: .02rem;
        line-height: 1;
        margin-right: .1rem;
      }
    }
    .item{
      display: flex;
      padding: .1rem 0;
      .item-img{
        width: .9rem;
        height: .82rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          height: 100%;
        }
      }
      .info{
        flex: 1;
        margin-left: .1rem;
        position: relative;
        .tit{
          color: #666666;
        }
        .price{
          font-size: .13rem;
          margin-top: .45rem;
          span{
            font-size: .19rem;
            color: #17C5B4;
          }
        }
        .icon{
          position: absolute;
          right: .05rem;
          top: calc(50% - .09rem);
          img{
            width: .15rem;
            height: .18rem;
          }
        }
      }
    }
  }
</style>
