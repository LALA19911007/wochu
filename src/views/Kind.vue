<template>
  <div class="container">
    <header class="header">
      <img class="search1" src="https://wmall.wochu.cn/h5/home/vueimg/search.png">
      <span>支持首字母搜索</span>
    </header>
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="onNavClick"
      @itemclick="onItemClick"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainActiveIndex: 0,
      activeId: 0,
      items: [
        {
          // 导航名称
          text: '我厨优选',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '我厨优选蔬菜',
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: '我厨优选禽蛋',
              id: 2
            },
            {
              text: '我厨优选肉类',
              id: 3
            },
            {
              text: '我厨优选鲜活',
              id: 4
            },
            {
              text: '我厨优选冷冻',
              id: 5
            },
            {
              text: '我厨优选冷鲜',
              id: 6
            }
          ]
        },
        {
          // 导航名称
          text: '餐馆名菜',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '本帮菜',
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: '苏/浙菜',
              id: 2
            },
            {
              text: '粤菜',
              id: 3
            },
            {
              text: '川/湘菜',
              id: 4
            },
            {
              text: '北方菜/鲁菜',
              id: 5
            },
            {
              text: '东南亚风味',
              id: 6
            },
            {
              text: '日韩餐',
              id: 7
            }
          ]
        },
        {
          // 导航名称
          text: '全部净菜',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '海味水产',
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: '无肉不欢',
              id: 2
            },
            {
              text: '精美凉菜',
              id: 3
            },
            {
              text: '玲珑小炒',
              id: 4
            },
            {
              text: '田园时蔬',
              id: 5
            },
            {
              text: '营养汤羹',
              id: 6
            }
          ]
        },
        {
          // 导航名称
          text: '儿童专区',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '包包菜',
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: '儿童营养主食',
              id: 2
            },
            {
              text: '儿童优质食材',
              id: 3
            },
            {
              text: '儿童水乳乳饮',
              id: 4
            }
          ]
        },
        {
          // 导航名称
          text: '我厨优选',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '我厨优选蔬菜',
              // id，作为匹配选中状态的标识
              id: 1
              // 禁用选项
              // disabled: true
            },
            {
              text: '我厨优选禽蛋',
              id: 2
            },
            {
              text: '我厨优选肉类',
              id: 3
            },
            {
              text: '我厨优选鲜活',
              id: 4
            },
            {
              text: '我厨优选冷冻',
              id: 5
            },
            {
              text: '我厨优选冷鲜',
              id: 6
            }
          ]
        }
      ]
    }
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      this.activeId = data.id
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .search1 {
    height: 40%;
    margin-left: 8%;
  }
  span {
    font: .12rem/.44rem "";
    margin-left: 2%;
    color: #999;
  }
}
</style>
