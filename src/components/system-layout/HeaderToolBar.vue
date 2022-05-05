<template>
  <div class="header-tool-bar">
    <span class="item">
      <el-icon><question-filled /></el-icon>
    </span>
    <el-divider direction="vertical" />
    <span class="item">
      <el-badge :value="0">
        <el-icon><bell /></el-icon>
      </el-badge>
    </span>
    <el-divider direction="vertical" />
    <span class="item">
      <user-info />
    </span>
    <el-divider direction="vertical" />
    <span class="item">
      <switch-language />
    </span>
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
  --icon-size: 20px;
  display: flex;
  height: 100%;
  align-items: center;

  .item {
    cursor: pointer;
    font-size: var(--icon-size);
    --color: var(--el-text-color-primary);
  }

  .item:hover {
    --color: var(--el-color-primary);
  }
}
</style>