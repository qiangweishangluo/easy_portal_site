<template>
  <div class="application">
    <portalTitle />
    <div class="main"></div>
    <el-form ref="form" :model="form" label-width="130px" label-position="left">
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目名称"
            ><div class="textLeft">xxxx</div>
          </el-form-item>
          <el-form-item label="项目编号"
            ><div class="textLeft">xxxx</div>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="营业执照扫描件">
            <el-upload
              class="upload-demo"
              action=""
              :on-preview="
                (file) => {
                  return handlePreview(file, 'fileList');
                }
              "
              multiple
              :limit="3"
              :on-exceed="
                (files, fileList) => {
                  return handleExceed(files, fileList, 'fileList');
                }
              "
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="授权委托人身份证扫描件">
            <el-upload
              class="upload-demo"
              action=""
              :on-preview="
                (file) => {
                  return handlePreview(file, 'fileList');
                }
              "
              multiple
              :limit="3"
              :on-exceed="
                (files, fileList) => {
                  return handleExceed(files, fileList, 'fileList');
                }
              "
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item label="招标文书费二维码">
            <img src="@/assets/logo.png" alt="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="投标单位名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="营业执照编号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法定代表人姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="授权委托人姓名"> </el-form-item>
          <el-form-item label="法定代表人身份证扫描件"> </el-form-item>
          <el-form-item label="授权委托书扫描件"> </el-form-item>
          <el-form-item label="付款凭证"> </el-form-item>
        </el-col>
      </el-row>

      <el-button type="primary" @click="onSubmit">报名</el-button>
      <el-dialog title="报名成功" :visible.sync="dialogVisible" width="60%">
        <span class="password">投标密码：XXXXXXXXX</span>
        <span class="content"
          >重要提示！投标人请务必保存其报名后生成的投标密码，该密码为投标及开标签到时确认投标人身份的唯一凭证！投标密码遗失的请按公告中的联系电话与工作人员联系！</span
        >
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确认投标并加密</el-button
          >
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
import portalTitle from "@/components/title.vue";
export default {
  name: "Application",
  components: {
    portalTitle,
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      fileList: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.application {
  width: 1366px;
  margin: 0 auto;
}
.main {
  margin-top: 100px;
}
.password {
  display: block;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
.content {
  display: block;
  width:60%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}
.textLeft {
  text-align: left;
}
.el-form-item {
  margin-right: 30px;
}
</style>
