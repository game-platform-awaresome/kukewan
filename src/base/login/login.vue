<template>
  <div class="login-block">
    <div class="title">
      <span>酷客玩通行证</span>
      <a href="" class="register">注册>></a>
    </div>
    <div class="input-wrapper">
      <i></i>
      <input type="text" placeholder="用户名">
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="密码">
    </div>
    <div class="remmber-forget">

      <input type="select">
      <a href="">忘记密码</a>
    </div>
    <div class="login-btn">登&nbsp;&nbsp;录</div>
    <div class="other-login">
      <span>其他登录方式:</span>
      <i></i>
      <i></i>
      <i></i>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .login-block
    background-color rgba(255,255,255,.8)
    padding 30px 25px
    .title
      font-size $font-size-large
      color $color-theme
      font-weight bold
      height 18px
      line-height 18px
      .register
        link-a()
        float right
        font-size $font-size-medium
    .input-wrapper
      border 1px solid $color-border
      background-color #fff
      border-radius 5px
      height 50px
</style>
