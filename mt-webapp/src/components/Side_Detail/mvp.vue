<template>
  <div>
    <div class="sf" v-for="l in mvp" :key="l.id">
      <p class="ssf">{{l.a}}</p>
      <ul>
        <li>
          <div>
            <p>{{l.b}}</p>
            <p>{{l.c}}</p>
          </div>
          <p  class="ys" >{{l.d}}</p>
        </li>
      </ul>
    </div>

    <div class="t">
      <img src="../../assets/Zhang/29.jpg" alt="">
      <p>景区内项目</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvp",
    props:["mvp"]


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
  .sf li:nth-child(1){
    height: 0.14rem;
    font-size: 0.12rem;
    color: #ff3e03;
  }
  .sf li:nth-child(2){
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
  .t{
    width: 100%;
    display: flex;
    margin-left: 0.15rem;
    border-bottom: 1px solid #f7f5fa;
  }
  .t img{
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.15rem 0.12rem 0.18rem 0;
  }
  .t p{
    font-size: 0.18rem;
    margin-top: 0.2rem;
  }
</style>

