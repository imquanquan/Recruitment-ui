<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
      </div>
      <!-- 登陆表单 -->
      <el-form :model="loginForm" label-width="0px" class="login_form">
        <!-- email -->
        <el-form-item>
          <el-input v-model="loginForm.email" prefix-icon="icon iconfont icon-bianzubeifen"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" prefix-icon="icon iconfont icon-bianzubeifen4"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="button">
          <el-button type="primary">登陆</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登陆数据
      loginForm: {
        email: 'sss',
        password: 'sss',
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.button {
  display: flex;
  justify-content: center;
}
</style>
