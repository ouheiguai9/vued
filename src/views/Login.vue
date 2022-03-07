<template>
  <el-card class="login-card">
    <template #header>
      <div class="login-card-title">Vue3 Demo</div>
    </template>
    <el-form :model="form" size="large">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码" show-password :prefix-icon="Lock" />
      </el-form-item>
      <div class="btn-box">
        <el-button type="primary" @click="onLogin"> 登录 </el-button>
        <el-button @click="onRegister"> 注册 </el-button>
      </div>
    </el-form>
  </el-card>
</template>
<script>
import { Lock, User } from '@element-plus/icons-vue'

export default {
  name: 'LoginView',
  setup() {
    return {
      User,
      Lock,
    }
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    onLogin() {},
    onRegister() {},
  },
}
</script>

<style scoped lang="scss">
.login-card {
  width: 400px;
  margin: 300px auto 0;
  font-size: var(--el-font-size-extra-large);

  @media screen and (max-height: 768px) {
    margin-top: 180px;
  }

  .login-card-title {
    color: var(--el-color-primary-dark-2);
  }

  .btn-box {
    width: 100%;
    text-align: center;
  }
}
</style>
