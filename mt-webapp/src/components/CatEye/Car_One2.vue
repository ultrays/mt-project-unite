<template>
    <div>
        <div class="sec">
            <ul>
              <li v-for="item in twos.list" :key="item.id" @click="Detail(item.id)">
              <a href="javascript:;">
                <img :src=item.imgs alt="">
                <div class="sec1">
                  <p>{{item.title}}<img :src=item.img v-if="item.img"></p>
                  <p>{{item.pin}}<b>{{item.shu}}</b></p>
                  <p>{{item.nei}}</p>
                  <p>{{item.jin}}</p>
                </div>
                <img :src=item.img1 alt="">
              </a>
            </li>
            </ul>
         </div>
    </div>
</template>

<script>
    export default {
        name: "Car_One2",
        props:["twos"],
        methods:{
          Detail(id){
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
            img{
              width:0.44rem;
              height:0.16rem;
              margin-top:0.05rem;
            }
          }
          p:nth-child(2){
            font-size:0.13rem;
            color:#6b6b6b;
            margin-top:0.11rem;
            b{
              font-size:0.15rem;
              color:#f99d00;
            }
          }
          p:nth-child(3){
            font-size:0.13rem;
            color:#6b6b6b;
            margin-top:0.08rem;
          }p:nth-child(4){
             font-size:0.13rem;
             color:#6b6b6b;
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
