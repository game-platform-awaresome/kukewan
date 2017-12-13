<template>
  <div class="boutique">
    <public-title :title="title"></public-title>
    <game-list :gameList="boutiques"></game-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'base/public/title/title'
  import GameList from 'base/game-list/game-list'
  export default {
    props: {
      boutiques: {
        type: Array
      }
    },
    data () {
      return {
        title: '精品游戏'
      }
    },
    components: {
      PublicTitle,
      GameList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
