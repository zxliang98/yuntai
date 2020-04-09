<template>
  <div class="pages-play">
    <management-header @findList="findList" :typeOptions="typeOptions"></management-header>
    <management-table type="play" @toDetail="toDetail" :tableList="playList"></management-table>
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
      playList: [],
      typeOptions: [
        { id: 0, label: '特色美食' },
        { id: 1, label: '特产购物' },
        { id: 2, label: '休闲娱乐' }
      ]
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
      let {
        data: { data }
      } = await Content.ContentPlayList(this, params)
      console.log(data)
      this.playList = data
    },
    findList (prop) {
      this.pn = 0
      let params = {}
      if (prop.state) {
        params.state = prop.state
      }
      if (prop.type !== '') {
        params.type = prop.type
      }
      this.getPlayList(params)
    },
    toDetail (prop) {
      this.$router.push({
        name: 'detail',
        params: { id: prop.id },
        query: { type: 'play' }
      })
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
