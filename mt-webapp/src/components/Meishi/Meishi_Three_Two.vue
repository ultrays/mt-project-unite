<template>
<div class="new">
  <div v-for="a in two" :key="a.id" class="new1" >
    <!--<a href="#/delicious"></a>-->
    <div class="new_top">
      <img class="m2" v-lazy=a.imgs>
      <div class="new_top_right">
        <div class="new_top_right_top">
            {{a.title}}
        </div>
        <div class="newA">
          <div class="newA1">
            <img :src=a.imgs1 alt="">
            <p>{{a.price}}</p>
          </div>
          <div class="newA2">
            <span>{{a.pos}}</span>
            <p>{{a.jl}}</p>
          </div>
        </div>
        <div class="newB">
          <p>{{a.cp1}}</p>
          <span>{{a.cp2}}</span>
          <span>{{a.cp3}}</span>
          <span>{{a.cp4}}</span>
          <span>{{a.cp5}}</span>
        </div>
        <div class="newC">{{a.fs}}</div>
      </div>
    </div>
    <div class="new_bottom">
      <div class="new_bottomA">
        <span></span>
        <img :src=a.imgs2 alt="">
        <p>{{a.yh}}</p>
      </div>
      <div class="new_bottomB">
        <span></span>
        <img :src=a.imgs3 alt="">
        <p>{{a.yh1}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "Meishi_Three_Two",

      data(){
          return{
          }
      },

      props:["two"]
    }
</script>

<style lang="scss" scoped>
.new{
  width:100%;
  /*height:100%;*/
  .new1{
    width:100%;
    border-bottom: 1px solid #f4f4f4;
    position: relative;
    /*height:1.73rem;*/
    a{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
  .new_top{
    width:100%;
    height:1.07rem;
    display: flex;
    .m2{
      width:0.82rem;
      height:0.81rem;
      margin-left: 0.14rem;
      margin-top: 0.14rem;
    }
    .new_top_right{
      flex: 1;
      height:1.07rem;
      margin-left: 0.08rem;
      padding-right: 0.04rem;
      border-bottom: 1px solid #f4f4f4;
      .new_top_right_top{
        font-size: 0.17rem;
        color:#000;
        margin-top: 0.14rem;
      }
      .newA{
        display: flex;
        margin-top: 0.05rem;
        justify-content: space-between;
        .newA1{
          display: flex;

          img{
            width:0.68rem;
            height:0.13rem;
            margin-right: 0.01rem;
          }
          p{
            font-size: 0.12rem;
            color:#4b4b4b;
          }
        }
        .newA2{
          display: flex;
          span{
            display: block;
            font-size: 0.12rem;
            color:#4b4b4b;
          }
          p{
            font-size: 0.12rem;
            color:#4b4b4b;
          }
        }
      }
      .newB{
        display: flex;
        margin-top: 0.05rem;
        p{
          font-size: 0.12rem;
          color:#4b4b4b;
          margin-right: 0.03rem;
        }
        span{
          background: #fbf4e4;
          display: block;
          color:#ba9842;
          margin-right: 0.04rem;
          font-size: 0.12rem;
        }
      }
      .newC{
        font-size: 0.12rem;
        color:#3ca399;
        margin-top: 0.05rem;
      }
    }

  }
  .new_bottom{
    width:100%;
    /*height:0.66rem;*/
    .new_bottomA{
      margin-top: 0.08rem;
      margin-bottom: 0.1rem;
      display: flex;
      align-items: center;
      span{
        width:1.04rem;
        display: block;
      }
      img{
        width:0.15rem;
        height:0.16rem;
        margin-right: 0.06rem;
      }
      p{
        font-size: 0.12rem;
        color:#494949;
      }
    }
    .new_bottomB{
      margin-top: 0.1rem;
      margin-bottom: 0.08rem;
      display: flex;
      span{
        width:1.04rem;
        display: block;
      }
      img{
        /*width:0.15rem;*/
        /*height:0.16rem;*/
        margin-right: 0.06rem;
      }
      p{
        font-size: 0.12rem;
        color:#494949;
      }
    }
  }}
}
</style>
