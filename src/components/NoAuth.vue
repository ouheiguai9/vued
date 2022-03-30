<template>
  <div style="width: 100%; height: 100%">
    <el-card v-if="showLoginCard" class="login-card">
      <template #header>
        <div class="login-card-title">
          {{ $lang('app.login.title') }}
          <switch-language style="float: right" />
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