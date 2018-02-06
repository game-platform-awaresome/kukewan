<template>
  <div class="pay-window-wrapper">
    <div class="pay-window-inside">
      <p class="pay-window-title">确认充值信息 :</p>
      <div class="pay-form-info">
        <p class="pay-desc">
          <span class="pay-form-title">充值方式 :</span>
          <span class="pay-form-content">{{payType}}</span>
        </p>
        <p class="pay-desc">
          <span class="pay-form-title">充值账号 :</span>
          <span class="pay-form-content">{{formData.account}}</span>
        </p>
        <p class="pay-desc">
          <span class="pay-form-title">所选游戏 :</span>
          <span class="pay-form-content">{{formData.gameName}}-{{formData.serverName}}-{{formData.roleName}}</span>
        </p>
        <p class="pay-desc">
          <span class="pay-form-title">订单号 :</span>
          <span class="pay-form-content">{{formData.order_sn}}</span>
        </p>
        <p class="pay-desc">
          <span class="pay-form-title">充值金额 :</span>
          <span class="pay-form-content">{{formData.money}}元</span>
        </p>
        <p class="pay-desc">
          <span class="pay-form-title">充值所得 :</span>
          <span class="pay-form-content">{{gameCoin}}游戏币</span>
        </p>
      </div>
      <div class="btn-wrapper">
        <div class="pay-btn make-sure-charge" @click="makeSurePay">确认充值</div>
        <div class="pay-btn cancel-sure-charge" @click="cancelPay">取消</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as payTypes from 'common/js/pay-types'
  import * as pay from 'api/pay'

  const WORDS = '爹给你发的请求'

  export default {
    props: {
      formData: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    computed: {
      payType() {
        switch (this.formData.payType) {
          case payTypes.ALIPAY :
            return '支付宝'
          case payTypes.WECHAT :
            return '微信支付'
          case payTypes.UNIONPAY :
            return '银联支付'
          case payTypes.GAMECARD :
            return '游戏卡支付'
          case payTypes.PHONECARD :
            return '手机卡支付'
        }
      },
      gameCoin() {
        const money = this.formData.money
        const percent = this.formData.payto
        return parseInt(money) * parseInt(percent)
      }
    },
    methods: {
      cancelPay() {
        this.$emit('cancelWindow')
      },
      makeSurePay() {
        this.chargeOrder()
      },
      chargeOrder() {
        const formDataParams = {
          username: this.formData.account,
          rolename: this.formData.roleName,
          pay_type: this.formData.oneChannel,
          pay_source: this.formData.twoChannel,
          sid: this.formData.sid,
          money: this.formData.money,
          order_sn: this.formData.order_sn,
          wanglei: WORDS
        }
        pay.charge(formDataParams)
          .then(res => {

          })
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .pay-window-wrapper
    position absolute
    z-index 999
    top -71px
    left -100%
    right -100%
    bottom -223px
    background-color rgba(0,0,0,0.6)
    .pay-window-inside
      position absolute
      width 560px
      height 360px
      top 40%
      margin-left -280px
      margin-top -180px
      left 50%
      background-color #fff
      .pay-window-title
        height 60px
        padding 0 30px
        line-height 60px
        color $color-theme
        font-size $font-size-large-x
        background-color #eaeef3
      .pay-form-info
        box-sizing border-box
        padding 15px 30px
        border-bottom 1px solid #eaeef3
        .pay-desc
          height $font-size-large
          line-height $font-size-large
          margin-bottom 15px
          font-size $font-size-medium-x
          color $color-text
          &:last-of-type
            margin-bottom 0
          .pay-form-title
            display inline-block
            text-align right
            width 90px
          .pay-form-content
            display inline-block
            padding-left 10px
      .btn-wrapper
        text-align center
        .pay-btn
          margin 15px 20px 0
          &.make-sure-charge
            btn(150px,50px,,$color-new,$font-size-large,#fff)
            display inline-block
            &:hover
              background-color rgba(255,175,0,.8)
          &.cancel-sure-charge
            btn(150px,50px,,$color-border,$font-size-large,#fff)
            display inline-block
            &:hover
              background-color rgba(205,214,228,.8)
</style>
