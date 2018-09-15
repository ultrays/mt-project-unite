<template>
    <div class="goods">
      <div class="head">
        <span>西安</span>
        <span @click="change(1)">正在热映</span>
        <span @click="change(2)">即使上映</span>
        <img src="../../assets/Geng/search.jpg" alt="">
      </div>
       <Car_One2 v-show="temp===1" :twos="ones"></Car_One2>
      <Car_One3 v-show="temp===2" :two1="ones"></Car_One3>
    </div>
</template>

<script>
    import Car_One2 from "./Car_One2";
    import Car_One3 from "./Car_One3";
    export default {
        name: "Cat_One",
        components: {Car_One3, Car_One2},
        data(){
           return{
             temp:1,
           }
        },
        props:["ones"],
        methods:{
             change(v){
                 this.temp=v
             },
          },
     }
</script>

<style lang="scss" scoped>
  .goods{
    width:100%;
    position: fixed;
    top:0.5rem;
    height:84.6%;
    overflow-y: scroll;
    overflow-x:hidden;
    flex:1;
  }
.head{
  width:100%;
  height:0.46rem;
  display: flex;
  background:white;
  padding:0.2rem 0;
  box-sizing: border-box;
  border-bottom:1px solid #e8e8e8;
  span:nth-child(1){
    font-size:0.15rem;
    color:#999999;
    margin-left:0.15rem;
    margin-top:-0.1rem;
    display:block;
    &:hover{
       color:#ec2b24;
       border-bottom:2px solid #ec2b24;
    }
  }
  span:nth-child(2){
    font-size:0.15rem;
    color:black;
   margin-left:0.67rem;
    margin-top:-0.1rem;display:block;

  }
  span:nth-child(3){
    font-size:0.15rem;
    color:black;
    margin-left:0.45rem;
    margin-top:-0.1rem;display:block;
  }
  img:nth-child(4){
    width:0.18rem;
    height:0.18rem;
    margin-left:0.65rem;
    margin-top:-0.1rem;
  }
}
</style>
