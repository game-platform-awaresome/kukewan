<template>
  <div class="phone-register">
    <!-- username -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>账户 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>密码 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- repeat-password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>确认密码 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- truename -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>真实姓名 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- message-code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>短信验证码 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- id -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>身份证号 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info">asdfasfd</div>
    </div>
    <!-- verification-code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>验证码 : </span>
        <div class="input-form-wrapper">
          <input type="text" class="input-form" placeholder="">
        </div>
      </div>
      <div class="error-info"></div>
    </div>
    <!-- agreement -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <el-checkbox :checked="false" class="register-agreement-checkbox">我已同意</el-checkbox>
        <span class="aggreement-content">《库克玩用户注册服务协议》</span>
      </div>
    </div>
    <!-- register-btn -->
    <div class="register-main-form-wrapper">
      <div class="register-btn">立即注册</div>
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

</style>
