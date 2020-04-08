<template>
  <div class="create-new">
    <my-breadcrumb :breadcrumb="breadcrumb"></my-breadcrumb>
    <div class="new-box">
      <create-view @submitView="submitView"></create-view>
    </div>
  </div>
</template>

<script>
import createView from './../components/create-view/createView'
import Publish from '@/http/Publish'
export default {
  data () {
    return {
      type: ''
    }
  },
  computed: {
    breadcrumb () {
      let bb = []
      bb.push({ name: '首页', path: { path: '/' } })
      switch (this.type) {
        case 'view':
          bb.push({ name: `新建景区` })
          break
        case 'notice':
          bb.push({ name: `新建公告` })
          break
        case 'play':
          bb.push({ name: `新建游玩` })
          break

        default:
          break
      }
      return bb
    }
  },
  components: {
    createView
  },
  watch: {
    '$route.params.type': {
      handler (n, o) {
        this.type = n
      },
      immediate: true
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    submitView (params) {
      Publish.PublishNotice(this, params).then(res => {
        this.$router.push({ name: 'pages-notice' })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.create-new {
  .my-breadcrumb {
    margin-bottom: 20px;
  }
  .new-box {
    width: 66%;
  }
}
</style>
