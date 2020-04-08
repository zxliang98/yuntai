<template>
  <div class="notice-detail">
    <detail-title :title-info="titleInfo"></detail-title>
    <!-- <p :v-html="content"></p> -->
  </div>
</template>

<script>
import Content from '@/http/Content'
import detailTitle from './../component/detail-title/detailTitle'
export default {
  data () {
    return {
      id: 0,
      titleInfo: {},
      content: ''
    }
  },
  components: {
    detailTitle
  },
  methods: {
    async getNoticeDetail () {
      let {
        data: { data }
      } = await Content.ContentNotice(this, { id: this.id })
      this.titleInfo.title = data.title
      this.titleInfo.name = data.userName
      this.titleInfo.pubTime = data.publishTime
      this.titleInfo.userIcon =
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      this.content = data.content
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getNoticeDetail()
  }
}
</script>

<style>
</style>
