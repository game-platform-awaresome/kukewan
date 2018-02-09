<template>
  <div class="forgot">
    <div class="forgot-wrapper">
      <div class="step-wrapper">
        <el-steps :active="step" align-center>
          <el-step title="填写账号" description=""></el-step>
          <el-step title="手机验证" description=""></el-step>
          <el-step title="输入新密码" description=""></el-step>
          <el-step title="完成" description=""></el-step>
        </el-steps>
      </div>

      <!-- step 1 -->
      <div class="step-form-wrapper" v-show="step === 0">
        <!-- username -->
        <div class="register-main-form-wrapper">
          <div class="register-single-form-wrapper">
            <span class="form-title"><i class="must">*</i>账户 : </span>
            <div class="input-form-wrapper" :class="{'border-focus': borderFocus.username}">
              <input type="text" class="input-form" placeholder="请输入账号"
              v-model="formData.username" @focus="onFocus('username')"
              @blur="onBlur('username')">
            </div>
          </div>
          <div class="error-info">{{errorInfo.username}}</div>
        </div>
        <div class="next-btn" @click="stepOne">下一步</div>
      </div>

      <!-- step 2 -->
      <div class="step-form-wrapper" v-show="step === 1">
        <!-- phone -->
        <div class="register-main-form-wrapper">
          <div class="register-single-form-wrapper">
            <span class="form-title"><i class="must">*</i>手机号 : </span>
            <div class="input-form-wrapper" :class="{'border-focus': borderFocus.phone}">
              <input type="text" class="input-form" placeholder="请输入账号"
              v-model="formData.phone" @focus="onFocus('phone')"
              @blur="onBlur('phone')">
            </div>
          </div>
          <div class="error-info">{{errorInfo.phone}}</div>

        </div>
        <!-- message code -->
        <div class="register-main-form-wrapper">
          <div class="register-single-form-wrapper">
            <span class="form-title"><i class="must">*</i>短信验证码 : </span>
            <div class="input-form-wrapper" :class="{'border-focus': borderFocus.message_code}">
              <input type="text" class="input-form" placeholder="请输入短信验证码"
              v-model="formData.message_code" @focus="onFocus('message_code')"
              @blur="onBlur('message_code')">
              <div class="send-message-code-btn"
              :class="{send: typeof(currentNumber) === 'number'}"
                @click="sendMessageCode">{{messageCodeText}}</div>
            </div>
          </div>
          <div class="error-info">{{errorInfo.message_code}}</div>
        </div>
        <div class="next-btn" @click="stepTwo">下一步</div>
      </div>

      <!-- step 3 -->
      <div class="step-form-wrapper" v-show="step === 2">
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
        <div class="next-btn" @click="stepThree">下一步</div>
      </div>

      <!-- step 4 -->
      <div class="step-form-wrapper"  v-show="step === 3">
        <div class="register-main-form-wrapper">
          <p class="modify-password"><i class="el-icon-success"></i>恭喜您!密码修改成功!</p>
          <router-link class="next-btn" to="/login" tag="div">返回登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as validate from 'common/js/validate'
  import * as user from 'api/user'

  export default {
    data () {
      return {
        step: 0,
        token: 0,
        // 边框
        borderFocus: {
          username: false,
          password: false,
          password_repeat: false,
          phone: false,
          message_code: false
        },
        // 提交的表单
        formData: {
          username: '',
          password: '',
          password_repeat: '',
          phone: '',
          message_code: ''
        },
        // 错误信息
        errorInfo: {
          username: '',
          password: '',
          password_repeat: '',
          phone: '',
          message_code: ''
        },
        // 表单权限参数
        formFlag: {
          username: '',
          password: '',
          password_repeat: '',
          phone: '',
          message_code: ''
        },
        // message_code 参数
        messageCodeText: '发送短信验证码',   // 按钮的文本
        currentNumber: ''   // 初始的倒计时时间
      }
    },
    components: {

    },
    methods: {
      onFocus(inputType) {
        // focus样式
        this.borderFocus[inputType] = true
      },
      onBlur(inputType) {
        // 清除focus样式
        this.borderFocus[inputType] = false
        // username
        if (inputType === 'username') {
          // 调用接口 是否账号存在
          user.hasUsername(this.formData.username)
            .then(res => {
              if (res.code === 1) {
                this._success(inputType)
              } else {
                this._fail(inputType)
              }
            })
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
        // phone
        if (inputType === 'phone') {
          user.hasPhone(this.formData.phone)
            .then(res => {
              if (res.code === 1) {
                this._success(inputType)
              } else {
                this._fail(inputType)
              }
            })
        }
        // message_code
        if (inputType === 'message_code') {
          // 执行接口
          if (inputType) {
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
        if (inputType === 'message_code') {
          return '短信验证码输入有误'
        }
        if (inputType === 'phone') {
          return '手机号输入有误'
        }
      },
      // 发送验证码
      sendMessageCode() {
        if (typeof this.currentNumber !== 'number') {
          if (validate.phone(this.formData.phone)) {
            // 开始进入及时状态
            this.currentNumber = 59
            this.messageCodeText = `重新发送(${this.currentNumber})`
            let countDown = setInterval(() => {
              this.currentNumber -= 1
              this.messageCodeText = `重新发送(${this.currentNumber})`
              console.log(this.messageCodeText)
              if (!this.currentNumber) {
                clearInterval(countDown)
                this.messageCodeText = '发送短信验证码'
                this.currentNumber = ''
              }
            }, 1000)
            // 发送接口
            this.forgetPsdGetMessageCode({
              mobile: this.formData.phone,
              account: this.formData.username
            })
          }
        }
      },
      // 步骤一
      stepOne() {
        if (this.formFlag.username) {
          this.step = 1
        }
      },
      // 步骤二
      stepTwo() {
        let params = {
          mobile: this.formData.phone,
          account: this.formData.username,
          captcha: this.formData.message_code
        }
        if (this.judgeMessageCode(params)) {
          this.step = 2
        }
      },
      // 步骤三
      stepThree() {
        if (this.formFlag.password && this.formFlag.password_repeat) {
          let params = {
            token: this.token,
            newPass: this.formData.password
          }
          if (this.tokenUpdatePassword(params)) {
            this.step = 3
          }
        }
      },
      // 获取短信验证码
      forgetPsdGetMessageCode(params) {
        user.forgetSendMessageCode(params)
          .then(res => {
            if (res.code === 200) {
              console.log('验证码发送成功!')
            }
          })
      },
      // 验证短信验证码
      judgeMessageCode(params) {
        return user.forgetJudgeMessageCode(params)
          .then(res => {
            if (res.code === 200) {
              this.token = res.token
              return true
            }
          })
      },
      // 通过token来更新密码
      tokenUpdatePassword(data) {
        return user.forgetTokenUpdatePassword(data)
          .then(res => {
            if (res.code === 200) {
              return true
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  .forgot
    margin-top 71px
    padding-top 62px
    height 760px
    bg('../register/register-bg.png')
    background-size 100%
    .forgot-wrapper
      wrapper()
      border()
      background-color #fff
      height 630px
      padding-top 120px
      .step-form-wrapper
        padding 80px
        .register-main-form-wrapper
          width 640px
          margin 0 auto
          .register-single-form-wrapper
            font-size 0
            .form-title
              display inline-block
              vertical-align middle
              text-align right
              margin-right 25px
              width 120px
              font-size 16px
              color #615f5d
              .must
                color $color-hot
                padding-right 5px
                font-style normal
            .input-form-wrapper
              position: relative
              box-sizing border-box
              display inline-block
              vertical-align middle
              box-sizing border-box
              width 348px
              height 50px
              border()
              border-radius 5px
              padding 16px 20px
              text-align left
              transition all .3s
              &.border-focus
                border($color-theme)
              .input-form
                font-size 16px
                width 348px - 20px *2
              .verification-code-img
                position absolute
                width 63px
                height 25px
                right 16px
                top 12px
              .send-message-code-btn
                position absolute
                width 130px
                top -1px
                bottom -1px
                right -1px
                background-color $color-new
                color #fff
                border-top-right-radius 5px
                border-bottom-right-radius 5px
                line-height 50px
                text-align center
                font-size $font-size-small
                cursor pointer
                &.send
                  background-color #cecece
                  color #fff
          .error-info
            box-sizing border-box
            height 24px
            padding 6px 0 6px 150px
            font-size $font-size-small
            color $color-hot
          .modify-password
            line-height 40px
            padding 70px 0
            text-align center
            font-size 26px
            color $color-new
            vertical-align middle
            i
              display inline-block
              vertical-align middle
              font-size 40px
              padding 0 10px
        .next-btn
          margin 10px auto
          btn(348px,50px,,$color-theme,$font-size-large,#fff)
          &:hover
            background-color rgba(35,114,244,.8)
</style>
