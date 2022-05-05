<template>
  <div class="system-layout-left">
    <aside :class="{ 'aside-fold': !asideIsExpand }">
      <div class="aside-logo"></div>
      <div class="aside-menu-container"></div>
      <div class="aside-tool">
        <el-icon v-if="asideIsExpand" class="icon-btn" @click="onFoldAside"><fold /></el-icon>
        <el-icon v-else class="icon-btn" @click="onExpandAside"><expand /></el-icon>
      </div>
    </aside>
    <main>
      <header>
        <div />
        <header-tool-bar />
      </header>
      <el-scrollbar view-style="padding: var(--layout-main-padding)">
        <slot name="main"></slot>
      </el-scrollbar>
    </main>
  </div>
</template>

<script>
import HeaderToolBar from '@/components/system-layout/HeaderToolBar'
import { Fold, Expand } from '@element-plus/icons-vue'
export default {
  name: 'LayoutLeft',
  components: { Fold, Expand, HeaderToolBar },
  data() {
    return {
      asideIsExpand: true,
    }
  },
  methods: {
    onFoldAside() {
      this.asideIsExpand = false
    },
    onExpandAside() {
      this.asideIsExpand = true
    },
  },
}
</script>

<style scoped lang="scss">
.system-layout-left {
  display: flex;
  position: relative;
  height: 100%;
  background-color: var(--layout-main-bg);

  aside {
    display: flex;
    width: 220px;
    flex-direction: column;
    flex: none;
    background-color: #fff;
    box-shadow: var(--el-box-shadow-light);
    z-index: 1000;

    .aside-logo,
    .aside-tool {
      height: 48px;
      padding: 0 16px;
      flex: none;
    }

    .aside-menu-container {
      flex: auto;
    }

    .aside-tool {
      display: flex;
      align-items: center;
      border-top: var(--el-border);

      .icon-btn {
        cursor: pointer;
        font-size: 20px;
        --color: var(--el-text-color-primary);
      }

      .icon-btn:hover {
        --color: var(--el-color-primary);
      }
    }
  }

  .aside-fold {
    width: 54px;
  }

  main {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: auto;

    header {
      display: flex;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      justify-content: space-between;
      align-items: center;
      flex: none;
      background-color: #fff;
      box-shadow: var(--el-box-shadow-light);
    }
  }
}
</style>