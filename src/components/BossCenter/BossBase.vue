<template>
  <div class="bossbase-session w">
    <el-main>
      <div class="bossbase-first">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <div class="bb-f-l">
            <h2 class="b-c-name">{{companyData.companyname}}</h2>

        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyData: {
          companyname: "巴里巴巴",
    },
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.bossbase-session {
  background-color: rgb(214, 211, 211);
  width: 860px;
}
/* 公司logo */
.bossbase-first .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: aliceblue;
  float: left;
}
.bossbase-first .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.bossbase-first .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.bossbase-first .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.bb-f-l {
    float: left;
    margin-left: 50px;
}
.bb-f-l h2{
    font-size: 26px;

}
</style>