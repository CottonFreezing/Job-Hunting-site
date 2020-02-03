<template>
  <!-- 个人信息 -->
  <div class="myinfo">
    <p class="p-title">个人资料</p>
    <div class="p-headimg">
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
    </div>
    <div class="p-base">
      <p>账户：{{user}}</p>
      <p>姓名：{{name}}</p>
    </div>
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="已投公司" name="first">已投公司</el-tab-pane>
      <el-tab-pane label="面试邀约" name="second">面试邀约</el-tab-pane>
      <el-tab-pane label="消息中心" name="third">消息中心</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "1234",
      name: "张三",
      imageUrl: '',
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.myinfo {
  width: 800px;
  margin: 10px auto;
}
.p-title {
  font-size: 24px;
  font-weight: 700;
  color: #3d3d3d;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #e0e0e0;
}
.p-base {
  display: inline-block;
  width: 500px;
  margin: 20px;
}
.p-base p {
  margin: 10px;
  font-size: 18px;
}

/* 上传头像部分 */
.p-headimg {
  display: inline-block;
  width: 200px;
  margin: 20px;
}
.p-headimg .avatar-uploader .avatar{
  border: 1px dashed #555454ce;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.p-headimg .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.p-headimg .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.p-headimg .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>