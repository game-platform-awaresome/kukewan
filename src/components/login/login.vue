<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="image" ref="image"></div>
      <login-block title="登录" ref="login"></login-block>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoginBlock from 'base/login/login'
  import animations from 'create-keyframe-animation'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.imageSlide()
        this.loginWindowSlide()
      })
    },
    data () {
      return {

      }
    },
    methods: {
      imageSlide() {
        let animation = {
          0: {
            transform: 'translate3d(-70%,0,0)',
            opacity: 0
          },
          100: {
            transform: 'translate3d(0,0,0)',
            opacity: 1
          }
        }
        animations.registerAnimation({
          name: 'slide',
          animation,
          presets: {
            duration: 1000,
            easing: 'ease',
            delay: 200
          }
        })
        animations.runAnimation(this.$refs.image, 'slide')
      },
      loginWindowSlide() {
        let animation = {
          0: {
            transform: 'translate3d(0,-100px,0)',
            opacity: 0
          },
          100: {
            transform: 'translate3d(0,0,0)',
            opacity: 1
          }
        }
        animations.registerAnimation({
          name: 'windowslide',
          animation,
          presets: {
            duration: 600,
            easing: 'ease',
            delay: 600
          }
        })
        animations.runAnimation(this.$refs.login.$el, 'windowslide')
      }
    },
    components: {
      LoginBlock
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .login
    margin-top 71px
    height 754px
    bg('./login-bg.png')
    .login-wrapper
      position relative
      wrapper()
      .image
        position absolute
        bg('./login-animation.png')
        top 0
        left 0
        width 610px
        height 754px
      .login-block
        position absolute
        top 140px
        right 96px
        width 440px
        height 480px
        border()
        border-top 2px solid $color-theme
        .title
          font-size 30px
        .input-wrapper
          padding 17px
        .input-wrapper.user
          margin-top 60px
        .input-wrapper.password
          margin-top 25px
        .remember-forget
          padding 25px 10px
        .other-login
          padding 35px 35px 0
</style>
