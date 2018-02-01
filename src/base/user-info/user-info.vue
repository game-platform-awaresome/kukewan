<template>
  <div class="user-info">
    <div class="user-info">
      <div class="sign">
        <span class="sign-text" v-show="user.sign">已签到<i class="el-icon-check"></i></span>
        <span class="sign-text" v-show="!user.sign">未签到</span>
      </div>
      <div class="logout" @click="quit">退出</div>
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="account">
        <span class="account-text">{{user.username}}</span>
        <span class="account-vip"></span>
      </div>
      <div class="security">
        <span class="security-text">安全等级 : </span>
        <div class="security-bar">
          <div class="range" ref="range"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import animations from 'create-keyframe-animation'
  import { mapGetters } from 'vuex'

  import * as user from 'api/user'

  export default {
    mounted() {
      if (this.user.security_level) {
        this.widthMove()
      }
    },
    data () {
      return {
        localUser: this.$store.state.user
      }
    },
    computed: {
      ...mapGetters(['user']),
      avatar() {
        if (!this.user.avatar) {
          return require('../../common/image/test/user-info/avatar.png')
        } else {
          return this.user.avatar
        }
      }
    },
    components: {

    },
    methods: {
      // 安全动画宽度
      widthMove() {
        let animation = {
          0: {
            width: 0
          },
          100: {
            width: `${this.user.security_level}%`
          }
        }
        animations.registerAnimation({
          name: 'move',
          animation,
          presets: {
            duration: 1000,
            easing: 'cubic-bezier(.05,.81,.69,.97)',
            delay: 1000
          }
        })
        animations.runAnimation(this.$refs.range, 'move')
      },
      quit() {
        user.quit()
      }
    },
    watch: {
      '$store.state.user': 'widthMove'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .user-info
    position relative
    height 188px
    // border-bottom 1px solid $color-border
    .sign
      position absolute
      left 0
      top 14px
      font-size $font-size-small
      width 70px
      height 18px
      line-height 18px
      background-color $color-hot
      color #fff
      box-sizing border-box
      padding-left 10px
      border-radius 0 9px 9px 0
      cursor pointer
    .logout
      position absolute
      top 14px
      right 14px
      link-a($color-description)
    .avatar
      margin 0 auto
      padding 17px 0 6px 0
      width 100px
      height 100px
        img
          width 100%
          height 100%
    .account
      text-align center
      font-size 14px
      color $color-text
      .account-text
        vertical-align top
        display inline-block
      .account-vip
        display inline-block
        vertical-align top
        width 16px
        height 14px
        bg('./vip.png')
    .security
      height 12px
      line-height 12px
      margin-top 20px
      text-align center
      .security-text
        display inline-block
        vertical-align top
        color $color-description
        font-size $font-size-small
      .security-bar
        display inline-block
        vertical-align top
        width 138px
        height 10px
        border($color-hot)
        border-radius 5px
        .range
          width 0
          height 100%
          background-color $color-hot

</style>
