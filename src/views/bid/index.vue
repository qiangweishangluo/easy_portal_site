<template>
  <div class="bid">
    <portalTitle />
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
            <el-upload
              class="upload-demo"
              action="/api/upload"
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
              :on-success="handleAvatarSuccess"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
            <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
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
            <el-input v-model="form.consignorphonbe"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-button type="primary" @click="onSubmit">报名</el-button>
      <el-dialog title="投标成功" :visible.sync="dialogVisible" width="60%">
        <span class="password">投标成功</span>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
import portalTitle from "@/components/title.vue";
export default {
  name: "bid",
  components: {
    portalTitle,
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        identification: "11111",
        bidder: "投标人名称",
        deadline: "投标履行期限",
        earnestMoney: 1.4,
        phone: "1212121",
        quotedPrice: 1.3,
        consignor: "委托人",
        consignorphonbe: "委托人联系方式",
        images: [
          {
            id: 1,
            link: "wwwwww",
          },
        ],
      },
      fileList: [],
      imageUrl: [],
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
