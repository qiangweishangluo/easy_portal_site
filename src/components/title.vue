<template>
  <div class="title">
    <div class="title_bottom"></div>
    <div style="padding-top: 66px;">
      <div class="title_logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="texiao">
        {{ title }}
      </div>
    </div>
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
  width: 100%;
  background: url(@/assets/banner.jpg);
  height: 200px;
  background-repeat: round;
  background-size: 100%;
  background-color: #ead19b;
}

.texiao {
  display: inline-block;
  font-size: 32px;
  line-height: 32px;
  // padding: 60px 30px 30px;
  // color: rgb(214, 49, 49);
  font-weight: bolder;
  font-family: 'BebasNeueRegular', Arial, sans-serif;
  text-shadow: 10px 10px 2px rgba(0, 0, 0, 0.2);

  // -webkit-text-stroke: 10px rgba(255, 255, 255, 0.6);

  // background-color: #fff;
  // background-repeat: no-repeat;
  // background-image: url(@/assets/logo.png), url(@/assets/logo.png);
  background-position: 50% 50%;
  background-size: 100%;

  -webkit-background-clip: text;
  /* let's assume that one day it's supported */
  -moz-background-clip: text;
  background-clip: text;

  
  transition: all 0.5s linear;

  /* for now, let's just add some niceness for Firefox */
  -moz-border-radius: 30px;
  -moz-box-shadow: 0px 0px 1px 8px rgba(67, 201, 117, 0.2);
}

.title_bottom {
  position: absolute;
  top: 205px;
  left: 0;
  width: 100%;
  height: 4px;
  // background: red;
}


.title_logo {
  display: inline-block;
  vertical-align: middle;

  img {
    width: 80px;
  }
}
</style>
