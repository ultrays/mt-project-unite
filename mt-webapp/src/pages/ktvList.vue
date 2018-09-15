<template>
    <div>
      <Header></Header>
      <Banner></Banner>
      <List :data="data.items"></List>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/ktvList/ktvListHeader'
    import Banner from '../components/ktvList/ktvListBanner'
    import List from '../components/ktvList/ktvListMain'
    import Footer from '../components/ktvList/ktvListFooter'
    import {KtvList} from "../apis/ktvList";
    export default {
      name: "ktvList",
      components:{
        Header,
        Banner,
        List,
        Footer
      },
      data(){
        return{
          data:{}
        }
      },
      methods:{
        cat(){
          KtvList.getCat((data)=>{
            this.data=data;
            // console.log(data);
          })
        }
      },
      created(){
        this.cat();
      }
    }
</script>

<style scoped>

</style>
