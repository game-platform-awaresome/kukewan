<template>
  <div class="pay" @click="bodyCloseWindow">
    <div class="pay-wrapper">
      <div class="pay-left">
        <!-- user-info -->
        <user-info></user-info>
        <!-- select-pay-type -->
        <div class="pay-type">
          <ul>
            <li v-for="(item,index) in payTypeList" :key="index"
             @click="selectPayType(item,index)" class="pay-type-item" :class="{active: paytypeCurrentIndex === index}">
              <i class="icon" :class="item.payType"></i>
              <span class="pay-type-text">{{item.name}}</span>
              <i class="el-icon-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="pay-right">
        <!-- common-input -->
        <pay-form :closeWindow="closeWindow"
         @getAccount="getAccount" @getGid="getGid" @getSid="getSid" @getMoney="getMoney" @getUnionpayId="getTwoChannel"
        :formData="formData" @getRoleName="getRoleName"></pay-form>
        <!-- check pay information -->
        <div class="form-check" v-show="warnContent">
          <el-alert
            :title="warnContent"
            type="error"
            show-icon
            :closable="false">
          </el-alert>
        </div>
        <!-- charge  -->
        <div class="charge-btn-wrapper">
          <div class="charge-btn" @click="checkForm">立即充值</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PayForm from 'components/pay/pay-form/pay-form'
  import UserInfo from 'base/user-info/user-info'
  import * as payTypes from 'common/js/pay-types'
  import * as user from 'api/user'
  import {mapGetters} from 'vuex'

  // 是否开启debug模式
  const debug = process.env.NODE_ENV !== 'production'

  export default {
    created () {
      this.getUsername()
      this.getPayType()
    },
    data () {
      return {
        // 是否开启debug formData
        debug: debug,
        // 关闭窗口参数
        closeWindow: 0,
        // 支付类型当前索引
        paytypeCurrentIndex: 0,
        // 表单的账户boolean参数
        checkAccount: true,
        // 检查表单的错误信息
        warnContent: '',
        // 表单参数配置
        formData: {
          payType: '',
          account: '',
          gid: 0,
          sid: 0,
          money: 10,
          twoChannel: '',
          payto: 0,
          roleName: '',
          oneChannel: ''
        },
        payTypeList: []
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    components: {
      PayForm,
      UserInfo
    },
    methods: {
      // 数据测试
      testFormData() {
        if (this.debug) {
          console.log('------数 据 测 试------')
          for (let key in this.formData) {
            console.log(`${key}:${this.formData[key]}`)
          }
          console.log('----------------------')
        }
      },
      // 充值表单检查
      checkForm() {
        let flag = true
        let formData = this.formData
        // account
        // 添加判断一下如果是本账号则不再需要验证

        if (!this.checkAccount) {
          flag = false
          this.warnContent = '账号不正确,请检查您的输入'
          return
        }
        // gid
        if (!formData.gid) {
          flag = false
          this.warnContent = '请选择游戏'
          return
        }
        // sid
        if (!formData.sid) {
          flag = false
          this.warnContent = '请选择游戏区服'
          return
        }
        // roleName
        if (!formData.roleName) {
          flag = false
          this.warnContent = '请选择角色'
          return
        }
        // money
        if (!formData.money) {
          flag = false
          this.warnContent = '请输入金额'
          return
        } else if (formData.money % 1 !== 0) {
          flag = false
          this.warnContent = '充值金额必须为0-10000的整数'
          return
        }
        // unionpay
        if (formData.payType === payTypes.UNIONPAY) {
          if (typeof (formData.twoChannel) !== 'string' || !formData.twoChannel) {
            flag = false
            this.warnContent = '请选择银行'
            return
          }
        }
        // game-card
        if (formData.payType === payTypes.GAMECARD) {
          let gameCardList = [60, 61, 62, 63]
          let hasCard = gameCardList.find((value) => {
            return value === 1
          })
          if (hasCard !== 1) {
            flag = false
            this.warnContent = '请选择游戏卡'
            return
          }
        }
        // phone-card
        if (formData.payType === payTypes.PHONECARD) {
          let phoneCardList = [75, 76, 77]
          let hasCard = phoneCardList.find((value) => {
            return value === 1
          })
          if (hasCard !== 1) {
            flag = false
            this.warnContent = '请选择手机卡'
            return
          }
        }
        // fanily
        if (flag) {
          console.log('all formData is true')
          this.warnContent = ''
        }
      },
      // 选择支付类型
      selectPayType(item, index) {
        this.formData.payType = item.payType
        this.formData.oneChannel = item.oneChannel
        if (item.twoChannel.length === 1) {
          this.formData.twoChannel = item.twoChannel[0]
        } else if (item.twoChannel.length > 1) {
          this.formData.twoChannel = ''
        }
        this.paytypeCurrentIndex = index
        // 调用数据测试
        this.testFormData()
        this.selectPayTypeAlert(this.formData.payType)
      },
      // 切换支付类型提示
      selectPayTypeAlert(type) {
        let message = ''
        if (type === payTypes.WECHAT) {
          message = '切换到微信支付'
        }
        if (type === payTypes.ALIPAY) {
          message = '切换到支付宝支付'
        }
        if (type === payTypes.UNIONPAY) {
          message = '切换到银联支付'
        }
        if (type === payTypes.GAMECARD) {
          message = '切换到游戏卡支付'
        }
        if (type === payTypes.PHONECARD) {
          message = '切换到手机卡支付'
        }
        this.$notify.info({
          title: '支付方式',
          showClose: false,
          duration: 2000,
          message
        })
      },
      // 页面窗口关闭
      bodyCloseWindow() {
        this.closeWindow += 1
      },
      // 更新account
      getAccount(account, isCorrect) {
        // 调用接口(pay-form已调用)
        if (isCorrect === 0) {
          this.checkAccount = true
        } else {
          this.checkAccount = false
        }
        this.formData.account = account
        // 调用数据测试
        this.testFormData()
      },
      // 更新gid
      getGid(gid, payto) {
        this.formData.gid = gid
        this.formData.payto = payto
        // 调用数据测试
        this.testFormData()
      },
      // 更新sid
      getSid(sid) {
        this.formData.sid = sid
        // 调用数据测试
        this.testFormData()
      },
      // 更新money
      getMoney(money) {
        this.formData.money = money
        // 调用数据测试
        this.testFormData()
      },
      // 更新unionpay
      getTwoChannel(twoChannel) {
        this.formData.twoChannel = twoChannel
        // 调用数据测试
        this.testFormData()
      },
      // 获取用户名
      getUsername() {
        if (this.user) {
          this.formData.account = this.user.username
        }
      },
      // 获取角色名
      getRoleName(roleName) {
        this.formData.roleName = roleName
        this.testFormData()
      },
      // 获取充值方式
      getPayType() {
        user.getPayType()
          .then(res => {
            this.payTypeList = res
            this.formData.payType = res[0].payType
            this.formData.oneChannel = res[0].oneChannel
            if (res[0].twoChannel.length === 1) {
              this.formData.twoChannel = res[0].twoChannel[0]
            }
            // console.log(this.payTypeList)
          })
      }
    },
    watch: {
      '$store.state.user': 'getUsername'
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
            &:first-of-type
              border-top 1px solid $color-border
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
        .form-check
          padding 10px 60px 0
        .charge-btn-wrapper
          padding 30px
          .charge-btn
            btn(125px,44px,,$color-new,$font-size-large,#fff)
            // border($color-new)
            margin 0 auto
            &:hover
              background-color rgba(255,175,0,.7)
              color #fff
</style>
