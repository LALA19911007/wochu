<template>
  <div class="container">
    <header class="header">
      <img class="logo" src="https://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png">
      <div class="xiala">
        <span>请选择地址</span>
        <img src="https://wmall.wochu.cn/h5/home/vueimg/icon.png">
      </div>
      <img class="search" src="https://wmall.wochu.cn/h5/home/vueimg/search.png">
    </header>
    <div class="content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of bannerlist" :key="index">
          <img :src="item.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="rowlist">
        <div class="collist" v-for="(item, index) of chooselist" :key="index">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="collist" v-for="(item, index) of chooselist2" :key="'info2-'+index">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <div class="zixun">
        <div class="zixun_l">
          <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg">
        </div>
        <div class="zixun_r">
          <van-notice-bar :scrollable="false" v-for="(item, index) of zixunlist" :key="index">
            <p>{{ item.title }}</p>
          </van-notice-bar>
        </div>
      </div>
      <div class="zhanwei" v-for="(item, index) of zhanweilist" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="xianshi">
        <div class="xianshi_t">
          <p>- 限时特惠 -</p>
        </div>
        <div v-for="(item, index) of xianshilist" :key="index">
          <van-card :price="item.price" :desc="item.description" :title="item.posDes" :thumb="item.imgUrl" :origin-price="item.marketPrice">
            <div slot="footer">
              <van-icon name="add-o" />
            </div>
          </van-card>
        </div>
        <div class="zuohua">
          <ul>
            <li v-for="(item, index) of zuohualist" :key="index">
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
      </div>
      <div class="zhanwei" v-for="(item, index) of zhanweilist1" :key="'info3-'+index">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="zhanwei" v-for="(item, index) of zhanweilist2" :key="'info4-'+index">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="huodong" v-for="(item, index) of huodonglist" :key="'info5-'+index">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="list1" v-for="(item, index) of piclist" :key="'info6-'+index">
        <div class="img">
          <img :src="item.imgUrl">
        </div>
        <Productlist :productlist="productlist"/>
      </div>
    </div>
  </div>
</template>

<script>
import Productlist from '@/components/common/Productlist'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Productlist
  },
  computed: {
    ...mapState({
      bannerlist: ({ home }) => home.bannerlist,
      chooselist: ({ home }) => home.chooselist,
      chooselist2: ({ home }) => home.chooselist2,
      zixunlist: ({ home }) => home.zixunlist,
      zhanweilist: ({ home }) => home.zhanweilist,
      zhanweilist1: ({ home }) => home.zhanweilist1,
      zhanweilist2: ({ home }) => home.zhanweilist2,
      xianshilist: ({ home }) => home.xianshilist,
      zuohualist: ({ home }) => home.zuohualist,
      huodonglist: ({ home }) => home.huodonglist,
      piclist: ({ home }) => home.piclist,
      productlist: ({ home }) => home.productlist
    })
  },
  methods: {
    ...mapActions({
      getHomeBannerList: 'getHomeBannerList',
      getHomeChooseList: 'getHomeChooseList',
      getHomeChooseList2: 'getHomeChooseList2',
      getZixunList: 'getZixunList',
      getZhanweiList: 'getZhanweiList',
      getZhanweiList1: 'getZhanweiList1',
      getZhanweiList2: 'getZhanweiList2',
      getXianshiList: 'getXianshiList',
      getZuohuaList: 'getZuohuaList',
      getHuodongList: 'getHuodongList',
      getPicList: 'getPicList',
      getProductList: 'getProductList'
    })
  },
  mounted () {
    this.getHomeBannerList()
    this.getHomeChooseList()
    this.getHomeChooseList2()
    this.getZixunList()
    this.getZhanweiList()
    this.getZhanweiList1()
    this.getZhanweiList2()
    this.getXianshiList()
    this.getZuohuaList()
    this.getHuodongList()
    this.getPicList()
    this.getProductList()
  }
}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  .logo {
    height: 40%;
    float: left;
    margin-top: 4%;
    margin-left: 4%;
  }
  .xiala {
    float: left;
    margin-left: 6%;
    span {
      font: .14rem/.44rem "";
      color: green;
    }
    img {
      width: 8%;
      margin-left: .05rem;
    }
  }
  .search {
    float: right;
    height: 40%;
    line-height: .44rem;
    margin-top: 4%;
    margin-right: 4%;
  }
}
.van-swipe {
  height: 1.4rem;
  img {
    width: 100%;
  }
}
.rowlist {
  height: 1.6rem;
  .collist {
    height: .8rem;
    width: 25%;
    float: left;
    img {
      width: 80%;
      margin-left: 10%;
      margin-top: 10%;
    }
  }
  border-bottom: .01rem solid #eee;
}
.zixun {
  .zixun_l,
  .zixun_r{
    float: left;
  }
  .zixun_l {
    width: 16%;
    img {
      width:56%;
      margin-left: 20%;
      margin-top: 20%;
    }
    border-right: .01rem solid #eee;
  }
  .zixun_r {
    width: 84%;
    .van-notice-bar {
      background: #fff;
      color: #333;
      font-size: .12rem/.4rem "";
    }
  }
  height: .4rem;
  overflow: hidden;
}
.xianshi {
  .xianshi_t {
    height: .3rem;
    border-bottom: .01rem solid #eee;
    p{
      text-align: center;
      font: .14rem/.3rem "";
      color: #333;
      font-weight: bold;
    }
  }
  .zuohua {
    height: 1.4rem;
    width: 100%;
    padding-left: 2%;
    ul {
      width: 100%;
      height: 1.4rem;
      overflow: hidden;
      li {
        float: left;
        width: 26%;
        height: 1.4rem;
        margin: 1%;
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
      }
    }
  }
  .van-card {
    background: #fff;
    border-bottom: .01rem solid #eee;
    .van-icon {
      width: .2rem;
      height: .2rem;
      color: green;
    }
  }
}
.zhanwei {
  padding-bottom: .1rem;
  border-bottom: .1rem solid #f3f3f3;
  img {
    width: 100%;
  }
}
.huodong {
  padding: 0 5%;
  img {
    width: 50%;
    float: left;
  }
}
.list1 {
  .img {
    width: 100%;
    img {
      margin-top: .1rem;
      width: 100%;
    }
  }
}
</style>
