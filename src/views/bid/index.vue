<template>
  <div>
    <portalTitle />
    <div class="bid">
      <div class="main"></div>
      <el-form ref="form" :model="form" label-width="130px" label-position="left">
        <el-row>
          <el-col :span="12">
            <el-form-item label="投标人名称">
              <el-input v-model="form.bidder"></el-input>
            </el-form-item>
            <el-form-item label="投标履约期限">
              <el-input v-model="form.deadline"></el-input>
            </el-form-item>
            <el-form-item label="投标保障金金额">
              <el-input v-model="form.earnestMoney"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="投标文件">
              <el-upload ref="upload" class="upload-demo" action="/api/upload" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " multiple :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="handleAvatarSuccess" :file-list="fileList" :data="{ identification: password, businessType: 10 }">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="投标报价">
              <el-input v-model="form.quotedPrice"></el-input>
            </el-form-item>
            <el-form-item label="授权委托人名称">
              <el-input v-model="form.consignor"></el-input>
            </el-form-item>
            <el-form-item label="委托人联系方式">
              <el-input v-model="form.consignorphone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-button type="primary" @click="onSubmit">投标</el-button>
        <!-- <el-dialog title="投标成功" :visible.sync="dialogVisible" width="60%">
        <span class="password">投标成功</span>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog> -->
      </el-form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import portalTitle from "@/components/title.vue";
import { postBid, getBid } from "@/api/index";
export default {
  name: "bid",
  components: {
    portalTitle,
  },
  data() {
    return {
      // dialogVisible: false,
      form: {
        identification: "",
        bidder: "",
        deadline: "",
        earnestMoney: "",
        phone: "",
        quotedPrice: "",
        consignor: "",
        consignorphone: "",
      },
      fileList: [],
      imageUrl: [],
      password: "",
      id: ""
    };
  },
  created() {
    const { password } = this.$route.query
    this.password = password
    // 回显投标信息
    this.getBid()
  },
  methods: {
    postBid() {
      // 提交报名或编辑报名
      const temp = this.$refs.upload.uploadFiles[0]
      postBid({
        "identification": this.password,
        id: this.id,
        "detail": {
          ...this.form,
          "files": [
            temp.hasOwnProperty('response') ? temp.response.data : temp
          ]
        }
      }).then((res) => {
        if (res.code == 0) {
          this.$message.success(
            `投标成功`
          );
        }
      })
    },
    getBid() {
      // 获取报名信息
      getBid({
        "identification": this.password,
      }).then((res) => {
        if (res.code == 0) {
          this.form = res.data.bid
          this.fileList = res.data.bid.files
          this.id = res.data.bid.id
        }
      })
    },
    onSubmit() {
      //  todo  按钮置灰
      this.postBid()
      // this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件`
      );
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
  },
};
</script>
<style lang="scss" scoped>
.bid {
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
  width: 60%;
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
