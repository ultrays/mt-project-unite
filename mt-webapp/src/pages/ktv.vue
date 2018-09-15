<template>
    <div>
      <Header></Header>
      <Banner></Banner>
      <Location></Location>
      <Reserve></Reserve>
      <Group :items="data.groupItems"></Group>
      <Evaluate :items="data.evaluateItems"></Evaluate>
      <Others></Others>
      <Nearby :items="data.nearbyItems"></Nearby>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/ktv/ktvHeader'
    import Banner from '../components/ktv/ktvBanner'
    import Location from '../components/ktv/ktvLocation'
    import Reserve from '../components/ktv/ktvReserve'
    import Group from '../components/ktv/ktvGroup'
    import Evaluate from "../components/ktv/ktvEvaluate";
    import Others from "../components/ktv/ktvOthers";
    import Nearby from "../components/ktv/ktvNearby";
    import Footer from "../components/ktv/ktvFooter";
    import {Ktv} from "../apis/ktv";
    export default {
      name: "ktv",
      components:{
        Header,
        Banner,
        Location,
        Reserve,
        Group,
        Evaluate,
        Others,
        Nearby,
        Footer
      },
      data(){
        return{
          data:{
            groupItems:[],
            evaluateItems:[],
            nearbyItems:[]
          }
        }
      },
      methods:{
        cat(){
          Ktv.getCat((data)=>{
            this.data=data;
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
