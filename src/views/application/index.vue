<template>
  <div>
    <portalTitle />
    <div class="application">
      <div class="main"></div>
      <el-form ref="form" :model="form" label-width="200px" label-position="left">
        <el-row>
          <el-col :span="12">
            <el-form-item label="项目名称">
              <div class="textLeft"><a :href="detail.announcementDocument
                .url">{{ name }}</a></div>
            </el-form-item>
            <el-form-item label="项目编号">
              <div class="textLeft">{{ code }}</div>
            </el-form-item>
            <el-form-item prop="applicantName" label="联系人" :rules="[
              { required: true, message: '请输入联系人', trigger: 'blur' },
            ]">
              <el-input v-model="form.applicantName"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone" :rules="[
              { required: true, message: '请输入联系电话', trigger: 'blur' },
            ]">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="联系地址" prop="address" :rules="[
              { required: true, message: '请输入联系地址', trigger: 'blur' },
            ]">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="营业执照扫描件">
              <el-upload class="upload-demo" accept="image/*,.pdf" action="/api/upload" ref="upload" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="(res, file) => {
    return handleAvatarSuccess(res, file, 'imageUrl');
  }" :on-remove="(file, fileList) => {
  return handleRemove(file, fileList, 'imageUrl');
}" :file-list="fileList" :data="{ ...extra, businessType: 4 }">
                <template v-if="imageUrl">
                  <img v-if="imageUrl.includes('png') || imageUrl.includes('jpg')" :src="imageUrl" class="avatar">
                </template>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="授权委托人身份证扫描件">
              <el-upload class="upload-demo" accept="image/*,.pdf" action="/api/upload" ref="upload2" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="(res, file) => {
    return handleAvatarSuccess(res, file, 'imageUrl2');
  }" :on-remove="(file, fileList) => {
  return handleRemove(file, fileList, 'imageUrl2');
}" :file-list="fileList2" :data="{ ...extra, businessType: 5 }">
                <template v-if="imageUrl2">
                  <img v-if="imageUrl2.includes('png') || imageUrl2.includes('jpg')" :src="imageUrl2" class="avatar">
                </template>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="招标文书费二维码">
              <img style="width: 300px;" src="/api/payQrCode" alt="" />
            </el-form-item>
            <el-form-item label="授权委托书模板下载">
              <!-- <img style="width: 300px;" src="/api/payQrCode" alt="" /> -->
              <a href="/api/applyTemplate">授权委托书模板</a>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="投标单位名称" prop="company" :rules="[
              { required: true, message: '请输入投标单位名称', trigger: 'blur' },
            ]">
              <el-input v-model="form.company"></el-input>
            </el-form-item>
            <el-form-item label="营业执照编号" prop="businessLicense" :rules="[
              { required: true, message: '请输入营业执照编号', trigger: 'blur' },
            ]">
              <el-input v-model="form.businessLicense"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人姓名" prop="corporate" :rules="[
              { required: true, message: '请输入法定代表人姓名', trigger: 'blur' },
            ]">
              <el-input v-model="form.corporate"></el-input>
            </el-form-item>
            <el-form-item label="授权委托人姓名" prop="consignor" :rules="[
              { required: true, message: '请输入授权委托人姓名', trigger: 'blur' },
            ]">
              <el-input v-model="form.consignor"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证扫描件">
              <el-upload class="upload-demo" accept="image/*,.pdf" action="/api/upload" ref="upload3" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="(res, file) => {
    return handleAvatarSuccess(res, file, 'imageUrl3');
  }" :on-remove="(file, fileList) => {
  return handleRemove(file, fileList, 'imageUrl3');
}" :file-list="fileList3" :data="{ ...extra, businessType: 6 }">
                <template v-if="imageUrl3">
                  <img v-if="imageUrl3.includes('png') || imageUrl3.includes('jpg')" :src="imageUrl3" class="avatar">
                </template>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload> </el-form-item>
            <el-form-item label="授权委托书扫描件">
              <el-upload class="upload-demo" accept="image/*,.pdf" action="/api/upload" ref="upload4" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="(res, file) => {
    return handleAvatarSuccess(res, file, 'imageUrl4');
  }" :on-remove="(file, fileList) => {
  return handleRemove(file, fileList, 'imageUrl4');
}" :file-list="fileList4" :data="{ ...extra, businessType: 7 }">
                <template v-if="imageUrl4">
                  <img v-if="imageUrl4.includes('png') || imageUrl4.includes('jpg')" :src="imageUrl4" class="avatar">
                </template>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload></el-form-item>
            <el-form-item label="付款凭证">
              <el-upload class="upload-demo" accept="image/*,.pdf" action="/api/upload" ref="upload5" :on-preview="(file) => {
                return handlePreview(file, 'fileList');
              }
                " :limit="1" :on-exceed="(files, fileList) => {
    return handleExceed(files, fileList, 'fileList');
  }
    " :on-success="(res, file) => {
    return handleAvatarSuccess(res, file, 'imageUrl5');
  }" :on-remove="(file, fileList) => {
  return handleRemove(file, fileList, 'imageUrl5');
}" :file-list="fileList5" :data="{ ...extra, businessType: 8 }">
                <template v-if="imageUrl5">
                  <img v-if="imageUrl5.includes('png') || imageUrl5.includes('jpg')" :src="imageUrl5" class="avatar">
                </template>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png/pdf文件，且不超过10MB
                </div>
              </el-upload> </el-form-item>
          </el-col>
        </el-row>

        <el-button type="primary" @click="onSubmit" :disabled="lock">报名</el-button>
        <el-dialog title="报名提示" :visible.sync="dialogVisible" width="60%">
          <span class="password">投标密码：{{ password }}</span>
          <span class="password">请确认上传完毕且上传文件均处于<i class="el-icon-upload-success el-icon-circle-check"
              style="color:#67C23A"></i>状态</span>
          <span class="content">重要提示！投标人请务必保存其报名后生成的投标密码，该密码为投标及开标签到时确认投标人身份的唯一凭证！投标密码遗失的请按公告中的联系电话与工作人员联系！</span>
          <span class="content">招标文件：<a :href="detail.biddingDocument
            .url">{{ detail.biddingDocument.name }}</a></span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="application">确认报名并递交材料</el-button>
          </span>
        </el-dialog>
      </el-form>
    </div>
    <beian></beian>
  </div>
</template>
<script>
/* eslint-disable */
import beian from "@/components/beian";
import { getIdentification, postApplication } from '@/api/index'
import portalTitle from "@/components/title.vue";
export default {
  name: "Application",
  components: {
    portalTitle, beian
  },
  data() {
    return {
      name: "",
      code: "",
      detail: "",
      dialogVisible: false,
      form: {
        code: "",
        applicantName: "",
        phone: "",
        address: "",
        company: "",
        businessLicense: "",
        corporate: "",
        consignor: "",
      },
      fileList: [],
      fileList2: [],
      fileList3: [],
      fileList4: [],
      fileList5: [],
      imageUrl: '',
      imageUrl2: '',
      imageUrl3: '',
      imageUrl4: '',
      imageUrl5: '',
      password: '',
      extra: {},
      twoImg: "",
      lock: false
    };
  },
  created() {
    const { name, code, detail } = this.$route.query;
    this.name = name
    this.code = code
    this.detail = detail
    // 获取密码
    this.getIdentification()
  },
  methods: {
    getIdentification() {
      // 获取密码
      return getIdentification().then((res) => {
        if (res.code == 0) {
          this.password = res.data.identification
          this.extra = { identification: this.password }
        }
      })
    },
    onSubmit2() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = true;
        } else {
          return false;
        }
      });
    },
    onSubmit() {
      this.$alert(`请确认上传完毕且上传文件均处于<i class="el-icon-upload-success el-icon-circle-check"
              style="color:#67C23A"></i>状态`, {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        dangerouslyUseHTMLString: true,
      }).then(() => {
        this.onSubmit2()
      }).catch(action => {
      });
    },
    postApplication() {

      if (this.$refs.upload.uploadFiles[0] == undefined ||
        this.$refs.upload2.uploadFiles[0] == undefined ||
        this.$refs.upload3.uploadFiles[0] == undefined ||
        this.$refs.upload4.uploadFiles[0] == undefined ||
        this.$refs.upload5.uploadFiles[0] == undefined
      ) {
        this.$message.warning('有文件未提交，请核对！')
        return
      }
      postApplication({
        "projectCode": this.code,
        "identification": this.password,
        "detail": {
          ...this.form,
          "businessLicenses": [
            this.$refs.upload.uploadFiles[0].response.data
          ],
          "consignors": [
            this.$refs.upload2.uploadFiles[0].response.data
          ],
          "corporates": [
            this.$refs.upload3.uploadFiles[0].response.data
          ],
          "authorizations": [
            this.$refs.upload4.uploadFiles[0].response.data
          ],
          "evidencePayments": [
            this.$refs.upload5.uploadFiles[0].response.data
          ]
        }
      }).then((res) => {
        if (res.code == 0) {
          this.lock = true
          this.$message.success(
            `报名成功！`
          );
        }
      })
    },
    application() {
      // 投标上传表单
      this.postApplication()
      this.dialogVisible = false;
    },
    // onsuccess(response, file, fileList, type) {
    // console.log(response, file, fileList);
    // this[type] = [response.data]
    // },
    handleAvatarSuccess(res, file, type) {
      this[type] = file.response.data.url;
    },
    handleRemove(file, fileList, type) {
      this[type] = '';
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制上传1个文件，请重新上传`
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
