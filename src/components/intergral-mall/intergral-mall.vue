<template>
  <div class="intergral-mall">
    <div class="intergral-mall-wrapper">
      <div class="intergral-mall-left">
        <!-- login -->
        <login :loginCls="1"></login>
        <!-- rank -->
        <rank :rank="rank" title="礼包排行"></rank>
        <!-- questions -->
        <article-list :news="news" title="FAQ常见问题"></article-list>
        <!-- feel like -->
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
      <div class="intergral-mall-right">
        <!-- slider -->
        <el-carousel height="317px">
          <el-carousel-item v-for="(item,index) in slider" :key="index">
            <div class="slider-img-wrapper">
              <img :src="item.img" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
        <!-- goods -->
        <goods-list title="实物商品" :goodsList="practicalGoods"></goods-list>
        <!-- gifts list -->
        <goods-list title="积分礼包" :goodsList="interGralGoods" :practical="false"></goods-list>
        <!-- new hand card -->
        <div class="new-hand-card">
          <public-title title="新手卡"></public-title>
          <div class="new-hand-card-list-wrapper">
            <ul>
              <li v-for="(item,index) in newHandCardList" :key="index" class="new-hand-card-item">
                <img :src="item.img" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import Login from 'base/login/login'
  import Rank from 'base/rank/rank'
  import ArticleList from 'base/article-list/article-list'
  import GoodsList from 'components/intergral-mall/goods-list/goods-list'

  import * as gift from 'api/gift'

  export default {
    created () {
      this.getGift()
    },
    data () {
      return {
        // 礼包排行
        rank: [],
        // FAQ
        news: {
          title: '新闻公告',
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
        // 大轮播
        slider: [{
          img: require('common/image/test/intergral-mall/slider.png')
        },
        {
          img: require('common/image/test/intergral-mall/slider.png')
        },
        {
          img: require('common/image/test/intergral-mall/slider.png')
        }],
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
        // 实物商品
        practicalGoods: [{
          img: require('common/image/test/intergral-mall/goods.png'),
          name: '儿童电话手表',
          intergral: 1000,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/goods.png'),
          name: '儿童电话手表',
          intergral: 1000,
          num: 5,
          id: 100,
          type: 'new'
        },
        {
          img: require('common/image/test/intergral-mall/goods.png'),
          name: '儿童电话手表',
          intergral: 1000,
          num: 5,
          id: 100,
          type: 'new'
        },
        {
          img: require('common/image/test/intergral-mall/goods.png'),
          name: '儿童电话手表',
          intergral: 1000,
          num: 5,
          id: 100,
          type: 'hot'
        }],
        // 积分礼包
        interGralGoods: [{
          img: require('common/image/test/intergral-mall/gift.png'),
          name: '武极天下商城道具',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/gift.png'),
          name: '武极天下商城道具',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/gift.png'),
          name: '武极天下商城道具',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/gift.png'),
          name: '武极天下商城道具',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        }],
        // 新手卡列表
        newHandCardList: [{
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '武极天下新手卡',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '武极天下新手卡',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '武极天下新手卡',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png'),
          name: '武极天下新手卡',
          intergral: 200,
          num: 5,
          id: 100,
          type: 'hot'
        }]
      }
    },
    methods: {
      getGift() {
        gift.giftList()
          .then(res => {
            this.rank = res
          })
      }
    },
    components: {
      Login,
      Rank,
      ArticleList,
      PublicTitle,
      GoodsList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .intergral-mall
    margin-top 71px
    margin-bottom 40px
    .intergral-mall-wrapper
      wrapper()
      .intergral-mall-left
        wrapper-left()
        .login-block
          padding 25px
        .rank
          margin-top $height-block-top
        .article-list
          margin-top $height-block-top
          height 472px
        .feel-like
          border-top 1px solid $color-border
          margin-top $height-block-top
        .slider-img-wrapper
          width 100%
          height 100%
          img
            width 100%
            height 100%
      .intergral-mall-right
        wrapper-right()
        .new-hand-card
          margin-top $height-block-top
          .new-hand-card-list-wrapper
            height 200px
            .new-hand-card-item
              float left
              width 195px
              height 100%
              margin-left 25px
              cursor pointer
              transition all .3s
              &:hover
                transform translate3d(0,-5px,0)
              &:first-of-type
                margin-left 0
              img
                width 100%
                height 100%
</style>
