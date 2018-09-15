<template>
<div class="md1">
    <div class="sec">
      <div class="secA">
        <p>购买须知</p>
        <img src="../../assets/imagewu/xz.png" alt="">
      </div>
      <ul>
        <li v-for="i in four1" :key="i.id">
          <span>{{i.data}}</span>
          <p>{{i.time}}</p>
          <p>{{i.time1}}</p>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
    export default {
        name: "Beautydetalis_Four",
      props:["four1"],
      data(){
          return{
            instructions:[
              {data:"有效期",time:"2015-06-06至2019-12-26"},
              {data:"预约信息",time:"请您提前2小时预约"},
              {data:"适用人数",time:"每张团购券最多1人使用"},
              {data:"适用人群",time:"女宾专享"},
              {data:"规则提醒",time:"不再与其他优惠同享"},
              {data:"温馨提示",time:"如需团购券发票，请您在消费时向商户咨询", time1:"为了保障您的权益，建议使用美团、点评网线上支付。若使用其他支付方式导致纠纷，美团、点评网不承担任何责任，感谢您的理解和支持！"},
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .md1{
    margin-top: 0.12rem;
    margin-bottom: 0.12rem;
    width:100%;
    background: #fff;
    .sec{
      width:100%;
      .secA{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin-left: 0.18rem;
        padding-top: 0.16rem;
        padding-bottom: 0.16rem;
        p{
          /*margin-left: 0.18rem;*/
          margin-right: 0.08rem;
          font-size: 0.14rem;
          color:#141414;
        }
        img{
          width:0.11rem;
          height:0.15rem;
        }
      }
      ul{
        width:100%;
        li{
          margin-left: 0.18rem;
          border-bottom: 1px solid #eee;
          padding:0.15rem 0;
          padding-right: 0.2rem;
          box-sizing: border-box;
          span{
            font-size: 0.12rem;
            color:#7b7b7b;
            display: block;
          }
          p{
            margin: 0.11rem 0;
            font-size: 0.14rem;
            color: #2b2b2b;
          }

        }
      }
    }
  }
</style>
