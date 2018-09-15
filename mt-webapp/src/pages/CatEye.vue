<template>
   <div >
     <Car_One_head></Car_One_head>
     <Cat_One :ones="temps"></Cat_One>
     <Car_Foot ></Car_Foot>
   </div>
</template>

<script>
    import Car_One_head from "../components/CatEye/Car_One_head";
    import Cat_One from "../components/CatEye/Cat_One";
    import Car_Foot from "../components/CatEye/Car_Foot";
    import {CatEye} from "../apis/CatEye";
    export default {
        name: "CatEye",
        components: {Car_One_head, Car_Foot, Cat_One},
        data(){
            return{
              temps:[],
              item:[]
            }
        },
      methods:{
         Cat(){
           CatEye.getCat((data) => {
            this.temps=data[0].biglist[0];
          })
        }
      },
        created(){
           this.Cat()
        }
    }
</script>

<style lang="scss" scoped>

</style>
