<template>
  <div>
    <ul class="ul">
      <li class="li" v-for="q in seven" :key="q.id">
        <div class="li1">
          <div class="liA">
            <p>{{q.title}}</p>
            <img :src=q.img alt="">
          </div>
          <div class="liB">
            <img :src=q.img1 alt="">
            <p>{{q.pinfen}}</p>
            <span>{{q.guanggao}}</span>
          </div>
          <div class="liC">
            {{q.jl}}
            <span>{{q.dd}}</span>
          </div>
        </div>
        <ul class="li2">
          <li>
            <img :src=q.img2 alt="">
            <div class="li2A">
              <h6>{{q.tc}}</h6>
              <div class="li2B">
                <div>
                  <span>{{q.jg}}<p>{{q.dw}}</p></span>
                  <h4>{{q.yj}}</h4>
                </div>
                <h5>
                  {{q.xl}}
                </h5>
              </div>
            </div>
          </li>
          <li>
            <img :src=q.img4 alt="">
            <div class="li2A">
              <h6>{{q.tc1}}</h6>
              <div class="li2B">
                <div>
                  <span>{{q.jg1}}<p>{{q.dw1}}</p></span>
                  <h4 class="h4">{{q.yj1}}</h4>
                </div>
                <h5>
                  {{q.xl1}}
                </h5>
              </div>
            </div>
          </li>
        </ul>
        <div class="li3">
          <p>{{q.qt}}</p>
          <img :src=q.img3 alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Beautylist_Seven",
    data(){
      return{

      }
    },
    props:["seven"]
  }
</script>

<style lang="scss" scoped>
  .ul{
    width:100%;
    .li{
      width:100%;
      height:3.18rem;
      background: #fff;
      margin-bottom: 0.12rem;
      .li1{
        widht:100%;
        height:0.72rem;
        border-bottom: 1px solid #f7f6f3;
        .liA {
          display: flex;
          align-items: center;
          /*margin-top: 0.08rem;*/
          padding-top: 0.08rem;
          box-sizing: border-box;
          p {
            font-size: 0.14rem;
            color: #525252;
            margin-left: 0.09rem;
            margin-right: 0.08rem;
          }
          img {
            width: 0.19rem;
            height: 0.19rem;
          }
        }
        .liB{
          display: flex;
          align-items: center;
          /*margin-top: 0.08rem;*/
          /*margin-top: 0.11rem;*/
          margin-top: 0.07rem;
          box-sizing: border-box;
          align-items: center;
          img{
            width:0.9rem;
            margin-left: 0.09rem;
            height:0.15rem;
          }
          p{
            font-size: 0.12rem;
            margin-left: 0.06rem;
            color: #ff9a06;
            margin-right: 0.03rem;
          }
          span{
            width:0.36rem;
            height:0.16rem;
            border: 1px solid #e3e3e3;
            border-radius: 2px;
            font-size: 0.12rem;
            text-align: center;
            line-height: 0.16rem;
          }
        }
        .liC{
          display: flex;
          align-items: center;
          font-size: 0.12rem;
          color:#565656;
          justify-content: flex-end;
          span{
            margin-left: 0.03rem;
            margin-right: 0.08rem;
          }
        }

      }
      .li2{
        width:100%;
        /*height:2.06rem;*/
        li{
          width:100%;
          /*height:1.03rem;*/
          padding-top: 0.1rem;
          padding-bottom: 0.1rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #f4f1ee;
          img{
            width:0.92rem;
            margin-left: 0.08rem;
            margin-right: 0.08rem;
            height:0.84rem;
          }
          .li2A{
            flex: 1;
            height: 0.84rem;
            h6{
              font-weight: 100;
              font-size: 0.13rem;
              color:#7e7e7e;
              height: 0.67rem;
            }
            .li2B{
              display: flex;
              align-items: center;
              justify-content: space-between;
              div{
                display: flex;
                align-items: center;
                span{
                  color: #1ac6b4;
                  margin-right: 0.05rem;
                  font-size: 0.15rem;
                  display: flex;
                  align-items: center;
                  p{
                    font-size: 0.12rem;

                  }
                }
                h4{
                  font-weight: 100;
                  font-size: 0.13rem;
                  color:#777777;
                }
                .h4{
                  /*width: 0.40rem;*/
                  height: 0.16rem;
                  color:#f90;
                  border: 1px solid #f90;
                  border-radius: 5px;
                  line-height: 0.16rem;
                  padding: 0 0.02rem;
                }
              }
              h5{
                font-weight: 100;
                font-size: 0.13rem;
                color:#7a7a7a;
                margin-right: 0.08rem;
              }
            }
          }
        }
      }
      .li3{
        width:100%;
        height:0.39rem;
        display: flex;
        justify-content:center;
        align-items: center;
        p{
          font-size: 0.15rem;
          color:#15c4b3;
        }
      }
    }
  }
</style>
