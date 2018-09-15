<template>
<div class="mad">
  <div class="new1">
    <div class="new11">
      <p>适用商户(4)</p>
      <img src="../../assets/imagewu/yjt.png" alt="">
    </div>
  </div>
  <div class="new2">
    <div class="new21">
      <p>发记vivi style(东关店)</p>
      <img src="../../assets/imagewu/xx4.png" alt="">
    </div>
    <div class="new22">
      <img src="../../assets/imagewu/dh.png" alt="">
    </div>
  </div>
  <div class="new3">
    <img src="../../assets/imagewu/wz.png" alt="">
    <p>东关正街66号世贸大厦一层</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "Beautydetalis_Two"
    }
</script>

<style lang="scss" scoped>
.mad{
  background: #fff;
  height:1.87rem;
  margin-top:0.12rem;
  margin-bottom:0.12rem;
  .new1{
    width:100%;
    height:0.48rem;
    .new11{
      box-sizing: border-box;
      height:0.48rem;
      border-bottom: 1px solid #ececec;
      margin:0 0.18rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        font-size: 0.12rem;
        color:#333333;

      }
      img{
        width:0.09rem;
        height:0.14rem;
      }
    }
  }
  .new2{
    height:0.85rem;
    width:100%;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
    padding-left:0.18rem;
    display: flex;
    .new21{
      width:2.62rem;
      height:0.62rem;
      margin-top: 0.12rem;
      margin-bottom: 0.11rem;
      border-right: 1px solid #f0f0f0;
      p{
        /*margin-top: 0.13rem;*/
        margin-bottom:0.23rem;
        font-size: 0.15rem;
        color: #333333;
      }
      img{
        width:0.93rem;
        height:0.16rem;
      }
    }
    .new22{
      height:0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      img{
        width:0.21rem;
        height:0.25rem;

      }
    }
  }
  .new3{
    height:0.54rem;
    width:100%;
    border-bottom: 1px solid #ececec;
    padding-left:0.18rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    img{
      width:0.11rem;
      height:0.15rem;
    }
    p{
      font-size: 0.14rem;
      color: #333333;
      margin-left: 0.05rem;
    }
  }
}
</style>
