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
        <div class="game-center-title">
          <span>游戏中心</span>
          <div class="icon-wrapper">
            <i class="icon icon-more_horiz"></i>
          </div>
        </div>
        <div class="list-wrapper">
          <ul>
            <li v-for="(center,index) in gameCenter" :key="index" class="list-item">
              <span class="title-text">{{center.name}}</span>
              <type-icon :typeIcon="center.type"></type-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="friendly-link">
      <div class="friendly-link-wrapper">
        <public-title :title="title" :show="showTitle"></public-title>
        <div class="friendly-link-list">
          <ul>
            <li v-for="(link,index) in friendlyLink" :key="index" class="list-item">
              <span>{{link.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import TypeIcon from 'public/type-icon/type-icon'

  export default {
    props: {
      ad: {
        type: String
      },
      gameCenter: {
        type: Array
      },
      friendlyLink: {
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
        }],
        title: '友情链接',
        showTitle: false
      }
    },
    components: {
      TypeIcon,
      PublicTitle
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
      clear-fix()
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
        box-sizing border-box
        border()
        .game-center-title
          position relative
          box-sizing border-box
          height 43px
          padding 14px
          font-size $font-size-medium-x
          border-bottom 1px solid $color-border
          .icon-wrapper
            position absolute
            padding 10px
            cursor pointer
            top 2px
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
        .list-wrapper
          clear-fix()
          padding 20px
          .list-item
            float left
            width 140px
            margin 0 25px 25px 0
            no-wrap()
            link-a()
            &:nth-of-type(5n)
              margin-right 0
            &:nth-last-of-type(1),
            &:nth-last-of-type(2),
            &:nth-last-of-type(3),
            &:nth-last-of-type(4),
            &:nth-last-of-type(5)
              margin-bottom 0
            .title-text
              display inline-block
              vertical-align top
              font-size $font-size-medium-x
    .friendly-link
      clear-fix()
      padding-top $height-block-top
      clear both
      margin-bottom 40px
      .friendly-link-wrapper
        border()
        .friendly-link-list
          padding 0 50px 0
          clear-fix()
          .list-item
            float left
            link-a($color-description,$font-size-medium)
            margin 0 50px 20px 0
</style>
