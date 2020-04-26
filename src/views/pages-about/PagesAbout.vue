<template>
  <div class="user-info">
    <div class="title">我的信息</div>
    <el-form :model="userInfo" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="userInfo.name" placeholder="输入你的姓名"></el-input>
      </el-form-item>
      <el-form :inline="true" label-width="80px">
        <el-form-item label="性别">
          <el-radio v-model="userInfo.gender" label="男" border>男</el-radio>
          <el-radio v-model="userInfo.gender" label="女" border>女</el-radio>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="userInfo.age" :min="1" :max="100"></el-input-number>
        </el-form-item>
      </el-form>
      <el-form-item label="昵称">
        <el-input v-model="userInfo.userName" placeholder="设置你的昵称"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="userInfo.phone" placeholder="输入你的手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="userInfo.userPassword" placeholder="设置你的密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="saveUserInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import User from '@/http/User'
export default {
  data () {
    return {
      userInfo: {
        name: '',
        age: 18
      }
    }
  },
  computed: {
    ...mapState(['store_userInfo'])
  },
  watch: {
    store_userInfo: {
      handler (n) {
        this.userInfo = JSON.parse(JSON.stringify(this.store_userInfo))
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapMutations(['store_changeUserInfo']),
    cancel () {
      this.$router.go(-1)
    },
    saveUserInfo () {
      User.updateUserInfo(this, this.userInfo).then(res => {
        console.log(res)
        this.store_changeUserInfo(this.userInfo)
        this.$message.success('修改成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  max-width: 1000px;
  min-width: 500px;
  margin: 0 auto;
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
