<template>
  <el-config-provider :locale="elementPlusLocale" size="small">
    <router-view />
  </el-config-provider>
</template>
<script>
import i18n from './i18n'
export default {
  name: 'App',
  data() {
    return {
      language: 'zhCn',
    }
  },
  computed: {
    elementPlusLocale() {
      return i18n[this.language].element
    },
  },
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
