<template>
  <div class="pages-zone">
    <management-header @findList="findList"></management-header>
    <management-table @toDetail="toDetail" :tableList="viewList" type="view"></management-table>
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
      viewList: []
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
      let {
        data: { data }
      } = await Content.ContentViewList(this, params)
      console.log(data)
      this.viewList = data
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
      this.getViewList(params)
    },
    toDetail (prop) {
      this.$router.push({ name: 'detail', params: { id: prop.id }, query: { type: 'view' } })
    }
  },
  created () {
    this.getViewList()
  }
}
</script>

<style>
</style>
