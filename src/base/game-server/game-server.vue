<template>
  <div class="game-server">
    <tabs :tabsContent="server" :tabs="tabs"></tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tabs from 'public/tabs/tabs'

  export default {
    props: {
      server: {
        type: Array
      }
    },
    data () {
      return {
        tabs: ['新服预告', '已开新服', '新服推荐']
      }
    },
    components: {
      Tabs
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .game-server
    box-sizing border-box
</style>
