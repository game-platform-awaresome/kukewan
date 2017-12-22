<template>
  <div class="goods-list">
    <public-title :title="title" :show="false"></public-title>
    <div class="goods-list-wrapper">
      <ul>
        <li v-for="(item, index) in goodsList" :key="index" class="list-item" :class="{intergral: !practical}">
          <div class="goods-type" :class="{hot: item.type === 'hot',new: item.type === 'new'}"></div>
          <div class="img-wrapper">
            <img :src="item.img" alt="">
          </div>
          <div class="goods-content">
            <p class="goods-name">{{item.name}}</p>
            <p class="need-intergral">
              <span class="icon"></span>{{item.intergral}}
            </p>
            <p class="goods-num">
              剩余 : <span class="num">{{item.num}}个</span>
            </p>
            <div class="get-goods-btn">立即兑换</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'

  export default {
    props: {
      title: {
        type: String
      },
      goodsList: {
        type: Array
      },
      practical: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {

      }
    },
    components: {
      PublicTitle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .goods-list
    margin-top $height-block-top
    box-sizing border-box
    height 472px
    border-top 1px solid $color-border
    .list-item
      position relative
      float left
      width 413px
      height 188px
      border()
      margin 25px 0 0 30px
      transition all .3s
      &.intergral
        .img-wrapper
          width 134px
          height 134px
          margin-top 27px
          margin-left 50px
          border-radius 10px
        .goods-content
          margin-left 40px
      &:hover
        border($color-theme)
        .img-wrapper
          img
            transform scale(1.05)
      &:nth-of-type(1),
      &:nth-of-type(2)
        margin-top 0
      &:nth-of-type(1),
      &:nth-of-type(3)
        margin-left 0
      .goods-type
        position absolute
        z-index 2
        top -1px
        left -1px
        width 44px
        height 44px
        &.hot
          bg('../hot.png')
        &.new
          bg('../new.png')
      .img-wrapper
        float left
        height 100%
        width 170px
        margin-left 30px
        overflow hidden
        img
          width 100%
          height 100%
          transition all .3s
      .goods-content
        float left
        box-sizing border-box
        width 175px
        height 100%
        padding 25px 0
        margin-left 20px
        .goods-name
          padding-bottom 20px
          font-size $font-size-large
          color $color-title
        .need-intergral
          font-size $font-size-medium-x
          color $color-special
          padding-bottom 20px
          .icon
            display inline-block
            vertical-align top
            padding-right 10px
            width 16px
            height 18px
            bg('../intergral.png')
        .goods-num
          color $color-description
          font-size $font-size-medium-x
          padding-bottom 20px
          .num
            color $color-new
        .get-goods-btn
          btn(94px,26px,3px,,$font-size-small,$color-theme)
          border($color-theme)
          &:hover
            background-color $color-theme
            color #fff
</style>
