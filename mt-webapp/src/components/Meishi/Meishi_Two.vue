<template>
<div class="pd">

  <img src="../../assets/imagewu/nav.png" alt="">
  <div class="sec">
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec1.png" alt="">
      <p>火锅</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec2.png" alt="">
      <p>甜点饮品</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec3.png" alt="">
      <p>自助餐</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec4.png" alt="">
      <p>小吃快餐</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec5.png" alt="">
      <p>西餐</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec6.png" alt="">
      <p>烧烤烤肉</p>
    </a>
    <a href="javascript:;">
      <img src="../../assets/imagewu/sec7.png" alt="">
      <p>香锅烤鱼</p>
    </a>
    <a href="javascrpt:;">
      <img src="../../assets/imagewu/sec8.png" alt="">
      <p>海鲜</p>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "Meishi_Two"
    }
</script>

<style lang="scss" scoped>
.pd{
  padding-top: 0.45rem;
  /*margin-top: 0.45rem;*/
  background: #fff;
  width:100%;
  height:2.89rem;
  img{

    /*width:3.75rem;*/
    display: block;
    width:100%;
    height:1.09rem;
  }
  .sec{
    border-top:1px solid #e6e3dd ;
    width:100%;
    height:1.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /*justify-content: center;*/
    text-align: center;

    a{
      width:25%;
      img{
        margin: 0 auto;
        display: block;
        width:0.46rem;
        height:0.45rem;
        margin-bottom: 0.07rem;
      }
      p{
        font-size: 0.13rem;
        color:#444444;
      }
    }
  }
}
</style>
