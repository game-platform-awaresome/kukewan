<template>
  <div class="register">
    <div class="register-wrapper">
      <div class="register-nav">
        <ul>
          <router-link class="nav-item" tag="li" to="account-register">
            账号注册
          </router-link>
          <router-link class="nav-item" tag="li" to="phone-register">
            手机注册
          </router-link>
        </ul>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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

  .register
    margin-top 71px

</style>
