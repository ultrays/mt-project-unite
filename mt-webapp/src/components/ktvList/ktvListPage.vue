<template>
    <div class="page">
      <a href="#">上一页</a>
      <span>1</span>
      <a href="#">下一页</a>
    </div>
</template>

<script>
    export default {
        name: "ktvListPage"
    }
</script>

<style lang="scss" scoped>
  .page{
    display: flex;
    align-items: center;
    background: white;
    padding: .08rem .1rem;
    border-top: 1px solid #E2DED6;
    border-bottom: 1px solid #E2DED6;
    a{
      display: block;
      width: .72rem;
      height: .3rem;
      font-size: .13rem;
      line-height: .3rem;
      text-align: center;
      color: #06C1AE;
      border: 1px solid #06C1AE;
      border-radius: .03rem;
    }
    a:first-child{
      color: #999999;
      background: #DCDCDC;
      border-color: #DCDCDC;
    }
    span{
      font-size: .14rem;
      color: #6B6B6B;
      margin: 0 .1rem;
    }
  }
</style>
