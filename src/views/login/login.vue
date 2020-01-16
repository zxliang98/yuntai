<template>
  <div class="login">
    <div class="bg-img"></div>
    <el-card shadow="always" class="login-card">
      <h3 class="title">登录</h3>
      <el-form ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button class="login-button" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="register">
        <span>还没有账号?去</span>
        <span class="to-register">注册</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url('./imgs/yuntai_banner1.jpg') no-repeat center/cover;
    animation: bg-big 10s linear forwards;
  }
  @keyframes bg-big {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.6);
    }
  }
  .login-card {
    width: 400px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: normal;
      line-height: 40px;
      margin-bottom: 20px;
    }
    .login-button {
      width: 100%;
    }
    .register {
      text-align: center;
      .to-register {
        cursor: pointer;
        color: #555;
      }
    }
  }
}
</style>
