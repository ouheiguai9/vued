<template>
  <el-dropdown>
    <span class="drop-down-link"> <el-avatar shape="square" size="small" :src="avatarUrl" /> &nbsp;{{ username }} </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="User">个人中心</el-dropdown-item>
        <el-dropdown-item :icon="Tools">系统设置 </el-dropdown-item>
        <el-dropdown-item :icon="SwitchButton" divided>安全退出 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { User, Tools, SwitchButton } from '@element-plus/icons-vue'
export default {
  name: 'UserInfo',
  setup() {
    return {
      User,
      Tools,
      SwitchButton,
    }
  },
  data() {
    return {
      username: '测试用户',
      avatarUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    }
  },
}
</script>

<style scoped lang="scss">
.drop-down-link {
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: var(--el-color-primary);
}
</style>