<template>
  <div class="pay" @click="bodyCloseWindow">
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
          <div class="account">
            <span class="account-text">{{user.nickname}}</span>
            <span class="account-vip"></span>
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
            <li v-for="(item,index) in payTypeList" :key="index"
             @click="selectPayType(item.type,index)" class="pay-type-item" :class="{active: paytypeCurrentIndex === index}">
              <i class="icon" :class="item.type"></i>
              <span class="pay-type-text">{{item.text}}</span>
              <i class="el-icon-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="pay-right">
        <!-- common-input -->
        <pay-form :closeWindow="closeWindow"
         @getAccount="getAccount" @getGid="getGid" @getSid="getSid" @getMoney="getMoney" @getUnionpayId="getUnionpayId"
        :formData="formData" :recentPlayList="recentPlayList" :allGameList="allGameList"
          :recentServerList="recentServerList" :allServerList="allServerList"></pay-form>
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
  import animations from 'create-keyframe-animation'
  import * as payTypes from 'common/js/pay-types'
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
        // 是否开启debug formData
        debug: true,
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
          payType: payTypes.ALIPAY,
          account: 'Greentea',
          gid: 0,
          sid: 0,
          money: 10,
          unionpayId: ''
        },
        // 支付类型列表
        payTypeList: [{
          text: '支付宝',
          type: payTypes.ALIPAY
        },
        {
          text: '微信',
          type: payTypes.WECHAT
        },
        {
          text: '银联',
          type: payTypes.UNIONPAY
        },
        {
          text: '游戏卡',
          type: payTypes.GAMECARD
        },
        {
          text: '手机卡',
          type: payTypes.PHONECARD
        }],
        /*
           接口数据
        */
        // 用户信息
        user: {
          sign: true,
          avatar: require('common/image/test/pay/avatar.png'),
          nickname: 'Greentea',
          securityLevel: 0.6
        },
        // 最近在玩游戏列表
        recentPlayList: [{
          name: '大美人',
          gid: '1'
        },
        {
          name: '大美人',
          gid: '1'
        },
        {
          name: '大美人',
          gid: '1'
        }],
        // 所有游戏列表
        allGameList: [{
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        }],
        // 最近在玩的服务器列表
        recentServerList: [{
          name: '双线123区',
          sid: 22
        }],
        // 所有服务器列表
        allServerList: [{
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        }]
      }
    },
    components: {
      PayForm
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
        }
        // gid
        if (!formData.gid) {
          flag = false
          this.warnContent = '请选择游戏'
        }
        // sid
        if (!formData.sid) {
          flag = false
          this.warnContent = '请选择游戏区服'
        }
        // money
        if (!formData.money) {
          flag = false
          this.warnContent = '请输入金额'
        } else if (formData.money % 1 !== 0) {
          flag = false
          this.warnContent = '充值金额必须为0-10000的整数'
        }
        // unionpay
        if (formData.type === payTypes.UNIONPAY) {
          if (typeof (formData.unionpayId) !== 'string' || !formData.unionpayId) {
            flag = false
            this.warnContent = '请选择银行'
          }
        }
        // game-card
        if (formData.type === payTypes.GAMECARD) {
          let gameCardList = [60, 61, 62, 63]
          let hasCard = gameCardList.find((value) => {
            return value === 1
          })
          if (hasCard !== 1) {
            flag = false
            this.warnContent = '请选择游戏卡'
          }
        }
        // phone-card
        if (formData.type === payTypes.PHONECARD) {
          let phoneCardList = [75, 76, 77]
          let hasCard = phoneCardList.find((value) => {
            return value === 1
          })
          if (hasCard !== 1) {
            flag = false
            this.warnContent = '请选择手机卡'
          }
        }
        // fanily
        if (flag) {
          console.log('all formData is true')
          this.warnContent = ''
        }
      },
      // 选择支付类型
      selectPayType(type, index) {
        this.formData.payType = type
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
        this.$message({
          showClose: true,
          message
        })
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
      getGid(gid) {
        this.formData.gid = gid
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
      getUnionpayId(unionpayId) {
        this.formData.unionpayId = unionpayId
        // 调用数据测试
        this.testFormData()
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
        .form-check
          padding 10px 60px 0
        .charge-btn-wrapper
          padding 30px
          .charge-btn
            btn(125px,44px,,#fff,$font-size-large,$color-new)
            border($color-new)
            margin 0 auto
            &:hover
              background-color $color-new
              color #fff
</style>
