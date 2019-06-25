<template>
  <ul class="prolist">
    <li @click="goDetail(item.id)" v-for="(item, index) of prolist" :key="item.id">
      <div class="img">
        <img :src="item.picUrl">
      </div>
      <div class="info">
        <h4>{{ item.title }} ---- {{ index }}</h4>
        <!-- <p>
          {{ item.rating.average }}
          <Rating :rating="(item.rating.average / 2).toFixed(1)"/>
        </p> -->
      </div>
    </li>
  </ul>
</template>

<script>
// import Rating from './Rating'

export default {
  props: ['prolist'],
  methods: {
    goDetail (id) {
      // this.$router.push(`/detail/${id}`) // string
      // this.$router.push({name: 'detail', params: {id}}) // Object
      this.$router.push({ path: `/detail/${id}` }) // Object
    }
  },
  components: {
    // Rating
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.prolist {
  overflow: hidden;
  li {
    float: left;
    @include rect(48%, 2.67rem);
    @include background-color(#ccc);
    @include margin(5px 1% 0); // (5px 1% 5px 1%)
    .img {
      @include rect(100%, 1.76rem);
      img {
        @include rect(100%, 100%);
      }
    }
    .info {
    }
  }
}
</style>
