<template>
  <div class="app">
    <k-header></k-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <k-footer></k-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import KHeader from 'components/k-header/k-header'
import KFooter from 'components/k-footer/k-footer'
import {mapGetters, mapMutations} from 'vuex'

export default {
  created () {
    // this.$nextTick(() => {
    //   this.setUser()
    // })
  },
  mounted () {
    this.$nextTick(() => {
      this.setUser({a: 1})
    })
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    // ...mapActions(['setUser']),
    ...mapMutations({
      setUser: 'SET_USER'
    })
  },
  data() {
    return {}
  },
  components: {
    KHeader,
    KFooter
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

