<template>
    <div>
        <Detail_One :Detail_one="items"></Detail_One>
        <Detail_Two></Detail_Two>
    </div>
</template>

<script>
    import Detail_One from "../components/CatEye_Detail/Detail_One";
    import Detail_Two from "../components/CatEye_Detail/Detail_Two";
    import {CatEye_Detail} from "../apis/CatEye_Detail";
    export default {
        name: "CatEye_Detail",
        components: { Detail_Two, Detail_One},
        data(){
             return{
                 items:[]
             }
        },
      methods:{
        Detail(){
          let id  = this.$route.query.id;
          CatEye_Detail.getCat_Detail(id,(data) => {
            this.items=data;
          })
        }
      },
      created(){
        this.Detail()
      }
    }
</script>

<style lang="scss" scoped>

</style>
