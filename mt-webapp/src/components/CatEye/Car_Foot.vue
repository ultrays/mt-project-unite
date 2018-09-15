<template>
    <div class="goodss">
       <div class="foot">
         <a href="#">
            <img src="../../assets/Geng/dian.jpg">
            <span>电影</span>
         </a>
         <a href="#">
           <img src="../../assets/Geng/yin.jpg">
           <span>影视</span>
         </a>
         <a href="#">
           <img src="../../assets/Geng/wo.jpg">
           <span>我的</span>
         </a>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Car_Foot"
    }
</script>

<style lang="scss" scoped>
.foot{
  width:100%;
  position: fixed;
  bottom:0;
  height:0.47rem;
  background:white;
  border-top:1px solid #dcdcdc;
  display: flex;
  justify-content: space-around;
  a{
    display: flex;
    width:0.24rem;
    height:0.48rem;
    flex-direction: column;
    img{
      width:0.23rem;
      height:0.23rem;
      margin-top:0.04rem;
    }
    span{
      font-size:0.12rem;
      color:#a7a7a7;
      margin-top:0.06rem;
    }
  }
}
</style>
