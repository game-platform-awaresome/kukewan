<template>
  <div class="app">
    <k-header></k-header>
    <router-view></router-view>
    <k-footer></k-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import KHeader from 'components/k-header/k-header'
  import KFooter from 'components/k-footer/k-footer'

  export default {
    data () {
      return {

      }
    },
    components: {
      KHeader,
      KFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>

