<template>
  <div class="container">
    <div class="content">
      <div class="contentnei">
        <img class="top" src="https://wmall.wochu.cn/h5/personal/img/header_bg@3x.png" alt="">
        <div class="xinxi">
          <div class="img">
            <img src="https://wmall.wochu.cn/h5/personal/img/cust-icon-nologin.png">
          </div>
          <div class="loginstate">
            <span>未登录</span>
          </div>
          <div class="quan">
            <div class="quan_t">
              <div><p>0</p><p>账户余额</p></div>
              <div><p>0</p><p>优惠券</p></div>
            </div>
            <div class="quan_b">
              <img src="https://wmall.wochu.cn/h5/personal/img/g-recharge@3x.png"><span>充值立松现金券哦~</span><span>马上充值</span><img src="https://wmall.wochu.cn/h5/personal/img/recharge@3x.png">
            </div>
          </div>
          <div class="dindan">
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/needtopay@3x.png"></div>
              <p>待付款</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/no-receive@3x.png"></div>
              <p>待收货</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/no-comment@3x.png"></div>
              <p>待评价</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/historyget@3x.png"></div>
              <p>退款/售后</p>
            </div>
            <div class="box lastbox">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/myorders@3x.png"></div>
              <p>我的订单</p>
            </div>
          </div>
          <div class="xuanxiang">
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/mytg@3x.png"></div>
              <p>我的团购</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/location@3x.png"></div>
              <p>收货地址</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/favorite@3x.png"></div>
              <p>我的收藏</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/aboutus@3x.png"></div>
              <p>关于我厨</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/help@3x.png"></div>
              <p>帮助中心</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/yjfk@3x.png"></div>
              <p>意见反馈</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/setup@3x.png"></div>
              <p>设置中心</p>
            </div>
            <div class="box">
              <div class="pic"><img src="https://wmall.wochu.cn/h5/personal/img/kefu@3x.png"></div>
              <p>客服电话</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        vm.$store.commit('changeLoginState', 'ok')
        next()
      } else {
        vm.$store.commit('changeLoginState', '')
        next('/user')
      }
    })
  },
  computed: {
    ...mapState({
      loginState: ({ user }) => user.loginState
    })
  }
  // methods: {
  //   logout () {
  //     this.$store.commit('changeLoginState', '')
  //     this.$router.push('/login')
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.contentnei {
  background: #f4f4f4;
}
.top {
  width:100%;
}
.xinxi {
  position: relative;
  .img {
    position: relative;
    top: -1.6rem;
    width: 16%;
    margin-left: 42%;
    img {
      width: 100%;
    }
  }
  .loginstate {
    position: relative;
    top: -1.6rem;
    text-align: center;
    padding-top: .06rem;
    color: #fff;
    font: .12rem/.2rem "";
  }
  .quan {
    border-radius: .12rem;
    padding-top: .1rem;
    background: #fff;
    box-shadow:0 0 .2rem rgb(109, 109, 109);
    position: relative;
    top: -1.6rem;
    width: 90%;
    margin-left: 5%;
    margin-top: .08rem;
    .quan_t {
      overflow: hidden;
      padding-left: 1%;
      div {
        float: left;
        width: 49%;
        text-align: center;
      }
      div:nth-child(1) {
        border-right: .01rem solid #e2e2e2
      }
    }
    .quan_b {
      position: relative;
      height: .36rem;
      line-height: .36rem;
      margin-top: .16rem;
      background: #428b0e;
      color: #fff;
      font-size: .13rem;
      border-bottom-left-radius: .12rem;
      border-bottom-right-radius: .12rem;
      img:nth-child(1) {
        height: 40%;
        margin-left: .12rem;
      }
      span:nth-child(2) {
        margin-left: .08rem;
      }
      span:nth-child(3) {
        margin-left: .7rem;
      }
      img:nth-child(4) {
        height: 30%;
        margin-left: .08rem;
      }
    }
  }
  .dindan {
    position: relative;
    top: -1.4rem;
    overflow: hidden;
    background: #fff;
    width: 100%;
    padding-top: .1rem;
    padding-bottom: .1rem;
    .box {
      float: left;
      width: 20%;
      .pic {
        width: 36%;
        margin-left: 32%;
        height: .32rem;
        img {
          width: 90%;
          margin-left: 5%;
        }
      }
      p{
        text-align: center;
        font-size: .12rem;
        color: #999;
      }
    }
    .lastbox {
      border-left: .01rem solid #ccc;
      p {
        font-weight: bold;
        color: #333;
      }
    }
  }
  .xuanxiang {
    position: relative;
    top: -1.4rem;
    margin-top: .14rem;
    overflow: hidden;
    background: #fff;
    width: 100%;
    padding-top: .1rem;
    padding-bottom: .1rem;
    .box:nth-child(1),
    .box:nth-child(2),
    .box:nth-child(3),
    .box:nth-child(4){
      padding-bottom: .1rem;
      border-bottom: .01rem solid #ccc;
    }
    .box:nth-child(5),
    .box:nth-child(6),
    .box:nth-child(7),
    .box:nth-child(8){
      padding-top: .1rem;
    }
    .box {
      float: left;
      width: 25%;
      .pic {
        width: 36%;
        margin-left: 32%;
        height: .32rem;
        img {
          width: 90%;
          margin-left: 5%;
        }
      }
      p{
        text-align: center;
        font-size: .12rem;
        color: #999;
      }
    }
  }
}
</style>
