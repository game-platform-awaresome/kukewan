<template>
  <div class="pay-form">
    <div class="common-form-wrapper">
      <div class="single-form-wrapper">
        <span class="input-title">充值账号 : </span>
        <div class="input-wrapper" :class="usernameCls">
          <input type="text" placeholder="请输入账号" v-model="formData.username"
           @focus="usernameFocus" @blur="usernameBlur">
        </div>
        <p v-show="isCorrectUsername === 0" class="form-msg"><span class="icon correct"></span></p>
        <p v-show="isCorrectUsername === 1" class="form-msg">
          <span class="icon error"></span>
          <span class="text">账户不存在</span>
        </p>
      </div>
      <div class="single-form-wrapper">
        <span class="input-title">选择游戏 : </span>
        <div class="select-btn" @click="openGameList">选择游戏 <i class="el-icon-caret-bottom"></i></div>
        <div class="select-btn" @click="openGameServerList">选择区服 <i class="el-icon-caret-bottom"></i></div>
        <!-- game-select-window -->
        <transition name="mode">
          <div class="game-select-window select-window-wrapper" v-show="showGameList">
            <select-window :isGameList="true" :recentLists="recentPlayList"
            :allLists="allGameList" @close="closeTheWindow"></select-window>
          </div>
        </transition>
        <!-- server-select-window -->
        <transition name="mode">
          <div class="server-select-window select-window-wrapper" v-show="showGameServerList">
            <select-window :isGameList="false" :recentLists="recentServerList"
            :allLists="allServerList" @close="closeTheWindow"></select-window>
          </div>
        </transition>
      </div>
      <div class="single-form-wrapper">
        <span class="input-title">选择金额 : <s></s></span>
        <div class="money-list-wrapper">
          <ul>
            <li v-for="(item,index) in moneyList" :key="index" class="money-list-item">
              {{item}}
            </li>
            <li class="money-list-item">
              <input type="text" v-model="formData.money" class="input-money" placeholder="其他金额">
            </li>
          </ul>
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

  export default {
    data () {
      return {
        // 表单错误提示

        isCorrectUsername: 2,   // 0 填写正确,1 填写错误
        usernameCls: {
          focus: false,
          warn: false
        },
        // 表单参数
        formData: {
          username: '',
          gid: 0,
          sid: 0,
          money: '',
          union: '',
          gameCard: ''
        },
        showGameList: false,
        showGameServerList: false,
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
        }],
        moneyList: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 1000]
      }
    },
    components: {
      SelectWindow
    },
    methods: {
      usernameFocus() {
        this.usernameCls.warn = false
        this.usernameCls.focus = !this.usernameCls.warn
      },
      usernameBlur() {
        /* 接口调用 */
        // 失败
        // this.usernameCls.focus = false
        // this.usernameCls.warn = !this.usernameCls.focus
        // this.isCorrectUsername = 1
        // 正确
        this.usernameCls.focus = false
        this.isCorrectUsername = 0
      },
      closeTheWindow(isGameList) {
        if (isGameList) {
          this.showGameList = false
        } else {
          this.showGameServerList = false
        }
      },
      openGameList() {
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
          &.mode-enter-active,.mode-leave-active
            transition all .5s
          &.mode-enter,.mode-leave-to
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
          width (80*6 + 25*6)px
          vertical-align middle
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
    .charge-btn-wrapper
      padding 20px
      .charge-btn
        btn(125px,44px,,$color-new,$font-size-large,#fff)
        margin 0 auto

</style>
