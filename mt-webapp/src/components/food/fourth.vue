<template>
  <div>
    <div class="fo">

      <div class="fou" v-for="d in fourth" :key="d.id">
        <img :src="d.od"  alt="">
        <p>{{d.of}}</p>
        <img :src="d.og" alt="">
      </div>

      <div class="four" v-for="f in fourth1" :key="f.id">
        <div class="foi">
          <img :src="f.oh"  alt="">
          <p>{{f.oj}}</p>
        </div>
        <a class="foil" href=""><img :src="f.ok" alt=""></a>
      </div>

      <div class="fop" v-for="g in fourth2" :key="g.id">
        <img :src="g.ol" alt="">
        <p>{{g.oz}}</p>
        <span>{{g.ox}}</span> <img :src="g.oc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fourth",
    props:["fourth","fourth1","fourth2"]
  }
</script>

<style scoped>
  .fo{
    width: 100%;
    font-size: 0.13rem;
  }
  .fou{
    display: flex;
    margin-top: 0.08rem;
    margin-left: 0.16rem;
  }
  .fou img{
    width: 0.16rem;
    height: 0.16rem;
  }
  .fou p{

  }
  .four{
    display: flex;
    width:100%;
    margin-top: 0.14rem;
  }
  .four .foi{
    display: flex;
    margin-left: 0.16rem;
    margin-right: 0.26rem;
  }
  .foi img{

    height: 0.16rem;
  }
  .foi p{

  }
  .foil{
    display: block;
    margin-right: 0.18rem;
  }
  .foil img{
    width:0.2rem;
    height:0.2rem;
  }
  .fop{
    display: flex;
    margin-left: 0.16rem;
    margin-top: 0.14rem;
    margin-bottom: 0.18rem;
  }
  .fop img{

  }
  .fop p{

  }
  .fop span{
    display: block;
    width: 0.3rem;
    height:0.15rem;
    border-radius:2px ;
    color: #ffa216;
    border:  1px solid #ffdbb8;

  }

</style>
