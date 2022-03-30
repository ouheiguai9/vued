<template>
  <el-card class="login-card">
    <template #header>
      <div class="login-card-title">{{ $lang('app.login.title') }}</div>
    </template>
    <el-form :model="form" size="large">
      <el-form-item>
        <el-input v-model="form.username" :placeholder="$lang('app.login.user')" :prefix-icon="User" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" :placeholder="$lang('app.login.password')" show-password :prefix-icon="Lock" />
      </el-form-item>
      <div class="btn-box">
        <el-button type="primary" @click="onLogin">{{ $lang('app.login.ok') }}</el-button>
        <el-button @click="onRegister">{{ $lang('app.login.register') }}</el-button>
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
  created() {
    this.$store.dispatch('security/logout')
  },
  methods: {
    onLogin() {
      this.$store.dispatch('security/authentication', this.form).then(() => {
        if (this.$store.getters['security/isAuthenticated']) {
          const successfulPath = this.$store.getters['security/getSuccessfulPath']
          this.$store.dispatch('security/resetSuccessfulPath')
          this.$router.push(successfulPath)
        }
      })
    },
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
