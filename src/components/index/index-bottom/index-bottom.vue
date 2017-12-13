<template>
  <div class="index-bottom">
    <div class="ad">
      <img :src="ad" alt="">
    </div>
    <div class="index-left">
      <div class="quickly">
        <ul>
          <li v-for="(quickly,index) in quicklies" :key="index" class="quickly-item">
            <p class="icon"><i :class="quickly.icon"></i></p>
            <p class="title">{{quickly.title}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="game-center">
        <p class="game-center-title">
          <span>游戏中心</span>
          <div class="icon-wrapper">
            <i class="icon icon-more_horiz"></i>
          </div>
        </p>
        <div class="list-wrapper">
          <ul>
            <li v-for="(center,index) in gameCenter" :key="index">
              <span class="title-text">{{center.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      ad: {
        type: String
      },
      gameCenter: {
        type: Array
      }
    },
    data () {
      return {
        quicklies: [{
          icon: 'icon-user-plus',
          title: '免费注册'
        },
        {
          icon: 'icon-credit-card',
          title: '游戏充值'
        },
        {
          icon: 'icon-key',
          title: '修改密码'
        },
        {
          icon: 'icon-enter',
          title: '找回密码'
        },
        {
          icon: 'icon-envelop',
          title: '绑定邮箱'
        },
        {
          icon: 'icon-phone',
          title: '在线客服'
        }]
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .index-bottom
    .ad
      clear both
      height 110px
      padding-top $height-block-top
      img
        width 100%
        height 100%
    .index-left
      .quickly
        margin-top $height-block-top
        .quickly-item
          box-sizing border-box
          float left
          width 155px
          height 75px
          padding 15px
          cursor pointer
          color $color-description
          transition all .5s
          transition color .2s
          border()
          &:hover
            border($color-theme)
            background-color $color-theme
            color #fff
            .icon
              transform rotateY(360deg)
          &:nth-of-type(2n-1)
            border-right none
          &:nth-of-type(3),
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6)
            border-top none
          .icon
            text-align center
            font-size 24px
            transition all 1s
          .title
            text-align center
            font-size $font-size-small
            padding-top 6px
    .index-right
      .game-center
        margin-top $height-block-top
        height 75px * 3
        border()
        .game-center-title
          position relative
          box-sizing border-box
          height 43px
          padding 14px
          .icon-wrapper
            position absolute
            padding 10px
            cursor pointer
            top 14px
            right 5px
            &:hover
              .icon
                transform rotateY(180deg)
            .icon
              display block
              width 16px
              height 16px
              text-align center
              float right
              font-size $font-size-medium-x
              border($color-theme)
              border-radius 50%
              color $color-theme
              cursor pointer
              transition all 0.5s

</style>
