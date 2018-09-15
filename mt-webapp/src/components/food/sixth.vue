<template>
  <div>
    <div class="tj" v-for="z in sixth" :key="z.id">
      <div class="cai">
        <p>{{z.po}}</p>
        <p>{{z.pp}}</p>
      </div>
      <p class="zp">{{z.pa}}</p>
      <p class="dh">{{z.px}}豆花烤鱼</p>
      <div class="dz">
        <img :src="z.dx"  alt="">
        <p>{{z.dc}}</p>
      </div>
      <p class="hw">{{z.dv}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sixth",
    props:["sixth"]
  }
</script>

<style scoped>
  .tj{
    width: 100%;

  }
  .cai{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .cai :nth-child(1){
    font-size: 0.18rem;
    margin-top: 0.07rem;
    margin-left: 0.17rem;

  }
  .cai :nth-child(2){
    font-size: 0.14rem;
    color: #00b9a0;
    margin-top: 0.07rem;
    margin-right: 0.17rem;

  }
  .zp{
    font-size: 0.14rem;
    margin-top: 0.07rem;
    margin-left: 0.17rem;
  }
  .dh{
    font-size: 0.14rem;
    margin-top: 0.12rem;
    margin-left: 0.17rem;
  }
  .dz{
    display: flex;
    margin-top: 0.16rem;
    margin-left: 0.17rem;
  }
  .dz img{
    whidth:0.14rem;
    height:0.14rem;
  }
  .dz p{
    font-size: 0.14rem;
  }
  .hw{
    font-size: 0.14rem;
    margin-top: 0.13rem;
    margin-left: 0.18rem;
    line-height: 0.28rem;
  }
</style>
