<template>
 <div>
   <Meishi_One></Meishi_One>
   <Meishi_Two></Meishi_Two>
   <Meishi_Three :three="temps"></Meishi_Three>
 </div>
</template>

<script>
    import Meishi_One from "../components/Meishi/Meishi_One";
    import Meishi_Two from "../components/Meishi/Meishi_Two";
    import Meishi_Three from "../components/Meishi/Meishi_Three";
    import {MeiShi} from "../apis/MeiShi"
  export default {
        name: "Meishi",
    components: {Meishi_Three, Meishi_Two, Meishi_One},
    data(){
          return{
            temps:[]
          }
    },
     methods:{
          Cat(){
            MeiShi.getCat((data)=>{
              this.temps = data[0].list;
            })
          }
     },
    created(){
          this.Cat()
    }
    }
</script>

<style scoped>

</style>
