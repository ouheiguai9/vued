<template>
  <el-dropdown size="small" split-button @command="switchLanguage">
    {{ $store.getters['system/getLanguageContext'].desc }}
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in $store.getters['system/getLanguageOptions']" :key="item.value" :command="item.value">
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: 'SwitchLanguage',
  methods: {
    switchLanguage(language) {
      this.$store.commit('system/setLanguage', language)
    },
  },
}
</script>

<style scoped>

</style>