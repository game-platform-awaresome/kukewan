<template>
  <div class="rank">
    <public-title :title="title" :show="false"></public-title>
    <div class="rank-list-wrapper">
      <ul>
        <!-- <li v-for="item in items"></li> -->
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import PublicTitle from 'public/title/title'

  export default {
    data () {
      return {
        title: '热游排行'
      }
    },
    components: {
      PublicTitle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
