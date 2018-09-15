<template>
  <div>
    <div class="factory" v-for="b in second" :key="b.id">
      <p class="c">{{b.ky}}</p>
      <div class="fac"><img :src="b.sn" alt=""><p>{{b.f}}</p></div>
      <div class="fact"><img :src="b.tn"  alt=""><p>{{b.dy}}</p></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "second",
    props:["second"]
  }
</script>

<style scoped>
  .factory{
    width: 100%;
    height: 0.8rem;
  }
  .c{
    margin-left: 0.2rem;
    font-size:0.2rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
  }
  .fac{
    margin-left: 0.15rem;
    display: flex;
    margin-bottom: 0.1rem;
  }
  .fac img{
    width: 0.6rem;
    height:0.11rem;
  }
  .fac p{
    font-size:0.11rem;
    color: #383938;
  }
  .fact{
    margin-left: 0.15rem;
    display: flex;
  }
  .fact img{
    width: 0.12rem;
    height:0.12rem;
    margin-right: 0.04rem;
  }
  .fact p{
    font-size:0.11rem;
    color: #383938;

  }
</style>
