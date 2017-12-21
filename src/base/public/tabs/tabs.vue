<template>
  <div class="tabs">
    <div class="tab-select">
      <ul>
        <li class="tab-select-item" v-for="(tab,index) in tabs" :key="tab"
        @click="selectItem(index)" :class="{active: currentIndex === index}">
          <span>{{tab}}</span>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <ul>
        <!-- <transition-group tag="ul" name="hover" mode="out-in"> -->
          <li v-for="(tabContent,index) in tabsContent" :key="index" class="tab-content-item"
          v-show="currentIndex === index">
            <ul>
              <li v-for="(content,index2) in tabContent" :key="index2"
              class="tab-content-item-content" @mouseover="changeHover(index2)" @mouseout="changeOut()">

                  <div class="content-wrapper" v-show="currentIndex2 !== index2">
                    <span class="time">{{content.time}}</span>
                    <span class="name">{{content.name}}</span>
                    <span class="server">{{content.server}}</span>
                  </div>

                  <div class="content-wrapper-hover" v-show="currentIndex2 === index2">
                    <div class="img">
                      <img :src="content.image" alt="">
                    </div>
                    <div class="content">
                      <p class="name">{{content.name}}</p>
                      <p class="type">{{content.type}}</p>
                    </div>
                    <div class="start-game">进入</div>
                  </div>
              </li>
            </ul>
          </li>
        <!-- </transition-group> -->
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tabsContent: {
        type: Array
      },
      tabs: {
        type: Array
      }
    },
    data () {
      return {
        currentIndex: 0,
        currentIndex2: ''
      }
    },
    methods: {
      selectItem(index) {
        this.currentIndex = index
      },
      changeHover(index2) {
        this.currentIndex2 = index2
      },
      changeOut() {
        this.currentIndex2 = -1
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .tabs
    .tab-select
      clear-fix()
      .tab-select-item
        float left
        border-top 2px solid #fff
        transition all .6s
        btn(33.3333%,66px,0,transparent,$font-size-medium-x,$color-title)
        &.active
          border-top 2px solid $color-theme
    .tab-content
      .tab-content-item
        padding 0 25px 20px
        color $color-text
        .tab-content-item-content
          clear-fix()
          border-bottom 1px solid $color-border
          cursor pointer
          .content-wrapper
            clear-fix()
            span
              height 50px
              line-height 50px
              display block
              float left
              font-size $font-size-medium
              // font-weight 550
              &.time
                width 33%
                text-align left
              &.name
                width 37%
                text-align center
              &.server
                width 30%
                text-align right
          .content-wrapper-hover
            border($color-border)
            border-bottom none
            height 62px
            clear-fix()
            .img
              height 62px
              width 95px
              float left
              img
                width 100%
                height 100%
            .content
              float left
              box-sizing border-box
              height 62px
              padding 10px 15px
              text-align center
              .name,.type
                height 20px
                line-height 20px
              .name
                font-size $font-size-medium
                font-weight 600
              .type
                font-size $font-size-small
                color $color-description
            .start-game
              float right
              margin 20px 10px 0 0
              border($color-theme)
              btn(50px,22px,3px,transparent,$font-size-small,$color-theme)
              &:hover
                background-color $color-theme
                color #fff

</style>
