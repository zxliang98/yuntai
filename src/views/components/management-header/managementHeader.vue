<template>
  <div class="management-header">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="状态">
        <el-select v-model="formInline.state" clearable placeholder="状态类型">
          <el-option label="草稿" value="0"></el-option>
          <el-option label="已发布" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型" v-if="typeOptions.length">
        <el-select v-model="formInline.type" clearable placeholder="状态类型">
          <el-option :label="item.label" :value="item.id" v-for="item in typeOptions" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="findList">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        type: '',
        state: ''
      }
    }
  },
  props: {
    typeOptions: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    findList () {
      this.$emit('findList', this.formInline)
    }
  }
}
</script>

<style>
</style>
