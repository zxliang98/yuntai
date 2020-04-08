<template>
  <div class="pages-zone">
    <management-header @searchClick="searchClick"></management-header>
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
  methods: {
    searchClick (type) {
      console.log(type)
    }
  }
}
</script>

<style>
</style>
