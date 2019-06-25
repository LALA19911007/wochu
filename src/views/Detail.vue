<template>
  <div class="container">
    <div class="content">
      <div class="back" @click="xqBack">
        <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/refer.png">
      </div>
      <div class="zhutu">
        <img :src="zhutu" alt="">
      </div>
      <div class="baoguo">
        <div class="biaoti">
          <p class="name"> {{ name }} --- {{ len }} --- {{ num }}</p>
          <span class="miaoshu"> {{ miaoshu }} </span>
          <p class="jiage"><span> ¥{{ xianjia }} </span><span> ¥{{ yuanjia }} </span></p>
        </div>
      </div>
      <div class="tese">
        <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png">
      </div>
      <div class="chandi">
        <p><span><i>产地：</i>{{ chandi }}</span><span><i>保质期：</i>{{ data }}</span></p>
        <p><span><i>规格：</i>{{ guige }}</span><span><i>储存条件：</i>{{ cunchu }}</span></p>
      </div>
      <div class="pingjia">
        <span>商品评价</span>
        <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/next.png" alt="">
      </div>
      <div class="xiangqintu" v-html="miaoshutu">
      </div>
    </div>
    <div class="jiagou">
      <div class="cart" @click="goCart">
        <img src="https://wmall.wochu.cn/h5/mall/img/vueimg/catr.png">
        <span>{{ num }}</span>
      </div>
      <div class="word" @click="addCart">加入购物车</div>
    </div>
    <!-- <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click="onClickMiniBtn"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="onClickMiniBtn"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="onClickBigBtn"
      />
    </van-goods-action> -->
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
import { mapState, mapGetters } from 'vuex'
Vue.use(Toast)
export default {
  data () {
    return {
      goodsName: '',
      zhutu: '',
      name: '',
      miaoshu: '',
      yuanjia: '',
      xianjia: '',
      chandi: '',
      data: '',
      guige: '',
      cunchu: '',
      miaoshutu: ''
    }
  },
  computed: {
    testProp () {
      return '我就是一个测试数据'
    },
    ...mapState({
      loginState (state) { // state <==> this.$store.state
        return state.loginState
      },
      // num: state => state.num
      num: ({ num }) => num
    }),
    // ...mapGetters(['len'])
    ...mapGetters({
      len: 'len'
    })
  },
  methods: {
    // onClickMiniBtn () {
    //   Toast('点击图标')
    // },
    // onClickBigBtn () {
    //   Toast('点击按钮')
    // },
    xqBack () {
      this.$router.push('/home')
    },
    goCart () {
      this.$router.push('/register')
    },
    addCart () {
      console.log(this.loginState)
      if (this.loginState === 'ok') {
        // 调用加入购物车方法
        // axios.get('url').then(res => { Toast('加入购物车成功') })
        this.$store.commit('changeNum', { number: 1 })
      } else {
        this.$router.push('/login')
        // this.$store.commit('changeNum', { number: 1 })
      }
    }
  },
  mounted () {
    // const { goodsId } = this.$route.params
    // axios.get('http://www.daxunxun.com/detail?id=' + id).then(res => {
    //   console.log(res.data[0])
    //   this.title = res.data[0].title
    // })
    console.log(this.loginState)
    console.log(this.$route)
    // https://api9.wochu.cn/api/goods/goods/detail?goodsGuid=da9c611e-8cb1-4c5e-a63f-8a2f4ba40c79
    const { goodsGuid } = this.$route.params
    console.log(this.$route.params)
    axios.get(`/api/api/goods/goods/detail?goodsGuid=${goodsGuid}`).then(res => {
      console.log(res.data.data)
      this.zhutu = res.data.data.picUrl
      this.name = res.data.data.goodsName
      this.miaoshu = res.data.data.description
      this.yuanjia = res.data.data.marketPrice
      this.xianjia = res.data.data.price
      this.chandi = res.data.data.origin1
      this.data = res.data.data.shelfLife
      this.guige = res.data.data.specification
      this.cunchu = res.data.data.storageCondition
      this.miaoshutu = res.data.data.descriptionDetail
      // console.log(res.data.data.descriptionDetail)
    })
  }
}
</script>

<style lang="scss">
.zhutu {
  width: 100%;
  img {
    width: 100%;
  }
}
.back {
  position: absolute;
  width: .26rem;
  margin-top: .2rem;
  margin-left: .2rem;
  img {
    width: 100%;
  }
}
.baoguo {
  background: #f4f4f4;
  position: relative;
  height: .9rem;
}
.biaoti {
  width: 92%;
  margin-left: 4%;
  position: absolute;
  top: -.3rem;
  padding-left: .1rem;
  padding-top: .16rem;
  height: 1rem;
  border-radius: .1rem;
  background: #fff;
  box-shadow:0 0 .2rem rgb(184, 184, 184);
  .name {
    font: .14rem/.24rem "";
    color: #333;
    font-weight: bold;
  }
  .miaoshu {
    font: .12rem/.14rem "";
    color: #999;
  }
  .jiage {
    span:nth-child(1) {
      font: .14rem/.18rem "";
      color: rgb(235, 68, 68);
    }
    span:nth-child(2) {
      font: .12rem/.33rem "";
      text-decoration: line-through;
      margin-left: .1rem;
      color: #999;
    }
  }
}
.tese {
  width: 100%;
  margin-top: -.05rem;
  img{
    width: 100%;
  }
}
.chandi {
  padding-top: .12rem;
  margin-top: -.02rem;
  border-top: .1rem solid #f4f4f4;
  p {
    padding-left: .16rem;
    span {
      font: .12rem/.3rem "";
      color: #333;
      i {
        font: .12rem/.3rem "";
        color: #777;
      }
    }
  }
  p:nth-child(1) span:nth-child(2) {
    margin-left: 1rem;
  }
  p:nth-child(2) span:nth-child(2) {
    margin-left: 1rem;
  }
}
.pingjia {
  height: .6rem;
  border-top: .1rem solid #f4f4f4;
  border-bottom: .1rem solid #f4f4f4;
  span{
    padding-left: .16rem;
    font: .12rem/.41rem "";
  }
  img {
    float: right;
    margin-right: .16rem;
    height: 30%;
    margin-top: 4%;
  }
}
.xiangqintu {
  width: 100%;
  img {
    width: 100%;
  }
}
.jiagou {
  height: .4rem;
  width: 100%;
  .cart {
    background: rgb(235, 68, 68);
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
    img {
      width: 35%;
      margin-top: 12%;
      margin-left: 28%;
    }
    span {
      font-size: .1rem;
      color: #ff5918;
      background: #fff;
      width: .16rem;
      height: .16rem;
      text-align: center;
      line-height: .16rem;
      position: absolute;
      top: .05rem;
      left: .34rem;
      border-radius: 50% 50% 50% 50%;
    }
  }
  .word {
    width: 80%;
    float: left;
    background: #eb6433;
    display: block;
    color: #fff;
    font: .12rem/.4rem "";
    text-align: center;
  }
}
</style>
