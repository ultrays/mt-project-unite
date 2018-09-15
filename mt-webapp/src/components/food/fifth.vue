<template>
  <div>
    <div class="yh" v-for="h in fifth" :key="h.id">
      <div class="yhx">
        <p>{{h.ov}}</p>
        <p>{{h.ob}}</p>
        <p>{{h.on}}</p>
      </div>
      <div class="yhc">
        <div class="yho">
          <p class="md">买单</p>
          <div class="yhv">
            <p>每满100减5元</p>
            <span>（每天0：00-24:00）</span>
          </div>
        </div>
        <div class="yhb" >
          <a href="">买单</a>
          <p>半年销量 4213</p>
        </div>
      </div>

      <p class="djq">代金券</p>
      <div class="yhn">
        <div class="yhm">
          <p>100元代金券</p>
          <p>周一到周四 | 部分商品可用</p>
          <div class="yhl">
            <span>￥82.6</span>
            <span>8.3折</span>
          </div>
        </div>
        <p class="xql"></p>
        <p class="xqr"></p>
        <div class="yhp">
          <a href="">抢购</a>
          <p>半年销量 3.4万+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fifth",
    props:["fifth"]
  }
</script>

<style scoped>
  .yh{
    width:100%;
  }
  .yhx{
    width: 100%;
    display: flex;
    padding-left: 0.16rem;
  }
  .yhx p{
    color: #00b397;
    border-bottom:1px solid #2bcdbb;
    width: 0.68rem;
    height: 0.38rem;
    font-size: 0.14rem;
    margin-right: 0.32rem;
  }
  .yhc{
    display: flex;
  }
  .yho{
    margin-top: 0.26rem;
    margin-left: 0.16rem;
  }
  .yhc .md{
    font-size: 0.19rem;
  }
  .yhv{
    display: flex;
  }
  .yhv p{
    font-size: 0.11rem;
    color: #ffa010;
  }
  .yhv span{
    display: block;
    font-size: 0.11rem;
  }
  .yhb{
    margin-left: 0.85rem;
    margin-top: 0.25rem;
  }
  .yhb a{
    width: 0.52rem;
    height: 0.28rem;
    background: #ff9a00;
    display: block;
    color: white;
    font-size:0.16rem ;
    text-align: center;
    line-height: 0.28rem;
    margin-bottom: 0.1rem;
  }
  .yhb p{
    font-size: 0.11rem;
    color: #00b397;

  }
  .djq{
    font-size: 0.2rem;
    margin-top: 0.35rem;
    margin-left: 0.18rem;

  }
  .yhn{
    width: 3.44rem;
    position: relative;
    background: #fffbf7;
    display: flex;
    border: 2px solid #ffefd5;
    margin: 0.15rem 0 0 0.15rem;

  }
  .yhm :first-child{
    font-size: 0.16rem;
    margin: 0.13rem 0 0.12rem 0.15rem;
  }
  .yhm :nth-child(2){
    font-size: 0.1rem;
    color: #747276;
    margin: 0 0 0.16rem 0.12rem;
  }
  .yhl{
    display: flex;
  }
  .yhl :first-child{
    color: #ff6a00;
    font-size:0.13rem ;
    margin: 0 0 0.15rem 0.15rem;
  }
  .yhl :last-child{
    color: #ff6a00;
    font-size:0.09rem ;
    background: #fffbf7;
    display: block;
    width: 0.3rem;
    height: 0.13rem;
    border: 1px solid #ffd698;
    border-radius: 2px;
    text-align: center;
  }
  .yhp {
    margin: 0.18rem 0 0 0.75rem;
  }
  .yhp a{
    width: 0.52rem;
    height: 0.28rem;
    background: #ff9a00;
    display: block;
    color: white;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.28rem;
    margin-bottom: 0.1rem;
    margin-left: 0.35rem;
  }
  .yhp p{
    font-size: 0.11rem;
    color: #00b397;
  }
  .xql{
    width: 0.14rem;
    height: 0.14rem;
    border-radius:50% ;
    background: white;
    position: absolute;
    left: -0.09rem;
    top: 0.45rem;
    border: 2px solid #ffedd3;
    border-left: none;
    border-bottom: none;
    border-top: none;

  }
  .xqr{
    width: 0.14rem;
    height: 0.14rem;
    border-radius:50% ;
    background: white;
    position: absolute;
    left: 3.36rem;
    top:0.45rem;
    border: 2px solid #ffedd3;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }
</style>
<!--<div class="yh" v-for="h in fifth" :key="h.id">-->
<!--<div class="yhx">-->
<!--<p>{{h.ov}}</p>-->
<!--<p>{{h.ob}}</p>-->
<!--<p>{{h.on}}</p>-->
<!--</div>-->
<!--<div class="yhc">-->
<!--<div class="yho" v-for="j in fifth1" :key="j.id">-->
<!--<p class="md">买单{{j.om}}</p>-->
<!--<div class="yhv">-->
<!--<p>每满100减5元{{j.pq}}</p>-->
<!--<span>（每天0：00-24:00）{{j.pw}}</span>-->
<!--</div>-->
<!--</div>-->
<!--<div class="yhb" v-for="k in fifth2" :key="k.id">-->
<!--<a href="">买单{{k.pe}}</a>-->
<!--<p>半年销量 4213{{k.pr}}</p>-->
<!--</div>-->
<!--</div>-->

<!--<p class="djq">代金券</p>-->
<!--<div class="yhn">-->
<!--<div class="yhm" v-for="l in fifth3" :key="l.id">-->
<!--<p>100元代金券{{l.pt}}</p>-->
<!--<p>周一到周四 | 部分商品可用{{l.py}}</p>-->
<!--<div class="yhl">-->
<!--<span>￥82.6{{l.pu}}</span>-->
<!--<span>8.3折{{l.pi}}</span>-->
<!--</div>-->
<!--</div>-->
<!--<p class="xql"></p>-->
<!--<p class="xqr"></p>-->
<!--<div class="yhp">-->
<!--<a href="">抢购</a>-->
<!--<p>半年销量 3.4万+</p>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
