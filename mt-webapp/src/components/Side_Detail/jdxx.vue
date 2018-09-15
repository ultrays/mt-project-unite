<template>
    <div>
      <p class="z">景点信息</p>
      <div class="jn">
          <p>优待政策</p>
          <p>免票政策: 6周岁(含)以下凭身份证、户口本或身高1.2米(含)以下儿童、6...</p>
      </div>
      <div class="x">
        <p>开放时间</p>
        <p>营业中</p>
        <p>全天 09:00- 22:00,21:00停止入场</p>
      </div>
      <div class="c">
        <p>用时建议</p>
        <p>2-4小时</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "jdxx",
      props:["jdxx"]
    }
</script>

<style scoped>
  .z{
    width:100%;
    margin-left: 0.15rem;

    font-size: 0.18rem;
    line-height: 0.5rem;
    border-bottom: 2px solid #f4f6f7;
  }
  .jn{
    margin-left: 0.15rem;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    line-height: 0.25rem;
    border-bottom: 2px solid #f4f6f7;
  }
  .jn :nth-child(1){
    font-size: 0.12rem;
    color: #403d40;
    width: 0.8rem;
    padding-right: 0.25rem;
  }
  .jn :nth-child(2){
    font-size: 0.14rem;
    color: #1c1d1d;
    overflow: hidden;
  }
  .x{
    margin-left: 0.15rem;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    line-height: 0.5rem;
    border-bottom: 2px solid #f4f6f7;
  }
  .x :nth-child(1){
    font-size: 0.12rem;
    color: #403d40;
    margin-right: 0.3rem;
  }
  .x :nth-child(2){
    color: #2f98ec;
    font-size: 0.1rem;
    background: #f6fbff;
    line-height: 0.16rem;
    height: 0.16rem;
    border-radius: 5px;
    margin-top: 0.17rem;
    margin-right: 0.09rem;
  }
  .x :nth-child(3){
    font-size: 0.13rem;

  }
  .c{
    line-height: 0.5rem;
    margin-left: 0.15rem;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    border-bottom: 2px solid #f4f6f7;
  }
  .c :nth-child(1){
    font-size: 0.12rem;
    color: #403d40;
    margin-right: 0.32rem;
  }
  .c :nth-child(2){
    font-size: 0.13rem;
  }
</style>
