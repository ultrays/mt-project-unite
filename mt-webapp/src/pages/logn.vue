<template>
    <div>
      <div class="x">
        <img src="../assets/Zhang/d1.jpg" alt="">
        <a href="">帮助</a>
      </div>
      <p class="hyd">欢迎登录美团</p>


        <div class="wbk">
          <p>+86</p>
          <img src="../assets/Zhang/uykh.jpg" alt="">
          <input type="text" placeholder="请输入手机号" class="search-iphone" />
        </div>
        <div class="bm">
          <!--默认显示的input-->
          <div class="xsd">
            <input type="password"  placeholder="请输入密码" class="search-pass" />
              <img id="b" src="../assets/Zhang/d3.jpg" onclick="Show()" alt="">
          </div>
          <!--隐藏的input框-->
          <div class="ycd">
            <input type="text"  placeholder="请输入密码" class="search-bass" />
            <img id="c" src="../assets/Zhang/d2.jpg" onclick="Hide()" alt="">
          </div>
        </div>


      <a class="logN" href="">登录</a>
      <div class="sy">
        <a href="">验证码登录</a>
        <a href="">忘记密码</a>
      </div>
      <div class="wq">
        <a class="qq" href="">
          <img src="../assets/Zhang/d4.jpg" alt="">
        </a>
        <a class="wx" href="">
          <img src="../assets/Zhang/d5.jpg" alt="">
        </a>
      </div>
      <div class="xy">
        <p>登录代表你已同意</p>
        <a href="">《美团网用户协议》</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "logn",
      mounted:function temp(){
    const searchPass = document.getElementsByClassName("search-pass");
    const xsd = document.getElementsByClassName("xsd");
    const ycd = document.getElementsByClassName("ycd");
    const searchBass = document.getElementsByClassName("search-bass");

    function Show(){
      const val = searchPass.value;//将password的值传给text
      searchBass.value = val;
      xsd.style.display = "none";
      ycd.style.display = "block";
    }
    Show();
    Hide();
    function Hide(){
      const val = searchBass.value;//将text的值传给password
      searchPass.value = val;
      xsd.style.display = "block";
      ycd.style.display = "none";
    }


    }
    }
</script>

<style scoped>
  .x{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.62rem;
  }
  .x img{
    width: 0.18rem;
    height: 0.18rem;
    margin-left: 0.14rem;
    margin-top: 0.17rem;
  }
  .x a{
    display: block;
    font-size: 0.15rem;
    color: #24a38a;
    margin-top: 0.14rem;
    margin-right: 0.13rem;
  }
  .hyd{
    font-size: 0.21rem;
    margin-left: 0.47rem;
    margin-bottom: 0.76rem;
    font-weight: 500;
  }

  .wbk{
      display: flex;
    margin-left: 0.45rem;
    border-bottom: 2px solid #cdcdcd;
    width: 2.87rem;
  }
  .wbk p{
    font-size: 0.08rem;

    margin-right: 0.05rem;
  }
  .wbk img{
    width: 0.07rem;
    height: 0.1rem;
    margin-right: 0.15rem;
  }
  .wbk .search-iphone{
    width: 2.5rem;
    margin-bottom: 0.21rem;
    display: block;
    outline:none;
  }
  .bm{
      position: relative;
  }
  .xsd{
    margin-top: 0.17rem;
    display: flex;
    margin-left: 0.45rem;
    border-bottom: 2px solid #cdcdcd;
    width: 2.87rem;
  }
  .xsd input{
    outline:none;
    margin-right: 0.8rem;
  }
  .xsd img{
    width: 0.28rem;
    height: 0.18rem;
    margin-bottom: 0.1rem;
  }
  .ycd{
    position: absolute;
    left: 0;
    top:0;
    display: flex;
    margin-left: 0.45rem;
    border-bottom: 2px solid #cdcdcd;
    width: 2.87rem;
    display: none;
  }
  .ycd input{
    outline:none;
    margin-right: 0.8rem;
  }
  .ycd img{
    width: 0.28rem;
    height: 0.18rem;
    margin-bottom: 0.1rem;
  }
  .logN{
    display: block;
    font-size: 0.13rem;
    border-radius: 26px;
    background: #b1f2ec;
    text-align: center;
    line-height: 0.48rem;
    width: 2.92rem;
    height: 0.48rem;
    margin-left: .4rem;
    margin-top: .5rem;
    color: #ebfbfe;
  }
  .sy{
    width: 100%;
    display: flex;
    font-size: 0.12rem;

  }
  .sy a{
    display: block;
    color: #101010;
  }
  .sy :nth-child(1){
    margin-left: 0.45rem;
    margin-top: 0.28rem;
  }
  .sy :nth-child(2){
    margin-left: 1.68rem;
    margin-top: 0.28rem;
  }
  .wq{
    width: 100%;
    display: flex;
    margin-top: 0.83rem;
  }
  .wq a{

    display: flex;
  }
  .wq .qq{
    display: flex;
    margin-left: 0.8rem;
  }
  .wq .wx{
    display: flex;
    margin-left: 0.8rem;
  }
  .wq .qq img{
    width: 0.56rem;
    height: 0.56rem;
  }
  .wq .wx img{
    width: 0.56rem;
    height: 0.56rem;
  }
  .xy{
    margin-top: 0.26rem;
    display: flex;

  }
  .xy p{
    font-size: 0.12rem;
    color: #272727;
    margin-left: 0.8rem;
  }
  .xy a{
    font-size: 0.12rem;
    color: #434343;
    display: flex;
  }
</style>
