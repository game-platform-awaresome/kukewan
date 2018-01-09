<template>
  <div class="k-header">
    <div class="header-center">
      <div class="logo-wrapper">
        <img src="./logo.png" alt="">
      </div>
      <div class="common-nav">
        <div class="nav">
          <ul>
            <router-link v-for="(nav, index) in navs" class="nav-item" tag="li" :key="index" :to="nav.link">
              {{nav.title}}
            </router-link>
          </ul>
        </div>
        <div class="login-register-wrapper">
          <router-link to="/login">
            <a>登录</a>
          </router-link>
           |
          <router-link to="/register">
            <a>注册</a>
          </router-link>
        </div>
      </div>
      <div class="other-nav">

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        navs: [
          {
            title: '首页',
            link: '/index'
          },
          {
            title: '游戏',
            link: '/game-hall'
          },
          {
            title: '充值',
            link: '/pay'
          },
          {
            title: '用户',
            link: '/user'
          },
          {
            title: '积分',
            link: '/intergral-mall'
          },
          {
            title: '客服',
            link: '/customer-service'
          }
        ]
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"

  .k-header
    position fixed
    top 0
    left 0
    height 70px
    width 100%
    z-index 3
    background-color #fff
    border-bottom 1px solid $color-border
    .header-center
      margin 0 auto
      width 1200px
      height 100%
      vertical-align middle
      .logo-wrapper
        float left
        margin-top 15px
        width 210px
        height 40px
      .common-nav
        width 990px
        height 100%
        float left
        .nav
          float left
          margin-left 140px
          font-size 0
          .nav-item
            display inline-block
            width 100px
            height 68px
            line-height 68px
            text-align center
            border-bottom 2px solid #fff
            font-size $font-size-large
            color $color-title
            transition all .6s
            cursor pointer
            &.active
              border-bottom 2px solid $color-theme
              color $color-theme
        .login-register-wrapper
          float right
          height 100%
          color $color-text
          line-height 70px
          a
            link-a()
</style>
