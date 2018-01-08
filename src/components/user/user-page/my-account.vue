<template>
  <div class="my-account">
    <div class="user-info-wrapper">
      <div class="user-info-item">
        <p>账户 : <span class="account">{{user.account}}</span> </p>
        <p>等级 : <span class="level">VIP{{user.level}}</span> </p>
        <p>实名认证 : <span class="truename">已认证</span></p>
      </div>
      <div class="user-info-item">
        <p>会员积分 :</p>
        <p class="intergral">{{user.intergral}}</p>
      </div>
      <div class="user-info-item">
        <p class="recent-play">最近在玩 :</p>
        <div class="recent-play-wrapper">
          <ul>
            <li v-for="(item,index) in user.recent_play" :key="index">
              {{item.name}}{{item.sid}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="user-info-public-wrapper top">
      <span class="title">上次登录时间 :</span>
      <span class="content"></span>
    </div>
    <div class="user-info-public-wrapper">
      <span class="title">上次登录IP :</span>
      <span class="content"></span>
    </div>
    <div class="user-info-public-wrapper">
      <span class="title">注册时间 :</span>
      <span class="content"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        user: {
          account: 15222070199,
          level: 2,
          intergral: 3200,
          recent_play: [{
            name: '盗墓笔记',
            gid: 12,
            sid: '双线12区',
            url: ''
          },
          {
            name: '盗墓笔记',
            gid: 12,
            sid: '双线12区',
            url: ''
          },
          {
            name: '盗墓笔记',
            gid: 12,
            sid: '双线12区',
            url: ''
          }],
          last_login: '2017.11.20 ',
          last_ip: '192.16.1.77',
          register_time: '2017.11.12'
        }
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/user.styl"

  .my-account
    .user-info-wrapper
      bg('../image/my-account.png')
      width 100%
      height 175px
      clear-fix()
      .user-info-item
        box-sizing border-box
        float left
        width 33.3%
        height 100%
        padding 10px 30px
        p
          line-height 50px
          color $color-description
          font-size $font-size-medium-x
          .account
            color $color-text
          .level
            color $color-new
          .truename
            color $color-hot
          &.intergral
            color $color-hot
            line-height 100px
            font-size 60px
            text-align center
        .recent-play-wrapper li
          color $color-description
          line-height 26px
          cursor pointer
          &:hover
            text-decoration underline
    .user-info-public-wrapper
      userPublicInput()
      margin-top 25px
      &.top
        margin-top 35px


</style>
