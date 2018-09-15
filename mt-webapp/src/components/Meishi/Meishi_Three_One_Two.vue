<template>
    <div class="xx1">
      <div class="xx2">
        <div class="xx3">
          商圈
        </div>
        <div class="xx4">
          地铁
        </div>
      </div>
      <ul class="xx">
        <li class="xa">
          <p>全城</p>
          <span>599</span>
        </li>
        <li>
          <p>雁塔</p>
          <span>49</span>
        </li>
        <li>
          <p>高新</p>
          <span>42</span>
        </li>
        <li>
        <p>莲湖</p>
        <span>36</span>
      </li>
        <li>
          <p>莲湖</p>
          <span>36</span>
        </li>
        <li>
          <p>未央</p>
          <span>57</span>
        </li>
        <li>
          <p>新城</p>
          <span>28</span>
        </li>
        <li>
          <p>灞桥</p>
          <span>17</span>
        </li>
        <li>
        <p>临潼</p>
        <span>13</span>
      </li>
        <li>
          <p>长安</p>
          <span>22</span>
        </li>
        <li>
          <p>高陵</p>
          <span>5</span>
        </li>

        <li>
          <p>阎良</p>
          <span>3</span>
        </li>
        <li>
          <p>蓝田县</p>
          <span>1</span>
        </li>
        <li>
          <p>周至县</p>
          <span>2</span>
        </li>



      </ul>
    </div>
</template>

<script>
    export default {
        name: "Meishi_Three_One_Two"
    }
</script>

<style lang="scss" scoped>
  .xx1{

    position: absolute;
    z-index: 9999;
    top:40px;
    left: 0px;
    width:100%;
    height:3.72rem;
    background: #fff;
    .xx2{
      /*position: relative;*/
      /*position: fixed;*/

      top: 164px;
      display: flex;
      width:100%;
      height:0.3rem;
      z-index: 999999;
      .xx3{
        width:50%;
        height:0.3rem;
        border-bottom: 2px solid #0dc2b0;
        font-size: 0.12rem;
        text-align: center;
        background: #fff;
        line-height: 0.3rem;
      }
      .xx4{
        width:50%;
        height:0.3rem;
        font-size: 0.12rem;

        text-align: center;
        line-height: 0.3rem;
      }
    }
    .xx{
      margin-top: 0.02rem;
      overflow-y: scroll;
      width:100%;
      /*position: relative;*/
      top: 20px;
      height:3.42rem;
      .xa{
        width:100%;
        height:0.33rem;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
          font-size: 0.12rem;
          color:#25c7b8;
        }
        span{
          width:0.27rem;
          height:0.12rem;
          background: #c9c9c9;
          color:#fff;
          font-size: 0.12rem;
          border-radius: 5px;
        }
      }
      li{
        width:100%;
        height:0.33rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:2px solid #faf9f7;
        p{
          font-size: 0.12rem;
          margin-left: 0.14rem;
          color:#434343;
        }
        span{
          width:0.27rem;
          height:0.12rem;
          background: #c9c9c9;
          color:#fff;
          font-size: 0.12rem;
          border-radius: 5px;
          text-align: center;
          line-height: 0.12rem;
          margin-right: 0.07rem;
        }
      }
    }
  }
</style>

