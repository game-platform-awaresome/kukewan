<template>
  <div class="game-hall">
    <div class="game-hall-wrapper">
      <!-- slider -->
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(item,index) in slider" :key="index">
          <div class="slider-item-wrapper">
            <img :src="item.image" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="game-hall-left">
        <!-- rank -->
        <rank :rank="rank" title="热游排行"></rank>
        <!-- game-server -->
        <game-server :server="server"></game-server>
      </div>
      <div class="game-hall-right">
        <!-- search -->
        <search></search>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import GameServer from 'base/game-server/game-server'
  import GameList from 'base/game-list/game-list'
  import Rank from 'base/rank/rank'
  import Search from 'components/game-hall/search/search'

  import * as ad from 'api/ad'
  import * as game from 'api/game'

  export default {
    created () {
      ad.gameHallSlide()
        .then(res => {
          this.slider = res
        })
      game.hotGame()
        .then(res => {
          this.rank = res
        })
    },
    data () {
      return {
        // 轮播
        slider: [],
        // 排行
        rank: [],
        // 服
        server: []
      }
    },
    components: {
      GameServer,
      GameList,
      Rank,
      Search
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .game-hall
    margin-top 71px
    .game-hall-wrapper
      padding-bottom 40px
      wrapper()
      .el-carousel__item
        .slider-item-wrapper
          height 100%
          width 100%
          img
            width 100%
            height 100%
      .el-carousel__arrow
        background-color rgba(56,54,54,.3)
        &:hover
          background-color rgba(56,54,54,.6)
      .el-carousel__indicators--outside
        button
          background-color rgba(35,114,244,.3)
      .game-hall-left
        wrapper-left()
        .game-server
          border()
          height 622px
          margin-top $height-block-top
      .game-hall-right
        wrapper-right()

</style>
