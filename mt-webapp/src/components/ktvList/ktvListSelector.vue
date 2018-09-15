<template>
  <div class="selector-box">
    <div class="selector">
      <ul>
        <li class="sel-btn" v-for="(sel,i) in selector" ><span class="arrow-down">{{sel.name}}</span></li>
        <!--<li @click="click(1)"><span>全城</span></li>-->
        <!--<li @click="click(2)"><span>默认排序</span></li>-->
        <!--<li @click="click(3)"><span>筛选</span></li>-->
      </ul>
    </div>
    <div class="shade">
      <div class="selector-hide">
        <div class="sel-hide sel-hide1">
          <div class="sel-hide-left">
            <div v-for="cla in classify" class="classify">{{cla.name}}<span>{{cla.count}}</span></div>
          </div>
          <div class="sel-hide-right">
            <div v-for="cla in subClassify" class="subClassify">{{cla.name}}<span>{{cla.count}}</span></div>
          </div>
        </div>
        <div class="sel-hide sel-hide2">
          <div class="change-area">
            <span @click="change(0)">商区</span>
            <span @click="change(1)">地铁站</span>
          </div>
          <div v-if="isBusiness" v-for="b in business" class="business">{{b.name}}<span>{{b.count}}</span></div>
          <div v-if="!isBusiness" v-for="m in metro" class="business">{{m.name}}<span>{{m.count}}</span></div>
        </div>
        <div class="sel-hide sel-hide3">
          <div v-for="s in sort" class="sort">{{s}}</div>
        </div>
        <div class="sel-hide sel-hide4">
          <div v-for="(f,i) in filter" class="filter">{{f.name}}<img @click="check(i)" class="checkBox" :src="f.imgSrc" alt=""/></div>
          <div class="save">
            <span @click="reset">重置</span><span>保存</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import "../../assets/yuan/js/jquery-1.8.3"
    export default {
      name: "ktvListSelector",
      data(){
        return {
          selector: [
            {name: 'KTV', isActive: true},
            {name: '全城', isActive: false},
            {name: '默认排序', isActive: false},
            {name: '筛选', isActive: false}
          ],
          classify: [
            {name: '美食', count: '13359 >', subClassify: []},
            {name: '今日新单', count: '947', subClassify: []},
            {name: '猫眼电影', count: '102', subClassify: []},
            {name: '全部分类', count: '88978', subClassify: []},
            {name: '酒店', count: '1563', subClassify: []},
            {name: '周边游', count: '1637', subClassify: []},
            {name: '休闲娱乐', count: '2668 >', subClassify: []},
            {name: '购物', count: '1 >', subClassify: []},
            {name: '度假出行', count: '0 >', subClassify: []},
            {name: '宴会', count: '9 >', subClassify: []},
            {name: '时尚购', count: '2122 >', subClassify: []},
            {name: '丽人', count: '6495 >', subClassify: []},
            {name: '旅游', count: '0 >', subClassify: []},
            {name: '生活服务', count: '5221 >', subClassify: []},
            {name: '酒店', count: '1563', subClassify: []},
            {name: '周边游', count: '1637', subClassify: []},
            {name: '休闲娱乐', count: '2668 >', subClassify: []},
            {name: '购物', count: '1 >', subClassify: []},
            {name: '度假出行', count: '0 >', subClassify: []},
            {name: '宴会', count: '9 >', subClassify: []},
            {name: '时尚购', count: '2122 >', subClassify: []},
            {name: '丽人', count: '6495 >', subClassify: []},
            {name: '旅游', count: '0 >', subClassify: []},
            {name: '生活服务', count: '5221 >', subClassify: []},
          ],
          subClassify: [
            {name: '全部', count: 2668},
            {name: '足疗/按摩', count: 820},
            {name: '洗浴/汗蒸', count: 159},
            {name: 'KTV', count: 191},
            {name: '酒吧', count: 107},
            {name: '电玩/游戏厅', count: 57},
            {name: '密室逃脱', count: 78},
            {name: '运动健身', count: 461},
            {name: '私人影院', count: 61},
            {name: 'DIY手工坊', count: 82},
            {name: '网吧网咖', count: 64},
            {name: '茶馆', count: 147},
            {name: '棋牌室', count: 130},
            {name: '轰趴馆', count: 167},
            {name: '足疗/按摩', count: 820},
            {name: '洗浴/汗蒸', count: 159},
            {name: 'KTV', count: 191},
            {name: '酒吧', count: 107},
            {name: '电玩/游戏厅', count: 57},
            {name: '密室逃脱', count: 78},
            {name: '运动健身', count: 461},
            {name: '私人影院', count: 61},
            {name: 'DIY手工坊', count: 82},
            {name: '网吧网咖', count: 64},
            {name: '茶馆', count: 147},
            {name: '棋牌室', count: 130},
            {name: '轰趴馆', count: 167}
          ],
          isBusiness: true,
          business: [
            {name: '全城', count: '382'},
            {name: '碑林区', count: '21 >'},
            {name: '雁塔区', count: '21 >'},
            {name: '高新区', count: '19 >'},
            {name: '莲湖区', count: '14 >'},
            {name: '未央区', count: '35 >'},
            {name: '新城区', count: '6 >'},
            {name: '灞桥区', count: '20 >'},
            {name: '临潼区', count: '7 >'},
            {name: '长安区', count: '18 >'},
            {name: '高陵区', count: '7 >'},
            {name: '阎良区', count: '9 >'},
            {name: '蓝田县', count: '3 >'},
            {name: '周至县', count: '2 >'},
            {name: '近郊', count: '0'},
            {name: '鄠邑区', count: '9 >'},
            {name: '西咸新区', count: '0'},
          ],
          metro: [
            {name: '1号线', count: '16 >'},
            {name: '2号线', count: '63 >'},
            {name: '3号线', count: '35 >'}
          ],
          sort: ['默认排序','离我最近','评价最高','人气最高','价格最低'],
          filter:[
            {name:'只看可预定KTV',imgSrc:require('../../assets/yuan/img/ktvList/filter-unchecked.jpg'),isChecked:false},
            {name:'只看免预约',imgSrc:require('../../assets/yuan/img/ktvList/filter-unchecked.jpg'),isChecked:false},
            {name:'节假日可用',imgSrc:require('../../assets/yuan/img/ktvList/filter-unchecked.jpg'),isChecked:false}
          ]
        }
      },
      methods:{
        click(index){
          for(let i=0;i<this.selector.length;i++){
            if(i!=index){
              this.selector[i].isActive=false;
            }
          }
          this.selector[index].isActive=!this.selector[index].isActive;
        },
        change(index){
          if(index==0){
            this.isBusiness=true;
          }else{
            this.isBusiness=false;
          }
        },
        check(index){
          this.filter[index].isChecked=!this.filter[index].isChecked;
          if(this.filter[index].isChecked){
            this.filter[index].imgSrc=require('../../assets/yuan/img/ktvList/filter-checked.jpg');
          }else{
            this.filter[index].imgSrc=require('../../assets/yuan/img/ktvList/filter-unchecked.jpg');
          }
        },
        reset(){
          for(let i in this.filter){
            this.filter[i].isChecked=false;
            this.filter[i].imgSrc=require('../../assets/yuan/img/ktvList/filter-unchecked.jpg');
          }
        }
      },
      mounted(){
        //控制点击按钮后的界面变化
        for(let i=0; i<$(".sel-btn").length; i++){
          $(".sel-btn")[i].onclick=function(){
            if($(this).find("span").attr("class")=="arrow-down"){
              $(".selector ul li span").removeClass("arrow-up").addClass("arrow-down");
              $(this).find("span").removeClass("arrow-down").addClass("arrow-up");
              $(".sel-hide").css("display","none");
              $(".sel-hide").eq(i).css("display","block");
              if(i==0){
                $(".sel-hide").eq(0).css("display","flex");
              }
              $(".selector-box").css("position","fixed");
              $(".selector-hide").animate({"height":"5.9rem"},500);
              $(".shade").css("display","block");
            }else{
              $(this).find("span").removeClass("arrow-up").addClass("arrow-down");
              $(".selector-hide").animate({"height":"0rem"},500,function(){
                $(".selector-box").css("position","relative");
                $(".shade").css("display","none");
              });
            }
          };
        }
        //全城商区、地铁站切换
        $(".change-area span").click( function() {
          $(".change-area span").css({"background":"transparent","color":"#5F5F5F"});
          $(this).css({"background":"#666666","color":"white"});
        });
        $(".change-area span").eq(0).click();
      }
    }
</script>

<style lang="scss" scoped>
  $selHeight: .42rem;

  .selector-box{
    width: 100%;
    z-index: 2;
    top: 0;
  }
  .selector{
    height: $selHeight;
    background: white;
    border-bottom: 1px solid #DDD9D1;
    box-sizing: border-box;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        flex: 1;
        text-align: center;
        border-right: 1px solid #D1CDC2;
        .arrow-down{
          font-size: .14rem;
          line-height: $selHeight;
          color: #666666;
        }
        .arrow-down:after {
          content: "";
          display: inline-block;
          border-top: .08rem solid #B7B7B7;
          border-left: .05rem solid transparent;
          border-right: .05rem solid transparent;
          border-bottom: 0;
          margin-left: .06rem;
        }
        .arrow-up{
          font-size: .14rem;
          line-height: .42rem;
          color: #06C1AE;
        }
        .arrow-up:after {
          content: "";
          display: inline-block;
          border-bottom: .08rem solid #06C1AE;
          border-left: .05rem solid transparent;
          border-right: .05rem solid transparent;
          border-top: 0;
          margin-left: .06rem;
        }
      }
      li:last-child{
        border: none;
      }
    }
  }
  .shade{
    width: 100%;
    height: 100%;
    position: fixed;
    top: $selHeight;
    z-index: 1;
    background: rgba(0,0,0,.7);
    display: none;
  }
  .selector-hide{
    height: 0;
    overflow: hidden;
    .sel-hide1{
      display: flex;
      height: 5.9rem;
      .sel-hide-left{
        width: 1.6rem;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        border-right: 1px solid #E3E0D7;
        .classify{
          height: .45rem;
          background: white;
          padding: 0 .1rem 0 .2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .14rem;
          color: #333333;
          border-bottom: 1px solid #EBE7E2;
          span{
            font-size: .12rem;
            color: white;
            background: #CCCCCC;
            border-radius: .05rem;
            padding: 0 .05rem;
          }
        }
      }
      .sel-hide-right{
        flex: 1;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        .subClassify{
          height: .45rem;
          background: #F6F4F0;
          padding: 0 .1rem 0 .2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .14rem;
          color: #333333;
          border-bottom: 1px solid #EBE7E2;
          span{
            color: #B5B5B5;
          }
        }
      }
    }
    .sel-hide2{
      background: white;
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      .change-area{
        display: flex;
        justify-content: center;
        align-items: center;
        height: .4rem;
        border-bottom: 1px solid #D5D1C7;
        span{
          display: block;
          width: 1.2rem;
          height: .3rem;
          font-size: .14rem;
          line-height: .3rem;
          color: #5F5F5F;
          text-align: center;
          border: 1px solid #858585;
          border-radius: .03rem;
        }
      }
      .business{
        height: .44rem;
        padding: 0 .07rem 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .14rem;
        color: #333333;
        border-bottom: 1px solid #EFEDE9;
        span{
          font-size: .12rem;
          color: white;
          background: #CCCCCC;
          border-radius: .05rem;
          padding: 0 .05rem;
        }
      }
    }
    .sel-hide3{
      background: white;
      .sort{
        height: .44rem;
        padding: 0 .07rem 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .14rem;
        color: #333333;
        border-bottom: 1px solid #EFEDE9;
      }
    }
    .sel-hide4{
      background: white;
      .filter{
        height: .44rem;
        padding: 0 .07rem 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .14rem;
        color: #333333;
        border-bottom: 1px solid #EFEDE9;
        img{
          width: .23rem;
        }
      }
      .save{
        height: .44rem;
        padding: 0 .07rem 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .14rem;
        color: #06C1AE;
        border-bottom: 1px solid #EFEDE9;
        background: #F6F4F0;
      }
    }
  }
</style>
