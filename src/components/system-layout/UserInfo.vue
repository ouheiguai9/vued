<template>
  <el-dropdown>
    <span class="user-info">
      <el-avatar :icon="UserFilled" :src="avatarUrl" />
      <span class="txt-username" :title="username">&nbsp;{{ username }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="User">个人中心</el-dropdown-item>
        <el-dropdown-item :icon="Tools">系统设置 </el-dropdown-item>
        <el-dropdown-item :icon="SwitchButton" divided style="color: var(--el-color-danger)">安全退出 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { User, Tools, SwitchButton, UserFilled } from '@element-plus/icons-vue'
export default {
  name: 'UserInfo',
  setup() {
    return {
      User,
      Tools,
      SwitchButton,
      UserFilled,
    }
  },
  data() {
    return {
      username: '测试用户111111',
      avatarUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng1.png',
    }
  },
}
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .el-avatar--default {
    --el-avatar-size: var(--layout-icon-size);
  }

  .txt-username {
    max-width: 70px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>