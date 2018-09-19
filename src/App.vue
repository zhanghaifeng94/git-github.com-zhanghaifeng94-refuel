<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/tabbar/tabbar'

export default {
  components: {
    Tabbar
  }
}
</script>

<style>

</style>
