<template>
  <div class="pages-notice">
    <management-header @findList="findList"></management-header>
    <management-table @toDetail="toDetail" :tableList="noticeList"></management-table>
  </div>
</template>

<script>
import managementHeader from './../components/management-header/managementHeader'
import managementTable from './../components/management-table/managementTable'
import Content from '@/http/Content'
export default {
  data () {
    return {
      pn: 0,
      pl: 10,
      noticeList: []
    }
  },
  components: {
    managementHeader,
    managementTable
  },
  methods: {
    async getNoticeList (params = {}) {
      params.pn = this.pn
      params.pl = this.pl
      let {
        data: { data }
      } = await Content.ContentNoticeList(this, params)
      console.log(data)
      this.noticeList = data
    },
    findList (prop) {
      this.pn = 0
      let params = {}
      if (prop.state) {
        params.state = prop.state
      }
      if (prop.type) {
        params.type = prop.type
      }
      this.getNoticeList(params)
    },
    toDetail (prop) {
      this.$router.push({ name: 'detail', params: { id: prop.id } })
    }
  },
  created () {
    this.getNoticeList()
  }
}
</script>

<style lang="less" scoped>
.el-pagination {
  margin: 12px 0;
  text-align: right;
}
</style>
