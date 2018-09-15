<template>
<div class="six">
  <div class="six1">
    <div class="six2">
      相关团购推荐
    </div>
    <ul>
      <li v-for="p in six1" :key="p.id">
        <p>{{p.title}}</p>
        <div class="le">
          <div>
            <h5>￥<p>{{p.pro}}</p></h5>
            <h4>{{p.pro1}}</h4>
            <span  v-if="p.yh" class="a">{{p.yh}}</span>
          </div>
          <h6>{{p.xl}}</h6>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "Beautydetalis_Six",
      data(){
          return{

          }
      },
      props:["six1"]
    }
</script>

<style lang="scss" scoped>
.six{
  width:100%;
  background: #fff;
  margin-top: 0.13rem;
  margin-bottom: 0.13rem;
  .six1{
    width:100%;
    .six2{
      padding-top:0.18rem;
      padding-bottom: 0.14rem;
      margin-left: 0.12rem;
      margin-right: 0.12rem;
      border-bottom: 1px solid #eee;
      font-size: 0.14rem;
      color:#292929;
    }
  }
  ul{
    width:100%;
    li{
      margin-left: 0.12rem;
      margin-right: 0.12rem;
      border-bottom: 1px solid #eee;
      p{
        margin-top: 0.15rem;
        font-size: 0.13rem;
        color:#0d0d0d;
      }
      .le{
        margin-top: 0.15rem;
        margin-bottom: 0.05rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
          display: flex;
          align-items: center;
          h5{
            font-size: 0.12rem;
            color:#07c0ad;
            font-weight: 100;
            display: flex;
            align-items: center;
            p{
              font-size: 0.14rem;
              margin: 0;
              color:#07c0ad;
            }
          }
          h4{
            font-weight: 100;
            color:#858585;
            font-size: 0.12rem;
            margin-left: 0.1rem;
            margin-right: 0.09rem;
          }
          span{
            display: block;
            /*width:0.6rem;*/
            height: 0.19rem;
            color:#ff8800;
            font-size: 0.12rem;
            border: 1px solid #ff8800;
            border-radius: 3px;
            line-height: 0.19rem;
            text-align: center;
            padding: 0 0.02rem;
          }

        }
        h6{
          font-weight: 100;
          font-size: 0.12rem;
          color:#000;
        }
      }
    }
  }
}
</style>
