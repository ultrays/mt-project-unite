<template>
  <div>
    <div class="ms" v-for="q in ninth" :key="q.id">
      <img :src="q.zb1" alt="">
      <div class="xx">
        <p>{{q.yc}}</p>
        <p>{{q.yx}}</p>
        <p>{{q.zj}}</p>
        <p class="jg">
          <span>{{q.j}}</span>
          <span>{{q.aa}}</span>
        </p>
      </div>
      <div class="dz">
        <p>{{q.bb}}</p>
        <p>{{q.dd}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ninth",
    props:["ninth"]

  }
</script>

<style scoped>
  .ms{
    width: 100%;
    display: flex;
    margin-bottom: 0.15rem;

  }
  .ms img{
    width: 0.84rem;
    height: 0.84rem;
    margin-left: 0.15rem;
    margin-right: 0.1rem;
  }
  .xx{
    display: flex;
    flex-direction: column;
    border-bottom:2px solid #f0f0f0 ;
    padding-bottom: 0.11rem;
    width:2rem;
  }
  .xx p{

  }
  .xx :nth-child(1){
    font-size: 0.16rem;
    line-height: 0.24rem;
  }
  .xx :nth-child(2){
    font-size: 0.12rem;
    line-height: 0.19rem;
  }
  .xx :nth-child(3){
    font-size: 0.1rem;
    color: #8a888a;
    line-height: 0.19rem;
  }
  .jg{
    display: flex;
    /*padding-bottom: 0;*/
  }

  .jg :nth-child(1){
    font-size: 0.13rem;
    color: #ff9200;
    width: 0.47rem;
    display: inline-block;
  }
  .jg :nth-child(2){
    display: inline-block;
    font-size: 0.07rem;
    color: #ff9200;
    width: 0.22rem;
    text-align: center;
    border: 2px solid #ffd89c;
    border-radius: 2px;
    height: 0.14rem;
    line-height: 0.14rem;
  }
  .dz{
    border-bottom:2px solid #f0f0f0 ;
    /*width: 1.5rem;*/
  }
  .dz :nth-child(1){
    color: #858285;
    font-size: 0.12rem;
    /*margin-left: 0.58rem;*/
  }
  .dz :nth-child(2){
    color: #858285;
    font-size: 0.12rem;
    /*margin-left: 0.86rem;*/
    /*margin-top: 0.48rem;*/
  }
</style>
