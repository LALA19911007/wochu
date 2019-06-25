<template>
  <div class="rating">
    <span class="iconfont icon-wujiaoxing" :class="rating >= 0.5 ? 'active': ''"></span>
    <span class="iconfont icon-wujiaoxing" :class="rating >= 1.5 ? 'active': ''"></span>
    <span class="iconfont icon-wujiaoxing" :class="rating >= 2.5 ? 'active': ''"></span>
    <span class="iconfont icon-wujiaoxing" :class="rating >= 3.5 ? 'active': ''"></span>
    <span class="iconfont icon-wujiaoxing" :class="rating >= 4.5 ? 'active': ''"></span>
  </div>
</template>

<script>
export default {
  props: ['rating'],
  mounted () {
    // console.log(this.rating)
  }
}
</script>

<style lang="scss">
.rating {
  span {
    &.active {
      color: yellow;
    }
  }
}
</style>
