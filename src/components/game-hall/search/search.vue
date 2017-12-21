<template>
  <div class="search">
    <div class="search-nav">
      <public-title :title="title" :show="false"></public-title>
      <div class="search-input" :class="{active: isFocus === true}">
        <input type="text" placeholder="请输入搜索内容" v-model="searchInput" class="search-input-start"
         @focus="focus" @blur="blur">
        <div class="search-input-icon-wrapper">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="search-select-wrapper">
        <ul>
          <li class="select-nav-item">
            <p class="nav-title">游戏类型 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.type === -1}" @click="selectNavItem('type',-1)">不限</li>
              <li v-for="(item,index) in gameType" :key="index" class="select-type-item"
              @click="selectNavItem('type',index)" :class="{active: currentIndex.type === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">游戏题材 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.story === -1}" @click="selectNavItem('story',-1)">不限</li>
              <li v-for="(item,index) in gameStory" :key="index" class="select-type-item"
              @click="selectNavItem('story',index)" :class="{active: currentIndex.story === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">游戏形式 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.style === -1}" @click="selectNavItem('style',-1)">不限</li>
              <li v-for="(item,index) in gameStyle" :key="index" class="select-type-item"
              @click="selectNavItem('style',index)" :class="{active: currentIndex.style === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">字母排序 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.letter === -1}" @click="selectNavItem('letter',-1)">不限</li>
              <li v-for="(item,index) in gameLetter" :key="index" class="select-type-item"
              @click="selectNavItem('letter',index)" :class="{active: currentIndex.letter === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <game-list :gameList="gameList"></game-list>
    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-size="9">
      </el-pagination>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import GameList from 'base/game-list/game-list'

  export default {
    props: {
      gameList: {
        type: Array
      }
    },
    data () {
      return {
        title: '全部游戏',
        searchInput: '',
        isFocus: false,
        gameType: [
          {
            name: '角色扮演',
            id: 10
          },
          {
            name: '动作冒险',
            id: 10
          },
          {
            name: '武侠江湖',
            id: 10
          },
          {
            name: '策略经营',
            id: 10
          },
          {
            name: '社区养成',
            id: 10
          }],
        gameStory: [
          {
            name: '三国',
            id: 10
          },
          {
            name: '魔幻',
            id: 10
          },
          {
            name: '西游',
            id: 10
          },
          {
            name: '水浒',
            id: 10
          },
          {
            name: '军事',
            id: 10
          },
          {
            name: '航海',
            id: 10
          }],
        gameStyle: [
          {
            name: '三国',
            id: 10
          },
          {
            name: '魔幻',
            id: 10
          },
          {
            name: '西游',
            id: 10
          },
          {
            name: '水浒',
            id: 10
          },
          {
            name: '军事',
            id: 10
          },
          {
            name: '航海',
            id: 10
          },
          {
            name: '其他',
            id: 10
          }],
        gameLetter: [
          {
            name: 'ABCDE',
            id: 10
          },
          {
            name: 'FGHIJK',
            id: 10
          },
          {
            name: 'LMNOP',
            id: 10
          },
          {
            name: 'QRSTU',
            id: 10
          },
          {
            name: 'VWXYZ',
            id: 10
          }],
        select: {
          type: 0,
          story: 0,
          style: 0,
          letter: 0
        },
        currentIndex: {
          type: -1,
          story: -1,
          style: -1,
          letter: -1
        }
      }
    },
    components: {
      PublicTitle,
      GameList
    },
    methods: {
      selectNavItem(nav, index) {
        this.currentIndex[nav] = index
      },
      focus() {
        this.isFocus = true
      },
      blur() {
        this.isFocus = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .search
    .search-nav
      position relative
      border()
      .search-input
        position absolute
        right 33px
        top 19px
        width 200px
        box-sizing border-box
        font-size $font-size-medium
        border()
        border-radius 15px
        padding 6px 0 6px 10px
        transition all .3s
        &.active
          border($color-theme)
        .search-input-start
          width 160px
        .search-input-icon-wrapper
          position absolute
          right 5px
          top 0
          bottom 0
          width 32px
          line-height 27px
          text-align center
          border-radius 50%
          cursor pointer
      .search-select-wrapper
        padding 0 14px
        .select-nav-item
          padding-bottom 20px
          height 22px
          font-size $font-size-medium
          .nav-title
            float left
            clear-fix()
            height 22px
            line-height 22px
          .select-type-wrapper
            float left
            clear-fix()
            height 22px
            line-height 22px
            .select-type-item
              height 22px
              line-height 22px
              font-size $font-size-medium
              color $color-title
              padding 0 10px
              float left
              cursor pointer
              transition all .3s
              &.active
                background-color $color-theme
                color #fff
                border-radius 5px
              &:first-of-type
                margin-left 10px


    .game-list
      margin-top $height-block-top
    .pagination-wrapper
      margin-top 30px
      text-align center
      .el-pagination
        display inline-block

</style>
