<template>
  <div class="bid_opening">
    <portalTitle />
    <div class="main">投标人签到后参加开标唱标环节并公示唱标结果！</div>
    <div class="main">
      <el-button type="primary" @click="signIn">签到</el-button>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="(item, index) in tableLabel"
          :key="index"
          :prop="item.value"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <div>签到成功</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import portalTitle from "@/components/title.vue";
export default {
  name: "bid_opening",
  components: {
    portalTitle,
  },
  data() {
    return {
      tableLabel: [
        { label: "投标名称", value: "name" },
        { label: "投标报价", value: "" },
        { label: "投标履约期限", value: "date" },
        { label: "授权委托人名称", value: "" },
        { label: "投标保证金金额", value: "" },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "XXXXXXX招标",
        },
        {
          date: "2016-05-04",
          name: "XXXXXXX招标",
        },
        {
          date: "2016-05-01",
          name: "XXXXXXX招标",
        },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    signIn() {
      this.dialogVisible = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.bid_opening {
  width: 1366px;
  margin: 0 auto;
}
.main {
  margin-top: 100px;
}
</style>
