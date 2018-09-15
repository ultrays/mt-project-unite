<template>
  <div class="others">
    <div class="server">
      <div class="header">门店服务</div>
      <div class="info">
        <span>WIFI</span>
        <span>支持WIFI</span>
      </div>
    </div>
    <div class="group-ago">
      往期团购（57）
      <span class="icon"><img src="../../assets/yuan/img/ktv/icon-go.jpg" alt=""/></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ktvOthers"
    }
</script>

<style lang="scss" scoped>
  .others{
    .server{
      padding-left: .1rem;
      background: white;
      border-top: 1px solid #ECE9E4;
      border-bottom: 1px solid #ECE9E4;
      margin-bottom: .1rem;
      margin-top: .1rem;
      .header{
        height: .45rem;
        font-size: .19rem;
        line-height: .45rem;
        color: #999999;
        border-bottom: 1px solid #ECE9E4;
      }
      .info{
        height: .41rem;
        font-size: .14rem;
        line-height: .41rem;
        color: #666666;
        span{
          margin-right: .4rem;
        }
      }
    }
    .group-ago{
      height: .45rem;
      padding-left: .1rem;
      background: white;
      font-size: .17rem;
      line-height: .45rem;
      color: #999999;
      border-top: 1px solid #ECE9E4;
      border-bottom: 1px solid #ECE9E4;
      position: relative;
      .icon{
        position: absolute;
        right: .15rem;
        top: calc(50% - .09rem);
        img{
          width: .15rem;
          height: .18rem;
        }
      }
    }
  }

</style>
