<template>
    <div>
        <div class="head">
            <span>媒体库</span>
        </div>
        <div class="nav">
            <ul>
              <li v-for="o in Detailfour" :key="o.id">
                <a href="#">
                    <img :src=o.img>
                </a>
              </li>
            </ul>
        </div>
        <CatEye_Detail_in_Five :sidefive="sidess" :itemsix="itemfive" :msgsix="msgfive" :fsix="ffive"></CatEye_Detail_in_Five>
    </div>
</template>

<script>
    import CatEye_Detail_in_Five from "./CatEye_Detail_in_Five";
    export default {
        name: "CatEye_Detail_in_Four",
        components: {CatEye_Detail_in_Five},
        props:["Detailfour","sidess","itemfive","msgfive","ffive"],
        data(){
            return{
            }
         }
     }
</script>

<style lang="scss" scoped>
.head{
  width:100%;
  height:0.36rem;
  background: white;
  padding-left:0.12rem;
  margin-top:0.08rem;
  box-sizing: border-box;
  display: flex;
   span{
     font-size:0.13rem;
     margin-top:0.1rem;
     color:black;
   }
}
  .nav{
    width:100%;
    background:white;
    ul{
      width:100%;
      height:0.59rem;
      display: flex;
      overflow-x: scroll;
      background:white;
      li{
        display: flex;
        margin-left:0.07rem;
        a{
          width:100%;
          display: flex;
          img{
            height:0.59rem;
          }
        }
      }
    }
  }
</style>
