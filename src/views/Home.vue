<template>
  <el-container class="home">
    <el-aside width="200px">
      <div id="logo"></div>
      <home-left-aside></home-left-aside>
    </el-aside>
    <el-container>
      <el-header style="height:80px">
        <home-top-header></home-top-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeLeftAside from './components/home-left-aside/HomeLeftAside'
import HomeTopHeader from './components/home-top-header/HomeTopHeader'
export default {
  name: 'home',
  components: {
    HomeLeftAside,
    HomeTopHeader
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
  .el-header {
    line-height: 80px;
  }
}
</style>
