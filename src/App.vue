<template>
  <el-config-provider :locale="$store.getters['system/getElementLocale']" size="small" :z-index="3000">
    <system-layout v-if="$store.getters['security/isAuthenticated']">
      <template #main>
        <router-view />
      </template>
    </system-layout>
    <no-auth v-else />
  </el-config-provider>
</template>
<script>
import NoAuth from '@/components/NoAuth'
import SystemLayout from '@/components/system-layout'
export default {
  name: 'App',
  components: { NoAuth, SystemLayout },
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
