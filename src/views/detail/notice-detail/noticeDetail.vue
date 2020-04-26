<template>
  <div class="notice-detail" v-if="show">
    <my-breadcrumb :breadcrumb="breadcrumb"></my-breadcrumb>
    <detail-title :title-info="titleInfo"></detail-title>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Content from '@/http/Content'
import detailTitle from './../component/detail-title/detailTitle'
export default {
  data () {
    return {
      id: 0,
      show: false,
      titleInfo: {},
      resInfo: {},
      content: '',
      type: ''
    }
  },
  computed: {
    breadcrumb () {
      let bb = []
      bb.push({ name: '首页', path: { path: '/' } })
      switch (this.type) {
        case 'view':
          bb.push({ name: '景区管理', path: { path: '/zone' } })
          bb.push({ name: `景区详情` })
          break
        case 'notice':
          bb.push({ name: '公告管理', path: { path: '/notice' } })
          bb.push({ name: `公告详情` })
          break
        case 'play':
          bb.push({ name: '游玩管理', path: { path: '/play' } })
          bb.push({ name: `游玩详情` })
          break

        default:
          break
      }
      return bb
    }
  },
  components: {
    detailTitle
  },
  methods: {
    async getNoticeDetail () {
      if (this.type === 'view') {
        let res = await Content.ContentView(this, { id: this.id })
        this.resInfo = res.data
      } else if (this.type === 'notice') {
        let res = await Content.ContentNotice(this, { id: this.id })
        this.resInfo = res.data
      } else if (this.type === 'play') {
        let res = await Content.ContentPlay(this, { id: this.id })
        this.resInfo = res.data
      }
      this.titleInfo.title = this.resInfo.title
      this.titleInfo.name = this.resInfo.userName
      this.titleInfo.pubTime = this.resInfo.publishTime
      this.titleInfo.userIcon =
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      this.content = this.resInfo.content
      this.show = true
    }
  },
  created () {
    this.id = this.$route.params.id
    this.type = this.$route.query.type
    this.getNoticeDetail()
  }
}
</script>

<style lang="less" scoped>
.notice-detail {
  width: 900px;
  margin: 0 auto;
  .content {
    margin-top: 24px;
    /deep/ pre {
      white-space: pre-wrap;
    }
  }
  .my-breadcrumb {
    margin-bottom: 20px;
  }
}
</style>
