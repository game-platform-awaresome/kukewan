<template>
  <div class="title">
    <div class="border"></div>
    <span class="title-text">{{title}}</span>
    <div class="icon-wrapper" v-show="show">
      <i class="icon icon-more_horiz"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .title
    position relative
    padding 24px 14px
    font-size $font-size-large
    color $color-title
    span
      font-weight 650
    .border
      position absolute
      top -1px
      left -1px
      width 100px
      height 2px
      background-color $color-theme
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
