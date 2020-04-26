<template>
  <div class="home-top-header">
    <div class="left">
      <i
        :class="['iconfont',leftAsideCollapse?' el-icon-s-unfold':'el-icon-s-fold']"
        @click="changeCollapse"
      ></i>
      <p>toptoptop</p>
    </div>
    <div class="right">
      <el-dropdown @command="createNew">
        <el-button class="right-info" type="primary" size="small">新建</el-button>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            :command="item.type"
            v-for="item in createOption"
            :key="item.name"
          >{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="logout">
        <div class="right-info">
          <span>{{store_userInfo.name}}</span>
          <el-avatar
            size="medium"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="info">个人信息</el-dropdown-item>
          <el-dropdown-item command="logout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Storage } from '@/common/tools'
import User from '@/http/User'
export default {
  name: 'home-top-header',
  data () {
    return {
      userInfo: {},
      createOption: [
        { type: 'view', name: '景区' },
        { type: 'notice', name: '公告' },
        { type: 'play', name: '游玩' }
      ]
    }
  },
  computed: {
    ...mapState(['leftAsideCollapse', 'store_userInfo'])
  },
  methods: {
    ...mapMutations(['changeLeftAsideCollapse', 'store_changeUserInfo']),
    changeCollapse () {
      this.changeLeftAsideCollapse()
      console.log(this.leftAsideCollapse)
    },
    async getUserInfo () {
      let res = await User.getUserInfo(this, { id: Storage.getToken() })
      this.store_changeUserInfo(res.data)
      console.log(this.store_userInfo)
    },
    createNew (item) {
      console.log(1111, item)
      this.$router.push({ name: 'create-new', params: { type: item } })
    },
    logout (item) {
      if (item === 'logout') {
        Storage.removeToken()
        this.$router.push({ name: 'login' })
      }
      if (item === 'info') {
        this.$router.push({ name: 'pages-about' })
      }
    }
  },
  mounted () {
    console.log(this.leftAsideCollapse)
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.home-top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      width: 40px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .right-info {
      margin-left: 12px;
      height: 36px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        margin-right: 12px;
      }
    }
  }
}
</style>
