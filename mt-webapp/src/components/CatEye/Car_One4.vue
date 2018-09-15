<template>
  <div>
    <div class="sec">
      <div class="sec_head">
          <span>9月7日 周五</span>
      </div>
      <ul>
        <li v-for="i in two2.coming" :key="i.id" @click="change(i.id)">
          <a href="javascript:;">
            <img :src=i.img alt="">
            <div class="sec1">
              <p>{{i.nm}}<span v-if="i.version">{{i.version}}</span></p>
              <p>{{i.wish}}<b>{{i.showst}}</b></p>
              <p>{{i.star}}</p>
              <p>{{i.showInfo}}</p>
            </div>
            <img :src=i.imgs alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Car_One4",
        props:["two2"],
        data(){
          return{
          }
        },
        methods:{
            change(id){
              console.log(id);
              this.$router.push({
                path: '/CatEye_Detail',
                query: {
                  id: id
                }
              });
            }
        }
      }
</script>

<style lang="scss" scoped>
  .sec{
    width:100%;
    background:white;

    .sec_head{
      display: flex;
      margin-left:0.17rem;
        span{
          font-size:0.14rem;
          color:black;
          margin-top:0.15rem;
        }
    }
    ul{
      li{
        a{
          display: flex;
          img:nth-child(1){
            width:0.75rem;
            height:0.9rem;
            margin-left:0.15rem;
            margin-top:0.2rem;
          }
          .sec1{
            width:2rem;
            display: flex;
            flex-direction: column;
            margin-left:0.09rem;
            margin-top:0.16rem;
            p:nth-child(1){
              font-size:0.16rem;
              color:black;
              display: flex;
              font-weight:600;
              span{
                font-size:0.13rem;
                color:#bababa;
                margin-top:0.05rem;
              }
            }
            p:nth-child(2){
              font-size:0.13rem;
              color:#bababa;
              margin-top:0.11rem;
              b{
                font-size:0.12rem;
                color:#f99d00;
              }
            }
            p:nth-child(3){
              font-size:0.13rem;
              color:#bababa;
              margin-top:0.08rem;
            }p:nth-child(4){
               font-size:0.13rem;
               color:#bababa;
               margin-top:0.08rem;
             }
          }
          img:nth-child(3){
            width:0.47rem;
            height:0.27rem;
            margin-top:0.5rem;
            margin-left:0.1rem;
          }
        }
      }
    }
  }
</style>

