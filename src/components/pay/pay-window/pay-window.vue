<template>
  <div class="pay-window-wrapper">
    <!-- form S -->
    <div class="pay-window-inside" v-show="openForm">
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
    <!-- form E -->
    <!-- alert S -->
    <div class="window-alert pay-window-inside" v-show="openAlert">
      <p class="warn">请在新打开的页面完成支付</p>
      <p class="warn-desc">请在新打开的页面完成支付</p>
      <p class="warn-desc">支付完成前请不要关闭窗口</p>
      <p class="warn-desc">若支付遇到问题请<span class="link">联系客服</span></p>
      <div class="btn-wrapper">
        <div class="pay-btn reset" @click="resetPay">重新选择支付方式</div>
        <div class="pay-btn complete" @click="payComplete">充值完成</div>
      </div>
    </div>
    <!-- alert E -->
    <!-- qr-code S -->
    <div class="qrcode" v-show="openQrCode">
      <div class="qrcode-inside">
        <div class="qrcode-title">
          {{payType}}
          <i class="el-icon-close close" @click="cancelQrWindow"></i>
        </div>
        <div class="qrcode-img">
          <img :src="qrcodeData.img" alt="">
        </div>
        <p class="prompt">扫描二维码以完成支付</p>
        <p class="money">￥ <span>{{qrcodeData.money}}</span></p>
      </div>
    </div>
    <!-- qr-code E -->
    <form :action="formUrl" method="post" target="_blank" ref="form">
      <input type="hidden" name="username" :value="formData.account">
      <input type="hidden" name="rolename" :value="formData.roleName">
      <input type="hidden" name="pay_type" :value="formData.oneChannel">
      <input type="hidden" name="pay_source" :value="formData.twoChannel">
      <input type="hidden" name="sid" :value="formData.sid">
      <input type="hidden" name="money" :value="formData.money">
      <input type="hidden" name="order_sn" :value="formData.order_sn">
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as payTypes from 'common/js/pay-types'
  import * as pay from 'api/pay'
  import { Loading } from 'element-ui'
  const WORDS = '爹给你发的请求'

  export default {
    props: {
      formData: {
        type: Object
      }
    },
    data () {
      return {
        openForm: true,
        openQrCode: false,
        openAlert: false,
        qrcodeData: {}
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
      },
      formUrl() {
        const debug = process.env.NODE_ENV !== 'production'
        const payUrl = debug ? 'http://api.yii.com:88/pay' : 'api.kukewan.com/pay'
        return payUrl
      }
    },
    methods: {
      cancelPay() {
        this.$emit('cancelWindow')
      },
      makeSurePay() {
        if (this.formData.oneChannel === 'wftapi') {
          // 调用接口请求
          this.chargeOrder()
        } else {
          // 提交form表单
          this.$refs.form.submit()
          // 打开窗口提示
          this.openForm = false
          this.openAlert = true
        }
      },
      closeQrWindow() {
        this.openQrCode = false
        this.openForm = true
        this.$emit('cancelWindow')
      },
      chargeOrder() {
        let loadingInstance = Loading.service({target: '.pay-window-wrapper', text: '加载中'})
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
            if (res.payParam.status === true) {
              this.qrcodeData = {
                img: res.payParam.code_img_url,
                money: res.payables
              }
              this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close()
              })
              // 关闭表单窗口,打开二维码扫码窗口
              this.openForm = false
              this.openQrCode = true
              console.log(this.qrcodeData)
            }
          })
      },
      cancelQrWindow() {
        this.openForm = true
        this.openQrCode = false
        this.$emit('cancelWindow')
      },
      resetPay() {
        this.openForm = true
        this.openAlert = false
        this.$emit('cancelWindow')
      },
      payComplete() {
        this.openForm = true
        this.openAlert = false
        this.$emit('cancelWindow')
        this.$router.push('/user/pay-history')
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
      width 500px
      height 360px
      top 40%
      margin-left -250px
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
    .window-alert
      width 400px
      height 280px
      top 40%
      margin-left -200px
      margin-top -140px
      .warn
        padding 30px 0
        color $color-text
        font-size $font-size-large-x
        text-align center
        font-weight bold
      .warn-desc
        padding-bottom 20px
        font-size $font-size-medium-x
        color $color-text
        text-align center
      .btn-wrapper
        text-align center
        .pay-btn
          margin 15px 20px 0
          &.reset
            btn(150px,50px,,$color-border,$font-size-medium-x,#fff)
            display inline-block
            &:hover
              background-color rgba(205,214,228,.8)
          &.complete
            btn(150px,50px,,$color-new,$font-size-medium-x,#fff)
            display inline-block
            &:hover
              background-color rgba(255,175,0,.8)
    .qrcode
      .qrcode-inside
        position absolute
        width 400px
        height 440px
        top 40%
        margin-left -200px
        margin-top -220px
        left 50%
        background-color #fff
        .qrcode-title
          padding 20px
          font-size $font-size-large-x
          color $color-text
          .close
            float right
            cursor pointer
        .qrcode-img
          margin 0 auto
          width 280px
          height 280px
          img
            width 100%
            height 100%
            border none
        .prompt
          font-size $font-size-medium-x
          color $color-description
          text-align center
        .money
          margin-top 20px
          color $color-new
          font-size 30px
          text-align center
</style>
