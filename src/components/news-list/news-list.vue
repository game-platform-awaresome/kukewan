<template>
  <div class="news-list">
    <div class="news-list-wrapper">
      <div class="ad">
        <img :src="ad" alt="">
      </div>
      <div class="breadcrumb-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻公告</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="news-list-left">
        <public-title title="新闻公告" :show="false"></public-title>
        <div class="news-list-content">
          <ul>
            <li v-for="(item,index) in newsList" :key="index" class="news-list-item">
              <p class="main">
                <span class="icon-type news" v-show="item.type === 0">新闻</span>
                <span class="icon-type notice" v-show="item.type === 1">公告</span>
                <span class="title">{{item.title}}</span>
              </p>
              <p>
                <span class="time">{{item.time}}</span>
              </p>
              <div class="news-detail-btn">查看详情</div>
            </li>
          </ul>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="news-list-right">
        <game-server :server="server"></game-server>
        <div class="feel-like">
          <public-title title="猜你喜欢" :show="false"></public-title>
          <el-carousel height="199px">
            <el-carousel-item v-for="(item,index) in feelLike" :key="index">
              <div class="slider-img-wrapper">
                <img :src="item.img" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import GameServer from 'base/game-server/game-server'

  export default {
    data () {
      return {
        /*
          接口数据
        */
        ad: require('common/image/test/index/ad.png'),
        newsList: [{
          type: 0,     // 新闻 0 公告 1
          title: '《绝世唐门》夏至未至活动',
          time: '2017-12-03 14:20'
        },
        {
          type: 0,     // 新闻 0 公告 1
          title: '《绝世唐门》夏至未至活动',
          time: '2017-12-03 14:20'
        },
        {
          type: 1,     // 新闻 0 公告 1
          title: '《绝世唐门》夏至未至活动',
          time: '2017-12-03 14:20'
        },
        {
          type: 0,     // 新闻 0 公告 1
          title: '《绝世唐门》夏至未至活动',
          time: '2017-12-03 14:20'
        },
        {
          type: 1,     // 新闻 0 公告 1
          title: '《绝世唐门》夏至未至活动',
          time: '2017-12-03 14:20'
        }],
        // 服
        server: [
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服20区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服30区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ],
          [
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            },
            {
              time: '09/27 15:30',
              name: '烈焰传奇',
              server: '新服10区',
              image: require('common/image/test/index/server.png'),
              type: '角色扮演',
              url: ''
            }
          ]
        ],
        // 猜你喜欢轮播
        feelLike: [{
          img: require('common/image/test/intergral-mall/feel-like.png')
        },
        {
          img: require('common/image/test/intergral-mall/feel-like.png')
        },
        {
          img: require('common/image/test/intergral-mall/feel-like.png')
        }]
      }
    },
    components: {
      PublicTitle,
      GameServer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .news-list
    margin-top 71px
    margin-bottom 40px
    .news-list-wrapper
      wrapper()
      .ad
        margin-top 15px
      .el-breadcrumb
        line-height 50px
        .el-breadcrumb__inner, .el-breadcrumb__inner
          color $color-description
        .el-breadcrumb__inner a:hover, .el-breadcrumb__inner:hover
          color $color-theme
        .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover
          color $color-description
      .news-list-left
        position relative
        wrapper-left()
        width 860px
        height 834px
        border()
        .news-list-content
          padding 0 14px
          .news-list-item
            position relative
            border-top 1px dashed $color-border
            padding 14px 0
            height 70px
            box-sizing border-box
            .main
              padding-bottom 10px
              .icon-type
                display inline-block
                vertical-align middle
                width 46px
                height 16px
                line-height 16px
                font-size $font-size-small
                text-align center
                color #fff
                border-radius 3px
                &.news
                  background-color $color-new
                &.notice
                  background-color $color-special
              .title
                display inline-block
                vertical-align middle
                font-size $font-size-medium-x
                font-weight 500
            .time
              color $color-description
              padding-left 60px
            .news-detail-btn
              position absolute
              btn(84px,26px,,#fff,$font-size-medium,$color-theme)
              border($color-theme)
              right 11px
              top 23px
              &:hover
                background-color $color-theme
                color #fff
        .pagination
          position absolute
          bottom 0
          width 100%
          text-align center
          padding 24px 0
      .news-list-right
        wrapper-right()
        width 310px
        .game-server
          height 415px
          border()
        .feel-like
          margin-top $height-block-top

</style>
