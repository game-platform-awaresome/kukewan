<template>
  <div class="news-detail">
    <div class="news-detail-wrapper">
      <div class="ad">
        <img :src="ad" alt="">
      </div>
      <div class="breadcrumb-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻公告</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="news-detail-left">
        <public-title title="新闻公告" :show="false"></public-title>
        <div class="news-detail-content">
          <p class="title">{{article.title}}</p>
          <p class="desc">
            <span class="author">文章作者: {{article.author}}</span>
            <span class="time">更新时间: {{article.time}}</span>
            <span class="read-num">阅读次数: {{article.read_num}}</span>
          </p>
          <div class="news-detail-article">
            <pre>{{article.detail}}</pre>
          </div>
        </div>
      </div>
      <div class="news-detail-right">
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
        }],
        // 文章
        article: {
          title: '《绝世唐门》夏至未至活动',
          author: '酷客玩',
          time: '2017-1-1',
          read_num: 10,
          detail: '亲爱的\n亲爱的\n亲爱的\n亲爱的\n'
        }
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

  .news-detail
    margin-top 71px
    margin-bottom 40px
    .news-detail-wrapper
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
      .news-detail-left
        position relative
        wrapper-left()
        width 860px
        border()
        .news-detail-content
          padding 14px 14px 85px
          text-align center
          .title
            font-size $font-size-medium-x
            color $color-theme
            padding-bottom 15px
          .desc
            color $color-description
            padding-bottom 20px
          .news-detail-article
            border-top 1px dashed $color-border
            border-bottom 1px dashed $color-border
            padding 20px 0
            text-align left
            min-height 530px
            line-height 24px
            font-size $font-size-medium
      .news-detail-right
        wrapper-right()
        width 310px
        .game-server
          height 415px
          border()
        .feel-like
          margin-top $height-block-top

</style>
