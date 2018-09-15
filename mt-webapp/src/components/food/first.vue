<template>
  <div>
    <div class="header" v-for="a in first" :key="a.id">
      <a href="javascript:;"><img :src=a.on  alt="" @click="back"></a>
      <a href=""><img :src=a.pn  alt=""></a>
      <a href=""><img :src=a.qn  alt=""></a>
      <a href=""><img :src=a.rn  alt=""></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "first",
    props:["first"],
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height:0.45rem;
    display: flex;
  }
  .header a{
    display:flex;
    height: 0.24rem;
    margin-left:0.2rem;
    margin-top: 0.12rem;
  }
  .header a img{
    width:0.24rem;
    height: 0.24rem;
  }
  .header a:nth-child(2){
    margin-left: 2rem;
  }
</style>
