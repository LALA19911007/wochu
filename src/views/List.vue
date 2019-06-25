<template>
  <div class="container">
    <van-nav-bar
      title="全部净菜"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <van-tabs v-model="active">
        <van-tab v-for="index in 8">
          <div slot="title">
            <van-icon />海味水产
          </div>
          内容 {{ index }}
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="imageURL"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  // data () {
  //   return {
  //     active: true
  //   }
  // },
  // prop: active,
  methods: {
    onClickLeft () {
      this.$router.push('/kind')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>
