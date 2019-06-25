<template>
  <div id="app">
    <!-- <transition name="test"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
// .test-enter {
//   transform: translateX(100%)
// }
// .test-enter-active {
//   transition: all 0.5s;
// }
// .test-enter-to, .test-leave {
//   transform: translateX(0)
// }
// .test-leave-to {
//   transform: translateX(-100%)
// }
// .test-leave-active {
//   transition: all 0;
// }
html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#fff);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li{
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.24rem);
        }
        p {
          @include font-size(0.12rem);
        }
        &.router-link-active {
          @include text-color(green);
        }
      }
    }
  }
}
</style>
