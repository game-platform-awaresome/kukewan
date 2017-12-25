<template>
  <div class="intergral-list">
    <div class="breadcrumb-wrapper">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'intergral-mall'}">积分</el-breadcrumb-item>
        <el-breadcrumb-item>积分列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intergral-list-wrapper">
      <div class="title-line"></div>
      <div class="list-gift-type">
        <ul>
          <li>新手卡</li>
          <li>积分礼包</li>
          <li>实物商品</li>
        </ul>
      </div>
      <div class="intergral-list-left">
        <!-- ads -->
        <div class="ads">
          <el-carousel :interval="5000" arrow="never" height="530px">
            <el-carousel-item v-for="item in slider" :key="item">
              <div class="slider-img-wrapper">
                <img :src="item.img" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- questions -->
        <article-list :news="news" title="FAQ常见问题"></article-list>
      </div>
      <div class="intergral-list-right">
        <div class="list-wrapper">
          <ul>
            <li v-for="(item, index) in intergralList" :key="index" class="intergral-list-item">
              <div class="intergral-img-wrapper">
                <img :src="item.img" alt="">
              </div>
              <p class="name">{{item.name}}</p>
              <p class="detail">
                <i class="icon"></i>
                <span class="intergral">{{item.intergral}}</span>
                <span class="num-wrapper">剩余 : <span class="num">{{item.num}}</span></span>
              </p>
              <div class="get-gift-btn">立即领取</div>
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
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import ArticleList from 'base/article-list/article-list'

  export default {
    data () {
      return {
        /*
          接口数据
        */
        // slider
        slider: [{
          img: require('common/image/test/intergral-mall/intergral-list-slider.png')
        },
        {
          img: require('common/image/test/intergral-mall/intergral-list-slider.png')
        },
        {
          img: require('common/image/test/intergral-mall/intergral-list-slider.png')
        }],
        // FAQ
        news: {
          notice: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
          lists: [{
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          },
          {
            title: '神印王座维护通知维护通知维护通知维护通知维护通知维护通知维护通知',
            url: ''
          }]
        },
        intergralList: [{
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'new'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '新游除妖计新手卡',
          intergral: 1000,
          num: 30,
          id: 100,
          type: 'hot'
        }]
      }
    },
    components: {
      ArticleList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .intergral-list
    margin-top 71px
    .breadcrumb-wrapper
      wrapper()
      .el-breadcrumb
        line-height 50px
        .el-breadcrumb__inner, .el-breadcrumb__inner
          color $color-description
        .el-breadcrumb__inner a:hover, .el-breadcrumb__inner:hover
          color $color-theme
        .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover
          color $color-description
    .intergral-list-wrapper
      position relative
      wrapper()
      border-top 1px solid $color-border
      .title-line
        position absolute
        top -1px
        left 0
        width 100px
        height 2px
        background-color $color-theme
      .list-gift-type
        clear-fix()
        li
          float left
          btn(auto,66px,0,,$font-size-large,$color-description)
          padding 0 16px
          &:hover
            color $color-text
      .intergral-list-left
        wrapper-left()
        .ads
          .slider-img-wrapper
            width 100%
            height 100%
            img
              width 100%
              height 100%
        .article-list
          height 472px
          margin-top $height-block-top
      .intergral-list-right
        wrapper-right()
        .list-wrapper
          clear-fix()
          .intergral-list-item
            position relative
            float left
            box-sizing border-box
            width 270px
            height 226px
            border()
            padding 20px 15px
            transition all .3s
            margin 0 25px 25px 0
            &:hover
              border($color-theme)
            &:nth-of-type(3n)
              margin-right 0
            &:nth-last-of-type(1),
            &:nth-last-of-type(2),
            &:nth-last-of-type(3)
              margin-bottom 0
            .intergral-img-wrapper
              width 120px
              height 120px
              margin 0 auto
              img
                width 100%
                height 100%
            .name
              margin-top 25px
              font-size $font-size-medium-x
              color $color-title
              font-weight 550
            .detail
              padding-top 10px
              font-size 0
              .icon
                display inline-block
                vertical-align middle
                width 16px
                height 18px
                bg('./intergral.png')
              .intergral
                display inline-block
                vertical-align middle
                margin 0 20px 0 6px
                font-size $font-size-medium
                color $color-special
              .num-wrapper
                display inline-block
                vertical-align middle
                font-size $font-size-medium
                color $color-description
                .num
                  color $color-new
            .get-gift-btn
              position absolute
              right 15px
              bottom 20px
              btn(74px,24px,3px,,,$color-theme)
              border($color-theme)
              &:hover
                background-color $color-theme
                color #fff
        .pagination
          text-align center
          padding 30px
</style>
