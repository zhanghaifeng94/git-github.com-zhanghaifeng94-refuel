<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="(item,index) in tabs" :key="index" :id="item.id">
        <div class="iconfont icon" :class="item.icon ? item.icon : item.icon2"></div>
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: this.$route.path.split('/')[1] ? this.$route.path.split('/')[1] : 'index',
      tabs: [{
        id: 'index',
        name: '首页',
        icon: 'icon-home',
        icon2: 'icon-homefill',
        icon3: 'icon-home'
      },
      {
        id: 'refuel',
        name: '加油',
        icon: 'icon-jiayou',
        icon2: 'icon-jiayou1',
        icon3: 'icon-jiayou'
      },
      {
        id: 'store',
        name: '商城',
        icon: 'icon-shop',
        icon2: 'icon-shopfill',
        icon3: 'icon-shop'
      },
      {
        id: 'user',
        name: '我的',
        icon: 'icon-people',
        icon2: 'icon-peoplefill',
        icon3: 'icon-people'
      }
      ]
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.change(val)
      switch (val) {
        case 'index':
          this.$router.push('/index')
          break
        case 'refuel':
          this.$router.push('/refuel')
          break
        case 'store':
          this.$router.push('/store')
          break
        case 'user':
          this.$router.push('/user')
          break
      }
    }
  },
  methods: {
    change (val) {
      this.tabs.forEach(item => {
        item.icon = item.icon3
        if (item.id == val) {
          item.icon = false
        }
      })
}
  },
  created() {
    this.change(this.selected)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.tabbar
  color #929292
  .mint-tabbar
    background $color-footer-background
    .is-selected
      color $color-text-pitch
      background $color-footer-background
  .icon
    font-size $font-size-large-xx
    margin-bottom 2px

</style>
