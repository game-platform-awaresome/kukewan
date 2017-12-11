<template>
  <div class="game-server">
    <tabs :tabsContent="tabsContent" :tabs="tabs"></tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tabs from 'public/tabs/tabs'

  export default {
    data () {
      return {
        tabs: ['新服预告', '已开新服', '新服推荐'],
        tabsContent: [
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              link: ''
            }
          ]
        ]
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
    background-color rgba(255,255,255,.8)
    height 415px


</style>
