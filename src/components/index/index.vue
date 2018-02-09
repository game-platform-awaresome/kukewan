<template>
  <div class="index">
    <!-- slider -->
    <div class="slider-wrapper">
      <slider animation="fade" height="1000px" :interval="4000" indicators="right" :auto="false">
        <slider-item v-for="(item, index) in slider" :key="index">
          <div class="slider-item-wrapper">
            <a :href="item.url">
              <img :src="item.image" alt="">
            </a>
          </div>
        </slider-item>
      </slider>
    </div>
    <!-- index -->
    <div class="margin-top"></div>
    <div class="index-wrapper">
      <div class="index-left">
        <!-- login -->
        <login :loginCls="3"></login>
        <!-- game-server -->
        <game-server></game-server>
        <!-- gift -->
        <gift title="礼包列表"></gift>
        <!-- article-list -->
        <article-list :news="newsList" title="新闻公告"></article-list>
      </div>
      <div class="index-right top">
        <!-- recommend -->
        <recommend :recommends="recommends"></recommend>
        <!-- boutique -->
        <boutique :boutiques="boutiques"></boutique>
      </div>
      <index-bottom :ad="ad" :gameCenter="gameCenter" :friendlyLink="friendlyLink"></index-bottom>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Slider, SliderItem } from 'vue-easy-slider'
  import Login from 'base/login/login'
  import GameServer from 'base/game-server/game-server'
  import Gift from 'base/gift/gift'
  import ArticleList from 'base/article-list/article-list'
  import Recommend from 'components/index/recommend/recommend'
  import Boutique from 'components/index/boutique/boutique'
  import IndexBottom from 'components/index/index-bottom/index-bottom'

  import * as game from 'api/game.js'
  import * as article from 'api/article.js'
  import * as ad from 'api/ad.js'

  export default {
    created() {
      game.recommend()
        .then(res => {
          this.recommends = res
        })
      game.boutique()
        .then(res => {
          this.boutiques = res
        })
      game.gameCenter()
        .then(res => {
          this.gameCenter = res
        })
      article.newsList()
        .then(res => {
          this.newsList = res
        })
      ad.indexSlide()
      .then(res => {
        this.slider = res
      })
      ad.friendlyLink()
        .then(res => {
          this.friendlyLink = res
        })
      ad.midAd()
        .then(res => {
          this.ad = res[0]
        })
    },
    data () {
      return {
        /*
          接口数据
        */
        // 轮播
        slider: [],
        // 新闻
        newsList: [],
        // 推荐
        // type: 1: H  0: N
        recommends: [],
        // 精品游戏
        boutiques: [],
        // 广告
        ad: {},
        // 游戏中心
        gameCenter: [],
        friendlyLink: []
      }
    },
    components: {
      Slider,
      SliderItem,
      Login,
      GameServer,
      Gift,
      ArticleList,
      Recommend,
      Boutique,
      IndexBottom
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .index
    padding-top 71px
    position relative
    min-height 1000px
    .slider-wrapper
      position absolute
      z-index 1
      width 1920px
      left 50%
      transform translate3d(-50%,0,0)
      height 100%
        .slider-item-wrapper
          height 100%
          img
            width 100%
            height 100%
      .slider:hover .btn-left,
      .slider:hover .btn-right
        background transparent

      .indicators
        top 455px
        right 50%
        .slider-indicator-icon
          background-color #f9cfce
          width 16px
          height 16px
          border-radius 50%
          &.slider-indicator-active
            margin 0 10px
            width 32px
            border-radius 8px
            background-color $color-theme
      .btn
        top 50%
        height 80px
        width 40px
        margin-top -40px
        background transparent
        &.btn-left
          left 20px
          border-radius 5px
          &:hover
            background-color rgba(35,114,244,.8)
          i
            margin-left 9px
        &.btn-right
          right 20px
          border-radius 5px
          border-top-left-radius 5px
          border-bottom-left-radius 5px
          &:hover
            background-color rgba(35,114,244,.8)
          i
            margin-right 7px
    .margin-top
      width 0
      height 500px
    .index-wrapper
      wrapper()
      .index-left
        position relative
        wrapper-left()
        .login-block
          position absolute
          top (-365 - $height-block-top)px
          border-top 2px solid $color-theme
        .game-server
          background-color rgba(255,255,255,.8)
          // margin-top 60px
          height 415px
        .gift
          background-color: rgba(255,255,255,0.8)
          margin-top $height-block-top
          height 438px
        .article-list
          margin-top $height-block-top
          height 392px
      .index-right
        wrapper-right()
        // &.top
        //   margin-top 60px + 60px + 365px
        .boutique
          margin-top $height-block-top

</style>
