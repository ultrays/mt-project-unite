<template>
    <div :id=dingw class="a">
      <a  @click="showToggle"   href="javascript:;">
        <p :class=yangs >全部类目</p>
        <img  :src=img1 alt="">
      </a>
      <a  @click="showToggle1" href="javascript:;">
        <p :class=yangs1 >附近商家</p>
        <img :src=img2 alt="">
      </a>
      <a href="javascript:;" >
        <p>智能排序</p>
        <img src="../../assets/imagewu/xjt.png" alt="">
      </a>
      <a href="javascript:;">
        <p>筛选</p>
        <img src="../../assets/imagewu/xjt.png" alt="">
      </a>

      <Meishi_Three_One_One class="w" v-show="isShow"></Meishi_Three_One_One>
      <Meishi_Three_One_Two  v-show="isShow1"></Meishi_Three_One_Two>
      <span :class=zhezc>
      </span>
    </div>

</template>

<script>
    import Meishi_Three_One_One from "./Meishi_Three_One_One";
    import Meishi_Three_One_Two from "./Meishi_Three_One_Two";
    export default {
      name: "Meishi_Three_One",
      components: {Meishi_Three_One_Two, Meishi_Three_One_One},
      data() {
        return {
          isShow: false,
          isShow1: false,
          yangs: "aw",
          yangs1: "aw",
          dingw: "ss",
          // abc:"zz",
          zhezc: "zz",
          Fixed: false,
          img1: require('../../assets/imagewu/xjt.png'),
          img2: require('../../assets/imagewu/xjt.png')
        }
      },
      methods: {
        showToggle: function () {
          this.isShow = !this.isShow
          if (this.yangs == "aw") {
            this.dingw = "sx"
            this.yangs = "ae"
            this.zhezc = "zx"
            this.img1 = require('../../assets/imagewu/sjt.png')
            // this.isShow1 = !this.isShow1
            this.yangs1 = "aw"
            // this.zhezc = "zz"
            this.img2 = require('../../assets/imagewu/xjt.png')
          } else {
            this.yangs = "aw"
            this.dingw = "ss"
            this.zhezc = "zz"
            this.img1 = require('../../assets/imagewu/xjt.png')
          }

        },
        showToggle1: function () {
          this.isShow1 = !this.isShow1
          if (this.yangs1 == "aw") {
            this.dingw = "sx"
            this.yangs1 = "ae"
            this.zhezc = "zx"
            this.img2 = require('../../assets/imagewu/sjt.png')
            this.yangs = "aw"
            // this.zhezc = "zz"
            this.img1 = require('../../assets/imagewu/xjt.png')
          } else {
            this.yangs1 = "aw"
            this.dingw = "ss"
            this.zhezc = "zz"
            this.img2 = require('../../assets/imagewu/xjt.png')
          }

        },
        //   Scroll(){
        //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //     if(scrollTop>40) {
        //       this.Fixed = true
        //     } else {
        //       this.Fixed = false
        //     }
        //   }
        //
        //
        //
        // },
        // mounted () {
        //   window.addEventListener('scroll', this.Scroll)
        // },
        // destroyed () {
        //   window.removeEventListener('scroll', this.Scroll)
        // },

      },
      mounted(){
        window.onscroll = function(){
          var posY = document.documentElement.scrollTop || document.body.scrollTop;
          if(posY > 300){
            $(".a").css({"position":"fixed","top":"40px"})

          }	 else {
            $(".a").css({"position":"relative","top":"0"});

        }
          let a= 1;
          $(".a a").click(function(){
            if(a==1){
              $(".a").css({"position":"fixed","top":"44px"})
              $(".w").slideDown();
              a=2
            }else{
              if(posY > 300){
                $(".a").css({"position":"fixed","top":"44px"})
                a=1
                $(".w").slideUp();
              }else{
                $(".a").css({"position":"relative","top":"0"})
                a=1
                $(".w").slideUp();

              }

            }

          })

        }

      }
    }
</script>

<style lang="scss" scoped>
  /*.isFixed{*/
    /*position: fixed;*/
    /*z-index: 99999999;*/
    /*top:0.5rem;*/
    /*width:100%;*/
  /*}*/
 #sx{
    position: fixed;
    top:44px;
    width:100%;
    height:0.45rem;
    border-bottom: 1px solid #f3f3f3;
    background: #fff;
    display: flex;
    a{
      width:25%;
      display: flex;
      align-items: center;
      justify-content: center;
      .aw{

        font-size: 0.14rem;
        color:#898989;
      }
      .ae{
        color:#2ec9b9;
        font-size: 0.14rem;
      }
      p{
        font-size: 0.14rem;
        color:#898989;
        font-weight: 600;
        margin-right: 0.09rem;
      }
      img{
        width:0.1rem;
        height:0.09rem;
      }
    }
    .zx{
      position: absolute;
      left: 0px;
      top:45px;
      width:100%;
      height:10.67rem;
      background: #4c4c4c;
      opacity: 0.6;
      display: block;
    }

  }


  #ss{
    background: #fff;
    position: relative;
    /*position: fixed;*/
    /*top:46px;*/
    width:100%;
    height:0.45rem;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    a{
      width:25%;
      display: flex;
      align-items: center;
      justify-content: center;
      .aw{

        font-size: 0.14rem;
        color:#898989;
      }
      .ae{
        color:#2ec9b9;
        font-size: 0.14rem;
      }
      p{
        font-size: 0.14rem;
         color:#898989;
        font-weight: 600;
        margin-right: 0.09rem;
      }
      img{
        width:0.1rem;
        height:0.09rem;
      }
    }
    .zz{
      position: absolute;
      left: 0px;
      top:45px;
      width:100%;
      height:6.67rem;
      /*background: red;*/
      display: block;
    }

  }
</style>
