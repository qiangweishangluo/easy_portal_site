<template>
  <div class="home">
    <portalTitle />
    <carousel />
    <el-tabs class="portal_tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.name" :name="item.value">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="time" label="日期"> </el-table-column>
          <el-table-column prop="name" label="公告"> </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-row>
      <el-button class="portal_button" @click="dialogVisible = true">报名入口</el-button>
      <el-button class="portal_button" @click="$router.push('/bid')">投标入口</el-button>
      <el-button class="portal_button" @click="$router.push('/bid_opening')">开标入口</el-button>
      <el-button class="portal_button" @click="$router.push('/aq')">澄清/二次报价</el-button>
    </el-row>
    <div class="portal_bottom">备案：</div>

    <el-dialog title="请输入项目名称/编号查找" :visible.sync="dialogVisible" width="60%">
      项目名称/编号：
      <el-input v-model="searchData" suffix-icon="el-icon-search" style="width: 200px"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="time" label="日期"> </el-table-column>
        <el-table-column prop="name" label="公告"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="application(scope.row)" type="text" size="small">报名</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import carousel from "@/components/carousel.vue";
import portalTitle from "@/components/title.vue";
import { getAnnouncements } from "@/api/index"
export default {
  name: "HomeView",
  components: {
    carousel,
    portalTitle,
  },
  data() {
    return {
      activeName: "采购公告",
      tabsList: [
        { name: "采购公告", value: "cg" },
        { name: "更正公告", value: 'gz' },
        { name: "中标（成交）公告", value: 'zbgg' },
        { name: "中标（成交）公正公告", value: 'zbgz' },
        { name: "废标公告", value: 'fb' },
      ],
      tableData: [
        {
          time: "2016-05-02",
          name: "XXXXXXX招标",
        },
        {
          time: "2016-05-04",
          name: "XXXXXXX招标",
        },
        {
          time: "2016-05-01",
          name: "XXXXXXX招标",
        },
      ],
      tableData2: [
        {
          time: "2016-05-02",
          name: "XXXXXXX招标",
        },
        {
          time: "2016-05-04",
          name: "XXXXXXX招标",
        },
        {
          time: "2016-05-01",
          name: "XXXXXXX招标",
        },
      ],
      metaTable: {},
      dialogVisible: false,
      searchData: "",
    };
  },
  created() { this.getAnnouncements() },
  methods: {
    handleClick() {
      // 变更列表信息
      switch (this.activeName) {
        case "cg":
          this.tableData = this.metaTable?.purchase
          break;
        case "gz":
          this.tableData = this.metaTable?.amend
          break;
        case "zbgg":
          this.tableData = this.metaTable?.deal
          break;
        case "zbgz":
          this.tableData = this.metaTable?.dealJustice
          break;
        case "fb":
          this.tableData = this.metaTable?.abolish
          break;
      }
    },
    application() {
      this.$router.push("/application");
    },
    search() {
      // 前端模糊查询
      this.tableData2 = this.metaTable?.purchase?.filter((item) => {
        return ~item.name.indexOf(this.searchData) || ~item.time.indexOf(this.searchData)
      })
    },
    getAnnouncements() {
      // 获取公告信息
      getAnnouncements().then((res) => {
        this.metaTable = res.data.announcements
        // this.tableData2 = res.data.announcements?.purchase // 采购公告
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 1366px;
  margin: 0 auto;
}

.portal_tabs {
  margin-bottom: 40px;
}

.portal_button {
  width: 130px;
  margin-bottom: 40px;
}

.portal_bottom {}
</style>
