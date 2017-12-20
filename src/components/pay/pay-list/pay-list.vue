<template>
  <div class="pay-list">
    <div class="pay-list-common-wrapper unionpay" v-show="payType === 'unionpay'">
      <ul>
        <li class="pay-list-item" :class="unionpay.id" v-for="(unionpay,index) in unionpayList"
         :data-id="unionpay.id" :key="index" @click="selectUnionpay(unionpay.id)"></li>
      </ul>
    </div>
    <div class="pay-list-common-wrapper game-card" v-show="payType === 'game-card'">
      <ul>
        <li class="pay-list-item" :class="gameCard.cls" v-for="(gameCard,index) in gameCardList"
         :data-id="gameCard.id" :key="index" @click="selectUnionpay(gameCard.id)"></li>
      </ul>
    </div>
    <div class="pay-list-common-wrapper phone-card" v-show="payType === 'phone-card'">
      <ul>
        <li class="pay-list-item" :class="phoneCard.cls" v-for="(phoneCard,index) in phoneCardList"
         :data-id="phoneCard.id" :key="index" @click="selectUnionpay(phoneCard.id)"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      payType: {
        type: String
      }
    },
    data () {
      return {
        unionpayList: [{
          name: '工商银行',
          id: 'ICBC'
        },
        {
          name: '建设银行',
          id: 'CCB'
        },
        {
          name: '农业银行',
          id: 'ABC'
        },
        {
          name: '招商银行',
          id: 'CMB'
        },
        {
          name: '中国银行',
          id: 'BOC'
        },
        {
          name: '交通银行',
          id: 'COMM'
        },
        {
          name: '光大银行',
          id: 'CEB'
        },
        {
          name: '民生银行',
          id: 'CMBC'
        },
        {
          name: '兴业银行',
          id: 'CIB'
        },
        {
          name: '浦发银行',
          id: 'SPDB'
        },
        {
          name: '东亚银行',
          id: 'HKBEA'
        },
        {
          name: '中信银行',
          id: 'CITIC'
        },
        {
          name: '平安银行',
          id: 'SZPAB'
        },
        {
          name: '邮政银行',
          id: 'PSBC'
        },
        {
          name: '北京银行',
          id: 'BCCB'
        },
        {
          name: '南京银行',
          id: 'NJCB'
        }],
        gameCardList: [{
          name: '骏网一卡通',
          cls: 'junwang',
          id: 60
        },
        {
          name: '网易一卡通',
          cls: 'wangyi',
          id: 63
        },
        {
          name: '征途一卡通',
          cls: 'zhengtu',
          id: 61
        },
        {
          name: '完美一卡通',
          cls: 'wanmei',
          id: 62
        }],
        phoneCardList: [{
          name: '中国移动',
          cls: 'yidong',
          id: 75
        },
        {
          name: '中国联通',
          cls: 'liantong',
          id: 76
        },
        {
          name: '中国电信',
          cls: 'dianxin',
          id: 77
        }]
      }
    },
    components: {

    },
    methods: {
      selectUnionpay(id) {
        this.$emit('selectUnionpay', id)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/variable.styl"

  pay-bg($bg-name)
    bg('../image/union/' + $bg-name + '.png')

  .pay-list
    .pay-list-common-wrapper
      clear-fix()
      .pay-list-item
        float left
        box-sizing border-box
        btn(100px,36px,0,,,)
        border()
        margin 15px 25px 0 0
        // unionpay
        &.ICBC
          pay-bg('ICBC')
        &.CCB
          pay-bg('CCB')
        &.ABC
          pay-bg('ABC')
        &.CMB
          pay-bg('CMB')
        &.BOC
          pay-bg('BOC')
        &.COMM
          pay-bg('COMM')
        &.CEB
          pay-bg('CEB')
        &.CMBC
          pay-bg('CMBC')
        &.CIB
          pay-bg('CIB')
        &.SPDB
          pay-bg('SPDB')
        &.HKBEA
          pay-bg('HKBEA')
        &.CITIC
          pay-bg('CITIC')
        &.SZPAB
          pay-bg('SZPAB')
        &.PSBC
          pay-bg('PSBC')
        &.BCCB
          pay-bg('BCCB')
        &.NJCB
          pay-bg('NJCB')
        // game-card
        &.junwang
          pay-bg('junwang')
        &.wangyi
          pay-bg('wangyi')
        &.zhengtu
          pay-bg('zhengtu')
        &.wanmei
          pay-bg('wanmei')
        // phone-card
        &.yidong
          pay-bg('yidong')
        &.liantong
          pay-bg('liantong')
        &.dianxin
          pay-bg('dianxin')
      &.unionpay
        .pay-list-item
          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3),
          &:nth-of-type(4),
          &:nth-of-type(5)
            margin-top 0
      &.game-card,&.phone-card
        .pay-list-item
          width 180px
          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3)
            margin-top 0

</style>
