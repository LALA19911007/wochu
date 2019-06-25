<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="imageURL"
      />
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    },
    onClickRight () {
      Toast('按钮')
    },
    onSubmit () {
      Toast('支付流程')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.user.loginState === 'ok') {
        vm.$store.commit('changeLoginState', 'ok')
        next()
      } else {
        vm.$store.commit('changeLoginState', '')
        next('/login')
      }
      // if (vm.$store.state.user.loginState === 'ok') {
      //   next()
      // } else {
      //   next('/login')
      // }
    })
  }
}
</script>
