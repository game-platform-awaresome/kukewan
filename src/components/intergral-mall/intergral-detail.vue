/*
 * @Author: Greentea
 * @Date: 2017-12-26 13:34:50
 * @Last Modified by: Greentea
 * @Last Modified time: 2018-02-08 14:36:59
 */
<template>
  <div class="intergral-detail">
    <div class="breadcrumb-wrapper">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'intergral-mall'}">积分</el-breadcrumb-item>
        <el-breadcrumb-item>礼包详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intergral-detail-wrapper">
      <div class="intergral-detail-left">
        <div class="intergral-detail-info">
          <div class="intergral-goods-img-wrapper">
            <img :src="goods.card_image" alt="">
          </div>
          <div class="intergral-params">
            <p class="title">{{goods.name}}</p>
            <div v-show="goods.card_type_id === 2">
              <p class="intergral">所需积分 : <span class="intergral-in-num">{{goods.intergral}}</span>积分</p>
              <p class="intergral-pre">原价所需 : <span class="intergral-pre-in-num">{{goods.intergral_pre}}积分</span></p>
            </div>
            <!-- 新手卡 S -->
            <div v-show="goods.card_type_id === 1">
              <p class="num">已换购 : <span class="num-in-num">{{goods.part_num}}</span>件</p>
              <p class="num">剩余 : <span class="num-in-num">{{goods.remain_num}}</span>件</p>
            </div>
            <!-- 新手卡 E -->
            <!-- 非实物 S -->
            <div class="select-server" v-if="goods.card_type_id !== 3">
              <!-- <span class="select-server-in"></span> -->
              <el-select v-model="data.sid" filterable placeholder="请选择区服">
                <el-option
                  v-for="server in servers"
                  :key="server.sid"
                  :label="server.serverName"
                  :value="server.sid">
                </el-option>
              </el-select>
            </div>
            <!-- 非实物 E -->
            <!-- 实物 S-->
            <div class="select-type" v-if="goods.card_type_id === 3">
              <span class="select-type-in">颜色 : </span>
              <el-radio v-for="(type,index) in goods.goods_type" :key="index"
               v-model="data.goods_type" :label="type.id">{{type.name}}</el-radio>
            </div>
            <!-- 实物 E -->
            <!-- 新手卡 S -->
            <div class="select-num" v-if="goods.card_type_id !== 1">
              <span class="select-num-in">数量 : </span>
              <el-input-number size="mini" v-model="data.num"></el-input-number>
            </div>
            <!-- 新手卡 E -->
            <div class="get-goods-btn">立即兑换</div>
          </div>
        </div>
        <div class="intergral-detail-detail">
          <public-title title="商品详情" :show="false"></public-title>
          {{goods.card_context}}
        </div>
        <div class="intergral-detail-description">
          <public-title title="兑换说明" :show="false"></public-title>
        </div>
      </div>
      <div class="intergral-detail-right">
        <!-- slider -->
        <div class="slider">
          <el-carousel height="324px">
            <el-carousel-item v-for="(item,index) in slider" :key="index">
              <div class="slider-img-wrapper">
                <img :src="item.img" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- FAQ -->
        <article-list :news="news" title="FAQ常见问题"></article-list>
        <!-- gift -->
        <gift :gifts="gifts"></gift>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'
  import ArticleList from 'base/article-list/article-list'
  import Gift from 'base/gift/gift'
  import * as server from 'api/server'
  import * as gift from 'api/gift'
  export default {
    created() {
      this.getGiftDetail()
    },
    data () {
      return {
        data: {
          goods_type: '',  // 商品实物选择的礼品类型
          num: 0, // 选择商品的数量
          sid: '' // 选择的区服
        },
        servers: [],
        /*
          接口数据
        */
        // type: 1 新手卡 2 礼包 3 实物
        // goods: {
        //   name: '毛糖儿童智能电话手表',
        //   img: require('common/image/test/intergral-mall/goods.png'),
        //   intergral: 10000,
        //   intergral_pre: 12000,
        //   num: 20,
        //   type: 1,
        //   server: [{
        //     sid: 1,
        //     name: '双线23222区'
        //   },
        //   {
        //     sid: 2,
        //     name: '双线1234区'
        //   },
        //   {
        //     sid: 3,
        //     name: '双线09709区'
        //   }],
        //   goods_type: [{
        //     name: '天空蓝',
        //     id: 1
        //   },
        //   {
        //     name: '布丁粉',
        //     id: 2
        //   }],
        //   detail: ''
        // },
        goods: {},
        slider: [{
          img: require('common/image/test/intergral-mall/new-hand-card.png')
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png')
        },
        {
          img: require('common/image/test/intergral-mall/new-hand-card.png')
        }],
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
        gifts: {
          title: '游戏礼包',
          gifts: [{
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          },
          {
            img: require('common/image/test/index/gift.png'),
            name: '烈焰传奇礼包',
            num: '1314',
            url: ''
          }]
        }
      }
    },
    methods: {
      getGiftDetail() {
        const cardId = this.$route.params.gift_id
        gift.getGiftDetail(cardId)
          .then(res => {
            console.log(res)
            this.goods = res
            return Promise.resolve(res.gid)
          })
          .then(gid => {
            server.gameServerList(gid)
              .then(res => {
                this.servers = res.data
                console.log(this.servers)
              })
          })
      }
    },
    components: {
      PublicTitle,
      ArticleList,
      Gift
    },
    watch: {
      '$route': 'getGiftDetail'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .intergral-detail
    margin-top 71px
    margin-bottom 40px
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
    .intergral-detail-wrapper
      position relative
      wrapper()
      .intergral-detail-left
        wrapper-right()
        float left
        box-sizing border-box
        border()
        padding 15px
        .intergral-detail-info
          clear-fix()
          .intergral-goods-img-wrapper
            float left
            width 382px
            height 318px
            img
              width 100%
              height 100%
              cursor pointer
          .intergral-params
            float left
            padding 10px 0 0 50px
            font-size $font-size-medium
            color $color-description
            .title
              font-size $font-size-large
              color $color-title
            .title,.intergral,.intergral-pre,.num
              margin-bottom 18px
            .intergral-in-num,.intergral-pre-in-num
              color $color-special
              padding 0 5px
            .intergral-pre-in-num
              text-decoration line-through
              padding 0 5px
            .num-in-num
              color $color-new
              padding 0 5px
            .select-server
              margin-bottom 18px
            .select-type
              margin-bottom 18px
              .select-type-in
                padding-right 5px
              .el-radio__input.is-checked+.el-radio__label
                color $color-theme
              .el-radio__input.is-checked .el-radio__inner
                color $color-theme
            .select-num
              .select-num-in
                padding-right 5px
            .get-goods-btn
              margin-top 30px
              btn(130px,38px,3px,rgba(35,114,244,.8),$font-size-medium-x,#fff)
              &:hover
                background-color rgba(35,114,244,1)
      .intergral-detail-right
        wrapper-left()
        float right
        .slider-img-wrapper
          width 100%
          height 100%
          img
            width 100%
            height 100%
        .article-list
          height 472px
          margin-top $height-block-top
        .gift
          margin-top $height-block-top
</style>
