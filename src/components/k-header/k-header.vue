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
          <a href="/login">登录</a> | <a href="/register">注册</a>
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
            link: 'user'
          },
          {
            title: '积分',
            link: 'integral-mall'
          },
          {
            title: '客服',
            link: 'customer-service'
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
    height 80px
    background-color #fff
    .header-center
      margin 0 auto
      width 1200px
      height 100%
      vertical-align middle
      .logo-wrapper
        float left
        margin-top 20px
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
            height 78px
            line-height 78px
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
          line-height 80px
          a
            link-a()
</style>
