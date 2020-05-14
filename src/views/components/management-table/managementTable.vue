<template>
  <div class="management-table">
    <el-table v-if="type!=='staff'" :data="tableList" stripe style="width: 100%">
      <el-table-column label="发表日期">
        <template slot-scope="scope">{{getDataTime(scope.row.publishTime)||'--'}}</template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope="scope">{{scope.row.userName||'--'}}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state===1?'':'success'">{{scope.row.state===1?'已发布':'草稿'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="类型" v-if="type==='notice'">
        <template slot-scope="scope">
          <el-tag :type="scope.row.type===1?'':'success'">{{scope.row.type===1?'景区新闻':'公告通知'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="类型" v-if="type==='play'">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.type===0?'success':scope.row.type===1?'':'info'"
          >{{scope.row.type===0?'特色美食':scope.row.type===1?'特产购物':'休闲娱乐'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <span>{{scope.row.content.slice(0,15)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,'detail')" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row,'edit')" type="text" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row,'delete')" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table v-else :data="tableList" stripe style="width: 100%">
      <el-table-column label="姓名">
        <template slot-scope="scope">{{scope.row.name||'--'}}</template>
      </el-table-column>
      <el-table-column label="昵称">
        <template slot-scope="scope">{{scope.row.userName||'--'}}</template>
      </el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">{{scope.row.gender||'--'}}</template>
      </el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="scope">{{scope.row.age||'--'}}</template>
      </el-table-column>
      <el-table-column label="手机号">
        <template slot-scope="scope">{{scope.row.phone||'--'}}</template>
      </el-table-column>
      <el-table-column label="用户密码" v-if="!userType">
        <template slot-scope="scope">{{scope.row.userPassword||'--'}}</template>
      </el-table-column>
      <el-table-column label="启用">
        <template slot-scope="scope">
          <el-tag :type="!scope.row.state?'danger':''">{{!scope.row.state?'停用':'在用'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="scope">
          <el-tag
            :type="!scope.row.type?'':scope.row.type===1?'success':'info'"
          >{{!scope.row.type?'超级管理员':scope.row.type===1?'管理员':'普通用户'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" v-if="!userType">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,'detail')" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row,'edit')" type="text" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row,'delete')" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { useTimes } from '@/common/utils'
export default {
  data () {
    return {}
  },
  props: {
    tableList: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default () {
        return ''
      }
    },
    userType: {
      type: Number,
      default () {
        return 1
      }
    }
  },
  watch: {
    tableList: {
      handler (n) {
        this.tableList = n
      },
      deep: true
    }
  },
  methods: {
    ...useTimes,
    handleClick (row, type) {
      this.$emit('clickAction', row, type)
      console.log(row, type)
    }
  }
}
</script>

<style>
</style>
