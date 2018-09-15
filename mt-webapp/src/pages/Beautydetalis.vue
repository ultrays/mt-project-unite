<template>
<div>
  <header>
    <div class="header">
      <img @click="index2" src="../assets/imagewu/zjt2.png" alt="">
      <span>返回</span>
    </div>
    <p>团购详情</p>
    <img src="../assets/imagewu/fx.png" alt="">
  </header>
  <Beautydetails_One></Beautydetails_One>
  <Beautydetalis_Two></Beautydetalis_Two>
  <Beautydetalis_Three></Beautydetalis_Three>
  <Beautydetalis_Four :four1="temps8"></Beautydetalis_Four>
  <Beautydetails_Five :five1="temps9"></Beautydetails_Five>
  <Beautydetalis_Six  :six1="temps10"></Beautydetalis_Six>
  <Beautydetalis_Seven :seven1="temps11"></Beautydetalis_Seven>
  <footer>
    <ul>
      <li>首页</li>
      <li>订单</li>
      <li>美团下载</li>
      <li>电脑版</li>
      <li>帮助</li>
    </ul>
    <div>友情链接:
      <span>猫眼电影</span>
    </div>
    <img src="../assets/imagewu/fot.png" alt="">
  </footer>
</div>
</template>

<script>
    import Beautydetails_One from "../components/Beautydetails/Beautydetails_One";
    import Beautydetalis_Two from "../components/Beautydetails/Beautydetalis_Two";
    import Beautydetalis_Three from "../components/Beautydetails/Beautydetalis_Three";
    import Beautydetalis_Four from "../components/Beautydetails/Beautydetalis_Four";
    import Beautydetails_Five from "../components/Beautydetails/Beautydetails_Five";
    import Beautydetalis_Six from "../components/Beautydetails/Beautydetalis_Six";
    import Beautydetalis_Seven from "../components/Beautydetails/Beautydetalis_Seven";
    import {MeiShi} from "../apis/MeiShi"
    import {Delison} from "../apis/Delison"
    export default {
        name: "Beautydetalis",
      components: {
        Beautydetalis_Seven,
        Beautydetalis_Six,
        Beautydetails_Five, Beautydetalis_Four, Beautydetalis_Three, Beautydetalis_Two, Beautydetails_One},
      data(){
          return{
            temps8:[],
            temps9:[],
            temps10:[],
            temps11:[]
          }
      },
      methods:{
          index2(){
            this.$router.go(-1)
          },
          Cat2(){
            MeiShi.getCat((data)=>{
              this.temps8 = data[0].instructions;
              this.temps9 = data[0].evaluation;
              this.temps10 = data[0].recommended;
              this.temps11 = data[0].near;
              console.log(this.temps9)
            })
          },
      },
      created(){
        this.Cat2()
      }
    }
</script>

<style lang="scss" scoped>
  header{
  width:100%;
  height:0.54rem;
  background: #06c1ae;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header{
    display: flex;
    align-items: center;
    img{
      width:0.16rem;
      height:0.26rem;
      margin-right: 0.07rem;
      margin-left: 0.08rem;
    }
    span{
      font-size: 0.14rem;
      color:#fff;
      display: block;
    }

  }
  p{
    font-size: 0.16rem;
    color: #fff;
  }
  img{
    width:0.2rem;
     height:0.22rem;
    margin-right: 0.16rem;
}
}
  footer{
    width:100%;
    padding: 0 0.12rem;
    box-sizing: border-box;
    ul{
      margin: 0.19rem 0;
      display: flex;
      li{
        width:0.71rem;
        font-size: 0.14rem;
        text-align: center;
        border-right: 1px solid #000;
        color:#18c4b2;
        &:last-child{
          border: none;
        }
      }
    }
    div{
      font-size: 0.14rem;
      text-align: center;
        color:#1b1b1b;
      margin-bottom: 0.19rem;
      span{
        color:#18c4b2;
      }
    }
  }
</style>
