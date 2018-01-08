<template>
  <div class="modify-password">
    <div class="public-input-wrapper">
      <span class="title">请输入当前密码 ： </span>
      <div class="input-wrapper">
        <input type="text">
      </div>
    </div>
    <div class="public-input-wrapper">
      <span class="title">新密码 ： </span>
      <div class="input-wrapper">
        <input type="text">
      </div>
    </div>
    <div class="public-input-wrapper">
      <span class="title">确认新密码 ： </span>
      <div class="input-wrapper">
        <input type="text">
      </div>
    </div>
    <div class="save-btn">保存修改</div>
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

  .modify-password
    .public-input-wrapper
      userInputWrapper()
    .save-btn
      margin 40px auto
      btn(125px,44px,,rgb(35,114,244),$font-size-large,#fff)

</style>
