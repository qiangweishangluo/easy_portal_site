<template>
  <div>
    <portalTitle />
    <div class="aq">
      <div class="main">需要你方澄清内容：</div>
      <div class="main">
        {{ content }}
      </div>
      <el-form class="main" ref="form" :model="form" label-width="140px">
        <el-row>
          <el-col v-if="check.isNeedFile" :span="12">
            <el-form-item label="澄清文件上传：">
              <el-upload accept="image/*,.pdf" class="upload-demo" action="/api/upload" ref="upload" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :file-list="fileList" :data="{ ...extra, businessType: 11 }">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload>
            </el-form-item>
          </el-col>

          <el-col v-if="check.isQuotedPrice" :span="12">
            <el-form-item label="二次报价：">
              <el-input v-model="form.quotedPrice"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="width: 100%; text-align: center">
          <el-button type="primary" @click="onSubmit" :disabled="lock">提交澄清</el-button>
        </div>
      </el-form>
    </div>
    <beian></beian>
  </div>
</template>
<script>

/* eslint-disable */
import portalTitle from "@/components/title.vue";
import { postClarification, clarification } from "@/api/index";
import beian from "@/components/beian";
export default {
  name: "aq",
  components: {
    portalTitle, beian
  },
  data() {
    return {
      fileList: [],
      form: {
        quotedPrice: "",
      },
      content:
        "本项目评标委员会认为你方招标文件中资格证书主页及副页有效期不一致，现要求你方对此做出澄清，澄清时间为 10时30分前偷期视为放弃澄清资格，特此通知!",
      extra: {},
      password: "",
      check: {},
      lock: false
    };
  },
  created() {
    const { password, data } = this.$route.query
    this.password = password
    this.check = data
    this.content = data.advise
    this.form.quotedPrice = data.quotedPrice
    this.fileList = data.files
    this.extra.identification = password
    this.clarification()
  },
  methods: {
    clarification() {
      clarification({ identification: this.password }).then((res) => {
        if (res.code == 0) {
          this.check = res.data
          this.content = res.data.advise
          this.fileList = res.data.files
          this.form.quotedPrice = res.data.quotedPrice
        } else {
          this.$message.warning(res.message);
        }
      })
    },
    onSubmit() {
      this.postClarification()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制上传1个文件，请重新上传`
      );
    },
    postClarification() {
      const temp = this.$refs.upload.uploadFiles[0]
      postClarification(
        {
          ...this.check,
          "detail": {
            ...this.check,
            "quotedPrice": this.form.quotedPrice,
            "files": [
              temp.hasOwnProperty('response') ? temp.response.data : temp
            ],
          },
        },
      ).then((res) => {
        if (res.code == 0) {
          this.lock = true
          this.$message.success('提交成功')
        }
      });
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
