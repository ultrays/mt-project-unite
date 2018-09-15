<template>
     <div>
        <div class="head">
            <img src="../assets/Geng/zuogreen.jpg" @click="gogo()">
             <span>周边游</span>
             <img src="../assets/Geng/daohang.jpg">
        </div>
       <div class="four" :class="Fixed===true? 'isFixed' :''">
           <ul>
             <li>
               <a href="#">
                  <span>周边游</span>
                  <img src="../assets/Geng/jiantou.jpg">
               </a>
             </li>
             <li>
               <a href="#">
                 <span>位置区域</span>
                 <img src="../assets/Geng/jiantou.jpg">
               </a>
             </li>
             <li>
               <a href="#">
                 <span>智能排序</span>
                 <img src="../assets/Geng/jiantou.jpg">
               </a>
             </li>
             <li>
               <a href="#">
                 <span>筛选</span>
                 <img src="../assets/Geng/jiantou.jpg">
               </a>
             </li>
           </ul>
       </div>
       <Side_list_One></Side_list_One>
     </div>
</template>

<script>
    import Side_list_One from "../components/Side_list/Side_list_One";
    export default {
        name: "Side_list",
        components: {Side_list_One},
        data(){
            return{
              Fixed:false
          }
        },
        methods:{
          gogo(){
              this.$router.push('/')
          },
          Scroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>40) {
              this.Fixed = true
            } else {
              this.Fixed = false
            }
          }
        },
        mounted () {
        window.addEventListener('scroll', this.Scroll)
      },
      destroyed () {
        window.removeEventListener('scroll', this.Scroll)
      },
    }
</script>

<style lang="scss" scoped>
.head{
  width:100%;
  height:0.4rem;
  background:#06c1ae;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img:nth-child(1){
    width:0.15rem;
    height:0.2rem;
    margin-left:0.11rem;
    margin-top:0;
  }
  span{
    font-size:0.14rem;
    color:white;
    text-align: center;
    display: block;
  }
  img:nth-child(3){
    width:0.2rem;
    height:0.28rem;
    margin-right:0.11rem;
    margin-top:0.08rem;
  }
}
.isFixed {
  position:fixed;
  top:0;
  z-index:999;
  width:100%;
}
  .four{
    width:100%;
    height:0.36rem;
    background:white;
    border-bottom:1px solid #c7c7c7;

    ul{
      display: flex;
      justify-content: space-around;
      li{
        display:flex;
        a{
          display: flex;
          span{
            margin-top:0.12rem;
            font-size:0.12rem;
            color:#9c9c9c;
          }
          img{
            width:0.07rem;
            height:0.05rem;
            margin-left:0.05rem;
            margin-top:0.17rem;
          }
        }
      }
    }
  }
</style>
