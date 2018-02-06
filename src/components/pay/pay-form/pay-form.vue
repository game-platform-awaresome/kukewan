<template>
  <div class="pay-form">
    <div class="common-form-wrapper">
      <!-- account -->
      <div class="single-form-wrapper">
        <span class="input-title">充值账号 : </span>
        <div class="input-wrapper" :class="accountCls">
          <input type="text" placeholder="请输入账号" v-model.trim="formData.account"
           @focus="accountFocus" @blur="accountBlur">
        </div>
        <p v-show="isCorrectAccount === 0" class="form-msg">
          <i class="el-icon-check icon"></i>
          <!-- <span class="icon correct"></span> -->
        </p>
        <p v-show="isCorrectAccount === 1" class="form-msg">
          <i class="el-icon-close icon"></i>
          <!-- <span class="icon error"></span> -->
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
            :allLists="allGameList" @close="closeTheWindow" @selectId="selectId" :loading="loadingGame"></select-window>
          </div>
        </transition>
        <!-- server-select-window -->
        <transition name="mode">
          <div class="server-select-window select-window-wrapper" v-show="showGameServerList">
            <select-window :isGameList="false" :recentLists="recentServerList"
            :allLists="allServerList" @close="closeTheWindow" @selectId="selectId" :loading="loadingServer"></select-window>
          </div>
        </transition>
        <!-- role -->
        <el-select v-model="roleName" :disabled="false" v-show="formData.roleName">
          <el-option
            v-for="item in roles"
            :key="item.role"
            :value="item.role">
          </el-option>
        </el-select>
      </div>
      <!-- money -->
      <div class="single-form-wrapper">
        <span class="input-title">选择金额 : <s></s></span>
        <div class="money-list-wrapper">
          <ul>
            <li v-for="(item,index) in moneyList" :key="index" class="money-list-item"
             @click="selectMoney(item,index)" :class="{active: currentMoneyIndex === index}">
              {{item}}
              <div class="triangle"></div>
              <p class="correct">
                <i class="el-icon-check"></i>
              </p>
            </li>
            <li class="money-list-item input-money-list-item" :class="{active: currentOtherMoneyCls}">
              <input type="number" v-model.number="otherMoney" class="input-money" placeholder="其他金额"
              @focus="otherMoneyFocus" @blur="otherMoneyBlur">
            </li>
          </ul>
        </div>
      </div>
      <!-- other pay unionpay game-card phone-card -->
      <div class="single-form-wrapper" v-show="showUnionList">
        <span class="input-title">选择{{currentPayTypeTitle}} : </span>
        <div class="other-pay-list-wrapper">
          <pay-list :payType="formData.payType" @selectUnionpayId="selectUnionpayId"></pay-list>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import SelectWindow from 'components/pay/select-window/select-window'
  import PayList from 'components/pay/pay-list/pay-list'
  import * as payTypes from 'common/js/pay-types'
  import * as game from 'api/game'
  import * as server from 'api/server'
  import * as user from 'api/user'
  import * as pay from 'api/pay'

  export default {
    created () {
      this.allGame()
      this.getOrderId()
      this.getUnitUrlParams()
      if (localStorage.access_token) {
        this.isCorrectAccount = 0
      }
    },
    props: {
      closeWindow: {
        type: Number
      },
      formData: {
        type: Object
      }
    },
    data () {
      return {
        // 选择游戏 & 选择区服显示 & 角色
        showGid: '选择游戏',
        showSid: '选择区服',
        roles: [],
        roleName: '',
        roleIsDisable: false,
        roleIsShow: false,
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
        currentOtherMoneyCls: false,    // 当前其他金额Cls
        recentPlayList: [],
        allGameList: [],
        recentServerList: [],
        allServerList: [],
        loadingGame: {
          recent: false,
          all: false
        },
        loadingServer: {
          recent: false,
          all: false
        }
      }
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
        if (payType === payTypes.UNIONPAY || payType === payTypes.GAMECARD || payType === payTypes.PHONECARD) {
          return true
        } else {
          return false
        }
      },
      currentPayTypeTitle() {
        if (this.formData.payType === payTypes.UNIONPAY) {
          return '银行'
        } else if (this.formData.payType === payTypes.GAMECARD) {
          return '游戏卡'
        } else if (this.formData.payType === payTypes.PHONECARD) {
          return '手机卡'
        }
      }
    },
    components: {
      SelectWindow,
      PayList
    },
    methods: {
      accountFocus() {
        this.isCorrectAccount = 2
        this.accountCls.warn = false
        this.accountCls.focus = !this.accountCls.warn
      },
      accountBlur() {
        /* 接口调用 */
        user.hasAccount(this.formData.account)
          .then(res => {
            // 账号存在
            if (res.code === -2) {
              this.accountCls.focus = false
              this.isCorrectAccount = 0
              this.backAccount(this.isCorrectAccount)
              // 调用接口
              this.recentGame(this.formData.account)
            } else {
              this.accountCls.focus = false
              this.accountCls.warn = !this.accountCls.focus
              this.isCorrectAccount = 1
            }
          })
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
        this.roleName = ''
        if (obj.dataType === 'gameData') {
          this.$emit('getGid', obj.id, obj.payto, obj.name)
          this.showGid = obj.name
          // 关闭选择游戏窗口 开启选择区服窗口
          this.showGameList = false
          this.showGameServerList = true
          // ************ 获取到gid,调用接口 ************
          this.currentGameOfServer(obj.id)
          this.currentGameRecentServer(obj.id, this.formData.account)
        } else {
          this.$emit('getSid', obj.id, obj.name)
          this.showSid = obj.name
          // 关闭选择区服窗口
          this.showGameServerList = false
          // ************ 获取到sid,调用接口 ************
          if (this.formData.account) {
            this.getRole(obj.id, this.formData.account)
          }
        }
      },
      // 返回账户名
      backAccount(isCorrect) {
        // 检查数据
        // 修改数据
        this.$emit('getAccount', this.formData.account, isCorrect)
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
      // 返回unionpayId
      selectUnionpayId(unionpayId) {
        this.$emit('getUnionpayId', unionpayId)
      },
      // 获取所有游戏
      allGame() {
        this.loadingGame.all = true
        game.allGame()
          .then(res => {
            let arr = []
            res.forEach(ele => {
              let obj = Object.assign(ele, {dataType: 'gameData'})
              arr.push(obj)
            })
            this.allGameList = arr
            this.loadingGame.all = false
            // console.log(this.allGameList)
          })
      },
      // 最近的游戏
      recentGame(account) {
        this.loadingGame.recent = true
        game.allRecentGame(account)
          .then(res => {
            let arr = []
            for (let key in res) {
              let obj = res[key]
              let recentObj = {
                name: obj.gameName,
                id: obj.gameid,
                dataType: 'gameData',
                payto: obj.payto
              }
              arr.push(recentObj)
            }
            this.recentPlayList = arr
            this.loadingGame.recent = false
            // console.log(this.recentPlayList)
          })
      },
      currentGameRecentServer(gid, account) {
        this.loadingServer.recent = true
        server.currentGameRecentServer(gid, account)
          .then(res => {
            let arr = []
            res.forEach(element => {
              let obj = {
                name: element.serverName,
                id: element.sid,
                dataType: 'serverData'
              }
              arr.push(obj)
            })
            this.recentServerList = arr
            this.loadingServer.recent = false
          })
      },
      currentGameOfServer(gid) {
        this.loadingServer.all = true
        server.currentGameOfServer(gid)
          .then(res => {
            let arr = []
            res.forEach(element => {
              let obj = {
                name: element.serverName,
                id: element.sid,
                dataType: 'serverData'
              }
              arr.push(obj)
            })
            this.allServerList = arr
            this.loadingServer.all = false
            // console.log(this.allServerList)
          })
      },
      getRole(sid, account) {
        server.serverSearchRole(sid, account)
          .then(res => {
            this.roles = res
            if (this.roles.length === 1) {
              // this.roleIsShow = true
              // this.roleIsDisable = true
              this.roleName = res[0].role
              this.$emit('getRoleName', this.roleName)
            }
          })
      },
      // 获取初始url
      getUnitUrlParams() {
        let gid = this.$route.query.game
        let sid = this.$route.query.server_id
        let uid = this.$route.query.user
        if (gid && sid) {
          game.getGameInfoByGid(gid)
            .then(res => {
              let gameInfo = Object.assign(res, {dataType: 'gameData'})
              this.$emit('getGid', gameInfo.id, gameInfo.payto, gameInfo.name)
              this.showGid = gameInfo.name
            })
          server.getServerInfoBySid(gid, sid)
            .then(res => {
              let serverObj = Object.assign(res, {dataType: 'serverType'})
              this.$emit('getSid', serverObj.sid, serverObj.serverName)
              this.showSid = serverObj.serverName
              // 关闭选择区服窗口
              this.showGameServerList = false
              // ************ 获取到sid,调用接口 ************
              if (uid) {
                let reg = /^\d+$/
                if (reg.test(uid)) {
                  this.getUserInfoByUid(uid)
                    .then(res => {
                      this.getRole(serverObj.sid, res.data.username)
                      this.recentGame(res.data.username)
                    })
                } else {
                  this.formData.account = uid
                }
              }
            })
        }
        if (uid && !gid) {
          let reg = /^\d+$/
          if (reg.test(uid)) {
            this.getUserInfoByUid(uid)
              .then(res => {
                this.recentGame(res.data.username)
              })
          } else {
            this.formData.account = uid
            this.recentGame(uid)
          }
        }
      },
      // 通过uid获取用户信息 &&& 获取角色
      getUserInfoByUid(uid) {
        return user.getUserInfoByUid(uid)
          .then(res => {
            this.formData.account = res.data.username
            this.accountCls.focus = false
            this.isCorrectAccount = 0
            this.backAccount(this.isCorrectAccount)
            return Promise.resolve(res)
          })
      },
      getOrderId() {
        pay.getOrderId()
          .then(res => {
            this.formData.order_sn = res.orderSn
          })
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
        .el-select
          display inline-block
          vertical-align top
          margin-left 30px
          input
            border-radius 0
            width 180px
            height 46px
            border()
            &:hover
              border($color-theme)
        .form-msg
          display inline-block
          margin-left 20px
          .icon
            font-size 20px
            display inline-block
            vertical-align middle
            font-weight blod
            color $color-hot
            // width 18px
            // height 18px
            &.correct
              color $color-hot
            //   bg('../image/correct.png')
            &.error
              color $color-hot
            //   bg('../image/error.png')
          .text
            display inline-block
            margin-left 5px
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
            position relative
            float left
            width 78px
            height 44px
            border()
            line-height 44px
            text-align center
            font-size $font-size-medium
            margin-right 20px
            cursor pointer
            transition all .4s
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4),
            &:nth-of-type(5),
            &:nth-of-type(6)
              margin-bottom 15px
            .input-money
              width 90px
              text-indent 5px
            &.active
              border($color-theme)
              .triangle
                border-bottom 15px solid $color-theme
            &.input-money-list-item
              overflow hidden
              &.active
                border($color-theme)
            &:hover
              border($color-theme)
              .triangle
                border-bottom 15px solid $color-theme
            .triangle
              position absolute
              right 0
              bottom 0
              border-left 15px solid transparent
              border-bottom 15px solid transparent
              transition all .4s
            .correct
              position absolute
              width 14px
              height 14px
              z-index 2
              right -2px
              bottom 12px
              color #fff
        .other-pay-list-wrapper
          display inline-block
          vertical-align middle
          width 630px


</style>
