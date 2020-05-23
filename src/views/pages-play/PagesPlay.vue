<template>
  <div class="pages-play">
    <management-header @findList="findList" :typeOptions="typeOptions"></management-header>
    <management-table type="play" @clickAction="clickAction" :tableList="playList"></management-table>
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
      playList: [],
      typeOptions: [
        { id: 0, label: '特色美食' },
        { id: 1, label: '特产购物' },
        { id: 2, label: '休闲娱乐' }
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
    async getPlayList (params = {}) {
      params.pn = this.pn
      params.pl = this.pl
      params.state = this.state
      params.type = this.type
      let res = await Content.ContentPlayList(this, params)
      this.playList = [...this.playList, ...res.data]
      this.total = res.total
    },
    findList (prop) {
      this.currentPage = 1
      this.pn = 0
      this.playList = []
      this.state = prop.state
      this.type = prop.type
      this.getPlayList()
    },
    clickAction (item, type) {
      if (type === 'detail') {
        this.$router.push({
          name: 'detail',
          params: { id: item.id },
          query: { type: 'play' }
        })
      } else if (type === 'edit') {
        this.$router.push({
          name: 'create-new',
          params: { type: 'play' },
          query: { id: item.id }
        })
      } else if (type === 'delete') {
        this.$confirm('确定删除此游玩吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            Content.DeletePlay(this, { id: item.id }).then(res => {
              this.pn = 0
              this.playList = []
              this.getPlayList()
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
      this.playList = []
      this.getPlayList()
    }
  },
  created () {
    this.getPlayList()
  }
}
</script>

<style lang="less" scoped>
.pages-play {
  max-width: 1400px;
  margin: 0 auto;

}
</style>
