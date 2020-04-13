<template>
  <el-container class="home">
    <el-aside :width="leftAsideCollapse?'64px':'200px'">
      <div id="logo" :style="leftAsideCollapse?'width:64px;background-position:8px':''"></div>
      <home-left-aside></home-left-aside>
    </el-aside>
    <el-container>
      <el-header style="height:80px">
        <home-top-header></home-top-header>
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
      <el-footer>联系我们:12345678901</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

import HomeLeftAside from '@/components/home-left-aside/HomeLeftAside'
import HomeTopHeader from '@/components/home-top-header/HomeTopHeader'
export default {
  name: 'home',
  components: {
    HomeLeftAside,
    HomeTopHeader
  },
  computed: {
    ...mapState(['leftAsideCollapse'])
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // background-color: #ccc;
  .el-aside {
    padding-top: 80px;
    position: relative;
    #logo {
      width: 200px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff url('./../assets/imgs/logo.png') no-repeat center / 160px
        auto;
    }
    .el-menu {
      height: 100%;
      border: 0 none;
    }
  }
  .content {
    // 设置滚动条样式
    &::-webkit-scrollbar {
      display: block;
      width: 10px;
      height: 100%;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #d6dbe0;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background: #eef4fa;
    }
  }
  .el-header {
    line-height: 80px;
  }
}
</style>
