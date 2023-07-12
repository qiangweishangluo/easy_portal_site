a
<template>
  <div>
    <el-dialog :title="`输入密码进行${content}`" :visible.sync="password.dialogVisible" width="50%">
      <span></span>
      <el-input v-model="password.count"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
/* eslint-disable */
import { checkPassword, clarification } from "@/api/index";
export default {
  name: "checkPassword",
  model: {
    prop: "passwordData",
    event: "change",
  },
  props: { passwordData: { type: Object, default: () => { } } },
  components: {},
  data() {
    return {
      password: this.passwordData,
      // content: "报名",
    };
  },
  computed: {
    content() {
      switch (this.password.type) {
        case "bid":
          return "投标";
        case "bid_opening":
          return "开标";
        case "aq":
          return "二次澄清/报价";
      }
      return "";
    },
  },
  methods: {
    checkPassword() {
      checkPassword({ identification: this.password.count }).then((res) => {
        if (res.code == 0) {
          this.password.dialogVisible = false;
          this.$emit("link");
        } else {
          this.$message.warning(res.message);
        }
      })
    },
    clarification() {
      clarification({ identification: this.password.count }).then((res) => {
        if (res.code == 0) {
          this.password.dialogVisible = false;
          this.$emit("link", res.data);
        } else {
          this.$message.warning(res.message);
        }
      })
    },
    onSubmit() {
      if (this.password.count == null) {
        this.$message.error("请输入密码");
        return
      }
      if (this.password.type == 'aq') {
        // 澄清答疑需要另外的接口，判断是否需要答疑
        this.clarification()
      }
      else {
        this.checkPassword()
      }
    },
    handleClose() {
      this.password.dialogVisible = false;
      this.$emit("change", this.password);
    },
  },
};
</script>
<style lang="scss" scoped></style>
