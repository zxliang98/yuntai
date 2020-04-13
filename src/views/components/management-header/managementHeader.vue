<template>
  <div class="management-header">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="状态">
        <el-select v-model="formInline.state" clearable placeholder="请选择状态">
          <el-option
            :label="item.label"
            :value="item.id"
            v-for="item in stateOptions"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型" v-if="typeOptions.length">
        <el-select v-model="formInline.type" clearable placeholder="请选择类型">
          <el-option
            :label="item.label"
            :value="item.id"
            v-for="item in typeOptions"
            :key="item.id"
          ></el-option>
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
    },
    stateOptions: {
      type: Array,
      default () {
        return [
          { id: 0, label: '草稿' },
          { id: 1, label: '已发布' }
        ]
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
