<template>
  <div class="game-page">
    <!-- <div class="game-header-header">
      <span class="game-name"></span>
      <router-link to="/index">首页</router-link>
      <router-link to="/index">游戏官网</router-link>
      <router-link to="/index">新手卡</router-link>
      <router-link to="/index">开服列表</router-link>
      <router-link to="/index">用户中心</router-link>
    </div> -->
    <div class="iframe">
      <iframe :src="url" frameborder="no" width="100%" :height="iframeHeight">

      </iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as game from 'api/game'
  export default {
    created () {
      this.getIframe()
    },
    data () {
      return {
        url: ''
      }
    },
    methods: {
      getIframe() {
        let sid = this.$route.params.serverid
        game.getIframe(sid)
          .then(res => {
            this.url = res.play
          })
      }
    },
    computed: {
      iframeHeight() {
        return window.innerHeight
      }
    },
    components: {

    },
    watch: {
      '$route': 'getIframe'
    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">


</style>
