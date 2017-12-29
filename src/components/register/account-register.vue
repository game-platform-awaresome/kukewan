<template>
  <div class="account-register">
    <!-- username -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>账户 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.username}">
          <input type="text" class="input-form" placeholder="账号由8-22位字母和数字组成"
           v-model="formData.username" @focus="onFocus('username')"
           @blur="onBlur('username')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.username}}</div>
    </div>
    <!-- password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>密码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.password}">
          <input type="text" class="input-form" placeholder="6-16位密码,区分大小写"
           v-model="formData.password" @focus="onFocus('password')"
           @blur="onBlur('password')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.password}}</div>
    </div>
    <!-- repeat-password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>确认密码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.password_repeat}">
          <input type="text" class="input-form" placeholder="再次输入密码"
          v-model="formData.password_repeat" @focus="onFocus('password_repeat')"
          @blur="onBlur('password_repeat')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.password_repeat}}</div>
    </div>
    <!-- truename -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>真实姓名 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.truename}">
          <input type="text" class="input-form" placeholder="请输入真实姓名,如:张三"
          v-model="formData.truename" @focus="onFocus('truename')"
          @blur="onBlur('truename')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.truename}}</div>
    </div>
    <!-- id -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>身份证号 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.id}">
          <input type="text" class="input-form" placeholder="请输入有效的18位身份证号码"
          v-model="formData.id" @focus="onFocus('id')"
          @blur="onBlur('id')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.id}}</div>
    </div>
    <!-- verification-code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>验证码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.verification_code}">
          <input type="text" class="input-form" placeholder="请输入验证码"
          v-model="formData.verification_code" @focus="onFocus('verification_code')"
          @blur="onBlur('verification_code')">
        </div>
      </div>
      <div class="error-info">{{errorInfo.verification_code}}</div>
    </div>
    <!-- agreement -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <el-checkbox :checked="formFlag.agreement" v-model="formFlag.agreement" class="register-agreement-checkbox">我已同意</el-checkbox>
        <span class="aggreement-content">《库客玩用户注册服务协议》</span>
      </div>
      <div class="error-info">{{errorInfo.agreement}}</div>
    </div>
    <!-- register-btn -->
    <div class="register-main-form-wrapper">
      <div class="register-btn" @click="submit">立即注册</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as validate from 'common/js/validate'
  // import * as tool from 'common/js/tool'

  export default {
    data () {
      return {
        // 边框
        borderFocus: {
          username: false,
          password: false,
          password_repeat: false,
          truename: false,
          id: false,
          verification_code: false
        },
        // 提交的表单
        formData: {
          username: '',
          password: '',
          password_repeat: '',
          truename: '',
          id: '',
          verification_code: ''
        },
        // 错误信息
        errorInfo: {
          username: '',
          password: '',
          password_repeat: '',
          truename: '',
          id: '',
          verification_code: ''
        },
        // 表单权限参数
        formFlag: {
          username: '',
          password: '',
          password_repeat: '',
          truename: '',
          id: '',
          verification_code: '',
          agreement: true
        }
      }
    },
    methods: {
      onFocus(inputType) {
        // focus样式
        this.borderFocus[inputType] = true
      },
      onBlur(inputType) {
        // 清除focus样式
        this.borderFocus[inputType] = false
        // 过滤参数问题
        // let _inputType = tool.transformStr(inputType, '_')
        // 表单验证

        // verification_code
        if (inputType === 'verification_code') {
          // 执行接口
          if (inputType) {
            this._success(inputType)
          } else {
            this._fail(inputType)
          }
          return
        }
        // password_repeat
        if (inputType === 'password_repeat') {
          if (this.formData.password === this.formData.password_repeat) {
            this._success(inputType)
          } else {
            this._fail(inputType)
          }
          return
        }
        // 其他参数
        if (validate[inputType](this.formData[inputType])) {
          // sucess
          this._success(inputType)
        } else {
          // fail
          this._fail(inputType)
        }
      },
      _success(inputType) {
        this.formFlag[inputType] = true
        // 错误信息清除
        this.errorInfo[inputType] = ''
      },
      _fail(inputType) {
        this.formFlag[inputType] = false
        // 填入错误信息
        this.errorInfo[inputType] = this._errorInfo(inputType)
      },
      _errorInfo(inputType) {
        if (inputType === 'username') {
          return '账号输入错误!'
        }
        if (inputType === 'password') {
          return '密码输入错误!'
        }
        if (inputType === 'password_repeat') {
          return '两次密码输入不一致!'
        }
        if (inputType === 'truename') {
          return '请输入正确的真实姓名'
        }
        if (inputType === 'id') {
          return '请输入有效的身份证号!'
        }
        if (inputType === 'verification_code') {
          return '验证码错误!'
        }
      },
      submit() {
        let flag = true
        // 判断所有参数
        for (const key in this.formFlag) {
          if (this.formFlag.hasOwnProperty(key)) {
            const element = this.formFlag[key]
            if (element) {
              this._success(key)
            } else {
              console.log('check ur form')
              this._fail(key)
              flag = false
            }
          }
        }

        if (flag) {
          // 提交表单到接口
          console.log('All params is true!!!')
        }
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/register.styl"

</style>
