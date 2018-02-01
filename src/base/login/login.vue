<template>
  <div class="login-block" :class="{ loginIntergralCls: loginCls === 1}">
    <div class="to-login" v-if="(!isMain && !isLogined) || isMain">
      <div class="title" v-show="loginCls !== 1">
        <span>{{title}}</span>
        <router-link to="/register">
          <a class="register-btn">注册>></a>
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
        <input type="password" placeholder="密码" @focus="onFocus('psdFocus')"
        v-model="password" @blur="onBlur('psdFocus',password)" @keyup.13="login">
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
    <div class="logined" v-if="!isMain && isLogined">
      <user-info></user-info>
      <div class="index-login-wrapper">
        <router-link to="/pay" class="pay-btn">充值</router-link>
        <div class="recent-play">
          <p class="recent-play-title">最近玩过</p>
          <div class="recent-play-list">
            <ul>
              <li class="recent-play-item" v-for="(item,index) in recentGames" :key="index">
                <img :src="item.pic.logo" alt="" class="logo">
                <span class="game-name">{{item.gameName}}</span>
                <span class="server-name">{{item.serverName}}</span>
                <router-link tag="span" to="{path: '/game'}" class="start-btn">开始游戏</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserInfo from 'base/user-info/user-info'
  import * as validate from 'common/js/validate'
  import * as variable from 'common/js/variable'
  import * as user from 'api/user.js'
  import * as game from 'api/game'
  import {getUrlParam} from 'common/js/tool'
  import {mapGetters} from 'vuex'

  export default {
    created () {
      if (localStorage.access_token) {
        game.recentGame()
        .then(res => {
          this.recentGames = res
        })
      }
    },
    props: {
      title: {
        type: String,
        default: '酷客玩通行证'
      },
      loginCls: {
        type: Number,
        default: 0  // 0 index 1 intergral 2
      },
      isMain: {
        type: Boolean,
        default: false // true 主登录页 false 非主登录页
      }
    },
    computed: {
      ...mapGetters(['user'])
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
        this.$message({
          message: '登录中...',
          center: true
        })
        user.login(form)
          .then(res => {
            if (res.refresh_token && res.access_token) {
              localStorage.refresh_token = res.refresh_token
              localStorage.access_token = res.access_token
              this.locationUrl()
            }
          })
          .catch(error => {
            if (error.status === variable.REGISTER_ERROR) {
              this.$message({
                message: '账号或密码输入有误请重新输入',
                type: 'warning',
                center: true
              })
            }
          })
      },
      locationUrl() {
        // 有跳转参数
        let url = getUrlParam('redirect')
        if (url) {
          this.$message({
            message: '登录成功,正在跳转',
            type: 'success'
          })
          location.replace(decodeURIComponent(url))
        } else {
          location.replace('/')
        }
      }
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
        },
        isLogined: localStorage.access_token,
        recentGames: []
      }
    },
    components: {
      UserInfo
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .login-block
    height 365px
    box-sizing border-box
    background-color rgba(255,255,255,.8)
    overflow hidden
    &.loginIntergralCls
      height 317px
      border()
      border-top 1px solid $color-theme
      .input-wrapper
        &.user
          margin-top 0
    .to-login
      padding 30px 25px
      .title
        font-size $font-size-large
        color $color-theme
        font-weight bolder
        height 18px
        line-height 18px
        .register-btn
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
    .logined
      .index-login-wrapper
        padding 0 15px
        .pay-btn
          btn(,26px,,#ffc601,,#fff)
          &:hover
            background-color rgba(255,198,1,0.6)
        .recent-play
          .recent-play-title
            font-size $font-size-medium
            color $color-text
            padding 10px 0 10px 0
            border-bottom 1px dashed $color-border
          .recent-play-list
            .recent-play-item
              padding-top 10px
              .logo
                display inline-block
                vertical-align middle
                width 18px
                height 18px
              .game-name
                display inline-block
                vertical-align middle
                width 95px
                text-indent 10px
                color $color-text
              .server-name
                display inline-block
                vertical-align middle
                width 75px
                color $color-description
              .start-btn
                cursor pointer
                vertical-align middle
                btn(70px,20px,,,,$color-theme)
                display inline-block
                &:hover
                  color #fff
                  background-color $color-theme


</style>
