<template>
  <div class="login-block" :class="{ loginIntergralCls: loginCls === 1}">
    <div class="title" v-show="loginCls !== 1">
      <span>{{title}}</span>
      <router-link to="/register">
        <a class="register">注册>></a>
      </router-link>

    </div>
    <div class="input-wrapper user" :class="{'borderInput': userFocus}">
      <i class="icon-user"></i>
      <input type="text" placeholder="用户名" @focus="onFocus('userFocus')" v-model="username" @blur="onBlur('userFocus',username)">
    </div>
    <!-- username error info -->
    <p class="error-info user">{{formFlag.userError}}</p>
    <div class="input-wrapper password" :class="{'borderInput': psdFocus}">
      <i class="icon-key"></i>
      <input type="password" placeholder="密码" @focus="onFocus('psdFocus')" v-model="password" @blur="onBlur('psdFocus',password)">
    </div>
    <!-- password error info -->
    <p class="error-info password">{{formFlag.psdError}}</p>
    <div class="remember-forget">
      <el-checkbox :checked="remember_psd">记住密码</el-checkbox>
      <router-link to="/forgot">
        <span class="forget">忘记密码</span>
      </router-link>
    </div>
    <div class="login-btn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>
    <div class="other-login">
      <span class="other-login-text">其他登录方式:</span>
      <i class="icon qq"></i>
      <i class="icon wechat"></i>
      <i class="icon weibo"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as validate from 'common/js/validate'
  import * as user from 'api/user.js'

  export default {
    props: {
      title: {
        type: String,
        default: '酷客玩通行证'
      },
      loginCls: {
        type: Number,
        default: 0  // 0 index 1 intergral 2
      }
    },
    methods: {
      onFocus(focus) {
        this[focus] = true
      },
      onBlur(blur, param) {
        this[blur] = false
        // validate
        if (blur === 'userFocus') {
          // username
          if (validate.username(param)) {
            this.formFlag.userFlag = true
            this.formFlag.userError = ''
          } else {
            this.formFlag.userFlag = false
            this.formFlag.userError = '请输入正确的用户名'
          }
        } else {
          // password
          if (validate.password(param)) {
            this.formFlag.psdFlag = true
            this.formFlag.psdError = ''
          } else {
            this.formFlag.psdFlag = false
            this.formFlag.psdError = '密码输入错误!'
          }
        }
      },
      login() {
        let form = {
          account: this.username,
          password: this.password
        }
        user.login(form)
        .then(res => {
          if (res.refresh_token) {
            localStorage.refresh_token = res.refresh_token
            localStorage.access_token = res.access_token
          }
        })
      }
    },
    computed: {

    },
    data () {
      return {
        userFocus: false,
        psdFocus: false,
        // form
        username: '',
        password: '',
        remember_psd: false,
        formFlag: {
          userFlag: '',  // 判断用户名
          psdFlag: '',    // 判断密码
          userError: '',
          psdError: ''
        }
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
    &.loginIntergralCls
      border()
      border-top 1px solid $color-theme
      .input-wrapper
        &.user
          margin-top 0
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
      border()
      background-color #fff
      border-radius 5px
      padding 15px
      color $color-description
      transition all .3s
      &.user
        margin-top 20px
      &.borderInput
        border-color $color-theme
      input
        margin-left 6px
        height $font-size-medium-x
        font-size $font-size-medium
    .error-info
      box-sizing border-box
      padding 5px
      height 24px
      line-height 14px
      color $color-hot
      &.user
        margin-top 0
    .remember-forget
      padding 0 10px 7px
      font-size $font-size-medium
      .forget
        display inline-block
        line-height 16px
        float right
        link-a(,$font-size-medium)
        color $color-description
    .login-btn
      margin-top 5px
      btn(,50px,5px,rgb(35,114,244),$font-size-medium-x,#fff)
      &:hover
        background-color rgba(35,114,244,.8)

    .other-login
      padding 20px 35px 0
      color $color-description
      font-size 0
      text-align center
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
