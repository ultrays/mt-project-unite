<template>
  <div class="m1">
    <Meishi_Three_One class="haha1"></Meishi_Three_One>
    <Meishi_Three_Two class="haha2" :two="three"></Meishi_Three_Two>
  </div>
</template>

<script>
    import Meishi_Three_One from "./Meishi_Three_One";
    import Meishi_Three_Two from "./Meishi_Three_Two";
    export default {
        name: "Meishi_Three",
        components: {Meishi_Three_Two, Meishi_Three_One},
        props:["three"]
    }
</script>

<style scoped>
  .m1{
  /*padding-top: 0.45rem;*/
    background: #fff;
    margin-top:0.11rem;
    height:100%;
  }
  .haha1{
    z-index: 1;
  }

</style>


