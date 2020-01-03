<template>
  <div class="home-top-header">
    <div class="left">
      <i class="iconfont el-icon-s-fold" @click="changeCollapse"></i>
      <p>toptoptop</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-top-header',
  data () {
    return {}
  },
  methods: {
    changeCollapse () {}
  }
}
</script>

<style lang="less" scoped>
.home-top-header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      width: 40px;
    }
  }
}
</style>
