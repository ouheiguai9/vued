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
