<template>
    <div class="ff">
      <div class="ff1">
        <div class="set">
        <p>网友点评(537)</p>
        <div>
          <img src="../../assets/imagewu/xx4.png" alt="">
          <span>4.9</span>
        </div>
      </div>
      </div>
      <ul>
        <li v-for="o in five1" :key="o.id">
          <div class="lit">
            <img :src=o.img alt="">
            <div class="lit1">
              <div>
                <p>{{o.name}}</p>
                <span>{{o.data}}</span>
              </div>
              <img :src="o.img1" alt="">
            </div>
          </div>
          <p>{{o.sect}}</p>
          <div class="ff2">
            <img  v-lazy=o.img2 alt="">
            <img  v-lazy=o.img3 alt="">
            <img  v-lazy=o.img4 alt="">
          </div>
        </li>
      </ul>
      <div class="fff">
        <p>查看全部点评</p>
        <img src="../../assets/imagewu/yjt2.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Beautydetails_Five",
      data(){
          return{

          }
      },
      props:["five1"]
    }
</script>

<style lang="scss" scoped>
  .ff{
    width:100%;
    background: #fff;
    .ff1{
      padding: 0.15rem 0;
      width:100%;
      border-bottom: 1px solid #eee;
     .set{
       display: flex;

       margin: 0 0.18rem;
       align-items: center;
       justify-content: space-between;
       p{
         font-size: 0.13rem;
         color:#2e2e2e;
       }
       div{
            display: flex;
         align-items: center;
         img{
           width:0.93rem;
           height:0.16rem;
         }
         span{
           color:#ff9c0d;
           font-size: 0.12rem;
         }
       }
     }
  }
    ul{
      width:100%;
      li{
        width:100%;
        padding: 0 0.18rem;
        padding-top:0.12rem;
        padding-bottom: 0.15rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        .lit{
          display: flex;
          img{
            width:0.54rem;
            height:0.54rem;
          }
          .lit1{
            width:100%;
            margin-left: 0.17rem;
            div{
              width: 100%;
              display: flex;
              justify-content: space-between;
              p{
                font-size: 0.12rem;
                margin-top:0;
                color:#282828;
              }
              span{
                font-size: 0.12rem;
                color:#929292;
              }
            }
            img{
              margin-top: 0.15rem;
              width:0.93rem;
              height:0.16rem;
            }
          }
        }
        p{
          margin-top: 0.15rem;
          font-size: 0.14rem;
          color:#000;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ff2{
          margin-top: 0.26rem;
          /*margin-bottom: 0.19rem;*/
          widht:100%;
          display: flex;
          overflow-x: scroll;
          img{
            width:0.76rem;
            height:0.75rem;
            margin-right: 0.06rem;
          }
        }
      }
    }
    .fff{
      width:100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /*padding-right: 0.16rem;*/
      /*padding-left: 0.18rem;*/
      box-sizing: border-box;
      padding: 0.2rem 0.16rem 0.2rem 0.18rem;
      p{
        font-size: 0.14rem;
        color:#07bba6;
      }
      img{
        width:0.09rem;
        height:0.14rem;
      }
    }
  }
</style>
