<template>
    <div class="nav">
      <a href="javascript:;">美发</a>
      <a href="javascript:;">美容美体</a>
      <a href="javascript:;">美甲美睫</a>
      <a href="javascript:;">瑜伽舞蹈</a>
      <a href="javascript:;">瘦身纤体</a>
      <a href="javascript:;">韩式定妆</a>
      <a href="javascript:;">祛痘</a>
      <a class="b" href="javascript:;">。。。</a>
      <a class="a" href="javascript:;">整形</a>
      <a class="a"  href="javascript:;">化妆品</a>
      <a class="a" href="javascript:;">全部</a>
      <a class="a" href="javascript:;"></a>
    </div>
</template>

<script>
    export default {
        name: "Beautylist_Two",
      mounted(){
        $(".b").click(function(){
          $(".a").css("display","block");
          $(".b").html("纹身")
        })
      }
    }
</script>

<style lang="scss" scoped>
   .nav{
     width:100%;
     /*height:0.9rem;*/
     display: flex;
     background: #fff;
     flex-wrap: wrap;
     box-sizing: border-box;

     a{
       font-size: 0.14rem;
       box-sizing: border-box;
       border-right: 1px solid #f8f8f8;
       text-align: center;
       /*line-height: 0.44rem;*/
       color:#363636;
       width:25%;
       /*height:0.44rem;*/
       padding: 0.15rem 0;
       border-bottom: 1px solid #f8f8f8;
     }
     .a{
       display: none;
     }
   }
</style>
