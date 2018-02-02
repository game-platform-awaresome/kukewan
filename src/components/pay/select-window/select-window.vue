<template>
  <div class="select-window" @click.stop>
    <div class="window-nav-wrapper" v-show="isGameList">
      <ul>
        <li class="nav-item" :class="{active: selectCurrentListCls}" @click.stop="selectCurrentList(0,true)">最近在玩</li>
        <li class="nav-item" :class="{active: !selectCurrentListCls}" @click.stop="selectCurrentList(1,false)">全部游戏</li>
      </ul>
      <div class="close-the-window">
        <i class="el-icon-close" @click.stop="closeTheWindow"></i>
      </div>
    </div>
    <div class="window-nav-wrapper" v-show="!isGameList">
      <ul>
        <li class="nav-item" :class="{active: selectCurrentListCls}" @click.stop="selectCurrentList(0,true)">最近在玩</li>
        <li class="nav-item" :class="{active: !selectCurrentListCls}" @click.stop="selectCurrentList(1,false)">全部区服</li>
      </ul>
      <div class="close-the-window">
        <i class="el-icon-close" @click.stop="closeTheWindow"></i>
      </div>
    </div>
    <div class="window-list-wrapper" v-show="showCurrentList === 0" v-loading="loading.recent">
      <ul>
        <li v-for="(list,index) in recentLists" :key="index" class="window-list-item" @click.stop="selectId(list)">
          <span class="recent-play-item">{{list.name}}</span>
        </li>
      </ul>
    </div>
    <div class="window-list-wrapper" v-show="showCurrentList === 1" v-loading="loading.all">
      <ul>
        <li v-for="(list,index) in allLists" :key="index" class="window-list-item" @click.stop="selectId(list)">
          <span class="recent-play-item">{{list.name}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      isGameList: {
        type: Boolean
      },
      recentLists: {
        type: Array
      },
      allLists: {
        type: Array
      },
      loading: {
        type: Object
      }
    },
    data () {
      return {
        selectCurrentListCls: true,
        showCurrentList: 0
      }
    },
    components: {

    },
    methods: {
      // 选项卡
      selectCurrentList(index, cls) {
        this.showCurrentList = index
        this.selectCurrentListCls = cls
      },
      // 关闭当前窗口
      closeTheWindow() {
        this.$emit('close', this.isGameList)
      },
      selectId(list) {
        if (this.isGameList) {
          this.$emit('selectId', list)
        } else {
          this.$emit('selectId', list)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .select-window
    width 450px
    border()
    padding 10px 17px 0 17px
    background-color #fff
    .window-nav-wrapper
      position relative
      border-bottom 1px dashed $color-border
      clear-fix()
      font-size $font-size-small
      margin-bottom 10px
      .nav-item
        float left
        padding-right 30px
        margin-bottom 10px
        color $color-description
        cursor pointer
        &.active
          color $color-theme
      .close-the-window
        position absolute
        btn(25px,25px,50%,,20px,)
        top -6px
        right -11px
        cursor pointer
    .window-list-wrapper
      min-height 100px
      clear-fix()
      .window-list-item
        float left
        btn(100px,26px,0,,,$color-description)
        border()
        margin 0 10px 10px 0
        &:hover
          border($color-theme)
          color $color-theme
</style>
