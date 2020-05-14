<template>
  <div class="pages-staff">
    <management-header @findList="findList" :stateOptions="stateOptions" :typeOptions="typeOptions"></management-header>
    <management-table
      type="staff"
      @clickAction="clickAction"
      :tableList="userList"
      :userType="userType"
    ></management-table>
    <div style="display :flex;justify-content: flex-end;margin-top: 20px">
      <el-pagination @current-change="changePage" background hide-on-single-page layout="prev, pager, next" :page-size="pl" :total="total"></el-pagination>
    </div>
    <el-dialog width="400px" title="查看用户信息" :visible.sync="dialogDetailVisible">
      <el-form :model="userInfo" label-width="60px">
        <el-form-item label="姓名">{{userInfo.name}}</el-form-item>
        <el-form-item label="年龄">{{userInfo.age}}</el-form-item>
        <el-form-item label="性别">{{userInfo.gender}}</el-form-item>
        <el-form-item label="昵称">{{userInfo.userName}}</el-form-item>
        <el-form-item label="手机号">{{userInfo.phone}}</el-form-item>
        <el-form-item label="密码">{{userInfo.userPassword}}</el-form-item>
        <el-form-item label="启用">{{userInfo.state?'在用':'停用'}}</el-form-item>
        <el-form-item label="类型">{{!userInfo.type?'超级管理员':userInfo.type===1?'管理员':'普通用户'}}</el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogDetailVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog width="600px" title="编辑用户信息" :visible.sync="dialogEditVisible">
      <el-form :model="userInfo" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="userInfo.age" :min="1" :max="100" autocomplete="off"></el-input-number>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="userInfo.gender" label="男" border>男</el-radio>
          <el-radio v-model="userInfo.gender" label="女" border>女</el-radio>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="userInfo.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userInfo.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.userPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="启用">
          <el-radio v-model="userInfo.state" :label="0" border>停用</el-radio>
          <el-radio v-model="userInfo.state" :label="1" border>在用</el-radio>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio v-model="userInfo.type" :label="0" border>超级管理员</el-radio>
          <el-radio v-model="userInfo.type" :label="1" border>管理员</el-radio>
          <el-radio v-model="userInfo.type" :label="2" border>普通用户</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import managementHeader from './../components/management-header/managementHeader'
import managementTable from './../components/management-table/managementTable'
import User from '@/http/User'
export default {
  components: {
    managementHeader,
    managementTable
  },
  data () {
    return {
      stateOptions: [
        { id: 0, label: '停用' },
        { id: 1, label: '在用' }
      ],
      typeOptions: [
        { id: 0, label: '超级管理员' },
        { id: 1, label: '管理员' },
        { id: 2, label: '普通用户' }
      ],
      userList: [],
      pn: 0,
      pl: 8,
      userType: 0,
      userId: 0,
      dialogDetailVisible: false,
      dialogEditVisible: false,
      userInfo: {},
      total: 0
    }
  },
  methods: {
    findList (prop) {
      this.pn = 0
      this.userList = []
      this.state = prop.state
      this.type = prop.type
      this.getUserList()
    },
    async getUserList () {
      let params = {
        pn: this.pn,
        pl: this.pl,
        type: this.type,
        state: this.state
      }
      let data = await User.getUserList(this, params)
      console.log(data)
      this.userList = data.list
      this.total = data.total
    },
    clickAction (item, type) {
      if (type === 'detail') {
        this.dialogDetailVisible = true
        this.userInfo = JSON.parse(JSON.stringify(item))
      } else if (type === 'edit') {
        this.dialogEditVisible = true
        this.userInfo = JSON.parse(JSON.stringify(item))
      } else if (type === 'delete') {
        this.$confirm('确定删除此用户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            User.deleteUser(this, { id: item.id }).then(res => {
              this.getUserList()
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    editUser () {
      User.updateUserInfo(this, this.userInfo)
        .then(() => {
          this.dialogEditVisible = false
          this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePage (p) {
      this.pn = p - 1
      this.userList = []
      this.getUserList()
    }
  },
  created () {
    this.userType = this.$store.state.store_userInfo.type
    this.userId = this.$store.state.store_userInfo.id
    console.log(this.userType)

    this.getUserList()
  }
}
</script>

<style lang="less" scoped>
.pages-staff {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
