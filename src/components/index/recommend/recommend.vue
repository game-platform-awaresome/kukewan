<template>
  <div class="recommend">
    <public-title :title="title"></public-title>
    <div class="list-wrapper">
      <!-- <transition-group name="fade" tag="ul"> -->
      <ul>
        <li v-for="(recommend,index) in recommends" :key="index"
        @mouseover="overIndex(index)" @mouseout="outIndex" class="list-item">
          <div class="game-image-wrapper">
              <img :src="recommend.img" alt="">
          </div>
            <transition name="fade">
              <div class="game-logo-wrapper" v-show="currentIndex === index">
              <!-- <div class="game-logo-wrapper"> -->
                <div class="image-border">
                  <img :src="recommend.logo" alt="" class="logo-img">
                </div>
              </div>
            </transition>
          <div class="game-content-wrapper">
            <span class="name">{{recommend.name}}</span>
            <type-icon :typeIcon="recommend.type"></type-icon>
            <span class="btn" data-url="recommend.url">开始游戏</span>
          </div>
        </li>
      </ul>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import TypeIcon from 'public/type-icon/type-icon'

  export default {
    props: {
      recommends: {
        type: Array
      }
    },
    data () {
      return {
        title: '推荐游戏',
        currentIndex: ''
      }
    },
    components: {
      PublicTitle,
      TypeIcon
    },
    methods: {
      overIndex(index) {
        this.currentIndex = index
      },
      outIndex() {
        this.currentIndex = -1
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .recommend
    background-color rgba(255,255,255,0.8)
    height 415px
    .list-wrapper
      clear-fix()
      .list-item
        position relative
        float left
        width 270px
        cursor pointer
        transition all .3s
        &:hover
          transform translate3d(0,-10px,0)
        +.list-item
          margin-left 25px
        .game-image-wrapper
          height 300px
          img
            width 100%
            height 100%
        .game-logo-wrapper
          position absolute
          top 0
          left 0
          right 0
          bottom 49px
          background-color rgba(0,0,0,0.3)
          .image-border
            margin 35% auto
            width 175px
            height 105px
            text-align center
          &.fade-enter-active, &.fade-leave-active
            transition all 0.3s
            .image-border
              transition all 0.2s
              transform scale(1)
          &.fade-enter, &.fade-leave-to
            opacity 0
            .image-border
              transform scale(1.3)
        .game-content-wrapper
          position relative
          box-sizing border-box
          padding 16px 15px
          height 415px - 66px - 300px
          border()
          border-top none
          .name
            display inline-block
            vertical-align top
            font-size $font-size-medium-x
            color $color-title
          .type
              display inline-block
              vertical-align top
              margin-left 5px
              width $font-size-medium-x
              height $font-size-medium-x
              line-height $font-size-medium-x
              text-align center
              font-size $font-size-small
              color #fff
              border-radius 2px
              &.hot
                background-color $color-hot
              &.new
                background-color $color-new
          .btn
            position absolute
            top 12px
            right 15px
            display block
            box-sizing border-box
            padding 0 5px
            border($color-theme)
            btn(70px,24px,3px,#fff,$font-size-small,$color-theme)
            transition all .4s
            &:hover
              background-color $color-theme
              color #fff

</style>
