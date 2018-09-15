<template>
    <div>
       <router-link to="/Side_Detail" class="nav" v-for="t in temp" :key="t.id" tag="div">
            <img v-lazy=t.img>
             <div class="nav_One">
               <p><span>{{t.title}}</span><img :src=t.img1>
                 <img :src=t.img3>
                 <img :src=t.img4>
               </p>
               <p><img :src=t.img5><span>{{t.fen}}</span></p>
               <p>{{t.price}}<b>{{t.b}}</b></p>
             </div>
             <div class="nav_Two">
               <span>{{t.fei}}</span>
               <span>{{t.km}}</span>
             </div>
       </router-link>
    </div>
</template>

<script>
    export default {
        name: "Side_list_One",
        data(){
          return {
               temp:[
                 {"img":require("../../assets/Geng/78efb2c17d7c310a7a83d0c4f6693fd.png"),
                  title:"大唐芙蓉园(5A)","img1":require("../../assets/Geng/10c5.png"),
                  "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                  "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                  "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥94",b:"起",fei:"104726人消费",km:"2.6km"},

                 {"img":require("../../assets/Geng/1s.png"),
                   title:"西安曲江海洋极地公园(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥79",b:"起",fei:"263319人消费",km:"3km"},

                 {"img":require("../../assets/Geng/2s.png"),
                   title:"秦始皇帝陵博物院(兵马俑)(5A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥18",b:"起",fei:"263319人消费",km:"33.5km"},

                 {"img":require("../../assets/Geng/3s.png"),
                   title:"陕西历史博物馆(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥30",b:"起",fei:"121858人消费",km:"0.6km"},

                 {"img":require("../../assets/Geng/4s.png"),
                   title:"西安秦岭野生动物园(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥47",b:"起",fei:"289237人消费",km:"22.6km"},

                 {"img":require("../../assets/Geng/5s.png"),
                   title:"乐华欢乐世界","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥100",b:"起",fei:"117294人消费",km:"28.6km"},

                 {"img":require("../../assets/Geng/6s.png"),
                   title:"华清宫(5A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥15",b:"起",fei:"369556人消费",km:"28.9km"},

                 {"img":require("../../assets/Geng/7s.png"),
                   title:"西安城墙(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥59",b:"起",fei:"9536人消费",km:"3.3km"},

                 {"img":require("../../assets/Geng/8s.png"),
                   title:"长恨歌","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥198",b:"起",fei:"99985人消费",km:"28.9km"},

                 {"img":require("../../assets/Geng/9s.png"),
                   title:"小雁塔(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥25",b:"起",fei:"10144人消费",km:"1.9km"},

                 {"img":require("../../assets/Geng/10s.png"),
                   title:"西安5D星空错觉艺术馆","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥35",b:"起",fei:"3511人消费",km:"0.1km"},

                 {"img":require("../../assets/Geng/11s.png"),
                   title:"白鹿原影视城","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥25",b:"起",fei:"3511人消费",km:"0.1km"},

                 {"img":require("../../assets/Geng/12s.png"),
                   title:"西安碑林博物馆(4A)","img1":require("../../assets/Geng/10c5.png"),
                   "img3":require("../../assets/Geng/59af8933d4929bc603bee0ee4fbcc50.png"),
                   "img4":require("../../assets/Geng/479c0cd08a61be3589e88e74fdf74c4.png"),
                   "img5":require("../../assets/Geng/aa82a743c3c5eac119ef1b3b50afe7d.png"),
                   fen:"5分",price:"¥68",b:"起",fei:"104726人消费",km:"3.5km"},
               ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.nav{
  width:100%;
  background:white;
  display: flex;
  border-bottom:1px solid #c7c7c7;
   img{
     width:0.58rem;
     height:0.62rem;
     margin-left:0.08rem;
     margin-top:0.08rem;
     margin-bottom:0.1rem;
   }
   .nav_One{
     width:1.45rem;
     height:0.67rem;
     margin-left:0.08rem;
     margin-top:0.08rem;
     display: flex;
     flex-direction: column;
      p:nth-child(1){
        width:3rem;
        height:0.13rem;
        display: flex;
        span{
          /*width:100%;*/
          font-size:0.13rem;
          color:#1b1b1b;
          align-items: center;
        }
        img:nth-child(2){
          width:0.11rem;
          height:0.12rem;
          margin-top:0.04rem;
          margin-left:0.03rem;
        }
        img:nth-child(3){
          width:0.22rem;
          height:0.12rem;
          margin-top:0.04rem;
          margin-left:0.03rem;
        }
        img:nth-child(4){
          width:0.11rem;
          height:0.12rem;
          margin-top:0.04rem;
          margin-left:0.03rem;
        }
      }
     p:nth-child(2){
          display:flex;
        img{
          width:0.62rem;
          height:0.1rem;
          margin-top:0.25rem;
          margin-left:0;
        }
       span{
         font-size:0.06rem;
         color:#ca9234;
         margin-top:0.23rem;
         margin-left:0.07rem;
       }
     }
     p:nth-child(3){
       font-size:0.16rem;
       color:#009382;
       margin-top:0.4rem;
       margin-bottom:0.1rem;
       b{
         font-size:0.12rem;
         color:#666565;
         margin-top:0.16rem;
       }
     }
   }
  .nav_Two{
    display: flex;
    flex-direction: column;
      span:nth-child(1){
        font-size:0.12rem;
        color:#909090;
        padding-left:0.6rem;
        box-sizing: border-box;
        margin-top:0.3rem;
      }
    span:nth-child(2){
      font-size:0.12rem;
      color:#909090;
      padding-left:1rem;
      margin-top:0.12rem;
      margin-bottom:0.1rem;
      box-sizing: border-box;
    }
  }
}
</style>
