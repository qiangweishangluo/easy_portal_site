<template>
  <div class="title">
    <div class="title_logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    {{ title }}
  </div>
</template>
<script>
export default {
  name: "portal_title",
  components: {},
  data() {
    return {
      title: "黑龙江辰泰信德项目管理有限公司招标投标一体化管理平台",
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 32px;
  line-height: 32px;
}
.title_logo {
  display: inline-block;
  vertical-align: middle;
  img {
    width: 80px;
  }
}
</style>
