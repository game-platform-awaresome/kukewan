<template>
  <div class="k-footer">
    <div class="footer-wrapper">
      <div class="warning">
        <span>健康游戏忠告</span>
        <span>抵制不良游戏</span>
        <span>拒绝盗版游戏</span>
        <span>注意自我保护</span>
        <span>谨防受骗上当</span>
        <span>适度游戏益脑</span>
        <span>沉迷游戏伤身</span>
        <span>合理安排时间</span>
        <span>享受健康生活</span>
      </div>
      <div class="description">
        <div class="logo-wrapper">
          <img src="" alt="">
        </div>
        <div class="bottom">
          <div class="bottom-link">
            <ul>
              <li v-for="(link,index) in links" :key="index" class="link-item" >
                <a :href="link.url">{{link.name}}</a>
              </li>
            </ul>
          </div>
          <div class="bottom-desc">
            <p>{{copyright}}</p>
            <p>{{recordNum}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        links: [{
          name: '人才招聘',
          url: '/zhaopin'
        },
        {
          name: '法律声明',
          url: '/shengming'
        },
        {
          name: '商务合作',
          url: '/hezuo'
        },
        {
          name: '关于我们',
          url: '/aboutme'
        },
        {
          name: '客服中心',
          url: '/kefu'
        }],
        copyright: '游戏版权所有 Copyright (c) 2013 深圳市筑梦网络科技有限公司 All Rights Reserved',
        recordNum: '备案号 : 粤ICP备14061518号-2  网络文化经营许可证:粤网文[2014]0622-222    ICP证 : 粤B2-20150448'
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"

  .k-footer
    height 222px
    border-top 1px solid $color-border
    .footer-wrapper
      margin 0 auto
      width $width-base
      .warning
        text-align center
        height 64px;
        line-height 64px
        font-size $font-size-medium
        color $color-description
        border-bottom 1px solid $color-border
        span
          padding 0 15px
      .description
        clear-fix()
        .logo-wrapper
          float left
          width 325px
          height 62px
          background url('./logo.png') 0 0 no-repeat
          background-size cover
          margin 35px 0 0 97px
        .bottom
          float right
          width 756px
          height 100px
          .bottom-link
            margin-top 16px
            font-size 0
            .link-item
              display inline-block
              height 30px
              line-height 30px
              font-size $font-size-medium
              &:after
                content '|'
                display inline-block
                padding 0 10px 0 10px
              &:last-of-type:after
                content ''
              a
                link-a()
          .bottom-desc
            p
              height 30px
              line-height 30px
              font-size $font-size-medium
</style>
