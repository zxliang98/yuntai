<template>
  <el-container class="home">
    <el-aside width="200px">
      <div id="logo"></div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#00c2a8"
        text-color="#fff"
        active-text-color="#00ffea"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航3</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">导航4</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">导航5</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height:80px">Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>

<style lang="less" scoped>
@base_color: #00c2a8;
@active_color: #00ffea;
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
    background-color: @base_color;
    #logo {
      width: 200px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff url("./../assets/logo.png") no-repeat center / 160px auto;
    }
    .el-menu {
      height: 100%;
      border: 0 none;
    }
    /deep/.el-menu-item i  {
      color: #fff;
    }
  }
  .el-header {
    line-height: 80px;
    background-color: @base_color;
  }
  .el-footer {
    background-color: @base_color;
  }
}
</style>
