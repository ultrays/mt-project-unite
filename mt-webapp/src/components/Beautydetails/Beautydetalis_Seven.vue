<template>
<div class="sev">
  <div class="sev1">
    <div class="sev2">
      <p>看了本团购的用户还看了</p>
      <span>广告</span>
    </div>
    <ul>
      <li v-for="u in seven1" :key="u.id">
        <img  v-lazy=u.img alt="">
        <div class="gg">
          <h6>{{u.title}}</h6>
          <h5>{{u.fs}}</h5>
          <div>
          <p>￥<span>{{u.pro}}</span></p>
            <h4>{{u.xl}}</h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "Beautydetalis_Seven",
      data(){
          return{


          }
      },
      props:["seven1"]
    }
</script>

<style lang="scss" scoped>
.sev{
  width:100%;
  background: #fff;
  .sev1{
    width:100%;
    .sev2{
      margin-left: 0.12rem;
      margin-right: 0.12rem;
      padding-top: 0.19rem;
      padding-bottom: 0.14rem;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        font-size: 0.14rem;
        color:#949494;
      }
      span{
        font-size: 0.14rem;
        color:#949494;
      }
    }
    ul{
      width:100%;
      li{
        padding-top: 0.12rem;
        margin-left: 0.12rem;
        border-bottom: 1px solid #eee;
        display: flex;
        padding-bottom: 0.15rem;
        /*align-items: center;*/
        img{
          width:1.15rem;
          height:0.7rem;
        }
        .gg{
          margin-left: 0.14rem;
          width:100%;
          h6{
            color:#2a2a2a;
            font-size: 0.13rem;
          }
          h5{
            font-size: 0.12rem;
            color:#888888;
            margin-top: 0.1rem;
            margin-bottom: 0.1rem;
          }
          div{
            display: flex;
            align-items: center;
            p{
              font-size: 0.12rem;
              color:#00bfab;
              span{
                font-size: 0.14rem;
              }
            }
            h4{
              margin-left: 0.05rem;
              color:#8f8f8f;
              font-size: 0.12rem;
            }

          }
        }
      }
    }
  }

}
</style>
