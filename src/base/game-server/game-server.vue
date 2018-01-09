<template>
  <div class="game-server">
    <tabs :tabsContent="server" :tabs="tabs"></tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tabs from 'public/tabs/tabs'
  import * as server from 'api/server.js'

  export default {
    created () {
      server.recommend()
        .then(res => {
          this.server[2] = res
        })
      server.newServerTrailer()
        .then(res => {
          this.server[0] = res
        })
      server.hasNewServer()
        .then(res => {
          this.server[1] = res
        })
    },
    data () {
      return {
        tabs: ['新服预告', '已开新服', '新服推荐'],
        server: []
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
