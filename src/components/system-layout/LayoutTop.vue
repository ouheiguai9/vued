<template>
  <div class="system-layout-top">
    <header></header>
    <main>
      <el-scrollbar>
        <slot name="main"></slot>
      </el-scrollbar>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutTop',
}
</script>

<style scoped lang="scss">
.system-layout-top {
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  background-color: var(--el-color-info-light-9);

  header {
    height: 48px;
    padding: 0 16px;
    flex-shrink: 0;
    background-color: #fff;
    box-shadow: var(--el-box-shadow-light);
  }

  main {
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>