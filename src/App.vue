<template>
  <div id="app">
      <router-view></router-view>
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
