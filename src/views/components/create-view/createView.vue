<template>
  <div class="create-view">
    <el-form :model="createView" status-icon label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="createView.title"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="createView.type" clearable placeholder="请选择类型">
          <el-option
            v-for="item in typeOptions"
            :key="item.id"
            :label="item.label"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <quill-editor v-model="createView.content" :options="editorOption" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitView(0)">存草稿</el-button>
        <el-button type="primary" @click="submitView(1)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      createView: {
        title: '',
        type: '',
        content: ''
      },
      typeOptions: [
        { id: 0, label: '公告通知' },
        { id: 1, label: '景区新闻' }
      ],
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['image']
          ]
        }
      }
    }
  },
  computed: {},
  methods: {
    submitView (state) {
      let params = {
        state: state,
        title: this.createView.title,
        type: this.createView.type,
        content: this.createView.content,
        userName: '管理员'
      }
      this.$emit('submitView', params)
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.create-view {
  .el-select {
    width: 100%;
  }
  /deep/.ql-editor {
    min-height: 300px;
  }
  /deep/.ql-toolbar.ql-snow {
    border-radius: 4px 4px 0 0;
    border-color: #dcdfe6;
  }
  /deep/.ql-container.ql-snow {
    border-radius: 0 0 4px 4px;
    border-color: #dcdfe6;
  }
}
</style>
