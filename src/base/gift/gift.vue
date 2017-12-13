<template>
  <div class="gift">
    <public-title :title="gifts.title"></public-title>
    <div class="gift-list-wrapper">
      <ul>
        <li v-for="(gift,index) in gifts.gifts" :key="index" class="gift-list">
          <div class="gift-img-wrapper">
            <img :src="gift.img" alt="">
          </div>
          <div class="gift-content">
            <p class="name">{{gift.name}}</p>
            <p class="number">还剩 : <span class="account">{{gift.num}}</span>个</p>
          </div>
          <div class="btn">领取</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'

  export default {
    props: {
      gifts: {
        type: Object
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

  .gift
    box-sizing border-box
    border($color-border)
    .gift-list-wrapper
      padding 0 24px
      .gift-list
        clear-fix()
        padding-bottom 10px
        border-bottom 1px solid $color-border
        margin-bottom 10px
        &:last-of-type
          border-bottom none
        .gift-img-wrapper
          float left
          width 54px
          height 54px
          img
            width 100%
            height 100%
        .gift-content
          float left
          padding 9px 25px
          .name,.number
            text-align center
          .name
            font-size $font-size-medium
          .number
            margin-top 10px
            font-size $font-size-small
            .account
              color $color-special
        .btn
          margin-top 15px
          float right
          border($color-theme)
          btn(50px,22px,3px,#fff,$font-size-small,$color-theme)
          &:hover
           background-color $color-theme
           color #fff
</style>
