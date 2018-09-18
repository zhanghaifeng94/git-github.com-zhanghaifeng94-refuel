<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="refuel">
        <img slot="icon" src="">
        加油
      </mt-tab-item>
      <mt-tab-item id="store">
        <img slot="icon" src="">
        商城
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selected: this.$route.path.split('/')[1]
    }
  },
  watch: {
    selected: function (val, oldVal) {
      console.log(val)

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
  methods:{

  },
  created(){
    console.log()
    console.log(this.selected)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
