<template>
  <div class="user">
    <div class="user-wrapper">
      <div class="user-left-wrapper">
        <!-- user-info -->
        <user-info></user-info>
        <!-- user-nav -->
        <div class="user-nav-wrapper">
          <ul>
            <router-link v-for="(item,index) in userNav" :key="index"
             class="user-nav-item" tag="li" :to="item.router">
              <span class="icon" :class="item.router"></span>
              <span class="name">{{item.name}}</span>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="user-right-wrapper">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserInfo from 'base/user-info/user-info'

  export default {
    data () {
      return {
        userNav: [{
          name: '我的账号',
          router: 'my-account'
        },
        {
          name: '编辑信息',
          router: 'edit'
        },
        {
          name: '修改密码',
          router: 'modify-password'
        },
        {
          name: '账户安全',
          router: 'account-security'
        },
        {
          name: '实名认证',
          router: 'real-name'
        },
        {
          name: '充值历史',
          router: 'pay-history'
        },
        {
          name: '积分兑换',
          router: 'intergral-history'
        },
        {
          name: '新手卡领取',
          router: 'new-hand-history'
        }]
      }
    },
    components: {
      UserInfo
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .user
    margin-top 71px
    .user-wrapper
      wrapper()
      border-left 1px solid $color-border
      border-right 1px solid $color-border
      .user-left-wrapper
        wrapper-left()
        border-right 1px solid $color-border
        .user-info
          background-color #f7fafe
        .user-nav-item
          margin-top 1px solid $color-border
          box-sizing border-box
          padding 20px 14px
          height 59px
          font-size 16px
          border-top 1px solid $color-border
          background-color #f7fafe
          cursor pointer
          transition all .3s
          &:hover
            background-color #fff
          &:first-of-type
            border-top none
          &.active
            background-color #fff
          // &:last-of-type
          //   border-bottom 1px solid $color-border
          .icon
            display inline-block
            vertical-align middle
            width 18px
            height 16px
            margin 0 8px 0 100px
            &.my-account
              background url('./image/user-myaccount.png') center center no-repeat
            &.edit
              background url('./image/user-edit.png') center center no-repeat
            &.modify-password
              background url('./image/user-update.png') center center no-repeat
            &.account-security
              background url('./image/user-safe.png') center center no-repeat
            &.real-name
              background url('./image/user-addmit.png') center center no-repeat
            &.pay-history
              background url('./image/user-payhistory.png') center center no-repeat
            &.intergral-history
              background url('./image/user-exchange.png') center center no-repeat
            &.new-hand-history
              background url('./image/user-cardget.png') center center no-repeat
          .name
            display inline-block
            vertical-align middle
            color $color-title
          .el-icon-arrow-right
            float right
            font-size 18px
      .user-right-wrapper
        wrapper-right()

</style>
