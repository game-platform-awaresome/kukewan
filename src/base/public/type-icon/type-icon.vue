<template>
  <div class="type-icon">
    <span class="type hot" v-show="typeIcon === 0">H</span>
    <span class="type new" v-show="typeIcon === 1">N</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      typeIcon: {
        type: Number
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

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .type-icon
    display inline-block
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

</style>
