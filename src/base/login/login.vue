<template>
  <div class="login-block">
    <div class="title">
      <span>酷客玩通行证</span>
      <a href="" class="register">注册>></a>
    </div>
    <div class="input-wrapper user" :class="{'borderInput': userFocus}">
      <i class="icon-user"></i>
      <input type="text" placeholder="用户名" @focus="onFocus('userFocus')" @blur="onBlur('userFocus')">
    </div>
    <div class="input-wrapper password" :class="{'borderInput': psdFocus}">
      <i class="icon-key"></i>
      <input type="password" placeholder="密码" @focus="onFocus('psdFocus')" @blur="onBlur('psdFocus')">
    </div>
    <div class="remember-forget">
      <el-checkbox :checked="false">记住密码</el-checkbox>
      <span class="forget">忘记密码</span>
    </div>
    <div class="login-btn">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>
    <div class="other-login">
      <span class="other-login-text">其他登录方式:</span>
      <i class="icon qq"></i>
      <i class="icon wechat"></i>
      <i class="icon weibo"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      onFocus(focus) {
        this[focus] = true
      },
      onBlur(blur) {
        this[blur] = false
      }
    },
    computed: {

    },
    data () {
      return {
        userFocus: false,
        psdFocus: false
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
    box-sizing border-box
    background-color rgba(255,255,255,.8)
    padding 30px 25px
    .title
      font-size $font-size-large
      color $color-theme
      font-weight bolder
      height 18px
      line-height 18px
      .register
        link-a()
        float right
        font-size $font-size-medium
    .input-wrapper
      border($color-border)
      background-color #fff
      border-radius 5px
      padding 15px
      color $color-description
      transition all .3s
      &.user
        margin-top 30px
      &.password
        margin-top 15px
      &.borderInput
        border-color $color-theme
      input
        margin-left 6px
        height $font-size-medium-x
        font-size $font-size-medium
    .remember-forget
      padding 15px 10px
      font-size $font-size-medium
      .forget
        float right
        link-a()
        color $color-description
    .login-btn
      margin-top 5px
      btn(50px,5px,$color-theme,$font-size-medium-x,#fff)
      background $color-theme
    .other-login
      padding 20px 35px 0
      color $color-description
      font-size 0
      .other-login-text
        vertical-align middle
        font-size $font-size-small
        margin-right 8px
      .icon
        vertical-align middle
        display inline-block
        width 20px
        height 20px
        margin-right 12px
        cursor pointer
        &.qq
          bg('./login-qq.png')
        &.wechat
          bg('./login-wechat.png')
        &.weibo
          bg('./login-weibo.png')
</style>
