<template>
  <div class="game-hall">
    <div class="game-hall-wrapper">
      <!-- slider -->
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(item,index) in slider" :key="index">
          <div class="slider-item-wrapper">
            <img :src="item.img" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="game-hall-left">
        <!-- rank -->
        <rank></rank>
        <i class="icon-medal"></i>
        <!-- game-server -->
      </div>
      <div class="game-hall-right">
        <!-- search -->
        <!-- game-list -->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import GameServer from 'base/game-server/game-server'
  import GameList from 'base/game-list/game-list'
  import Rank from 'components/game-hall/rank/rank'
  export default {
    data () {
      return {
        slider: [{
          img: require('common/image/test/game-hall/slider.png'),
          name: '热血传奇',
          url: ''
        },
        {
          img: require('common/image/test/game-hall/slider.png'),
          name: '热血传奇',
          url: ''
        },
        {
          img: require('common/image/test/game-hall/slider.png'),
          name: '热血传奇',
          url: ''
        }],
        ranks: [{
          name: '烈焰传奇',
          type: ''
        }]
      }
    },
    components: {
      GameServer,
      GameList,
      Rank
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .game-hall
    margin-top 71px
    .game-hall-wrapper
      wrapper()
      .el-carousel__item
        .slider-item-wrapper
          height 100%
          width 100%
          img
            width 100%
            height 100%
        .el-carousel__arrow
          background-color rgba(35,114,244,.2)
          &:hover
            background-color rgba(35,114,244,.6)
        .el-carousel__indicators--outside
          button
            background-color rgba(35,114,244,.3)
      .game-hall-left
        wrapper-left()

      .game-hall-right
        wrapper-right()
</style>
