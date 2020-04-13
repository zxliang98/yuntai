<template>
  <div class="pull-down-refresh-box" v-if="status !== 'hide'">
    <div class="loading-text" v-if="status === 'load'">
      <i class="el-icon-loading"></i>
      正在加载...
    </div>
    <div class="loading-text" v-if="status === 'nomore'">-没有更多了-</div>
  </div>
</template>

<script>
export default {
  props: {
    // hide 隐藏
    // load 正在加载
    // nomore 没有更多内容
    status: {
      type: String,
      default: 'load'
    }
  }
}
</script>

<style lang="less" scoped>
.pull-down-refresh-box {
  background: none;
  color: #848d94;
  height: 32px;
  width: 100%;
  z-index: 11;
  .loading-text {
    width: 100%;
    height: 32px;
    font-size: 14px;
    background-color: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 24px;
      margin-right: 14px;
    }
  }
}
@keyframes pull {
  100% {
    width: 100%;
    opacity: 1;
  }
}
</style>
