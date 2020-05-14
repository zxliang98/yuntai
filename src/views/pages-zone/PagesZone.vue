<template>
  <div class="pages-zone">
    <management-header @findList="findList"></management-header>
    <management-table @clickAction="clickAction" :tableList="viewList" type="view"></management-table>
    <div style="display :flex;justify-content: flex-end;margin-top: 20px">
      <el-pagination @current-change="changePage" background hide-on-single-page layout="prev, pager, next" :page-size="pl" :total="total"></el-pagination>
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
      viewList: [],
      total: 0
    }
  },
  components: {
    managementHeader,
    managementTable
  },
  methods: {
    async getViewList (params = {}) {
      params.pn = this.pn
      params.pl = this.pl
      params.state = this.state
      params.type = this.type
      let res = await Content.ContentViewList(this, params)
      this.total = res.total
      this.viewList = [...this.viewList, ...res.data]
    },
    findList (prop) {
      this.pn = 0
      this.viewList = []
      this.state = prop.state
      this.type = prop.type
      this.getViewList()
    },
    clickAction (item, type) {
      if (type === 'detail') {
        this.$router.push({
          name: 'detail',
          params: { id: item.id },
          query: { type: 'view' }
        })
      } else if (type === 'edit') {
        this.$router.push({
          name: 'create-new',
          params: { type: 'view' },
          query: { id: item.id }
        })
      } else if (type === 'delete') {
        this.$confirm('确定删除此用户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            Content.DeleteView(this, { id: item.id }).then(res => {
              this.pn = 0
              this.viewList = []
              this.getViewList()
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
      this.viewList = []
      this.getViewList()
    }
  },
  created () {
    this.getViewList()
  }
}
</script>

<style lang="less" scoped>
.pages-zone {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
