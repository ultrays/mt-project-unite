<template>
  <div class="box">
    <z :z="Cetail_z" :z1="Cetail_z1"></z>
    <pf :pf="Cetail_pf" :pf1="Cetail_pf1" :pf2="Cetail_pf2"></pf>
    <ywzn :ywzn="Cetail_ywzn"></ywzn>
    <tj :tj="Cetail_tj" :tj1="Cetail_tj1"></tj>
    <mp :mp="Cetail_mp"></mp>
    <mvp :mvp="Cetail_mvp"></mvp>
    <xg :xg="Cetail_xg"></xg>
    <dj :dj="Cetail_dj"></dj>
    <bj :bj="Cetail_bj"></bj>
    <cq :cq="Cetail_cq" ></cq>
    <fr :fr="Cetail_fr" :fr1="Cetail_fr1"></fr>
    <wdj :wdj="Cetail_wdj"></wdj>
    <seventh :seventh="Cetail_seventh"></seventh>
  </div>
</template>

<script>

  import Z from "../components/Side_Detail/z";
  import Pf from "../components/Side_Detail/pf";
  import Ywzn from "../components/Side_Detail/ywzn";
  import Tj from "../components/Side_Detail/tj";
  import Mp from "../components/Side_Detail/mp";
  import Mvp from "../components/Side_Detail/mvp";
  import Xg from "../components/Side_Detail/xg";
  import Dj from "../components/Side_Detail/dj";
  import Bj from "../components/Side_Detail/bj";
  import Cq from "../components/Side_Detail/cq";
  import Fr from "../components/Side_Detail/fr";
  import Jdxx from "../components/Side_Detail/jdxx";
  import Wdj from "../components/Side_Detail/wdj";
  import Seventh from "../components/Side_Detail/seventh";
  import {zbyc} from "../apis/zbyc"

  export default {
    components: {
      Seventh,
      Wdj,
      Jdxx,
      Fr,
      Cq,
      Bj,
      Dj,
      Xg,
      Mvp,
      Mp,
      Tj,
      Ywzn,
      Pf,
      Z},
    name: "side_-detail",
    data(){
      return{
        Cetail_z:[],
        Cetail_z1:[],
        Cetail_pf:[],
        Cetail_pf1:[],
        Cetail_pf2:[],
        Cetail_ywzn:[],
        Cetail_tj:[],
        Cetail_tj1:[],
        Cetail_mp:[],
        Cetail_mvp:[],
        Cetail_xg:[],
        Cetail_dj:[],
        Cetail_bj:[],
        Cetail_cq:[],
        Cetail_fr:[],
        Cetail_fr1:[],
        Cetail_wdj:[],
        Cetail_seventh:[],
      }
    },
    methods:{
      Detail_in(){
        zbyc.getCat((data) => {
          this.Cetail_z=data[0].aq;
          this.Cetail_z1=data[0].aw;
          this.Cetail_pf=data[0].ae;
          this.Cetail_pf1=data[0].ar;
          this.Cetail_pf2=data[0].at;
          this.Cetail_ywzn=data[0].ay;
          this.Cetail_tj=data[0].wps;
          this.Cetail_mp=data[0].ap;
          this.Cetail_mvp=data[0].pop;
          this.Cetail_xg=data[0].wp;
          this.Cetail_dj=data[0].au;
          this.Cetail_bj=data[0].au;
          this.Cetail_cq=data[0].ai;
          this.Cetail_fr=data[0].fr;
          this.Cetail_fr1=data[0].br;
          // this.Cetail_jdxx=data[0];
          // this.Cetail_wdj=data[0].br;
          this.Cetail_seventh=data[0].list;
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

