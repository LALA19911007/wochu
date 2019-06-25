<template>
<div class="productlist">
  <ul class="liebiao">
    <li @click="goDetail(item.source)" v-for="item of productlist" :key="item.source">
      <img :src="item.imgUrl" alt="">
      <p>{{ item.goodsName }}</p>
      <div class="zuohua_b">
        <div class="zuohua_b_l">
          <span class="yuanjia">{{ item.marketPrice }}</span>
          <span class="xianjia">{{ item.price }}</span>
        </div>
        <van-icon name="add-o" />
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['productlist'],
  methods: {
    goDetail (id) {
      // this.$router.push(`/detail/${id}`) // string
      // this.$router.push({name: 'detail', params: {id}}) // Object
      this.$router.push({ path: `/detail/${id}` }) // Object
    }
  }
}
</script>

<style lang="scss">
.liebiao {
  li {
    float: left;
    width: 29%;
    height: 1.4rem;
    margin: 2%;
    img {
      width: 90%;
      margin-left: 5%;
    }
    p{
      font: .12rem/.16rem "";
      color: #555;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .zuohua_b {
      overflow: hidden;
      .zuohua_b_l {
        float: left;
      }
      .van-icon {
        float: right;
        color: green;
      }
    }
    span {
      display: block;
      font: .1rem/.12rem "";
      color: #666;
    }
    span:nth-child(1) {
      text-decoration: line-through;
      color: #ccc;
    }
    span:nth-child(2) {
      color: rgb(232, 122, 26);
      font: .14rem/.16rem "";
    }
  }
}
</style>
