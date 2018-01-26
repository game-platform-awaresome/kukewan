<template>
  <div class="rank">
    <public-title :title="title" :show="false"></public-title>
    <div class="rank-list-wrapper">
      <ul>
        <li v-for="(item,index) in rank" :key="index" class="list-item">
          <span class="icon icon-medal"></span>
          <span class="img">
            <img src="" alt="">
          </span>
          <span class="name">{{item.name}}</span>
          <!-- <span class="type">{{item.type}}</span> -->
          <span class="start" @click="selectGame(item.id)">开始游戏</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'

  export default {
    props: {
      rank: {
        type: Array
      },
      title: {
        type: String
      }
    },
    data () {
      return {

      }
    },
    methods: {
      selectGame(id) {
        this.$router.push({
          path: `/game-hall/list/${id}`
        })
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

  .rank
    border()
    box-sizing border-box
    height 472px
    .rank-list-wrapper
      padding 0 24px
      .list-item
        border-bottom 1px solid $color-border
        padding 5px 0
        height 40px
        line-height 38px
        &:nth-of-type(1)
          .icon
            color $color-hot
        &:nth-of-type(2)
          .icon
            color #ea6e2a
        &:nth-of-type(3)
          .icon
            color $color-new
        &:last-of-type
          border-bottom none
          padding-bottom 4px
        &:first-of-type
          padding 0 0 5px 0
        span
          display inline-block
          vertical-align middle
          &.icon
            font-size 24px
            color $color-description
          &.name,&.type
            font-size 14px
            padding-left 8px
            width 70px
            color $color-text
          &.start
            btn(69px,20px,3px)
            float right
            margin-top 10px
            border($color-theme)
            &:hover
              background-color $color-theme
              color #fff
            color $color-theme

</style>
