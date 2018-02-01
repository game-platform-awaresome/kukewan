<template>
  <div class="account-register" v-loading="logining">
    <!-- username -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>账户 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.username}">
          <input type="text" class="input-form" placeholder="以字母开头6-11字母、数字、下划线的组合"
           v-model="formData.username" @focus="onFocus('username')"
           @blur="onBlur('username')">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.username && formFlag.username"></i>
        <div class="error-info">{{errorInfo.username}}</div>
      </div>
    </div>
    <!-- password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>密码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.password}">
          <input type="password" class="input-form" placeholder="6-18位密码,区分大小写"
           v-model="formData.password" @focus="onFocus('password')"
           @blur="onBlur('password')">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.password && formFlag.password"></i>
        <div class="error-info">{{errorInfo.password}}</div>
      </div>
    </div>
    <!-- repeat-password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>确认密码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.password_repeat}">
          <input type="password" class="input-form" placeholder="再次输入密码"
          v-model="formData.password_repeat" @focus="onFocus('password_repeat')"
          @blur="onBlur('password_repeat')">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.password_repeat && formFlag.password_repeat"></i>
        <div class="error-info">{{errorInfo.password_repeat}}</div>
      </div>
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
        <i class="el-icon-check true-logo" v-if="!errorInfo.truename && formFlag.truename"></i>
        <div class="error-info">{{errorInfo.truename}}</div>
      </div>
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
        <i class="el-icon-check true-logo" v-if="!errorInfo.id && formFlag.id"></i>
        <div class="error-info">{{errorInfo.id}}</div>
      </div>
    </div>
    <!-- verification-code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>验证码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.verification_code}">
          <input type="text" class="input-form" placeholder="请输入验证码"
          v-model="formData.verification_code" @focus="onFocus('verification_code')"
          @blur="onBlur('verification_code')" @keyup.13="submit">
          <img class="verification-code-img" :src="verificationImgUrl" alt="" @click="changeVerificationImg">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.verification_code && formFlag.verification_code"></i>
        <div class="error-info">{{errorInfo.verification_code}}</div>
      </div>
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
  import * as user from 'api/user'
  import * as variable from 'common/js/variable'

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
        // formData: {
        //   username: '',
        //   password: '',
        //   password_repeat: '',
        //   truename: '',
        //   id: '',
        //   verification_code: ''
        // },
        formData: {
          username: '',
          password: '',
          password_repeat: '',
          truename: '',
          id: '',
          verification_code: '',
          agreement: true
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
        },
        // 图片url
        verificationImgUrl: variable.VERIFICATIONIMGURL,
        logining: false
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
        // username
        switch (inputType) {
          case 'username' :
            this.hasUsername(inputType)
            break
          case 'truename' :
            this.isRealname(inputType)
            break
          case 'id' :
            this.judgeId(inputType)
            break
          case 'verification_code' :
            console.log(this.formData.verification_code.length)
            // this.judgeVerificationCode(inputType)
            break
          case 'password_repeat' :
            if (this.formData.password === this.formData.password_repeat) {
              this._success(inputType)
            } else {
              this._fail(inputType)
            }
            break
          default :
            console.log('default')
            if (validate[inputType](this.formData[inputType])) {
              // sucess
              this._success(inputType)
              // console.log(this.errorInfo[inputType])
            } else {
              // fail
              this._fail(inputType)
            }
        }
      },
      _success(inputType) {
        this.formFlag[inputType] = true
        // 错误信息清除
        this.errorInfo[inputType] = ''
      },
      _fail(inputType, msg) {
        this.formFlag[inputType] = false
        // 填入错误信息
        this.errorInfo[inputType] = this._errorInfo(inputType, msg)
      },
      _errorInfo(inputType, msg) {
        if (inputType === 'username') {
          return msg
        }
        if (inputType === 'password') {
          return '6-18位密码,区分大小写!'
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
      hasUsername(inputType) {
        user.hasUsername(this.formData.username)
          .then(res => {
            if (res.code === 1) {
              this._success(inputType)
            } else {
              this._fail(inputType, res.msg)
            }
          })
      },
      isRealname(inputType) {
        user.isRealname(this.formData.truename)
          .then(res => {
            if (res.code === 1) {
              this._success(inputType)
            } else {
              this._fail(inputType)
            }
          })
      },
      judgeId(inputType) {
        user.judgeId(this.formData.id)
          .then(res => {
            if (res.code === 1) {
              this._success(inputType)
            } else {
              this._fail(inputType)
            }
          })
      },
      judgeVerificationCode() {
        user.trueVerification(this.formData.verification_code)
          .then(res => {
            if (res.status === 1) {
              this._success('verification_code')
            } else {
              this._fail('verification_code')
            }
          })
      },
      sendVerificationCode() {
        console.log(this.formData.verification_code.length)
        if (this.formData.verification_code.length === variable.VERIFICATIONCODENUM) {
          this.judgeVerificationCode()
        }
      },
      changeVerificationImg() {
        let randNum = Math.random().toString().substr(0, 10)
        this.verificationImgUrl = `${this.verificationImgUrl}?v=${randNum}`
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
          this.logining = true
          this.register()
        }
      },
      // 提交
      register() {
        user.register(this.registerParams())
          .then(res => {
            if (res.status === variable.REGISTER_OK) {
              console.log(res)
              // 将获取到的token加入到本地
              localStorage.access_token = res.data.usertoken.access_token
              localStorage.refresh_token = res.data.usertoken.refresh_token
              location.href = '/index'
            }
          })
          .catch(error => {
            this.logining = false
            if (error.status === variable.REGISTER_ERROR) {
              let errStr = ''
              error.data.forEach(element => {
                errStr += element.message
              })
              this.$message({
                message: errStr,
                type: 'warning',
                center: true
              })
            }
          })
      },
      // 提交注册参数过滤
      registerParams() {
        let params = {
          regType: 1,
          username: this.formData.username,
          password: this.formData.password,
          password2: this.formData.password_repeat,
          idcard: this.formData.id,
          true_name: this.formData.truename,
          captcha: this.formData.verification_code
        }
        return params
      }
    },
    components: {

    },
    watch: {
      'formData.verification_code': 'sendVerificationCode'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/register.styl"

</style>
