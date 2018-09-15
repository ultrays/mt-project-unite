<template>
  <div>
    <Beautylist_One></Beautylist_One>
    <Beautylist_Two></Beautylist_Two>
    <div class="tj">热门商家推荐</div>
    <div class="xxk">
      <ul>
        <li class="lia" @click="change(1)" >美发</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li @click="change(2)">美容美体</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li @click="change(3)">美甲美睫</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li  @click="change(4)">瑜伽舞蹈</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li @click="change(5)">瘦身纤体</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li @click="change(6)">韩式定妆</li>
        <img src="../assets/imagewu/sg.png" alt="">
        <li @click="change(7)">祛痘</li>
      </ul>
    </div>
    <Beautylist_Three :three1="temps1" v-show="temp==1"></Beautylist_Three>
    <Beautylist_Four  :four="temps2" v-show="temp==2"></Beautylist_Four>
    <Beautylist_Five  :five="temps3" v-show="temp==3"></Beautylist_Five>
    <Beautylist_Six   :six="temps4" v-show="temp==4"></Beautylist_Six>
    <Beautylist_Seven :seven="temps5" v-show="temp==5"></Beautylist_Seven>
    <Beautylist_Eight :eight="temps6" v-show="temp==6"></Beautylist_Eight>
    <Beautylist_Nine  :nine="temps7" v-show="temp==7"></Beautylist_Nine>
  </div>
</template>

<script>
    import Beautylist_One from "../components/Beautylist/Beautylist_One";
    import Beautylist_Two from "../components/Beautylist/Beautylist_Two";
    import Beautylist_Three from "../components/Beautylist/Beautylist_Three";
    import Beautylist_Four from "../components/Beautylist/Beautylist_Four";
    import Beautylist_Five from "../components/Beautylist/Beautylist_Five";
    import Beautylist_Six from "../components/Beautylist/Beautylist_Six";
    import Beautylist_Seven from "../components/Beautylist/Beautylist_Seven";
    import Beautylist_Eight from "../components/Beautylist/Beautylist_Eight";
    import Beautylist_Nine from "../components/Beautylist/Beautylsit_Nine";
    import {MeiShi} from "../apis/MeiShi"
    export default {
        name: "Beautylist",
      components: {
        Beautylist_Nine,
        Beautylist_Eight,
        Beautylist_Seven,
        Beautylist_Six, Beautylist_Five, Beautylist_Four, Beautylist_Three, Beautylist_Two, Beautylist_One},
      data(){
          return{
            temp:1,
            temps1:[],
            temps2:[],
            temps3:[],
            temps4:[],
            temps5:[],
            temps6:[],
            temps7:[]
          }
      },
      methods:{
          change:function(v){
              this.temp =v
          },
        Cat1(){
          MeiShi.getCat((data)=>{
            this.temps1 = data[0].Blist;
            this.temps2 = data[1].Blist;
            this.temps3 = data[2].Blist;
            this.temps4 = data[3].Blist;
            this.temps5 = data[4].Blist;
            this.temps6 = data[5].Blist;
            this.temps7 = data[6].Blist;
          })
        }
      },
      created(){
        this.Cat1()
      },
      mounted(){
        $(".xxk li").click(function(){
          $('.lia').removeClass('lia');
          $(this).addClass('lia');
        })
      }
    }
</script>

<style lang="scss" scoped>
  .tj{
    width:100%;
    margin-top: 0.12rem;
    height:0.41rem;
    background: #fff;
    color:#4d4d4d;
    font-size: 0.18rem;
    line-height: 0.41rem;
    box-sizing: border-box;
    padding-left: 0.09rem;
    border-bottom: 1px solid #f6f4f2;
  }
  .xxk{
    width:100%;
    height:0.73rem;
    background: #fff;
    /*display: flex;*/
    overflow-x: scroll;
    border-bottom: 1px solid #f6f4f2;
    ul{
      height:0.5rem;
      width:5.1rem;
      display: flex;
      align-items: center;
      .lia{
        width:0.7rem;
        height:0.5rem;
        font-size: 0.15rem;
        color:#76ddd3;
        border-bottom: 3px solid #76ddd3;
        text-align: center;
        line-height: 0.5rem;

      }

      li{
        width:0.7rem;
        /*height:0.5rem;*/
        font-size: 0.15rem;
        color:#565656;
        text-align: center;
        line-height: 0.5rem;
        /*&:hover{*/
          /*color:#76ddd3;*/
          /*border-bottom: 3px solid #76ddd3;*/
        /*}*/
      }
      img{
        width:0.02rem;
        height:0.18rem;
      }
    }
  }
</style>
