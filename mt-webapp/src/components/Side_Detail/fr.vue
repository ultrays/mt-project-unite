<template>
  <div>
    <div class="m" v-for="f in fr" :key="f.id">
      <img class='jid' :src=f.q alt=""/>
      <div class="jir">
        <a class="fr" href="">{{f.dt}}
        </a>
        <p class="ys">{{f.km}}</p>
        <p class="jz">
          <a>{{f.qi}} <b>></b></a>
          <a>{{f.qo}}</a>
        </p>
        <!--<img class="kh" src="../../assets/Zhang/uykh.jpg" alt="">-->
      </div>
    </div>


    <div class="cq" v-for="b in fr1" :key="b.id">
      <div class="cw">
        <p>{{b.cq}}</p>
        <p>{{b.yy}}</p>
        <p>{{b.fc}}</p>
      </div>
      <div class="ce">
        <p>{{b.bi}}</p>
        <p>{{b.wl}}</p>
      </div>
      <img :src=b.ig alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "fr",
    props:["fr","fr1"]
  }
</script>

<style scoped>
  .m{
    display: flex;
    margin-left: 0.15rem;
    border-bottom: 2px solid #f7f8f9;
  }
  .jid{
    width: 1rem;
    height: 0.8rem;
    margin-bottom: 0.15rem;
  }
  .jir{
    display: flex;
    flex-direction: column;
  }
  .fr{
    font-size: 0.14rem;
    color: black;
    margin-left: 0.1rem;
  }
  .ys{
    font-size: 0.12rem;
    color: #606669;
    width: 1.5rem;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
  }
  .jz{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1.9rem;
    margin-top: -0.3rem;

  }
  .jz a{
    display: block;
    font-size: 0.12rem;
  }
  .jz :first-child{
    color: #ff4913;
  }
  .jz :first-child b{
    color: #606669;
    font-size: 0.18rem;
    text-decoration: none;
  }
  .jz :last-child{
    text-decoration: line-through;
  }

  .cq{
    width: 100%;
    display: flex;
  }
  .cw{

  }
  .cw :nth-child(1){
    font-size: 0.12rem;
    width: 2.3rem;
    height: 0.36rem;
    margin-top: 0.13rem;
    margin-left: 0.17rem;
    margin-right: 0.5rem;
  }
  .cw :nth-child(2){
    width: 0.4rem;
    height: 0.16rem;
    font-size: 0.09rem;
    margin-left: 0.17rem;
    color: #2ea2ff;
    border: 1px solid #b3deff;
    text-align: center;
    border-radius: 2px;
  }
  .cw :nth-child(3){
    font-size: 0.1rem;
    color: #626a6c;
    margin-left: 0.17rem;
    margin-bottom: 0.15rem;
  }
  .ce{

  }
  .ce :nth-child(1){
    font-size: 0.13rem;
    color: #ff6433;
    margin-top: 0.27rem;
    margin-right: 0.09rem;

  }
  .ce :nth-child(2){
    font-size: 0.09rem;
    color: #7e8385;
  }
  .cq img{
    width: 0.07rem;
    height: 0.1rem;
    margin-top: 0.33rem;
  }
</style>

