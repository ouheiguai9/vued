<template>
  <component :is="`layout-${name}`">
    <template #main>
      <slot name="main"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </component>
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

<style scoped>

</style>