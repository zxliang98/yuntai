<template>
  <div class="pages-notice">
    <management-header @findList="findList" :typeOptions="typeOptions"></management-header>
    <management-table type="notice" @clickAction="clickAction" :tableList="noticeList"></management-table>
    <div style="display :flex;justify-content: flex-end;margin-top: 20px">
      <el-pagination :current-page.sync="currentPage" @current-change="changePage" background hide-on-single-page layout="prev, pager, next" :page-size="pl" :total="total"></el-pagination>
    </div>
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
      pl: 8,
      state: '',
      type: '',
      noticeList: [],
      typeOptions: [
        { id: 0, label: '公告通知' },
        { id: 1, label: '景区新闻' }
      ],
      total: 0,
      currentPage: 1
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
      params.state = this.state
      params.type = this.type
      console.log(params)
      let res = await Content.ContentNoticeList(this, params)
      this.noticeList = [...this.noticeList, ...res.data]
      this.total = res.total
    },
    findList (prop) {
      this.currentPage = 1
      this.pn = 0
      this.noticeList = []
      this.state = prop.state
      this.type = prop.type
      this.getNoticeList()
    },
    clickAction (item, type) {
      if (type === 'detail') {
        this.$router.push({
          name: 'detail',
          params: { id: item.id },
          query: { type: 'notice' }
        })
      } else if (type === 'edit') {
        this.$router.push({
          name: 'create-new',
          params: { type: 'notice' },
          query: { id: item.id }
        })
      } else if (type === 'delete') {
        this.$confirm('确定删除此用户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            Content.DeleteNotice(this, { id: item.id }).then(res => {
              this.pn = 0
              this.noticeList = []
              this.getNoticeList()
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    changePage (p) {
      this.pn = p - 1
      this.noticeList = []
      this.getNoticeList()
    }
  },
  created () {
    this.getNoticeList()
  }
}
</script>

<style lang="less" scoped>
.pages-notice {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
