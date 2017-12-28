<template>
  <div class="game-server-list">
    <div class="game-server-list-wrapper">
      <div class="game-server-list-left">
        <!-- login -->
        <login-block :loginCls="1"></login-block>
        <!-- server -->
        <game-server :server="server"></game-server>
      </div>
      <div class="game-server-list-right">
        <!-- slider -->
        <div class="slider-wrapper">
          <el-carousel height="304px">
            <el-carousel-item v-for="(item,index) in slider" :key="index">
              <div class="slider-img-wrapper">
                <img :src="item.img" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- select-server -->
        <div class="select-server">
          <div class="select-server-nav">
            <div class="desc-wrapper">
              <i class="icon unimpeded"></i>
              <span class="text">畅通</span>
              <i class="icon full"></i>
              <span class="text">爆满</span>
              <i class="icon crowd"></i>
              <span class="text">拥挤</span>
              <i class="icon maintain"></i>
              <span class="text">维护</span>
            </div>
            <div class="search-server-input-wrapper">
              快速进入 :
              <div class="search-input-wrapper">
                <input type="text">
              </div>
              区
              <div class="search-server-btn">搜索</div>
            </div>
          </div>
          <div class="select-server-list-wrapper">
            <ul>
              <li v-for="(item,index) in selectServerList" :key="index" class="server-list-item">
                <span class="icon" :class="item.type"></span>
                <span class="server-name">{{item.name}}</span>
                <span class="server-time">{{item.time}}</span>
              </li>
            </ul>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoginBlock from 'base/login/login'
  import GameServer from 'base/game-server/game-server'

  export default {
    data () {
      return {
        /*
          接口数据
        */
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
        // 大轮播
        slider: [{
          img: require('common/image/test/game-hall/banner.png')
        },
        {
          img: require('common/image/test/game-hall/banner.png')
        },
        {
          img: require('common/image/test/game-hall/banner.png')
        }],
        selectServerList: [{
          name: '双线12区',
          time: '10:12',
          type: 'unimpeded'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'unimpeded'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'full'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'maintain'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'full'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'crowd'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'crowd'
        },
        {
          name: '双线12区',
          time: '10:12',
          type: 'maintain'
        }]
      }
    },
    components: {
      LoginBlock,
      GameServer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  icon()
    display inline-block
    width 5px
    height 8px
    margin-right 3px
    &.unimpeded
      background-color #45d100
    &.full
      background-color $color-special
    &.crowd
      background-color $color-new
    &.maintain
      background-color #cdde64
  .game-server-list
    .game-server-list-wrapper
      wrapper()
      margin-top 71px
      margin-bottom 40px
      .game-server-list-left
        wrapper-left()
        .login-block
          border()
          border-top 2px solid $color-theme
          background-color #f7fafe
          padding-top 17px
          padding-bottom 17px
          .input-wrapper
            padding 14px
          .input-wrapper.user
            margin-top 15px
          .remember-forget
            padding 0 10px 8px
          .login-btn
            margin-top 0
          .other-login
            padding-top 15px
        .game-server
          height 415px
          margin-top $height-block-top
          border()
      .game-server-list-right
        wrapper-right()
        .slider-img-wrapper
          width 100%
          height 100%
          img
            height 100%
            width 100%
        .select-server
          position relative
          box-sizing border-box
          margin-top $height-block-top
          height 415px
          border()
          padding 0 15px
          .select-server-nav
            margin-bottom 10px
            height 42px
            line-height 42px
            clear-fix()
            .desc-wrapper
              float left
              .icon
                icon()
              .text
                display inline-block
                color $color-text
                padding-right 20px
            .search-server-input-wrapper
              float right
              .search-input-wrapper
                box-sizing border-box
                display inline-block
                margin 0 5px
                line-height 14px
                vertical-align middle
                padding 5px
                width 65px
                border()
                input
                  vertical-align middle
                  width 50px
              .search-server-btn
                btn(66px,24px,3px,$color-theme,$font-size-small,#fff)
                display inline-block
                vertical-align middle
                margin-left 10px
          .select-server-list-wrapper
            clear-fix()
            .server-list-item
              float left
              margin 0 0 15px 12px
              box-sizing border-box
              btn(268px,46px,5px,#f7fafe,$font-size-medium-x,$color-text)
              border()
              height 46px
              width 268px
              &:nth-of-type(3n-2)
                margin-left 0
              &:hover
                background-color #e7f0fc
              .icon
                icon()
              .server-name,.server-time
                display inline-block
                padding-left 20px
                color $color-text
          .pagination
            position absolute
            left 0
            bottom 20px
            width 100%
            text-align center

</style>
