<template>
  <div class="container">
    <img class="topimg" src="https://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif">
    <div class="content">
      <p class="biaoti">登录</p>
      <van-cell-group>
        <van-field v-model="username" clearable placeholder="请输入用户名" :error-message="usernameState">
          <van-icon slot="button" color="green" size="24px" :name="usernameicon" />
        </van-field>
        <van-field v-model="password" type="password" clearable placeholder="请输入密码"
          :error-message="passwordState">
          <van-icon slot="button" size="24px" color="green" :name="passwordicon" />
        </van-field>
      </van-cell-group>
      <div class="send-btn">
        <van-button type="primary" round @click="login" size="large">登录</van-button>
      </div>
      <div class="tiaozhuan" @click="zhuce">还未注册？去注册</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
Vue.use(Toast)

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    usernameicon () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return ''
      } else {
        return 'checked'
      }
    },
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    passwordicon () {
      if (!(/^(\w){6,20}$/.test(this.password))) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (!(/^(\w){6,20}$/.test(this.password))) {
        return '密码格式错误，只能输入6-20个字母、数字、下划线'
      } else {
        return ''
      }
    }
  },
  methods: {
    login () {
      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号码')
        return
      }

      if (this.passwordicon !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      this.loginFn()
    },
    zhuce () {
      this.$router.push('/register')
    },
    loginFn () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('登录失败')
        } else if (res.data === 2) {
          Toast('没有该用户')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录成功')
          // localStorage.setItem('isLogin', 'ok')
          this.$store.commit('changeLoginState', 'ok')
          localStorage.setItem('isLogin', 'ok')
          this.$router.push('/')
        }
      })
    }
    // login () {
    //   // **********
    //   this.$store.commit('changeLoginState', 'ok')
    //   localStorage.setItem('isLogin', 'ok')
    //   this.$router.go(-1)
    // },
    // onClick (index, title) {
    //   this.$toast(title)
    // }
  }
}
</script>

<style lang="scss" scoped>
.topimg {
  width: 100%;
}
.biaoti {
  text-align: center;
  // margin-top: -.5rem;
  font: .16rem/.4rem "";
  color: green;
  font-weight: bold;
}
.send-btn {
  width: 90%;
  margin: .1rem auto;
}
.tiaozhuan {
  float: right;
  margin-right: .02rem;
}
.van-checkbox {
  float: right;
  margin-right: .02rem;
}
</style>
