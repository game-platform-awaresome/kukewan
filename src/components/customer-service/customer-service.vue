<template>
  <div class="customer-service">
    <!-- slider -->
    <div class="slider-wrapper">
      <el-carousel height="353px">
          <el-carousel-item v-for="(item,index) in slider" :key="index">
            <div class="slider-img-wrapper">
              <img :src="item.img" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="service-list-right">
      <ul>
        <li v-for="(item,index) in questions" :key="index" class="service-item">
          <span class="question-icon"></span>
          <p class="title">{{item.title}}</p>
          <p>
            <ul>
              <li v-for="(link,index) in item.links" :key="index">{{link.name}}</li>
            </ul>
          </p>
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
        questions: [{
          title: '常见问题',
          links: [{
            url: '',
            name: '在线客服'
          },
          {
            url: '',
            name: '纠纷管理'
          }]
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
          }]
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
          }]
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
          }]
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
    .slider-wrapper
      float left
      width 450px
      height 355px
      img
        width 100%
        height 100%
    .service-list-right
      float right
      width 710px
      .service-item
        float left
        width 340px
        height 170px
        &:nth-of-type(1),
        &:nth-of-type(3)
          margin-right 30px
        &:nth-of-type(1),
        &:nth-of-type(2)
          margin-bottom 15px
        .icon-wrapper
          display inline-block
</style>
