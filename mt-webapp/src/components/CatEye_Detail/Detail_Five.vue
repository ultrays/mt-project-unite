<template>
    <div>
      <div class="nav">
        <ul>
          <li v-for="item in lists" :key="item.id">
            <a href="#">
              <p>{{item.title}}<b>{{item.price}}</b></p>
              <p>{{item.nav}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.km}}</p>
              <img :src=item.imgs>
              <p><img :src=item.img>{{item.you}}</p>
              <p>{{item.time}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Detail_Five",
      data(){
        return{
          lists:[
            {title:"大地影院(高科尚都店)",price:"32.9元起",
              nav:"雁塔区高新区丈八五路43号高科尚都one...",km:"2.7km",
              "imgs":require("../../assets/Geng/huang.jpg"),"img":require("../../assets/Geng/ka.jpg"),
              you:"限时¥19.9促销开卡，首单更优惠",time:"近期场次：11:45  12:15  12:45"},
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .nav{
    width:100%;
    height:100%;
    background:white;
    ul{
      display: flex;
      flex-direction: column;
      li{
        width:100%;
        display: flex;
        a{
          width:100%;
          display: flex;
          margin-top:0.14rem;
          margin-left:0.1rem;
          flex-direction: column;
          p:nth-child(1){
            font-size:0.16rem;
            color:black;
            display: flex;
            font-weight:600;
            b{
              font-size:0.16rem;
              color:#f03e39;
              margin-left:0.07rem;
            }
          }
          p:nth-child(2){
            font-size:0.13rem;
            color:#969696;
            margin-top:0.08rem;
          }
          img{
            width:0.32rem;
            height:0.14rem;
            margin-top:0.05rem;
          }
          p:nth-child(4){
            font-size:0.13rem;
            margin-top:0.07rem;
            color:#d6d6d6;
            display: flex;
            img{
              width:0.13rem;
              height:0.12rem;
              margin-right:0.02rem;
              margin-top:0.02rem;
            }
          }
          p:nth-child(5){
            font-size:0.13rem;
            color:#d6d6d6;
            margin-top:0.07rem;
          }
        }
      }
    }
  }
</style>

