<template>
  <div class="list">
    <div v-for="item in items" class="item" :key="item.id" @click="go">
      <div class="item-img">
        <img :src="item.imgSrc" alt=""/>
      </div>
      <div class= "item-main" >
        <div class="item-name">{{item.name}}</div>
        <div class="item-info">{{item.info}}</div>
        <div class="item-price">
          <span class="price-now"><b>{{item.priceNow}}</b>元</span>
          <span class="price-market">门市价:<b>{{item.priceMarket}}</b>元</span>
          <span class="sale-count">已售<b>{{item.saleCount}}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "indexIntroItem",
      props:["items"],
      methods:{
        go(){
          this.$router.push("/delicious")
        }
      }
    }
</script>

<style lang="scss" scoped>
  .item{
    display: flex;
    padding: .1rem .1rem .1rem 0;
    border-bottom: 1px solid #EFEDE9;
    .item-img{
      width: .9rem;
      height: .82rem;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .item-main{
      flex: 1;
      margin-left: .1rem;
      .item-name{
        font-size: .15rem;
        color: #333333;
        margin-top: .03rem;
      }
      .item-info{
        font-size: .12rem;
        color: #666666;
        margin-top: .04rem;
      }
      .item-price{
        font-size: .12rem;
        color: #666666;
        margin-top: .21rem;
        position: relative;
        .price-now{
          font-size: .13rem;
          color: #06C1AE;
          b{
            font-size: .18rem;
            font-weight: normal;
          }
        }
        .price-market{
          b{
            font-weight: normal;
          }
        }
        .sale-count{
          position: absolute;
          right: 0;
          b{
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
