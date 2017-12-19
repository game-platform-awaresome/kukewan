<template>
  <div class="pay">
    <div class="pay-wrapper">
      <div class="pay-left">
        <!-- user-info -->
        <div class="user-info">
          <div class="sign">
            <span class="sign-text" v-show="user.sign">已签到<i class="el-icon-check"></i></span>
            <span class="sign-text" v-show="!user.sign">未签到</span>
          </div>
          <div class="logout">注销</div>
          <div class="avatar">
            <img :src="user.avatar" alt="">
          </div>
          <div class="username">
            <span class="username-text">{{user.nickname}}</span>
            <span class="username-vip"></span>
          </div>
          <div class="security">
            <span class="security-text">安全等级 : </span>
            <div class="security-bar">
              <div class="range" ref="range"></div>
            </div>
          </div>
        </div>
        <!-- select-pay-type -->
        <div class="pay-type">
          <ul>
            <li v-for="(payType,index) in payTypeList" :key="index"
             @click="selectPayType(payType.type,index)" class="pay-type-item" :class="{active: paytypeCurrentIndex === index}">
              <i class="icon" :class="payType.type"></i>
              <span class="pay-type-text">{{payType.text}}</span>
              <i class="el-icon-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="pay-right">
        <!-- common-input -->
        <pay-form></pay-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PayForm from 'components/pay/pay-form/pay-form'
  import animations from 'create-keyframe-animation'
  export default {
    created() {

    },
    mounted() {
      this.$nextTick(() => {
        this.widthMove()
      })
    },
    data () {
      return {
        paytypeCurrentIndex: 0,
        user: {
          sign: true,
          avatar: require('common/image/test/pay/avatar.png'),
          nickname: 'Greentea',
          securityLevel: 0.6
        },
        // 表单参数配置
        payType: 'wechat',
        payTypeList: [{
          text: '支付宝',
          type: 'alipay'
        },
        {
          text: '微信',
          type: 'wechat'
        },
        {
          text: '银联',
          type: 'unionpay'
        },
        {
          text: '游戏卡',
          type: 'game-card'
        },
        {
          text: '手机卡',
          type: 'phone-card'
        }]
      }
    },
    components: {
      PayForm
    },
    methods: {
      selectPayType(type, index) {
        this.payType = type
        this.paytypeCurrentIndex = index
      },
      // 安全动画宽度
      widthMove() {
        let animation = {
          0: {
            width: 0
          },
          100: {
            width: `${this.user.securityLevel * 100}%`
          }
        }
        animations.registerAnimation({
          name: 'move',
          animation,
          presets: {
            duration: 2000,
            easing: 'cubic-bezier(.05,.81,.69,.97)',
            delay: 1000
          }
        })
        animations.runAnimation(this.$refs.range, 'move')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  $pay-type-location = './image/pay-type/'
  $pay-unionpay-location = './image/union/'

  paytype-icon($icon)
    background url($pay-type-location + "pay-" +  $icon + ".png") 0 0 no-repeat
  union-icon($icon)
    background url($pay-unionpay-location + "pay-" + $icon + ".png") 0 0 no-repeat


  .pay
    margin-top 71px
    .pay-wrapper
      box-sizing border-box
      wrapper()
      border-left 1px solid $color-border
      border-right 1px solid $color-border
      .pay-left
        box-sizing border-box
        wrapper-left()
        height 100%
        .user-info
          position relative
          height 188px
          border-bottom 1px solid $color-border
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
          .username
            text-align center
            font-size 14px
            color $color-text
            .username-text
              vertical-align top
              display inline-block
            .username-vip
              display inline-block
              vertical-align top
              width 16px
              height 14px
              bg('./image/vip.png')
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
                height 100%
                background-color $color-hot
        .pay-type
          min-height 464px
          .pay-type-item
            position relative
            height (58 - 17*2)px
            line-height (58 - 17*2)px
            font-size $font-size-medium-x
            padding 17px 0 17px 100px
            border-bottom 1px solid $color-border
            cursor pointer
            background-color #f7fafe
            &:hover
              background-color #fff
            &.active
              background-color #fff
            .pay-type-text
              display inline-block
              vertical-align middle
              margin-left 20px
            .icon
              display inline-block
              vertical-align middle
              width 24px
              height 24px
              &.alipay
                paytype-icon('alipay')
              &.wechat
                paytype-icon('wechat')
              &.unionpay
                paytype-icon('unionpay')
              &.game-card
                paytype-icon('game')
              &.phone-card
                paytype-icon('phone')
            .el-icon-arrow-right
              position absolute
              right 14px
              top 50%
              transform translateY(-50%)
      .pay-right
        box-sizing border-box
        wrapper-right()
        width 888px
        border-left 1px solid $color-border
        min-height 660px

</style>
