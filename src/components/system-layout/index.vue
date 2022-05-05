<template>
  <section class="layout-container">
    <component :is="`layout-${name}`">
      <template #main>
        <slot name="main"></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </component>
  </section>
</template>

<script>
import LayoutLeft from './LayoutLeft'
import LayoutTop from './LayoutTop'
export default {
  name: 'SystemLayout',
  components: { LayoutLeft, LayoutTop },
  props: {
    name: {
      validator(value) {
        return ['left', 'top'].includes(value)
      },
      default: 'top',
    },
  },
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  --layout-main-bg: var(--el-color-info-light-9);
  --layout-main-padding: 10px;
}
</style>