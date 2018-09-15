<template>
      <div>
        <div class="big">
          <header>
            <router-link to="/Detail_in" class="hea_icon">
              <img src="../../assets/Geng/zuogreen.jpg" @click="goback"/>
            </router-link>
            <div class="tittle">
              <h3>{{Detail_one.titles}}</h3>
            </div>
          </header>
          <div class="sec">
               <img :src=Detail_one.imgs>
               <div class="detail">
                 <p>{{Detail_one.title}}</p>
                 <p>{{Detail_one.subtitle}}</p>
                 <p><b>{{Detail_one.dian}}</b>{{Detail_one.pin}}</p>
                 <p><span>{{Detail_one.act}}</span><img :src=Detail_one.img v-if="Detail_one.img"></p>
                 <p>{{Detail_one.time}}</p>
                 <p>{{Detail_one.start}}</p>
               </div>
               <img @click="back(Detail_one.id)" src="../../assets/Geng/youkou.png" >
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "Detail_One",
        data(){
            return{
            }
        },
      props:["Detail_one"],
      methods:{
        goback(){
          this.$router.go(-1)
        },
        back(id){
            this.$router.push({
              path:"/Detailin",
              query:{
                 id:id
              }
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height:0.48rem;
    background:#06c1ae;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tittle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
  }
  .tittle h3 {
    color:white;
    font-size:0.15rem;
    text-align: center;
  }
  .hea_icon {
    display: block;
  }
  .hea_icon img {
    width:0.13rem;
    height:0.2rem;
    margin: 0 0.07rem;
  }
.sec{
  width:100%;
  height:100%;
  display: flex;
  background:url('../../assets/Geng/f4eb3a97b659f8cb814a55f07a32609.png') no-repeat;
  background-size:cover;
    img:nth-child(1){
      width:1rem;
      height:1.4rem;
      margin-top:0.16rem;
      margin-left:0.12rem;
    }
    .detail{
      margin-top:0.16rem;
      margin-left:0.09rem;
      display:flex;
      margin-bottom:0.14rem;
      flex-direction: column;
       p:nth-child(1){
         font-size:0.17rem;
         color:white;
         font-weight:600;
       }
      p:nth-child(2){
        font-size:0.12rem;
        color:white;
        margin-top:0.05rem;
      }
      p:nth-child(3){
        font-size:0.15rem;
        color:white;
        margin-top:0.05rem;
        display: flex;
        b{
          font-size:0.17rem;
          color:yellow;
        }
      }
      p:nth-child(4){
        display: flex;
        margin-top:0.06rem;
        span{
          font-size:0.12rem;
          color:#d3d1cd;
        }
        img{
          width:0.34rem;
          height:0.11rem;
          margin-left:0.03rem;
          margin-top:0.03rem;
        }
      }
      p:nth-child(5){
        font-size:0.12rem;
        color:#d3d1cd;
        margin-top:0.08rem;
      }
      p:nth-child(6){
        font-size:0.12rem;
        color:#d3d1cd;
        margin-top:0.06rem;
        margin-bottom:0.07rem;
      }
    }
  img:nth-child(3){
    width:0.09rem;
    height:0.11rem;
    margin-top:0.78rem;
    margin-left:0.6rem;
  }
}
</style>
