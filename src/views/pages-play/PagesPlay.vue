<template>
  <div class="pages-play" v-infinite-scroll="loadMore">
    <management-header @findList="findList" :typeOptions="typeOptions"></management-header>
    <management-table type="play" @toDetail="toDetail" :tableList="playList"></management-table>
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
      playList: [],
      typeOptions: [
        { id: 0, label: '特色美食' },
        { id: 1, label: '特产购物' },
        { id: 2, label: '休闲娱乐' }
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
    async getPlayList (params = {}) {
      this.loadText = 'load'
      params.pn = this.pn
      params.pl = this.pl
      params.state = this.state
      params.type = this.type
      let res = await Content.ContentPlayList(this, params)
      this.playList = [...this.playList, ...res.data]
      if (res.data.length < this.pl) {
        this.loadFlag = false
        this.loadText = this.pn === 0 ? 'hide' : 'nomore'
        return
      }
      this.loadFlag = true
    },
    findList (prop) {
      this.pn = 0
      this.playList = []
      this.state = prop.state
      this.type = prop.type
      this.getPlayList()
    },
    toDetail (prop) {
      this.$router.push({
        name: 'detail',
        params: { id: prop.id },
        query: { type: 'play' }
      })
    },
    loadMore () {
      if (this.loadFlag) {
        this.loadFlag = false
        console.log('loadMore')
        setTimeout(() => {
          this.pn++
          this.getPlayList()
        }, 500)
      }
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
