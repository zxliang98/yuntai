<template>
  <div class="home-top-header">
    <div class="left">
      <i :class="['iconfont',leftAsideCollapse?' el-icon-s-unfold':'el-icon-s-fold']" @click="changeCollapse"></i>
      <p>toptoptop</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'home-top-header',
  data () {
    return {}
  },
  computed: {
    ...mapState(['leftAsideCollapse'])
  },
  methods: {
    ...mapMutations(['changeLeftAsideCollapse']),
    changeCollapse () {
      this.changeLeftAsideCollapse()
      console.log(this.leftAsideCollapse)
    }
  },
  mounted () {
    console.log(this.leftAsideCollapse)
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
