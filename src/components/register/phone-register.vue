<template>
  <div class="phone-register" v-loading="logining">
    <!-- phone -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>手机号 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.phone}">
          <input type="text" class="input-form" placeholder="请输入11位手机号码"
           v-model="formData.phone" @focus="onFocus('phone')"
           @blur="onBlur('phone')">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.phone && formFlag.phone"></i>
        <div class="error-info">{{errorInfo.phone}}</div>
      </div>
    </div>
    <!-- password -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>密码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.password}">
          <input type="password" class="input-form" placeholder="6-16位密码,区分大小写"
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
    <!-- verification-code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>验证码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.verification_code}">
          <input type="text" class="input-form" placeholder="请输入验证码"
          v-model="formData.verification_code" @focus="onFocus('verification_code')"
          @blur="onBlur('verification_code')">
          <img class="verification-code-img" :src="verificationImgUrl" alt="" @click="changeVerificationImg">
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.verification_code && formFlag.verification_code"></i>
        <div class="error-info">{{errorInfo.verification_code}}</div>
      </div>
    </div>
    <!-- message code -->
    <div class="register-main-form-wrapper">
      <div class="register-single-form-wrapper">
        <span class="form-title"><i class="must">*</i>短信验证码 : </span>
        <div class="input-form-wrapper" :class="{'border-focus': borderFocus.message_code}">
          <input type="text" class="input-form" placeholder="请输入短信验证码"
          v-model="formData.message_code" @focus="onFocus('message_code')"
          @blur="onBlur('message_code')">
          <div class="send-message-code-btn" v-show="formFlag.phone && formFlag.verification_code"
           :class="{send: typeof(currentNumber) === 'number'}"
            @click="sendMessageCode">{{messageCodeText}}</div>
          <div class="send-message-code-btn disabled-send" v-show="!formFlag.phone || !formFlag.verification_code"
           >{{messageCodeText}}</div>
        </div>
        <i class="el-icon-check true-logo" v-if="!errorInfo.message_code && formFlag.message_code"></i>
        <div class="error-info">{{errorInfo.message_code}}</div>
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
          phone: false,
          password: false,
          password_repeat: false,
          message_code: false,
          truename: false,
          id: false,
          verification_code: false
        },
        // 提交的表单
        formData: {
          phone: '',
          password: '',
          password_repeat: '',
          message_code: '',
          truename: '',
          id: '',
          verification_code: ''
        },
        // 错误信息
        errorInfo: {
          phone: '',
          password: '',
          password_repeat: '',
          message_code: '',
          truename: '',
          id: '',
          verification_code: ''
        },
        // 表单权限参数
        formFlag: {
          phone: '',
          password: '',
          password_repeat: '',
          message_code: '',
          truename: '',
          id: '',
          verification_code: '',
          agreement: true
        },
        logining: false,
        // 图片url
        verificationImgUrl: 'http://api.kukewan.com/site/captcha',
        // message_code 参数
        messageCodeText: '发送短信验证码',   // 按钮的文本
        currentNumber: ''   // 初始的倒计时时间
        // sendMessage: false  // 是否处于发送状态
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
        switch (inputType) {
          case 'phone' :
            this.hasPhone(inputType)
            break
          case 'truename' :
            this.isRealname(inputType)
            break
          case 'id' :
            this.judgeId(inputType)
            break
          case 'verification_code' :
            if (this.formData.verification_code !== '') {
              this._success(inputType)
            } else {
              this._fail(inputType)
            }
            break
          case 'message_code' :
            // 执行接口
            // user.checkMessage({
            //   phone: this.formData.phone,
            //   captcha: this.formData.verification_code
            // })
            //   .then(res => {
            //     if (res.status === 1) {
            //       this.formFlag.message_code = true
            //     }
            //   })
            if (this.formData.message_code !== '') {
              this._success(inputType)
            } else {
              this._fail(inputType)
            }
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
        if (inputType === 'phone') {
          return msg
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
        if (inputType === 'message_code') {
          return '短信验证码错误!'
        }
      },
      hasPhone(inputType) {
        user.hasPhone(this.formData.phone)
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
      },
      // 提交注册参数过滤
      registerParams() {
        let params = {
          regType: 2,
          mobile: this.formData.phone,
          password: this.formData.password,
          password2: this.formData.password_repeat,
          idcard: this.formData.id,
          true_name: this.formData.truename,
          captcha: this.formData.verification_code
        }
        return params
      },
      // 发送验证码
      sendMessageCode() {
        // 开始进入及时状态
        this.currentNumber = 59
        this.messageCodeText = `重新发送(${this.currentNumber})`
        let countDown = setInterval(() => {
          this.currentNumber -= 1
          this.messageCodeText = `重新发送(${this.currentNumber})`
          console.log(this.messageCodeText)
          console.log(typeof this.currentNumber)
          if (!this.currentNumber) {
            clearInterval(countDown)
            this.messageCodeText = '发送短信验证码'
            this.currentNumber = ''
          }
        }, 1000)
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
