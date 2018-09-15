<template>
  <div>
    <div class="dp" v-for="c in third" :key="c.id">
      <img :src="c.on"  alt="">
      <img :src="c.op"  alt="">
      <img :src="c.oa" alt="">
      <img :src="c.os"  alt="">

    </div>
  </div>
</template>

<script>
  export default {
    name: "third",
    props:["third"]
  }
</script>

<style scoped>
  .dp{
    width: 100%;
    display: flex;
    padding-left: 0.16rem;
    padding-top: 0.1rem;
    overflow-x: scroll;

  }
  .dp img{
    margin-right: 0.04rem;

    height: 1.25rem;
  }
</style>
