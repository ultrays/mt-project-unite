<template>
  <div>
    <div class="pf">
      <div class="dz" v-for="c in pf" :key="c.id">
        <p>{{c.qi}}</p>
        <div class="gp">
          <span>{{c.qo}}</span>
          <img :src="c.qp"  alt="">
        </div>
        <p>{{c.qa}}</p>
      </div>
      <div class="pz" v-for="d in pf1" :key="d.id">
        <p class="wf">{{d.qs}}</p>
        <div class="df">
          <p>{{d.qd}}5.4万+条评论</p>
          <img :src="d.qf" alt="">
        </div>
        <img class="qb" :src="d.qg" alt="">
      </div>
    </div>

    <div class="bag" v-for="e in pf2" :key="e.id">
      <img :src="e.qh" alt="">
      <p>{{e.qj}}</p>
      <a href="">{{e.qk}}</a>
      <img class="hk" :src="e.ql" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "pf",
    props:["pf","pf1","pf2"]

  }
</script>

<style scoped>
  .pf{
    width: 100%;
    display: flex;
    margin-bottom: 0.13rem;
  }
  .dz{
    margin-left: 0.17rem;
    margin-top: 0.09rem;
    padding-right: 0.26rem;
    border-right: 2px solid #f5f6f8;
  }
  .dz p{
    font-size: 0.18rem;
    line-height: 0.24rem;
  }
  .gp{
    font-size: 0.12rem;
    color: #004dd3;
    margin-right: 0.24rem;
    display: flex;
  }
  .gp span{
    display: block;
    font-size: 0.1rem;
    line-height: 0.24rem;

  }
  .gp img{
    margin-top: 0.08rem;
    width: 0.07rem;
    height: 0.09rem;
    margin-left: 0.04rem;
  }
  .dz :nth-child(3){
    font-size: 0.1rem;
    color: #434543;
    line-height: 0.24rem;
  }
  .pz{
    color: #ff7d00;
  }
  .wf{
    font-size: 0.18rem;
    margin-left: 0.32rem;
    margin-top: 0.18rem;
  }
  .df{
    display: flex;
    margin-top: 0.08rem;
    margin-bottom: 0.08rem;
  }
  .df p{
    font-size: 0.1rem;
    margin-left: 0.11rem;
    margin-right: 0.03rem;
  }
  .df img{
    width: 0.07rem;
    height: 0.1rem;
  }
  .qb{
    width: 0.78rem;
    height: 0.14rem;
    margin-left: 0.16rem;
  }
  .bag{
    display: flex;
    margin-left: 0.15rem;
    /*padding-top: 0.13rem;*/
    height: 0.42rem;
    border-top:2px solid #f5f6f7 ;


  }
  .bag :nth-child(1){
    width: 0.17rem;
    height: 0.17rem;
    margin-top: 0.13rem;
  }
  .bag p{
    font-size: 0.12rem;
    margin-left: 0.08rem;
    width: 2.52rem;
    margin-right: 0.25rem;
    margin-top: 0.13rem;

  }
  .bag a{
    display: block;
    height: 0.16rem;
    background: #ff5427;
    color: #ffffff;
    font-size: 0.06rem;
    margin-right: 0.05rem;
    border-radius: 8px;
    text-align: center;
    padding-left: 0.04rem;
    padding-right: 0.04rem;
    margin-top: 0.1rem;
  }
  .hk{
    width: 0.07rem;
    height: 0.1rem;
    margin-top: 0.13rem;
  }
</style>

