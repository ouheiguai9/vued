<template>
  <div class="header-tool-bar">
    <el-icon class="item" title="操作说明">
      <svg class="icon" viewBox="0 0 1024 1024">
        <path d="M479.6416 695.808l52.6336 0 0 57.344-52.6336 0 0-57.344Z" p-id="4106"></path>
        <path
          d="M531.8656 271.1552c-96.1536-5.12-155.0336 38.1952-175.8208 127.7952l-1.1264 4.8128 47.616 14.848 1.2288-5.7344c15.0528-69.3248 54.6816-102.6048 120.4224-100.7616 58.2656 4.5056 89.4976 31.9488 95.4368 84.0704 4.4032 33.3824-19.1488 66.9696-70.144 99.9424-43.3152 30.5152-65.2288 68.096-65.2288 111.7184l0 28.672 43.3152 0 0-26.624c-1.536-33.9968 14.4384-60.6208 48.64-81.408 65.536-36.7616 96.256-80.896 91.3408-131.072C661.1968 318.464 615.5264 275.968 531.8656 271.1552z"
        ></path>
        <path
          d="M512 42.7008C253.2352 42.7008 42.7008 253.2352 42.7008 512S253.2352 981.2992 512 981.2992c258.7648 0 469.2992-210.5344 469.2992-469.2992S770.7648 42.7008 512 42.7008zM512 940.544C275.7632 940.544 83.456 748.2368 83.456 512S275.7632 83.456 512 83.456c236.3392 0 428.544 192.2048 428.544 428.544S748.3392 940.544 512 940.544z"
        ></path>
      </svg>
    </el-icon>
    <el-divider direction="vertical" />
    <el-badge :value="0">
      <el-icon class="item" title="通知消息">
        <svg class="icon" viewBox="0 0 1024 1024">
          <path
            d="M892.1 805L781.9 621.3V458c0-71.8-28.1-139.5-79.3-190.6-36.2-36.2-80.7-60.8-129-72.2v-22.7c0-34-27.6-61.6-61.6-61.6s-61.6 27.6-61.6 61.6v22.7c-48.4 11.3-92.9 36-129 72.2-51.1 51.1-79.3 118.8-79.3 190.6v163.3L131.9 805h257.7c7.6 60.8 59.5 108 122.3 108s114.8-47.2 122.3-108h257.9zM496.4 172.6c0-8.6 7-15.6 15.6-15.6s15.6 7 15.6 15.6v16c-5.2-0.3-10.4-0.5-15.6-0.5s-10.4 0.2-15.6 0.5v-16zM288.1 634.1V458c0-123.4 100.4-223.9 223.9-223.9 123.4 0 223.9 100.4 223.9 223.9v176.1L810.8 759H213.2l74.9-124.9zM512 867c-37.4 0-68.6-26.7-75.8-62h151.5c-7.1 35.3-38.3 62-75.7 62z"
            p-id="4939"
          ></path>
        </svg>
      </el-icon>
    </el-badge>
    <el-divider direction="vertical" />
    <user-info />
    <el-divider direction="vertical" />
    <switch-language class="item" />
  </div>
</template>

<script>
import SwitchLanguage from '@/components/SwitchLanguage'
import UserInfo from '@/components/system-layout/UserInfo'
export default {
  name: 'HeaderToolBar',
  components: { UserInfo, SwitchLanguage },
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