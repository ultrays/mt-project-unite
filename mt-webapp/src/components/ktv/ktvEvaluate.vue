<template>
  <div class="evaluate">
    <div class="header">评价</div>
    <div v-for="item in items" class="item">
      <div class="user">
        <div class="user-head">
          <img :src="item.imgSrc" alt=""/>
        </div>
        <div class="user-info">
          <div class="user-name">{{item.name}}</div>
          <div class="user-bottom">
            <div class="user-star">
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
            </div>
            <div class="date">{{item.date}}</div>
          </div>
          <div v-show="item.isGood" class="postmark">
            <img src="../../assets/yuan/img/ktv/evaluate-icon.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-text">
          {{item.text}}
        </div>
        <div class="content-img">
          <img v-for="img in item.imgs" :src="img.img" alt=""/>
        </div>
      </div>
      <div class="reply">
        <span class="arrow"></span>
        <div class="reply-header">
          <div class="reply-tit">商家回复：</div>
          <div class="reply-date">{{item.replyDate}}</div>
        </div>
        <div class="reply-body">
          <p>{{item.replyText}}</p>
        </div>
      </div>
    </div>
    <div class="evaluate-other">
      查看全部30928条评价
      <span class="icon"><img src="../../assets/yuan/img/ktv/icon-go.jpg" alt=""/></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ktvEvaluate",
      props:{
        items:{}
      }
    }
</script>

<style lang="scss" scoped>
  .evaluate{
    padding-left: .1rem;
    background: white;
    border-top: 1px solid #ECE9E4;
    border-bottom: 1px solid #ECE9E4;
    margin-top: .1rem;
    .header{
      height: .45rem;
      font-size: .18rem;
      line-height: .45rem;
      color: #999999;
      border-bottom: 1px solid #ECE9E4;
    }
    .item{
      padding-bottom: .1rem;
      border-bottom: 1px solid #EFEDE9;
      .user{
        display: flex;
        align-items: center;
        height: .65rem;
        .user-head{
          width: .37rem;
          height: .37rem;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .user-info{
          flex: 1;
          position: relative;
          margin-left: .05rem;
          .user-name{
            font-size: .12rem;
            color: #666666;
          }
          .user-bottom{
            display: flex;
            align-items: center;
            .user-star{
              color: #f90;
              em{
                font-size: .2rem;
                font-style: normal;
              }
            }
            .date{
              margin-left: .1rem;
              color: #999999;
            }
          }
          .postmark{
            position: absolute;
            right: .2rem;
            bottom: calc(50% - .25rem);
            img{
              width: .5rem;
              height: .5rem;
            }
          }
        }
      }
      .content{
        padding-right: .1rem;
        margin-bottom: .1rem;
        .content-text{
          font-size: .19rem;
          color: #333333;
        }
        .content-img{
          padding: .1rem 0 .1rem;
          display: flex;
          img{
            width: .55rem;
            height: .5rem;
            margin-right: .05rem;
          }
        }
      }
      .reply{
        background: #F7F7F6;
        position: relative;
        padding: 0 .1rem .1rem.1rem;
        margin-right: .1rem;
        border-radius: .03rem;
        .arrow{
          display: block;
          width: 0;
          height: 0;
          border: .07rem solid transparent;
          border-bottom-color: #F7F7F6;
          position: absolute;
          left: 0.23rem;
          top: -0.15rem;
        }
        .reply-header{
          height: .38rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ECEBE8;
          .reply-tit{
            font-size: .18rem;
            color: #666666;
          }
          .reply-date{
            color: #999999;
          }
        }
        .reply-body{
          font-size: .17rem;
          color: #ED852C;
          margin-top: .1rem;
        }
      }
    }
    .evaluate-other{
      height: .4rem;
      font-size: .15rem;
      line-height: .4rem;
      color: #06C1AE;
      position: relative;
      .icon{
        position: absolute;
        right: .15rem;
        top: calc(50% - .09rem);
        img{
          width: .15rem;
          height: .18rem;
        }
      }
    }
  }

</style>
