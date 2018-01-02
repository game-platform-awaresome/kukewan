<template>
  <div class="register">
    <div class="register-wrapper">
      <div class="register-nav">
        <ul>
          <router-link class="nav-item" tag="li" to="account-register">
            账号注册
          </router-link>
          <router-link class="nav-item" tag="li" to="phone-register">
            手机注册
          </router-link>
        </ul>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .register
    box-sizing border-box
    margin-top 71px
    min-height 7px
    padding-bottom 20px
    bg('./register-bg.png')
    padding-top 23px
    .register-wrapper
      clear-fix()
      position relative
      box-sizing border-box
      width 910px
      min-height 708px
      padding-bottom 20px
      margin 0 auto
      border()
      .register-nav
        position absolute
        left 0
        top -1px
        width 100%
        .nav-item
          float left
          width 50%
          border-top 2px solid transparent
          btn(50%,88px,0,,30px,#615f5d)
          &.active
            color $color-theme
            border-top 2px solid $color-theme

</style>
