<template>
  <div class="index">
    <!-- slider -->
    <div class="slider-wrapper">
      <slider animation="fade" height="1000px" :interval="4000" indicators="right" :auto="false">
        <slider-item v-for="(item, index) in slider" :key="index">
          <div class="slider-item-wrapper">
            <img :src="item.img" alt="">
          </div>
        </slider-item>
      </slider>
    </div>
    <!-- index -->
    <div class="index-wrapper">
      <div class="index-left">
        <!-- login -->
        <login></login>
        <!-- game-server -->
        <game-server></game-server>
        <!-- gift -->
        <gift :gifts="gifts"></gift>
        <!-- article-list -->
        <article-list :news="news" title="新闻公告"></article-list>
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

  export default {
    created() {
      game.recommend()
        .then((res) => {
          this.recommends = res
        })
      game.boutique()
        .then((res) => {
          this.boutiques = res
        })
      game.gameCenter()
        .then((res) => {
          this.gameCenter = res
        })
    },
    data () {
      return {
        /*
          接口数据
        */
        // 轮播
        slider: [{
          img: require('common/image/test/index/banner.png')
        },
        {
          img: require('common/image/test/index/banner.png')
        },
        {
          img: require('common/image/test/index/banner.png')
        }],
        // 礼包
        gifts: {
          title: '游戏礼包',
          gifts: [{
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          }]
        },
        // 新闻
        news: {
          title: '新闻公告',
          notice: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
          lists: [{
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          }]
        },
        // 推荐
        // type: 1: H  0: N
        recommends: [],
        // 精品游戏
        boutiques: [],
        // 广告
        ad: require('common/image/test/index/ad.png'),
        // 游戏中心
        gameCenter: [],
        friendlyLink: [{
          name: '四季游戏',
          url: ''
        },
        {
          name: '四季游戏',
          url: ''
        },
        {
          name: '四季游戏',
          url: ''
        },
        {
          name: '四季游戏',
          url: ''
        }]
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
    margin-top 71px
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
      .indicators
        top 426px
        right 294px
        .slider-indicator-icon
          background-color #f9cfce
          &.slider-indicator-active
            background-color $color-theme
    .index-wrapper
      wrapper()
      .index-left
        wrapper-left()
        .login-block
          margin-top 60px
          border-top 2px solid $color-theme
        .game-server
          background-color rgba(255,255,255,.8)
          margin-top 60px
          height 415px
        .gift
          margin-top $height-block-top
          height 438px
        .article-list
          margin-top $height-block-top
          height 392px
      .index-right
        wrapper-right()
        &.top
          margin-top 60px + 60px + 365px
        .boutique
          margin-top $height-block-top

</style>
