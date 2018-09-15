<template>
    <div>
        <div id="head">
           <ul >
             <li @click="change(0)" >
               <a href="#">
                   <span>今天09月04日</span>
               </a>
             </li>
             <li @click="change(1)">
               <a href="#">
                 <span>明天09月05日</span>
               </a>
             </li>
             <li @click="change(2)">
               <a href="#">
                 <span>后天09月06日</span>
               </a>
             </li>
             <li @click="change(3)">
               <a href="#">
                 <span>周五09月07日</span>
               </a>
             </li>
             <li @click="change(4)">
               <a href="#">
                 <span>周六09月08日</span>
               </a>
             </li>
             <li @click="change(5)">
               <a href="#">
                 <span>周日09月09日</span>
               </a>
             </li>
           </ul>
          <Detail_Three></Detail_Three>
          <Detail_Four v-show="flag===0"></Detail_Four>
          <Detail_Five v-show="flag===1"></Detail_Five>
          <Detail_Six v-show="flag===2"></Detail_Six>
          <Detail_seven v-show="flag===3"></Detail_seven>
          <Detail_eight v-show="flag===4"></Detail_eight>
          <Detail_nine v-show="flag===5"></Detail_nine>
        </div>
    </div>
</template>

<script>
  import Detail_Five from "./Detail_Five";
  import Detail_Six from "./Detail_Six";
  import Detail_seven from "./Detail_seven";
  import Detail_eight from "./Detail_eight";
  import Detail_nine from "./Detail_nine";
  import Detail_Four from "./Detail_Four";
  import Detail_Three from "./Detail_Three";
    export default {
        name: "Detail_Two",
      components: {Detail_Three, Detail_Four, Detail_Five,Detail_Six,Detail_seven,Detail_eight,Detail_nine},
      data(){
          return{
            flag:0,
          }
      },
      methods:{
        change(v){
          this.flag=v
        },
        }
    }
</script>

<style lang="scss" scoped>
#head{
  width:100%;
  height:0.34rem;
  background:white;
  ul{
    display: flex;

    overflow-x: scroll;
    li{
      a{
        width:1.2rem;
        display: flex;
        &:hover{
           border-bottom:2px solid #f1514c;
        }
        span{
          font-size:0.12rem;
          height:0.2rem;
          color:#969696;
          margin-top:0.11rem;
          margin-left:0.14rem;
          &:hover{
            color:#f1514c;
          }
        }
      }
    }
  }
}
</style>
