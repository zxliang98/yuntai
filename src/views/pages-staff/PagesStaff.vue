<template>
  <div class="pages-staff">
    <management-header @findList="findList" :stateOptions="stateOptions"></management-header>
    <management-table></management-table>
  </div>
</template>

<script>
import managementHeader from './../components/management-header/managementHeader'
import managementTable from './../components/management-table/managementTable'
export default {
  components: {
    managementHeader,
    managementTable
  },
  data () {
    return {
      stateOptions: [
        { id: 0, label: '在职' },
        { id: 1, label: '离职' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.pages-staff {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
