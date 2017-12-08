<template>
  <div class="index">
    <!-- slider -->
    <div class="slider-wrapper">
      <slider animation="fade" height="1000px" :interval="4000" indicators="right">
        <slider-item v-for="(item, index) in slider" :key="index">
          <div class="slider-item-wrapper">
            <img :src="item.img" alt="">
          </div>
        </slider-item>
      </slider>
    </div>
    <!-- index -->
    <div class="index-wrapper">
      <div class="index-left">
        <login-block></login-block>
      </div>
      <div class="index-right"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Slider, SliderItem } from 'vue-easy-slider'
  import LoginBlock from 'base/login/login'

  export default {
    data () {
      return {
        slider: [{
          img: require('common/image/test/index/banner.png')
        },
        {
          img: require('common/image/test/index/banner.png')
        },
        {
          img: require('common/image/test/index/banner.png')
        }]
      }
    },
    components: {
      Slider,
      SliderItem,
      LoginBlock
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .index
    position relative
    min-height 1000px
    .slider-wrapper
      position absolute
      z-index -1
      width 100%
      height 1000px
        .slider-item-wrapper
          height 1000px
          img
            width 100%
            height 100%
      .indicators
        top 426px
        right 374px
        .slider-indicator-icon
          background-color $color-theme
          &.slider-indicator-active
            background-color #f9cfce
    .index-wrapper
      width $width-base
      margin 0 auto
      clear-fix()
      .index-left
        width $width-left

</style>
