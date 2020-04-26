<template>
  <div class="pages-zone" v-infinite-scroll="loadMore">
    <management-header @findList="findList"></management-header>
    <management-table @toDetail="toDetail" :tableList="viewList" type="view"></management-table>
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
      viewList: [],
      loadText: 'hide',
      loadFlag: false
    }
  },
  components: {
    managementHeader,
    managementTable
  },
  methods: {
    async getViewList (params = {}) {
      this.loadText = 'load'
      params.pn = this.pn
      params.pl = this.pl
      params.state = this.state
      params.type = this.type
      let res = await Content.ContentViewList(this, params)
      this.viewList = [...this.viewList, ...res.data]
      if (res.data.length < this.pl) {
        this.loadFlag = false
        this.loadText = this.pn === 0 ? 'hide' : 'nomore'
        return
      }
      this.loadFlag = true
    },
    findList (prop) {
      this.pn = 0
      this.viewList = []
      this.state = prop.state
      this.type = prop.type
      this.getViewList()
    },
    toDetail (prop) {
      this.$router.push({
        name: 'detail',
        params: { id: prop.id },
        query: { type: 'view' }
      })
    },
    loadMore () {
      if (this.loadFlag) {
        this.loadFlag = false
        console.log('loadMore')
        setTimeout(() => {
          this.pn++
          this.getViewList()
        }, 500)
      }
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
