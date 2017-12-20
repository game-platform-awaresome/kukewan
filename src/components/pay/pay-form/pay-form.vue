<template>
  <div class="pay-form">
    <div class="common-form-wrapper">
      <!-- account -->
      <div class="single-form-wrapper">
        <span class="input-title">充值账号 : </span>
        <div class="input-wrapper" :class="accountCls">
          <input type="text" placeholder="请输入账号" v-model="formData.account"
           @focus="accountFocus" @blur="accountBlur">
        </div>
        <p v-show="isCorrectAccount === 0" class="form-msg"><span class="icon correct"></span></p>
        <p v-show="isCorrectAccount === 1" class="form-msg">
          <span class="icon error"></span>
          <span class="text">账户不存在</span>
        </p>
      </div>
      <div class="single-form-wrapper">
        <span class="input-title">选择游戏 : </span>
        <div class="select-btn" @click.stop="openGameList">{{showGid}} <i class="el-icon-caret-bottom"></i></div>
        <div class="select-btn" @click.stop="openGameServerList">{{showSid}} <i class="el-icon-caret-bottom"></i></div>
        <!-- game-select-window -->
        <transition name="mode">
          <div class="game-select-window select-window-wrapper" v-show="showGameList">
            <select-window :isGameList="true" :recentLists="recentPlayList"
            :allLists="allGameList" @close="closeTheWindow" @selectId="selectId"></select-window>
          </div>
        </transition>
        <!-- server-select-window -->
        <transition name="mode">
          <div class="server-select-window select-window-wrapper" v-show="showGameServerList">
            <select-window :isGameList="false" :recentLists="recentServerList"
            :allLists="allServerList" @close="closeTheWindow" @selectId="selectId"></select-window>
          </div>
        </transition>
      </div>
      <!-- money -->
      <div class="single-form-wrapper">
        <span class="input-title">选择金额 : <s></s></span>
        <div class="money-list-wrapper">
          <ul>
            <li v-for="(item,index) in moneyList" :key="index" class="money-list-item"
             @click="selectMoney(item,index)" :class="{active: currentMoneyIndex === index}">
              {{item}}
            </li>
            <li class="money-list-item input-money-list-item" :class="{active: currentOtherMoneyCls}">
              <input type="text" v-model.number="otherMoney" class="input-money" placeholder="其他金额"
              @focus="otherMoneyFocus" @blur="otherMoneyBlur">
            </li>
          </ul>
        </div>
      </div>
      <!-- other pay unionpay game-card phone-card -->
      <div class="single-form-wrapper" v-show="showUnionList">
        <span class="input-title">选择{{currentPayTypeTitle}} : </span>
        <div class="other-pay-list-wrapper">
          <pay-list :payType="formData.payType" :selectId="selectId" @selectUnionpay="selectUnionpay"></pay-list>
        </div>
      </div>
    </div>
    <div class="charge-btn-wrapper">
      <div class="charge-btn">立即充值</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SelectWindow from 'components/pay/select-window/select-window'
  import PayList from 'components/pay/pay-list/pay-list'

  export default {
    props: {
      closeWindow: {
        type: Number
      },
      formData: {
        type: Object
      },
      recentPlayList: {
        type: Array
      },
      allGameList: {
        type: Array
      },
      recentServerList: {
        type: Array
      },
      allServerList: {
        type: Array
      }
    },
    mounted() {

    },
    watch: {
      closeWindow() {
        if (this.showGameList || this.showGameServerList) {
          this.showGameList = false
          this.showGameServerList = false
          console.log('close the window')
        }
      }
    },
    computed: {
      showUnionList() {
        let payType = this.formData.payType
        if (payType === 'unionpay' || payType === 'game-card' || payType === 'phone-card') {
          return true
        } else {
          return false
        }
      },
      currentPayTypeTitle() {
        if (this.formData.payType === 'unionpay') {
          return '银行'
        } else if (this.formData.payType === 'game-card') {
          return '游戏卡'
        } else if (this.formData.payType === 'phone-card') {
          return '手机卡'
        }
      }
    },
    data () {
      return {
        // 选择游戏 & 选择区服显示
        showGid: '选择游戏',
        showSid: '选择区服',
        // 表单错误提示
        isCorrectAccount: 2,   // 0 填写正确,1 填写错误
        accountCls: {
          focus: false,
          warn: false
        },
        showGameList: false,
        showGameServerList: false,
        moneyList: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
        otherMoney: '',
        currentMoneyIndex: 0,
        currentOtherMoneyCls: false    // 当前其他金额Cls
      }
    },
    components: {
      SelectWindow,
      PayList
    },
    methods: {
      accountFocus() {
        this.accountCls.warn = false
        this.accountCls.focus = !this.accountCls.warn
      },
      accountBlur() {
        /* 接口调用 */
        // 失败
        // this.accountCls.focus = false
        // this.accountCls.warn = !this.accountCls.focus
        // this.isCorrectAccount = 1
        // 正确
        this.accountCls.focus = false
        this.isCorrectAccount = 0
        this.backAccount()
      },
      closeTheWindow(isGameList) {
        if (isGameList) {
          this.showGameList = false
        } else {
          this.showGameServerList = false
        }
      },
      openGameList() {
        // 窗口控制
        if (this.showGameServerList) {
          this.showGameServerList = false
        }
        this.showGameList = true
      },
      openGameServerList() {
        if (this.showGameList) {
          this.showGameList = false
        }
        this.showGameServerList = true
      },
      otherMoneyFocus() {
        this.currentOtherMoneyCls = true
        // 关闭所有金额样式
        this.currentMoneyIndex = -1
      },
      otherMoneyBlur() {
        if (this.otherMoney) {
          this.$emit('getMoney', this.otherMoney)
        }
      },
      /*
        数据传递部分
       */
      // 通过子窗口获取gid 或 sid
      selectId(obj) {
        if (obj.gid) {
          this.$emit('getGid', obj.gid)
          this.showGid = obj.name
          // 关闭选择游戏窗口 开启选择区服窗口
          this.showGameList = false
          this.showGameServerList = true
        } else {
          this.$emit('getSid', obj.sid)
          this.showSid = obj.name
          // 关闭选择区服窗口
          this.showGameServerList = false
        }
      },
      // 返回账户名
      backAccount() {
        // 检查数据
        // 修改数据
        this.$emit('getAccount', this.formData.account)
      },
      // 返回金额
      selectMoney(money, index) {
        // 关闭otherMoney
        this.currentOtherMoneyCls = false
        this.otherMoney = ''
        // 返回数据
        this.$emit('getMoney', money)
        // 样式索引
        this.currentMoneyIndex = index
      },
      // 返回unionpay
      selectUnionpay(id) {
        this.$emit('getUnionpay', id)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .pay-form
    padding 28px 60px 0
    .common-form-wrapper
      .single-form-wrapper
        position relative
        margin-bottom 25px
        font-size 0
        .input-title
          display inline-block
          vertical-align middle
          font-size $font-size-medium
          width 96px
        .input-wrapper
          display inline-block
          vertical-align middle
          width 260px
          height 44px
          border()
          transition all .3s
          &.focus
            border($color-theme)
          &.warn
            border($color-hot)
          input
            font-size $font-size-medium
            color $color-description
            text-indent 15px
            line-height 44px
        .select-window-wrapper
          position absolute
          top 63px
          z-index 2
          &.mode-enter-active,&.mode-leave-active
            transition all .5s
          &.mode-enter,&.mode-leave-to
            opacity 0
          &.game-select-window
            left 96px
          &.server-select-window
            left 96px + 180px + 30px
        .form-msg
          display inline-block
          margin-left 20px
          .icon
            display inline-block
            vertical-align middle
            width 18px
            height 18px
            &.correct
              bg('../image/correct.png')
            &.error
              bg('../image/error.png')
          .text
            display inline-block
            vertical-align middle
            font-size $font-size-medium
            color $color-hot
        .select-btn
          vertical-align middle
          btn(178px,44px,0,,$font-size-medium,)
          display inline-block
          border()
          &:hover
            border-color $color-theme
            color $color-theme
            .el-icon-caret-bottom
              color $color-theme
          &:nth-of-type(2)
            margin-left 30px
        .money-list-wrapper
          display inline-block
          vertical-align middle
          width (80*6 + 25*6)px
          .money-list-item
            float left
            width 78px
            height 44px
            border()
            line-height 44px
            text-align center
            font-size $font-size-medium
            margin-right 20px
            cursor pointer
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4),
            &:nth-of-type(5),
            &:nth-of-type(6)
              margin-bottom 15px
            .input-money
              width 70px
              text-indent 5px
            &.active
              border($color-theme)
            &.input-money-list-item
              &.active
                border($color-theme)
        .other-pay-list-wrapper
          display inline-block
          vertical-align middle
          width 630px
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
