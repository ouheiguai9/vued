<template>
  <div class="header-tool-bar">
    <el-icon class="item"><question-filled /></el-icon>
    <el-divider direction="vertical" />
    <el-badge :value="0">
      <el-icon class="item"><bell /></el-icon>
    </el-badge>
    <el-divider direction="vertical" />
    <user-info />
    <el-divider direction="vertical" />
    <switch-language class="item" />
  </div>
</template>

<script>
import { Bell, QuestionFilled } from '@element-plus/icons-vue'
import SwitchLanguage from '@/components/SwitchLanguage'
import UserInfo from '@/components/system-layout/UserInfo'
export default {
  name: 'HeaderToolBar',
  components: { UserInfo, Bell, SwitchLanguage, QuestionFilled },
  setup() {
    return {
      Bell,
      QuestionFilled,
    }
  },
}
</script>

<style scoped lang="scss">
.header-tool-bar {
  display: flex;
  height: 100%;
  align-items: center;

  .item {
    cursor: pointer;
    font-size: var(--layout-icon-size);
    --color: var(--layout-icon-color);
  }

  .item:hover {
    --color: var(--layout-icon-hover-color);
  }
}
</style>