<template>
  <div class="customer-service">
    <!-- slider -->
    <div class="slider-wrapper">
      <el-carousel height="355px">
          <el-carousel-item v-for="(item,index) in slider" :key="index">
            <div class="slider-img-wrapper">
              <img :src="item.img" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
    </div>
    <!-- service list right -->
    <div class="service-list-right">
      <ul>
        <li v-for="(item,index) in questionsRight" :key="index"
         class="service-item" :class="item.cls">
          <div class="bg"></div>
          <span class="question-icon"></span>
          <div class="link-wrapper">
            <p class="title">{{item.title}}</p>
            <ul>
              <li v-for="(link,index) in item.links" :key="index" class="link-item">
                {{link.name}}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- service list bottom -->
    <div class="service-list-bottom">
      <ul>
        <li v-for="(item,index) in questionsBottom" :key="index"
         class="service-item" :class="item.cls">
          <div class="bg"></div>
          <span class="question-icon"></span>
          <div class="link-wrapper">
            <p class="title">{{item.title}}</p>
            <ul>
              <li v-for="(link,index) in item.links" :key="index" class="link-item">
                {{link.name}}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        /*
          接口数据
        */
        slider: [{
          img: require('common/image/test/customer-service/customer-slider.png')
        },
        {
          img: require('common/image/test/customer-service/customer-slider.png')
        },
        {
          img: require('common/image/test/customer-service/customer-slider.png')
        }],
        questionsRight: [{
          title: '常见问题',
          links: [{
            url: '',
            name: '在线客服'
          },
          {
            url: '',
            name: '纠纷管理'
          }],
          cls: 'usually'
        },
        {
          title: '充值中心',
          links: [{
            url: '',
            name: '充值指引'
          },
          {
            url: '',
            name: '充值流程'
          }],
          cls: 'pay-center'
        },
        {
          title: '自主提报',
          links: [{
            url: '',
            name: '建议'
          },
          {
            url: '',
            name: 'BUG反馈'
          },
          {
            url: '',
            name: '我的问题'
          },
          {
            url: '',
            name: '投诉'
          }],
          cls: 'commit'
        },
        {
          title: '官方验证',
          links: [{
            url: '',
            name: '官方QQ验证'
          },
          {
            url: '',
            name: '电话验证'
          }],
          cls: 'official'
        }],
        questionsBottom: [{
          title: '账号问题',
          links: [{
            url: '',
            name: '修改资料'
          },
          {
            url: '',
            name: '登录异常'
          }],
          cls: 'account'
        },
        {
          title: '网络问题',
          links: [{
            url: '',
            name: '账号无法加载'
          },
          {
            url: '',
            name: '登录后异常失败'
          }],
          cls: 'website'
        },
        {
          title: '积分问题',
          links: [{
            url: '',
            name: '如何获取积分'
          },
          {
            url: '',
            name: '兑换礼品获取'
          }],
          cls: 'intergral'
        },
        {
          title: '充值问题',
          links: [{
            url: '',
            name: '充错账号'
          },
          {
            url: '',
            name: '充值方式'
          }],
          cls: 'pay-question'
        },
        {
          title: '防沉迷系统',
          links: [{
            url: '',
            name: '防沉迷系统'
          },
          {
            url: '',
            name: '未成年系统'
          }],
          cls: 'prevent'
        },
        {
          title: '在线客服',
          links: [{
            url: '',
            name: '可儿'
          },
          {
            url: '',
            name: '沫儿'
          }],
          cls: 'cs'
        }]
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .customer-service
    padding-top 101px
    wrapper()
    width 1180px
    margin-bottom 60px
    .slider-wrapper
      float left
      width 450px
      height 355px
      .slider-img-wrapper
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .service-list-right
      float right
      width 705px
      .service-item
        position relative
        float left
        width 340px
        height 170px
        transition all .3s
        &:hover
          transform translate3d(-5px,0,0)
          .bg
            opacity 1
        &:nth-of-type(1),
        &:nth-of-type(3)
          margin-right 25px
        &:nth-of-type(1),
        &:nth-of-type(2)
          margin-bottom 15px
        .question-icon
          position absolute
          top 56px
          left 60px
          display block
          width 56px
          height 56px
        .bg
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          bg('./service-hover-right.png')
          opacity 0
          transition all .3s
        &.usually
          background-color rgba(68,131,235,1)
          .question-icon
            bg('./service-question.png')
        &.pay-center
          background-color rgba(247,208,91,1)
          .question-icon
            bg('./service-pay-center.png')
        &.commit
          background-color #54e280
          .question-icon
            bg('./service-up.png')
        &.official
          background-color rgba(122,169,245,1)
          .question-icon
            bg('./service-admin.png')
        .link-wrapper
          position absolute
          left 145px
          top 56px
          color #fff
          width 170px
          .title
            font-size 20px
            margin-bottom 10px
          .link-item
            position relative
            float left
            line-height 26px
            text-align center
            padding 0 10px
            font-size $font-size-medium
            &:nth-of-type(2n-1)
              padding 0 12px 0 0
              &:after
                content ' | '
                position absolute
                top 0
                right 0
    .service-list-bottom
      clear-fix()
      clear both
      padding-top 20px
      .service-item
        position relative
        float left
        width 180px
        height 237px
        background-color #8d99f2
        color $color-special-white
        margin-left 20px
        transition all .3s
        &:hover
          transform translate3d(0,-5px,0)
          .bg
            opacity 1
        .question-icon
          display block
          margin 40px auto 0
          width 67px
          height 67px
        .title
          margin-top 18px
          font-size $font-size-large
          text-align center
        .link-item
          position relative
          z-index 1
          margin-top 12px
          font-size $font-size-medium
          text-align center
        .bg
          content ''
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          bg('./service-hover-bottom.png')
          opacity 0
          transition all .3s
        &:nth-of-type(2n)
          background-color #f7d05b
        &:first-of-type
          margin-left 0
        &.account
          .question-icon
            bg('./service-account.png')
        &.website
          .question-icon
            bg('./service-internet.png')
        &.intergral
          .question-icon
            bg('./service-mark.png')
        &.pay-question
          .question-icon
            bg('./service-pay.png')
        &.prevent
          .question-icon
            bg('./service-prevent.png')
        &.cs
          .question-icon
            bg('./service-kf.png')

</style>
