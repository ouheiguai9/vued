<template>
  <div class="no-auth-container">
    <el-card v-if="showLoginCard" class="login-card">
      <template #header>
        <div class="login-card-title">
          {{ $lang('app.login.title') }}
          <switch-language />
        </div>
      </template>
      <el-form :model="form" size="large">
        <el-form-item>
          <el-input v-model="form.login.username" :placeholder="$lang('app.login.user')" :prefix-icon="User" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.login.password" :placeholder="$lang('app.login.password')" show-password :prefix-icon="Lock" />
        </el-form-item>
        <div class="btn-box">
          <el-button type="primary" @click="onLogin">{{ $lang('app.login.ok') }}</el-button>
          <el-button @click="goToRegister">{{ $lang('app.login.register') }}</el-button>
        </div>
      </el-form>
    </el-card>
    <el-card v-else>
      <el-button type="primary" @click="goToLogin">{{ $lang('app.login.ok') }}</el-button>
    </el-card>
  </div>
</template>

<script>
import { Lock, User } from '@element-plus/icons-vue'
import SwitchLanguage from '@/components/SwitchLanguage'
export default {
  name: 'NoAuth',
  components: { SwitchLanguage },
  setup() {
    return {
      User,
      Lock,
    }
  },
  data() {
    return {
      showLoginCard: true,
      form: {
        login: {
          username: '',
          password: '',
        },
      },
    }
  },
  methods: {
    goToRegister() {
      this.showLoginCard = false
    },
    goToLogin() {
      this.showLoginCard = true
    },
    onLogin() {
      this.$store.dispatch('security/authentication', this.form)
    },
  },
}
</script>

<style scoped lang="scss">
.no-auth-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .login-card {
    width: 400px;
    font-size: var(--el-font-size-extra-large);
    flex: none;

    .login-card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--el-color-primary-dark-2);
    }

    .btn-box {
      width: 100%;
      text-align: center;
    }
  }
}
</style>