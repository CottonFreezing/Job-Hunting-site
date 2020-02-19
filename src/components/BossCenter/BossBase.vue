<template>
  <div class="bossbase-session w">
    <el-main>
      <div class="bossbase-first clearfix">
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

        <div class="bb-f-l" v-show="!dialog1">
          <p class="bb-f-l-title">
            <span class="b-c-name">{{companyData.company}}</span>
            <i class="el-icon-edit-outline bb-edit" @click="dialog1 = true"></i>
          </p>

          <p>
            <span>地 点：</span>
            <span>{{companyData.place}}</span>
          </p>
          <p>
            <span>领 域：</span>
            <span>{{companyData.kind}}</span>
          </p>
          <p>
            <span>融 资：</span>
            <span>{{companyData.stage}}</span>
          </p>
          <p>
            <span>规 模：</span>
            <span>{{companyData.scale}}</span>
          </p>
          <p>
            <span>公司主页：</span>
            <span>
              <a href="companyData.url">{{companyData.url}}</a>
            </span>
          </p>
        </div>
        <!-- 修改公司基本信息 -->
        <div direction="ltr" class="bb-f-l" :before-close="handleClose" v-show="dialog1">
          <div class="demo-drawer__content">
            <el-form :model="companyData">
              <el-form-item label="公司全称" label-width="90px">
                <el-input v-model="companyData.company" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="公司地址" label-width="90px">
                <el-input v-model="companyData.place" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="公司领域" label-width="90px">
                <el-input v-model="companyData.kind" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="融 资" label-width="90px">
                <el-select v-model="companyData.stage" placeholder="请选择融资">
                  <el-option label="未融资" value="未融资"></el-option>
                  <el-option label="天使轮" value="天使轮"></el-option>
                  <el-option label="A轮" value="A轮"></el-option>
                  <el-option label="B轮" value="B轮"></el-option>
                  <el-option label="C轮" value="C轮"></el-option>
                  <el-option label="D轮及以上" value="D轮及以上"></el-option>
                  <el-option label="已上市" value="已上市"></el-option>
                  <el-option label="不需要融资" value="不需要融资"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="规 模" label-width="90px">
                <el-select v-model="companyData.scale" placeholder="请选择融资">
                  <el-option label="0-20人" value="0-20人"></el-option>
                  <el-option label="20-99人" value="20-99人"></el-option>
                  <el-option label="100-499人" value="100-499人"></el-option>
                  <el-option label="500-999人" value="500-999人"></el-option>
                  <el-option label="1000-9999人" value="1000-9999人"></el-option>
                  <el-option label="10000人以上" value="1000人以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="公司主页" label-width="90px">
                <el-input v-model="companyData.url" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div class="demo-drawer__footer">
              <el-button @click="cancelForm(dialog1,loading)">取 消</el-button>
              <el-button
                type="primary"
                @click="$refs.drawer.closeDrawer()"
                :loading="loading"
              >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- 公司简介 -->
      <div class="bossbase-next">
        <p>
          <span class="h2-title">公 司 简 介</span>
          <i class="el-icon-edit-outline bb-edit" @click="dialog2 = true"></i>
        </p>
        <p v-show="!dialog2">&nbsp;&nbsp;&nbsp;{{companyData.comintroduce}}</p>
        <!-- 公司简介修改 -->
        <div direction="ltr" v-show="dialog2">
          <div class="demo-drawer__content">
            <el-form :model="companyData">
                <el-input type="textarea" v-model="companyData.comintroduce" autocomplete="off"></el-input>
            </el-form>
            <div class="demo-drawer__footer">
              <el-button @click="cancelForm(dialog2,loading)">取 消</el-button>
              <el-button
                type="primary"
                @click="$refs.drawer.closeDrawer()"
                :loading="loading"
              >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
          </div>
        </div>
      </div>
      
      
      <el-divider></el-divider>
        <!-- 公司地址 -->
      <div class="bossbase-next">
        <p>
          <span class="h2-title">公 司 地 址</span>
          <i class="el-icon-edit-outline bb-edit" @click="dialog3 = true"></i>
        </p>
        <p>&nbsp;{{companyData.address}}</p>
      </div>
      <el-divider></el-divider>
        <!-- 正在招聘 -->
      <div class="bossbase-next">
        <p>
          <span class="h2-title">正 在 招 聘 职 位</span>
        </p>
        <div v-for="b in jobBox" :key="b.id">
          <div class="job-opening clearfix">
            <div class="j-one">
              <p class="j-f j-jobname">
                <span>{{b.jobname}}</span>
                <span class="j-hr">{{b.department}}</span>
              </p>
              <p class="j-s">
                <span class="j-salary">{{b.salary}}</span>
                <span></span>
                <span>{{b.place}}</span>
                <span>|</span>
                <span>{{b.experience}}</span>
                <span>|</span>
                <span>{{b.academic}}</span>
              </p>
            </div>
            <div class="j-three">
              <p class="j-f">
                <span class="j-hr">{{b.hr}}</span>
              </p>
              <p class="j-s">
                <span class="j-time">发布于：{{b.time}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,

      loading: false,
      timer: null,
      companyData:{},
      jobBox:[],
      imageUrl: ""
    };
  },
  created(){
    // let id = this.$router.query.id
    this.$axios.get('./static/data/company.json')
    .then( res => {
      this.companyData = res.data.message[0]
    })
    .catch( err => {
      console.log(err)
    })

    this.$axios.get('./static/data/job.json')
    .then( res => {
      this.jobBox = res.data.message
    })
    .catch(err => {
      console.log(err)
    })
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
    },

    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm(dialog,loading) {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
};
</script>

<style>
.bossbase-session {
  width: 840px;
  padding: 0 40px;
  box-sizing: border-box;
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
  position: relative;
  width: 450px;
  float: left;
  margin-left: 50px;
  /* margin: 10px 0 10px 50px; */
  color: #333;
}
.bb-f-l .bb-f-l-title {
  margin-bottom: 20px;
}
.bb-f-l .b-c-name {
  font-size: 26px;
  margin: 10px 10px 30px;
}
.bb-edit {
  position: absolute;
  float: right;
  font-size: 24px;
  color: rgb(252, 70, 70);
  right: 0;
  cursor: pointer;
}
.bb-f-l p {
  margin: 7px;
}
.bb-f-l p span {
  margin: 0 7px;
  font-size: 16px;
}
.el-drawer {
  z-index: 999999999;
}
.bossbase-next {
  margin: 10px 40px;
  color: #333;
}
.bossbase-next .h2-title {
  font-size: 24px;
  margin-bottom: 20px;
  /* width: 150px; */
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 47%;
  color: aliceblue;
  background-color: rgb(252, 70, 70);
  display: inline-block;
}
.bossbase-next p {
  position: relative;
  color: #333;
  line-height: 30px;
}

/* 招聘列表 */
.job-opening {
  position: relative;
  background-color: #fff;
  padding: 15px;
  border-radius: 3px;
  margin: 3px 0;
}
.j-one {
  width: 300px;
  margin: 0 10px 0 0;
  float: left;
  height: 70px;
  color: #61687c;
}
.j-f {
  position: absolute;
  padding: 0 5px;
  height: 40px;
  font-weight: 400;
  font-size: 20px;
  box-sizing: border-box;
  line-height: 40px;
}
.j-f span {
  position: absolute;
  float: left;
  height: 40px;
  line-height: 40px;
  top: 0;
}
.j-s {
  height: 30px;
}
.j-s span {
  height: 30px;
  float: left;
  line-height: 30px;
  margin: 0 5px;
  top: 0;
}
.j-one p {
  position: relative;
  width: 350px;
}
.j-jobname {
  color: black;
}
.j-salary {
  right: 10px;
  color: red;
  font-size: 16px;
}
.j-three {
  float: left;
  height: 70px;
  color: #61687c;
  width: 270px;
  margin: 0 7px;
}
.j-three p {
  position: relative;
  width: 270px;
}
.j-hr,
.j-time {
  position: absolute;
  font-size: 16px;
  color: #8d92a1;
  right: 10px;
}
.j-hr {
  color: black;
}
</style>