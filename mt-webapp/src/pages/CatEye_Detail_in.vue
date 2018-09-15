<template>
    <div>
      <div class="header">
        <img @click="gobacks()" src="../assets/Geng/zuogreen.jpg">
        <span>碟中谍6：全面瓦解</span>
      </div>
       <CatEye_Detail_in_One :DetailOne="Cetail_in"></CatEye_Detail_in_One>
      <CatEye_Detail_in_Two :n="i" v-for="i in navss" :key="i.id"></CatEye_Detail_in_Two>
      <CatEye_Detail_in_Three :Detailthree="actor"></CatEye_Detail_in_Three>
      <CatEye_Detail_in_Four :Detailfour="tv" :sidess="sides" :itemfive="itemss" :msgfive="messages" :ffive="footss"></CatEye_Detail_in_Four>
    </div>
</template>

<script>
    import CatEye_Detail_in_One from "../components/CatEye_Detail_in/CatEye_Detail_in_One";
    import CatEye_Detail_in_Two from "../components/CatEye_Detail_in/CatEye_Detail_in_Two";
    import CatEye_Detail_in_Three from "../components/CatEye_Detail_in/CatEye_Detail_in_Three";
    import CatEye_Detail_in_Four from "../components/CatEye_Detail_in/CatEye_Detail_in_Four";
    import {CatEye} from "../apis/CatEye";
    export default {
        name: "CatEye_Detail_in",
      components: {CatEye_Detail_in_Four, CatEye_Detail_in_Three, CatEye_Detail_in_Two, CatEye_Detail_in_One},
       data(){
          return{
               Cetail_in:[],
               navss:[],
               actor:[],
               tv:[],
               sides:[],
              itemss:[],
            messages:[],
             footss:[]
          }
       },
      methods:{
        Cat(){
          CatEye.getCat((data) => {
            this.Cetail_in = data[0].deta;
            this.navss=data[0].navs;
            this.actor=data[0].acts;
             this.tv=data[0].tvts;
            this.sides=data[0].side;
             this.itemss=data[0].items;
             this.messages=data[0].msgs;
             this.footss=data[0].foots;
          })
        },
        gobacks(){
          this.$router.go(-1);
        }
      },
      created(){
        this.Cat()
      }
    }
</script>

<style lang="scss" scoped>
  .header{
    width:100%;
    height:0.4rem;
    background:#06c1ae;
    display: flex;
    img{
      width:0.13rem;
      height:0.2rem;
      margin-left:0.1rem;
      margin-top:0.1rem;
    }
    span{
      color:white;
      font-size:0.15rem;
      margin-top:0.08rem;
      margin-left:1.05rem;

    }
  }
</style>

