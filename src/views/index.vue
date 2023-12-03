<template>
  <div>
    <portalTitle />
    <div class="home">
      <carousel />
      <el-tabs class="portal_tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.name" :name="item.value">
          <el-table :data="tableData ? tableData.slice((page - 1) * 10, (page - 1) * 10 + 10) : []" style="width: 100%"
            :key="activeName">
            <el-table-column v-for="(item2, index) in columns" :key="index" :prop="item.key" :label="item.value==='cg'?item2.title:item2.title2">
              <template slot-scope="scope">
                <div v-if="item2.key == 'name' && scope.row.detail.announcementDocument">
                  <a href="#"
                    @click=" source = scope.row.detail.announcementDocument.url; nowRow = scope.row; dialogVisible2 = true;">
                    {{ scope.row.name }}</a>
                </div>
                <div v-else>
                  {{ scope.row[item2.key] }}
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next" :total="tableData.length || 1" @current-change="changePage">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
      <el-row>
        <el-button type="primary" class="portal_button" @click="dialogVisible = true">报名入口</el-button>
        <el-button type="primary" class="portal_button" @click="open('bid')">投标入口</el-button>
        <el-button type="primary" class="portal_button" @click="open('bid_opening')">开标入口</el-button>
        <el-button type="primary" class="portal_button" @click="open('aq')">澄清/二次报价</el-button>
      </el-row>
      <div class="portal_bottom">
        <beian></beian>
      </div>

      <el-dialog title="请输入项目名称/编号查找" :visible.sync="dialogVisible" width="60%">
        项目名称/编号：
        <el-input v-model="searchData" suffix-icon="el-icon-search" style="width: 200px"></el-input>
        <el-button type="primary" @click="search">查询</el-button>
        <el-table :data="tableData2 ? tableData2.slice((page - 1) * 10, (page - 1) * 10 + 10) : []" style="width: 100%">
          <el-table-column v-for="(item, index) in columns" :key="index" :prop="item.key" :label="item.title">
            <template slot-scope="scope">
              <div v-if="item.key == 'name' && scope.row.detail.announcementDocument">
                <a href="#"
                  @click=" source = scope.row.detail.announcementDocument.url; nowRow = scope.row; dialogVisible2 = true;">
                  {{ scope.row.name }}</a>
              </div>
              <div v-else>
                {{ scope.row[item.key] }}
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="application(scope.row)" type="text" size="small">报名</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="tableData2.length || 1" @current-change="changePage">
        </el-pagination>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="公告预览" :visible.sync="dialogVisible2" width="60%">
        <div v-loading="loading">
          <vue-pdf-embed :source="source" />
        </div>
        <span slot="footer" class="dialog-footer" v-if="activeName == 'cg'" @rendered="handleDocumentRender">
          <el-button type="primary" @click="application(nowRow)">报名</el-button>
        </span>
      </el-dialog>
      <password v-model="passwordData" @link="link"> </password>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
import carousel from "@/components/carousel.vue";
import portalTitle from "@/components/title.vue";
import password from "@/components/password";
import beian from "@/components/beian";
import { getAnnouncements, checkEnable } from "@/api/index"
export default {
  name: "HomeView",
  components: {
    carousel,
    portalTitle,
    password, VuePdfEmbed, beian
  },
  data() {
    return {
      activeName: "cg",
      tabsList: [
        { name: "采购公告", value: "cg" },
        { name: "更正公告", value: 'gz' },
        { name: "中标（成交）公告", value: 'zbgg' },
        { name: "中标（成交）更正公告", value: 'zbgz' },
        { name: "废标公告", value: 'fb' },
      ],
      tableData: [
      ],
      tableData2: [
      ],
      columns: [
        {
          title: '名称',
          title2: '名称',
          key: 'name'
        },
        {
          title: '编号',
          title2: '编号',
          key: 'code'
        },
        {
          title: '开标时间',
          title2: '公示日期',
          key: 'time'
        },
        {
          title: '报名开始时间',
          title2: '公示开始日期',
          key: 'startTime'
        },
        {
          title: '报名结束时间',
          title2: '公示结束日期',
          key: 'endTime'
        },
      ],
      passwordData: { dialogVisible: false, count: null, type: "" },
      metaTable: {},
      dialogVisible: false,
      dialogVisible2: false,
      searchData: "",
      page: 1,
      source: "",
      nowRow: {},
      loading: true,
    };
  },
  created() { this.getAnnouncements() },
  methods: {
    handleDocumentRender() {
      this.loading = false
    },
    changePage(page) {
      this.page = page
    },
    handleClick() {
      // 变更列表信息
      let temp = {};
      switch (this.activeName) {
        case "cg":
          temp = this.metaTable?.purchase || []
          break;
        case "gz":
          temp = this.metaTable?.amend || []
          break;
        case "zbgg":
          temp = this.metaTable?.deal || []
          break;
        case "zbgz":
          temp = this.metaTable?.dealJustice || []
          break;
        case "fb":
          temp = this.metaTable?.abolish || []
          break;
      }
      this.tableData = temp
      this.page = 1
    },
    application(data) {
      // 添加校验
      checkEnable({ code: data.code }).then((res) => {
        if (res.code == 0) {
          this.$router.push({ path: "/application", query: data });
        }
        else {
          this.$message.error(
            res.message
          );
        }
      })
    },
    open(data) {
      // 打开校验密码组件、type处理分类信息
      this.passwordData.type = data;
      this.passwordData.dialogVisible = true;
    },
    link(data = {}) {
      // 校验密码是否通过，再进行跳转
      this.$router.push({ path: `/${this.passwordData.type}`, query: { password: this.passwordData.count, data } });
    },
    search() {
      // 前端模糊查询
      this.tableData2 = this.metaTable?.purchase?.filter((item) => {
        return ~item.name.indexOf(this.searchData) || ~item.code.indexOf(this.searchData)
      })
    },
    getAnnouncements() {
      // 获取公告信息
      getAnnouncements().then((res) => {
        this.metaTable = res.data.announcements;
        this.metaTable?.purchase?.reverse()
        this.metaTable?.amend?.reverse()
        this.metaTable?.deal?.reverse()
        this.metaTable?.dealJustice?.reverse()
        this.metaTable?.abolish?.reverse()
        this.tableData = this.metaTable?.purchase
        this.tableData2 = this.metaTable?.purchase  // 采购公告
      })
    },
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

::v-deep .el-loading-mask {
  background-color: transparent;
}
</style>
