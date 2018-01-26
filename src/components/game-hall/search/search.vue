<template>
  <div class="search">
    <div class="search-nav">
      <public-title :title="title" :show="false"></public-title>
      <div class="search-input" :class="{active: isFocus === true}">
        <input type="text" placeholder="请输入搜索内容" v-model="searchInput" class="search-input-start"
         @focus="focus" @blur="blur" @keyup.13="searchGame">
        <div class="search-input-icon-wrapper" @click.enter="searchGame">
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
              @click="selectNavItem('type',index,item.id)" :class="{active: currentIndex.type === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">游戏题材 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.story === -1}" @click="selectNavItem('story',-1)">不限</li>
              <li v-for="(item,index) in gameStory" :key="index" class="select-type-item"
              @click="selectNavItem('story',index,item.id)" :class="{active: currentIndex.story === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">游戏形式 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.style === -1}" @click="selectNavItem('style',-1)">不限</li>
              <li v-for="(item,index) in gameStyle" :key="index" class="select-type-item"
              @click="selectNavItem('style',index,item.id)" :class="{active: currentIndex.style === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
          <li class="select-nav-item">
            <p class="nav-title">字母排序 : </p>
            <ul class="select-type-wrapper">
              <li class="select-type-item" :class="{active: currentIndex.letter === -1}" @click="selectNavItem('letter',-1)">不限</li>
              <li v-for="(item,index) in gameLetter" :key="index" class="select-type-item"
              @click="selectNavItem('letter',index,item.id)" :class="{active: currentIndex.letter === index}">
                {{item.name}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <game-list ref="gameList" :gameList="gameList" v-loading="gameList.length === 0"></game-list>
    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="headers.totalCount"
        :page-size="9"
        :current-page="headers.currentPage"
        @current-change="controlChange">
      </el-pagination>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import GameList from 'base/game-list/game-list'
  import { Loading } from 'element-ui'
  import * as game from 'api/game'

  export default {
    created() {
      this.initGame()
    },
    data () {
      return {
        title: '全部游戏',
        searchInput: '',
        isFocus: false,
        gameType: [
          {
            name: '角色扮演',
            id: 1
          },
          {
            name: '动作冒险',
            id: 2
          },
          {
            name: '武侠江湖',
            id: 3
          },
          {
            name: '策略经营',
            id: 4
          },
          {
            name: '社区养成',
            id: 5
          }],
        gameStory: [
          {
            name: '三国',
            id: 1
          },
          {
            name: '魔幻',
            id: 2
          },
          {
            name: '西游',
            id: 3
          },
          {
            name: '水浒',
            id: 4
          },
          {
            name: '军事',
            id: 5
          },
          {
            name: '航海',
            id: 6
          }],
        gameStyle: [
          {
            name: '即时战斗',
            id: 1
          },
          {
            name: '战争策略',
            id: 2
          },
          {
            name: '回合制',
            id: 3
          },
          {
            name: '休闲类',
            id: 4
          }],
        gameLetter: [
          {
            name: 'ABCDE',
            id: 1
          },
          {
            name: 'FGHIJK',
            id: 2
          },
          {
            name: 'LMNOP',
            id: 3
          },
          {
            name: 'QRSTU',
            id: 4
          },
          {
            name: 'VWXYZ',
            id: 5
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
        },
        gameList: [],
        headers: {},
        gameListParams: {
          type: '',
          theme: '',
          form: '',
          ucfirst: ''
        }
      }
    },
    components: {
      PublicTitle,
      GameList
    },
    methods: {
      _filterParams(nav) {
        if (nav === 'type') {
          return 'type'
        }
        if (nav === 'story') {
          return 'theme'
        }
        if (nav === 'style') {
          return 'form'
        }
        if (nav === 'letter') {
          return 'ucfirst'
        }
      },
      selectNavItem(nav, index, param) {
        this.currentIndex[nav] = index
        this.gameListParams[this._filterParams(nav)] = param
        if (index === -1) {
          this.allGame()
          return
        }
        if (nav === 'type') {
          this.selectType(this.gameListParams)
        }
        if (nav === 'story') {
          this.selectStory(this.gameListParams)
        }
        if (nav === 'style') {
          this.selectStyle(this.gameListParams)
        }
        if (nav === 'letter') {
          this.selectLetter(this.gameListParams)
        }
      },
      focus() {
        this.isFocus = true
      },
      blur() {
        this.isFocus = false
      },
      _pagination(headers) {
        this.headers.currentPage = parseInt(headers['x-pagination-current-page'])
        this.headers.pageCount = parseInt(headers['x-pagination-page-count'])
        // this.headers.perPage = parseInt(headers['x-pagination-per-page'])
        this.headers.totalCount = parseInt(headers['x-pagination-total-count'])
      },
      controlChange(val) {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.choicePagination(val)
          .then(res => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = res
          })
      },
      allGame() {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.allGame()
        .then(({data, headers}) => {
          this.$nextTick(() => {
            loadingInstance.close()
          })
          this._pagination(headers)
          this.gameList = data
        })
      },
      initGame() {
        game.allGame()
          .then(({data, headers}) => {
            this._pagination(headers)
            this.gameList = data
          })
      },
      selectType(param) {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.selectType(param)
          .then(({headers, data}) => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = data
            this._pagination(headers)
          })
      },
      selectStory(param) {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.selectStory(param)
          .then(({headers, data}) => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = data
            this._pagination(headers)
          })
      },
      selectStyle(param) {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.selectStyle(param)
          .then(({headers, data}) => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = data
            this._pagination(headers)
          })
      },
      selectLetter(param) {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.selectLetter(param)
          .then(({headers, data}) => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = data
            this._pagination(headers)
            console.log(this.gameList)
          })
      },
      searchGame() {
        let gameList = this.$refs.gameList.$el
        let loadingInstance = Loading.service({target: gameList})
        game.searchGame(this.searchInput)
          .then(({headers, data}) => {
            this.$nextTick(() => {
              loadingInstance.close()
            })
            this.gameList = data
            this._pagination(headers)
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin.styl';
@import '~common/stylus/variable.styl';

.search {
  .search-nav {
    position: relative;
    border();

    .search-input {
      position: absolute;
      right: 33px;
      top: 19px;
      width: 200px;
      box-sizing: border-box;
      font-size: $font-size-medium;
      border();
      border-radius: 15px;
      padding: 6px 0 6px 10px;
      transition: all 0.3s;

      &.active {
        border($color-theme);
      }

      .search-input-start {
        width: 160px;
      }

      .search-input-icon-wrapper {
        position: absolute;
        right: 5px;
        top: 0;
        bottom: 0;
        width: 32px;
        line-height: 27px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    .search-select-wrapper {
      padding: 0 14px;

      .select-nav-item {
        padding-bottom: 20px;
        height: 22px;
        font-size: $font-size-medium;

        .nav-title {
          float: left;
          clear-fix();
          height: 22px;
          line-height: 22px;
        }

        .select-type-wrapper {
          float: left;
          clear-fix();
          height: 22px;
          line-height: 22px;

          .select-type-item {
            btn(auto, 22px, 3px, , $font-size-medium, $color-title);
            padding: 0 10px;
            float: left;

            &.active {
              background-color: $color-theme;
              color: #fff;
            }

            &:first-of-type {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .game-list {
    margin-top: $height-block-top;
  }

  .pagination-wrapper {
    margin-top: 30px;
    text-align: center;

    .el-pagination {
      display: inline-block;
    }
  }
}
</style>
