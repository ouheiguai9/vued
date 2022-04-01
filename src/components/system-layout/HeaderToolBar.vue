<template>
  <div class="header-tool-bar">
    <span class="item">
      <el-icon :size="iconSize"><question-filled /></el-icon>
    </span>
    <span class="item">
      <el-badge :value="0">
        <el-icon :size="iconSize"><bell /></el-icon>
      </el-badge>
    </span>
    <span class="item">
      <user-info />
    </span>
    <span class="item">
      <switch-language :size="iconSize" />
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
  data() {
    return {
      iconSize: 24,
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
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
  }

  .item:hover {
    color: var(--el-color-primary);
    background-color: var(--el-color-info-light-9);
  }
}
</style>