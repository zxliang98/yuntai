<template>
  <div class="pages-notice" v-infinite-scroll="loadMore">
    <management-header @findList="findList" :typeOptions="typeOptions"></management-header>
    <management-table type="notice" @clickAction="clickAction" :tableList="noticeList"></management-table>
    <my-pull-down-refresh :status="loadText"></my-pull-down-refresh>
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
      state: '',
      type: '',
      noticeList: [],
      typeOptions: [
        { id: 0, label: '公告通知' },
        { id: 1, label: '景区新闻' }
      ],
      loadText: 'hide',
      loadFlag: false
    }
  },
  components: {
    managementHeader,
    managementTable
  },
  methods: {
    async getNoticeList (params = {}) {
      this.loadText = 'load'
      params.pn = this.pn
      params.pl = this.pl
      params.state = this.state
      params.type = this.type
      console.log(params)
      let res = await Content.ContentNoticeList(this, params)
      this.noticeList = [...this.noticeList, ...res.data]
      if (res.data.length < this.pl) {
        this.loadFlag = false
        this.loadText = this.pn === 0 ? 'hide' : 'nomore'
        return
      }
      this.loadFlag = true
    },
    findList (prop) {
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
            Content.deleteUser(this, { id: item.id }).then(res => {
              this.getUserList()
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
    loadMore () {
      if (this.loadFlag) {
        this.loadFlag = false
        console.log('loadMore')
        setTimeout(() => {
          this.pn++
          this.getNoticeList()
        }, 500)
      }
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
