<template>
  <div class="create-new">
    <my-breadcrumb :breadcrumb="breadcrumb"></my-breadcrumb>
    <div class="new-box">
      <create-view :type="type" :typeOptions="typeOptions" @submitView="submitView"></create-view>
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
    },
    typeOptions () {
      let TO = []
      switch (this.type) {
        case 'view':
          TO = []
          break
        case 'notice':
          TO = [
            { id: 0, label: '公告通知' },
            { id: 1, label: '景区新闻' }
          ]
          break
        case 'play':
          TO = [
            { id: 0, label: '特色美食' },
            { id: 1, label: '特产购物' },
            { id: 2, label: '休闲娱乐' }
          ]
          break

        default:
          break
      }
      return TO
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
      console.log(params)

      if (this.type === 'zone') {
        Publish.PublishView(this, params).then(res => {
          this.$router.push({ name: 'pages-zone' })
        })
      } else if (this.type === 'view') {
        Publish.PublishNotice(this, params).then(res => {
          this.$router.push({ name: 'pages-notice' })
        })
      } else if (this.type === 'play') {
        Publish.PublishPlay(this, params).then(res => {
          this.$router.push({ name: 'pages-play' })
        })
      }
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
