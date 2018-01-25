<template>
  <div class="article-list">
    <public-title :title="title"></public-title>
    <div class="list-wrapper">
      <ul>
        <li v-for="(list,index) in news" :key="index" class="list-item">
          <span class="title">
            <span class="dot">•</span>
            {{list.title}}
          </span>
        </li>
      </ul>
    </div>
    <p class="notice" v-show="newsNotice">
      <i class="icon-bullhorn"></i>
      {{news.notice}}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'

  export default {
    props: {
      newsNotice: Array,
      news: Array,
      title: String
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

  .article-list
    box-sizing border-box
    border($color-border)
    position relative
    .list-wrapper
      padding 0 24px
      .list-item
        font-size $font-size-medium
        padding-bottom 19px
        border-bottom 1px solid $color-border
        color $color-text
        margin-bottom 20px
        no-wrap()
        .title
          transition all .5s
          &:hover
            color $color-theme
            cursor pointer
          .dot
            padding-right 4px
    .notice
      position absolute
      bottom 30px
      box-sizing border-box
      padding 0 24px
      width 100%
      font-size $font-size-medium
      color $color-special
      cursor pointer
      no-wrap()
</style>
