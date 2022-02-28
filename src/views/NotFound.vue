<template>
  <section>
    <span class="item">4</span>
    <span class="item">0</span>
    <span class="item">4</span>
    <div>
      <el-link type="info" :underline="false">页面不存在!</el-link>&nbsp;&nbsp;
      <el-link type="danger" @click="goToBack()">返回</el-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goToBack: function () {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 150px;
  text-align: center;

  span.item {
    display: inline-block;
    font-size: 130px;
    font-weight: bold;
    padding: 0 15px;
    text-shadow: 0 0 15px rgb(0, 0, 0, 0.4);
    color: #fff;
  }
}
</style>
