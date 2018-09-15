<template>
  <div>
    <div class="sf" v-for="l in xg" :key="l.id">
      <p class="ssf">{{l.a}}</p>
      <li>
        <div>
          <p>{{l.b}}</p>
          <p>{{l.c}}</p>
        </div>
        <p  class="ys" >{{l.d}}</p>
      </li>
    </div>


  </div>
</template>

<script>
  export default {
    name: "xg",
    props:["xg"]

  }
</script>

<style scoped>
  .sf{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #f7f6fa;
  }
  .sf .ssf{
    font-size: 0.15rem;
    padding: 0.17rem 0.5rem 0.24rem 0.17rem;
    width: 2.2rem;
    /* margin-right: 0.3rem; */
  }
  .sf div{
    display: flex;
    margin-top: 0.17rem;
    height: 0.14rem;
  }
  .sf :nth-child(2) :nth-child(1){
    height: 0.14rem;
    font-size: 0.12rem;
    color: #ff3e03;
  }
  .sf :nth-child(2) :nth-child(2){
    font-size: 0.08rem;
    color: #848a8c;
    margin-top: 0.04rem;
  }
  .ys{
    font-size: 0.08rem;
    color: #848a8c;
    margin-top: 0.05rem;
    display: block;
    margin-left: 0.1rem;
  }
</style>

