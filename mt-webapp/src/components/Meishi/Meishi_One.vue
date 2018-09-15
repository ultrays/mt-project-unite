<template>
  <div>
    <img @click="index" class="im1" src="../../assets/imagewu/zjt.png" alt="">
    <a href="javascript:;">
      <img src="../../assets/imagewu/ss.png" alt="">
      <span>输入商家名、品类或商圈</span>
    </a>
    <img src="../../assets/imagewu/wd.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "Meishi_One",
      methods:{
        index(){
          this.$router.push('/')
        }

      }
    }
</script>

<style lang="scss" scoped>
 div{
   width:100%;
   height:0.45rem;
 background: #fff;
   z-index: 9999999;
   display: flex;
   position: fixed;
   align-items: center;
   justify-content: space-around;
   .im1{
     width:0.11rem;
     height:0.18rem;
   }
   a{
     height:0.31rem;
     align-items: center;
     background: #ebeced;
     width:2.71rem;
     border-radius: 15px;
     display: flex;
      justify-content: center;
     img{
       width:0.16rem;
       height:0.18rem;
       margin-right: 0.04rem;
     }
     span{

       color:#787878;
       font-size:0.14rem;
       display: block;
     }
   }
   img{
     width:0.20rem;
     height:0.22rem;
   }
 }
</style>
