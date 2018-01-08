<template>
  <div class="real-name-block">
    <div class="user-info-public-wrapper top">
      <span class="title">真实姓名 :</span>
      <span class="content"></span>
    </div>
    <div class="user-info-public-wrapper top">
      <span class="title">身份证号 :</span>
      <span class="content"></span>
    </div>
    <div class="text-wrapper">
      <p class="text-content">
        <span class="title">按照版署《网络游戏未成年人防沉迷系统》要求：</span>
        <span>为预防青少年过度游戏，未满18岁的用户和身份信息不完整的用户将受到防沉迷系统的限制，酷客玩网页游戏平台积极响应国家新闻出版总署防沉迷政策要求，开发出网页游戏防沉迷系统；年龄已满18周岁的玩家，在填写身份证资料后，可以不受防沉迷系统影响，自由进行游戏，否则游戏每日在线3小时后即打怪经验减半,超过5小时则无经验。</span>
      </p>
      <p class="text-content">
        <span class="title">说明：</span>
        <span>系统只支持输入18位的中国身份证号码，持有其他证件（如：外国护照，军人证，等）者，请与客服GM联系处理。填写身份信息将使我们可以对您的年龄做出判断，以确定您的游戏时间是否需要按照国家新闻出版总署的要求纳入防沉迷系统的管理。</span>
      </p>
      <p class="text-content">
        <span class="title">隐私说明：</span>
        <span>用户填写的身份信息属于用户的隐私。酷客玩网页游戏平台绝对尊重用户个人隐私权。所以，酷客玩平台游戏绝不会公开，编辑或透露用户的信息内容，除非有法律许可及公安管理规定。</span>
      </p>
      <p class="last-text">网络游戏防沉迷系统及用户隐私说明</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/user.styl"

  .real-name-block
    padding 0 70px
    .user-info-public-wrapper
      userPublicInput()

      margin-top 20px
    .text-wrapper
      margin 30px 0
      border-top 1px dashed $color-border
      line-height 22px
      .text-content
        padding-top 25px
        color $color-text
        .title
          color $color-hot
      .last-text
        padding-top 20px
        text-align right
        color $color-hot
</style>
