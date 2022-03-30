<template>
  <el-config-provider :locale="$store.getters['system/getElementLocale']" size="small">
    <router-view />
  </el-config-provider>
</template>
<script>
export default {
  name: 'App',
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
