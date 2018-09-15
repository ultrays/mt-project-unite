<template>
    <div>
      <div class="head">
        <span>相关电影</span>
      </div>
      <div class="sec">
        <ul>
          <li v-for="v in ften" :key="v.id">
            <a href="#">
              <img v-lazy=v.img alt="">
              <span>{{v.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CatEye_Detail_in_nine",
      props:["ften"],
      data(){
           return{
           }
        }
    }
</script>

<style lang="scss" scoped>
  .head{
    width:100%;
    border-top:2px solid #f1f1f1;
    border-bottom:2px solid #f1f1f1;
    background:white;
    display: flex;
    margin-top:0.12rem;
    span{
      font-size:0.13rem;
      color:black;
      font-weight:600;

      margin-top:0.13rem;
      margin-left:0.12rem;
      margin-bottom:0.15rem;
    }
  }
  .sec{
    width:100%;
    background:white;
    ul{
      width:100%;
      display: flex;
      overflow-x: scroll;
      padding-left:0.12rem;
      padding-bottom:0.28rem;
      box-sizing: border-box;
      border-bottom:2px solid #f2f2f2;
      li{
        display: flex;
        margin-top:0.14rem;
        a{
          width:0.66rem;
          display: flex;
          flex-direction: column;
          img{
            width:0.53rem;
            height:0.74rem;
          }
          span:nth-child(2){
            font-size:0.12rem;
            color:black;
            width:100%;
            margin-top:0.07rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>
