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
      <el-dropdown>
        <div class="right-info">
          <span>{{userInfo.name}}</span>
          <el-avatar
            size="medium"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import User from '@/http/User'
export default {
  name: 'home-top-header',
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['leftAsideCollapse'])
  },
  methods: {
    ...mapMutations(['changeLeftAsideCollapse']),
    changeCollapse () {
      this.changeLeftAsideCollapse()
      console.log(this.leftAsideCollapse)
    },
    async getUserInfo () {
      let { data: { data } } = await User.getUserInfo(this, { id: 3 })
      this.userInfo = data
      console.log(data)
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
    .right-info {
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
