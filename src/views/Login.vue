<template>
  <el-card class="login-card">
    <template #header>
      <div class="card-header">
        Vue3 Demo
      </div>
    </template>
    <el-form :model="form" size="large">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password" placeholder="请输入密码" show-password
          :prefix-icon="Key"
        />
      </el-form-item>
      <div class="btn-box">
        <el-button type="primary" @click="onLogin">
          登录
        </el-button>
        <el-button @click="onRegister">
          注册
        </el-button>
      </div>
    </el-form>
  </el-card>
</template>
<script setup>
import {User, Key} from '@element-plus/icons-vue';
</script>
<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: '',
        password: '',

      }
    }
  },
  methods: {
    onLogin() {
    },
    onRegister() {

    }
  }
};
</script>

<style scoped lang="scss">
.login-card {
  width: 400px;
  margin: 280px auto 0;
  font-size: var(--el-font-size-extra-large);
}

.btn-box {
  width: 100%;
  text-align: center;
}
</style>
