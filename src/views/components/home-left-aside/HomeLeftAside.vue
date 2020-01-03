<template>
  <el-menu :collapse="isCollapse" :default-active="HOMELEFTASIDE[0].route" router>
    <el-menu-item v-for="item in HOMELEFTASIDE" :key="item.id" :index="item.route">
      <i :class="item.icon"></i>
      <span slot="title">{{item.text}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { HOMELEFTASIDE } from '@/assets/constant/SomeData.js'
export default {
  data () {
    return {
      HOMELEFTASIDE,
      isCollapse: false
    }
  },
  created () {}
}
</script>

<style>
</style>
