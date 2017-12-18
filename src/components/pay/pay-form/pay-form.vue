<template>
  <div class="pay-form">
    <div class="common-form-wrapper">
      <div class="single-form-wrapper">
        <span class="input-title">充值账号</span>
        <div class="input-wrapper">
          <input type="text" placeholder="请输入账号">
        </div>
      </div>
      <div class="single-form-wrapper">
        <span class="input-title">选择游戏</span>
        <span class="select-btn"></span>
        <span class="select-btn"></span>
        <!-- game-select-window -->
        <div class="game-select-window">
          <ul>
            <li class="game-nav">最近在玩</li>
            <li class="game-nav">全部游戏</li>
          </ul>
          <ul>
            <li v-for="recentPlay in recentPlayList" :key="recentPlay">
              <span class="recent-play-item" @click="selectGame(recentPlay.gid)">{{recentPlay.name}}</span>
            </li>
          </ul>
          <ul>
            <li v-for="allGame in allGameList" :key="allGame">
              <span class="recent-play-item" @click="selectGame(allGame.gid)">{{allGame.name}}</span>
            </li>>
          </ul>
        </div>
        <!-- server-select-window -->
        <div class="server-select-window">
          <ul>
            <li class="game-nav">最近在玩</li>
            <li class="game-nav">全部区服</li>
          </ul>
          <ul>
            <li v-for="recentServer in recentServerList" :key="recentServer">
              <span class="recent-play-item" @click="selectServer(recentServer.sid)">{{recentServer.name}}</span>
            </li>>
          </ul>
          <ul>
            <li v-for="allServer in allServerList" :key="allServer">
              <span class="recent-play-item" @click="selectServer(allServer.sid)">{{allServer.name}}</span>
            </li>>
          </ul>
        </div>
      </div>
      <div class="select-money">
        <ul>
          <li v-for="item in moneyList" :key="item">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        recentPlayList: [{
          name: '大美人',
          gid: '1'
        },
        {
          name: '大美人',
          gid: '1'
        },
        {
          name: '大美人',
          gid: '1'
        }],
        allGameList: [{
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        },
        {
          name: '大战神',
          gid: '2'
        }],
        recentServerList: [{
          name: '双线123区',
          sid: 22
        }],
        allServerList: [{
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        },
        {
          name: '双线123区',
          sid: 22
        }],
        moneyList: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 1000]
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
