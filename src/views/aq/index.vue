<template>
  <div class="aq">
    <portalTitle />
    <div class="main">需要你方澄清内容：</div>
    <div class="main">
      {{ content }}
    </div>
    <el-form class="main" ref="form" :model="form" label-width="140px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="澄清文件上传：">
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
        </el-col>

        <el-col :span="12">
          <el-form-item label="二次报价：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div style="width: 100%; text-align: center">
        <el-button type="primary" @click="onSubmit">提交澄清</el-button>
      </div>
    </el-form>
    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
      <div>提交成功</div>
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
  name: "aq",
  components: {
    portalTitle,
  },
  data() {
    return {
      fileList: [],
      form: {
        name: "",
      },
      content:
        "本项目评标委员会认为你方招标文件中资格证书主页及副页有效期不一致，现要求你方对此做出澄清，澄清时间为 10时30分前偷期视为放弃澄清资格，特此通知!",
      dialogVisible: false,
    };
  },
  methods: {
    onSubmit() {
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
.aq {
  width: 1366px;
  margin: 0 auto;
}
.main {
  margin-top: 100px;
  text-align: left;
}
</style>
