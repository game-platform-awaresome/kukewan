<template>
  <div class="game-list">
    <div class="list-wrapper">
      <ul>
        <li v-for="(list,index) in gameList" :key="index" class="list-item"
        @mouseenter="overIndex(index)" @mouseleave="outIndex()">
          <div class="img-wrapper">
            <img :src="list.img" alt="" class="game-img">
          </div>
          <div class="content title">
            <span class="name">{{list.name}}</span>
            <type-icon :typeIcon="list.type"></type-icon>
          </div>
          <div class="content hover">
            <span class="link">新服</span>
            <span class="dot">|</span>
            <span class="link">官网</span>
            <span class="dot">|</span>
            <span class="link">礼包</span>
            <span class="start-game">开始游戏</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TypeIcon from 'base/public/type-icon/type-icon'

  export default {
    props: {
      gameList: Array
    },
    data () {
      return {
        currentIndex: ''
      }
    },
    components: {
      TypeIcon
    },
    methods: {
      overIndex(index) {
        this.currentIndex = index
      },
      outIndex() {
        this.currentIndex = 100
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .game-list
    .list-wrapper
      clear-fix()
      .list-item
        &:hover
          .content.hover
            transform translate3d(0,0,0)
          .game-img
            transform scale(1.1)
        position relative
        width 270px
        height 248px
        float left
        margin-left 25px
        margin-top 25px
        overflow hidden
        cursor pointer
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3)
          margin-top 0
        &:nth-of-type(3n-2)
          margin-left 0
        .img-wrapper
          height 200px
          // overflow hidden
          .game-img
            width 100%
            height 100%
            transition all .4s
        .content
          box-sizing border-box
          height 48px
          border()
          border-top none
          padding 15px 0 16px
          line-height 16px
          text-align center
          &.title
            .name
              display inline-block
              vertical-align top
              font-size $font-size-medium-x
              font-weight 600
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
          &.hover
            position absolute
            padding 12px
            bottom 0
            left 0
            width 100%
            line-height 24px
            text-align left
            background-color #fff
            transform translate3d(0,48px,0)
            transition all .3s
            .link
              link-a($color-description,$font-size-medium)
            .dot
              font-size $font-size-medium
              color $color-description
              padding 0 3px
            .start-game
              box-sizing border-box
              float right
              border($color-theme)
              btn(70px,24px,3px,,$font-size-small,$color-theme)
              &:hover
                color #fff
                background-color $color-theme
</style>
