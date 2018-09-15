<template>
  <div class="box">
    <first :first="Cetail_in"></first>
    <second :second="Cetail_one"></second>
    <third :third="Cetail_two"></third>
    <fourth :fourth="Cetail_three" :fourth1="Cetail_three1" :fourth2="Cetail_three2"></fourth>
    <fifth :fifth="Cetail_four" :fifth1="Cetail_four1" :fifth2="Cetail_four2" :fifth3="Cetail_four3"></fifth>
    <sixth :sixth="Cetail_five"></sixth>
    <seventh :seventh="Cetail_seven"></seventh>
    <eighth :eighth="Cetail_in"></eighth>
    <ninth :ninth="Cetail_nine"></ninth>
  </div>
</template>

<script>
  import First from "../components/food/first";
  import Second from "../components/food/second";
  import Third from "../components/food/third";
  import Fourth from "../components/food/fourth";
  import Fifth from "../components/food/fifth";
  import Sixth from "../components/food/sixth";
  import Seventh from "../components/food/seventh";
  import Eighth from "../components/food/eighth";
  import Ninth from "../components/food/ninth";
  import {delicious} from "../apis/delicious";

  export default {
    components: {
      Ninth,
      Eighth,
      Seventh,
      Sixth,
      Fifth,
      Fourth,
      Third,
      Second,
      First},
    name: "side",
    data(){
      return{
        Cetail_in:[],
        Cetail_one:[],
        Cetail_two:[],
        Cetail_three:[],
        Cetail_three1:[],
        Cetail_three2:[],
        Cetail_four:[],
        Cetail_four1:[],
        Cetail_four2:[],
        Cetail_four3:[],
        Cetail_five:[],
        Cetail_seven:[],
        Cetail_nine:[],
      }
    },
    methods:{
      Detail_in(){
        delicious.getCat((data) => {
          this.Cetail_in=data[0].cnd;
          this.Cetail_one=data[0].cnf;
          this.Cetail_two=data[0].cng;
          this.Cetail_three=data[0].cnh;
          this.Cetail_three1=data[0].cnj;
          this.Cetail_three2=data[0].cnk;
          this.Cetail_four=data[0].cnl;
          this.Cetail_four1=data[0].cnz;
          this.Cetail_four2=data[0].cnx;
          this.Cetail_four3=data[0].cnc;
          this.Cetail_five=data[0].cnv;
          this.Cetail_seven=data[0].list;
          this.Cetail_nine=data[0].lis;
          console.log(data)
        })
      },

    },
    created(){
      this.Detail_in()
    }
  }
</script>

<style scoped>
  .box{
    overflow-x: hidden;
  }
</style>
