<template>
  <div>
    <div class="db" v-for="a in z" :key="a.id">
      <a href="#/Side_list"><img :src="a.qa"  alt=""></a>
      <p>{{a.qb}}</p>
      <a href=""><img :src="a.qc" alt=""></a>
      <a href=""><img :src="a.qd" alt=""></a>
    </div>
    <header v-for="b in z1" :key="b.id">
      <img :src="b.qe" alt="">
      <div class="dw">
        <p>{{b.qr}}</p>
        <p class="jq"><span>{{b.qt}}</span><span>{{b.qy}}</span></p>
      </div>
      <p class="jj">{{b.qu}}</p>
    </header>
  </div>
</template>

<script>
  export default {
    name: "z",
    props:["z","z1"]

  }
</script>

<style scoped>
  .db{
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 0.52rem;
    box-sizing: border-box;
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    /*padding-top: 0.16rem;*/

  }
  .db img{
    width: 0.18rem;
    height: 0.2rem;
    margin-top: 0.16rem;

  }

  .db p{
    font-size: 0.2rem;
    margin-left: 0.9rem;
    margin-right: 0.5rem;
  }
  header{
    width: 100%;
    position: relative;
  }
  header img{
    width: 100%;
    height: 1.75rem;
  }
  .dw{
    position: absolute;
    left: 0.07rem;
    top: 1.15rem;
    color: rgb(255,255,255);
  }
  .dw{
    font-size: 0.22rem;
  }
  .jq{
    display: flex;
    font-size: 0.14rem;
  }
  .jq :nth-child(1){
    width: 0.52rem;
    height: 0.2rem;
    text-align: center;
    background:rgba(118,133,125,0.6);
    border-radius: 4px;
    margin-right: 0.2rem;
  }
  .jj{
    font-size: 0.14rem;
    position: absolute;
    top: 1.45rem;
    left: 3rem;
    width: 0.6rem;
    height:0.2rem;
    border-radius: 3px;
    border: 1px solid rgb(201,207,214);
    background: transparent;
    color: rgb(255,255,255);
    text-align:center ;
  }
</style>

