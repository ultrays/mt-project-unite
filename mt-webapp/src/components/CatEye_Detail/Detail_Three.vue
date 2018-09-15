<template>
    <div>
       <div class="head" :class="Fixe===true? 'isFixed':''">
         <ul>
           <li>
             <a href="#">
               <span>全部</span>
               <img src="../../assets/Geng/jiantou.jpg">
             </a>
           </li>
           <li>
             <a href="#">
               <span>品牌</span>
               <img src="../../assets/Geng/jiantou.jpg">
             </a>
           </li>
           <li>
             <a href="#">
               <span>特色</span>
               <img src="../../assets/Geng/jiantou.jpg">
             </a>
           </li>
         </ul>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Detail_Three",
      data(){
          return{
            Fixe:false
          }
      },
      methods:{
        Scroll(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop>50) {
            this.Fixe = true
          } else {
            this.Fixe = false
          }
        },
        mounted(){
          window.addEventListener('scroll', this.Scroll)
        },
        destroyed () {
          window.removeEventListener('scroll', this.Scroll)
        },
      }
    }
</script>

<style lang="scss" scoped>
.head{
  width:100%;
  height:0.34rem;
  background:white;
  ul{
    display: flex;
    li{
      display: flex;
      a{
        width:1.24rem;
        height:0.34rem;
        display: flex;
        span{
          font-size:0.12rem;
          color:#777777;
          margin-left:0.52rem;
          margin-top:0.11rem;
        }
        img{
          width:0.07rem;
          height:0.04rem;
          margin-top:0.17rem;
          margin-left:0.03rem;
        }
      }
    }
  }
}
</style>
