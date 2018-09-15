<template>
    <div>
        <div class="nav">
            <div class="nav_one">
                <span>{{n.te}}</span>
            </div>
            <div class="nav_two">
                <p>{{n.pc}}</p>
                <p v-show="flag">{{n.py}}</p>
                <p @click="select" :style=rotates><img src="../../assets/Geng/xiajian.jpg"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatEye_Detail_in_Two",
      props:["n"],
        data(){
           return{
               flag:false,
               rotates:"transform:rotateX(0deg)"
           }
        },
        methods:{
             select(){
               this.flag=!this.flag;
               if(this.rotates==="transform:rotateX(0deg)"){
                 this.rotates="transform:rotateX(180deg)"
               }else{
                 this.rotates="transform:rotateX(0deg)"
               }
             }
        }
    }
</script>

<style lang="scss" scoped>
.nav{
  width:100%;
  background:white;
  .nav_one{
      width:3.52rem;
      height:0.3rem;
      margin-left:0.12rem;
      margin-top:0.14rem;
      display: flex;
      border-radius:3px;
      background:#ff9900;
    span{
      font-size:0.13rem;
      color:white;
      margin-left:1.51rem;
      margin-top:0.08rem;
    }
  }
  .nav_two{
    width:3.53rem;
    display: flex;
    flex-direction: column;
    margin-left:0.12rem;
    p:nth-child(1){
      font-size:0.12rem;
      color:#5b5b5b;
      margin-top:0.1rem;
    }
    p:nth-child(2){
      font-size:0.12rem;
      color:#5b5b5b;
    }
    p:nth-child(3){
      width:3.53rem;
      height:0.23rem;
        img{
          width:0.16rem;
          height:0.12rem;
          margin-top:0.06rem;
          margin-left:1.71rem;
        }
    }
  }
}
</style>
