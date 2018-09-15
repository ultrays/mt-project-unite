<template>
  <nav>
    <a v-for="(item,index) in items" v-if="index<(items.length/2)" :href="item.url" class="item">
      <img :src="item.imgSrc" alt=""/>
      <span>{{item.name}}</span>
    </a>
  </nav>
</template>

<script>
    export default {
      name: "indexSwiperNav1",
      props:{
        items:{}
      }
    }
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    padding: .1rem 0rem .05rem;
    background: white;
    .item{
      width: .54rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 .1rem .2rem;
      img{
        width: .4rem;
        margin-bottom: .05rem;
      }
      span{
        color: #666666;
      }
    }
  }
</style>
