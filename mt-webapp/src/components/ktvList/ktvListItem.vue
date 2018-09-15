<template>
  <div class="list">
    <div v-for="item in items" class="item">
      <a :href="item.url"></a>
      <div class="item-top">
        <div class="item-img">
          <img :src="item.imgSrc" alt=""/>
        </div>
        <div class="item-main">
          <div class="item-name">{{item.name}}</div>
          <div class="item-score">
            <img src="../../assets/yuan/img/ktvList/item-score.jpg" alt=""/>
          </div>
          <div class="item-price">
            <span class="price"><b>{{item.price}}</b>元起</span>
            <span class="position">
              <span class="pos-name">{{item.posName}}</span>
              <span class="pos-distance">{{item.posDistance}}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="item-bottom">
        <span>{{item.tip1}}</span>
        <span>{{item.tip2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ktvListItem",
        props:{
          items:{}
        }
    }
</script>

<style lang="scss" scoped>
  .list{
    margin-top: .1rem;
    .item{
      background: white;
      border-top: 1px solid #E3E0D8;
      border-bottom: 1px solid #EAE7E0;
      margin-bottom: .1rem;
      position: relative;
      a{
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .item-top{
        display: flex;
        padding: .14rem .1rem .05rem;
        border-bottom: 1px solid #F1F0EC;
        .item-img{
          width: .65rem;
          height: .65rem;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            height: 100%;
          }
        }
        .item-main{
          flex: 1;
          margin-left: .1rem;
          .item-name{
            font-size: .16rem;
            color: #333333;
          }
          .item-score{
            margin-top: .08rem;
            img{
              width: 1.2rem;
              height: .16rem;
            }
          }
          .item-price{
            font-size: .13rem;
            color: #666666;
            margin-top: .05rem;
            position: relative;
            .price{
              font-size: .13rem;
              color: #06C1AE;
              b{
                font-size: .18rem;
                font-weight: normal;
              }
            }
            .position{
              position: absolute;
              right: 0;
              .pos-distance{
                margin-left: .05rem;
              }
            }
          }
        }
      }
      .item-bottom{
        padding: .1rem 0;
        span{
          display: block;
          margin-left: .85rem;
          font-size: .13rem;
          font-weight: lighter;
        }
        span:nth-child(1):before{
          content: "订";
          display: inline-block;
          background: #f5716e;
          color: #fff;
          font-size: .12rem;
          padding: .02rem;
          border-radius: .02rem;
          line-height: 1;
          margin-right: .1rem;
        }
        span:nth-child(2):before{
          content: "团";
          display: inline-block;
          background: #06C1AE;
          color: #fff;
          font-size: .12rem;
          padding: .02rem;
          border-radius: .02rem;
          line-height: 1;
          margin-right: .1rem;
          margin-top: .1rem;
        }
      }
    }
  }


</style>
