<template>
  <div class="system-layout-top">
    <header>
      <div />
      <header-tool-bar />
    </header>
    <main>
      <el-scrollbar view-style="padding: var(--layout-main-padding)">
        <slot name="main"></slot>
      </el-scrollbar>
    </main>
  </div>
</template>

<script>
import HeaderToolBar from '@/components/system-layout/HeaderToolBar'
export default {
  name: 'LayoutTop',
  components: { HeaderToolBar },
}
</script>

<style scoped lang="scss">
.system-layout-top {
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: var(--layout-main-bg);

  header {
    display: flex;
    width: 100%;
    height: var(--layout-header-height);
    padding: 0 var(--layout-padding);
    justify-content: space-between;
    align-items: center;
    flex: none;
    background-color: var(--layout-header-bg);
    box-shadow: var(--el-box-shadow-light);
  }

  main {
    width: 100%;
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>