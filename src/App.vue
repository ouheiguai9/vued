<template>
  <el-config-provider :locale="elementLocale" :size="elementSize" :z-index="3000">
    <section :class="['primary-main-theme-section', theme]">
      <system-layout v-if="isAuthenticated" :name="layout">
        <template #main>
          <router-view />
        </template>
      </system-layout>
      <no-auth v-else />
    </section>
  </el-config-provider>
</template>
<script>
import NoAuth from '@/components/NoAuth'
import SystemLayout from '@/components/system-layout'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { NoAuth, SystemLayout },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters({
      elementLocale: 'system/getElementLocale',
      elementSize: 'system/getElementSize',
      theme: 'system/getTheme',
      layout: 'system/getLayout',
      isAuthenticated: 'security/isAuthenticated',
    }),
  },
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
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

body {
  overflow: auto;
}

#app {
  max-width: 1920px;
  min-width: 1280px;
  margin: 0 auto;
  --switch-language-icon-size: 24px;
}
section.primary-main-theme-section {
  width: 100%;
  height: 100%;
}
section.primary-main-theme-section.light {
}
section.primary-main-theme-section.dark {
}
</style>
