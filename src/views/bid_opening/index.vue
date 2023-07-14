<template>
  <div>
    <portalTitle />
    <div class="bid_opening">
      <div class="main" v-if="status == 2" style="margin-top: 400px;font-weight: bold;font-size: 24px;">{{
        `${name}项目（项目编号：${code}）${message}、请在该开标时间前30分钟完成签到及解密工作` }}
      </div>
      <template v-else>
        <div class="main" v-if="status == 0">
          <div style="margin-top: 200px;font-weight: bold;font-size: 24px;">{{
            `${name}项目（项目编号：${code}）${message}、请在该开标时间前30分钟完成签到及解密工作`
          }}</div>
          <el-button type="primary" @click="signIn" style="margin-top: 100px;">签到</el-button>
        </div>
        <div class="main" v-if="status == 3">
          <div v-if="tableData.length < 3">
            已流标
          </div>
          <div v-else>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column v-for="(item, index) in tableLabel" :key="index" :prop="item.value" :label="item.label"
                :formatter="formatter">
              </el-table-column>
            </el-table>
            <div class="main" style="font-weight: bold;font-size: 24px;">开标唱标环节到此结束，如需澄清答疑将现场通知，请保持通讯工具畅通</div>
          </div>
          <el-button type="primary" @click="finish" style="margin-top: 100px;">开标结束</el-button>
        </div>
        <div class="main" v-if="status == 1">
          <div class="main" style="margin-top: 200px;font-weight: bold;font-size: 24px;">开标唱标环节到此结束，您未签到</div>
          <el-button type="primary" @click="finish" style="margin-top: 100px;">开标结束</el-button>
        </div>
      </template>
    </div>
    <beian></beian>
  </div>
</template>
<script>
/* eslint-disable */
import portalTitle from "@/components/title.vue";
import { bidCheck, signIn, getBids } from "@/api/index";
import beian from "@/components/beian";
export default {
  name: "bid_opening",
  components: {
    portalTitle,beian
  },
  data() {
    return {
      tableLabel: [
        { label: "项目名称", value: "projectName" },
        { label: "投标报价", value: "quotedPrice" },
        { label: "投标履约期限", value: "deadline" },
        { label: "授权委托人名称", value: "consignor" },
        { label: "投标保证金金额", value: "earnestMoney" },
        { label: "签到方式", value: "status" },
        { label: "解密确认时间", value: "signInTime" },
      ],
      tableData: [],
      password: "",
      message: "",
      status: 0,
      name: 0,
      code: 0
    };
  },
  created() {
    const { password } = this.$route.query
    this.password = password
    this.bidCheck();
  },
  methods: {
    finish() {
      this.$router.push("/");
    },
    bidCheck() {
      bidCheck({ identification: this.password }).then((res) => {
        // 0:可以投标 1开标时间已过 2未到开标时间
        if (res.code == 0) {
          this.status = res.data.status
          // this.status = 1
          this.message = res.data.message
          this.name = res.data.name
          this.code = res.data.code
          if (this.status == 3) {
            // 当开标时间已过，还需要此人签过到，才能继续调用列表接口
            this.getBids()
          }
        }
      })
    },
    signIn() {
      signIn({ identification: this.password }).then((res) => {
        // 签到
        if (res.code == 0) {
          this.$message.success(
            `签到成功`
          );
        }
      })
    },
    getBids() {
      getBids({ identification: this.password }).then((res) => {
        // 获取投标列标(签到阶段)
        if (res.code == 0) {
          this.tableData = res.data.bids
        }
      })
    },
    formatter(row, column) {
      if (column.property == 'status') {
        return row.status == 1 ? '投标密码签到' : '--'
      }
      return row[column.property]
    }
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
