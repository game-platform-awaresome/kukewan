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
        <search :gameList="gameList"></search>
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

  export default {
    created () {
      ad.gameHallSlide()
        .then(res => {
          this.slider = res
        })
    },
    data () {
      return {
        // 轮播
        slider: [],
        // 排行
        rank: [{
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        },
        {
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        },
        {
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        },
        {
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        },
        {
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        },
        {
          gid: 100,
          name: '烈焰传奇',
          type: '角色扮演'
        }],
        // 服
        server: [
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ]
        ],
        // 全部游戏
        gameList: [{
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 1
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 1
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        },
        {
          img: require('common/image/test/index/boutique.png'),
          name: '武极天下',
          officialWebsite: '',
          type: 0
        }]
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
