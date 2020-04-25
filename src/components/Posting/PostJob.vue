<template>
  <div>
    <div class="posting-title">
      <div class="p-t-l"></div>
      <div class="p-t-c">发 布 职 位</div>
      <div class="p-t-r"></div>
    </div>
    <el-form
      :model="postingForm"
      :rules="rules"
      ref="postingForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="职位类别：" prop="kind">
        <el-select v-model="postingForm.kind" placeholder="请选择职位类别">
          <el-option label="后端开发" selected value="后端开发"></el-option>
          <el-option label="前端开发" selected value="前端开发"></el-option>
          <el-option label="测试" value="测试"></el-option>
          <el-option label="运维/技术支持" value="运维/技术支持"></el-option>
          <el-option label="数据" value="数据"></el-option>
          <el-option label="项目管理" value="项目管理"></el-option>
          <el-option label="硬件开发" value="硬件开发"></el-option>
          <el-option label="移动开发" value="移动开发"></el-option>
          <el-option label="通信" value="通信"></el-option>
          <el-option label="电子/半导体" value="电子/半导体"></el-option>
          <el-option label="高端技术职位" value="高端技术职位"></el-option>
          <el-option label="人工智能" value="人工智能"></el-option>
          <el-option label="销售技术支持" value="销售技术支持 "></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位名称：" prop="jobname">
        <el-col :span="17">
          <el-input v-model="postingForm.jobname"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="所属部门：" prop="department">
        <el-col :span="17">
          <el-input v-model="postingForm.department"></el-input>
        </el-col>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item label="月 薪：" prop="salary">
        <el-col :span="11">
          <el-input v-model="postingForm.salary"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="工作城市：" prop="place">
        <el-col :span="11">
          <el-input v-model="postingForm.place"></el-input>
        </el-col>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item prop="experience" label="工作经验" required>
        <el-col :span="11">
          <el-select v-model="postingForm.experience">
            <el-option label="不限" selected value="不限"></el-option>
            <el-option label="实习生" selected value="实习生"></el-option>
            <el-option label="应届毕业生" value="应届毕业生"></el-option>
            <el-option label="三年及以下" value="三年及以下"></el-option>
            <el-option label="3-5年" value="3-5年"></el-option>
            <el-option label="5-10年" value="5-10年"></el-option>
            <el-option label="10年以上" value="10年以上"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="学 历：" prop="academic">
        <el-select v-model="postingForm.academic" placeholder="请选择学历">
          <el-option label="不限" value="不限"></el-option>
          <el-option label="高中及以下" value="高中及以下"></el-option>
          <el-option label="大 专" value="大 专"></el-option>
          <el-option label="本 科" value="本 科"></el-option>
          <el-option label="硕 士" value="硕 士"></el-option>
          <el-option label="博 士" value="博 士"></el-option>
        </el-select>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item label="工作地址：" prop="address" placeholder="请输入详细的工作地址">
        <el-col :span="11">
          <el-input v-model="postingForm.address"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="职位描述：" prop="jobdescription">
        <el-input
          :autosize="{ minRows: 4, maxRows: 7}"
          type="textarea"
          v-model="postingForm.jobdescription"
        ></el-input>
      </el-form-item>
      <el-form-item label="职位要求：" prop="jobneed">
        <el-input
          :autosize="{ minRows: 4, maxRows: 7}"
          type="textarea"
          v-model="postingForm.jobneed"
        ></el-input>
      </el-form-item>
      <el-form-item label="接受简历邮箱：" prop="remail">
        <el-col :span="11">
          <el-input v-model="postingForm.remail"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="hr：" prop="hr">
        <el-col :span="17">
          <el-input v-model="postingForm.hr"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(postingForm)">立即发布</el-button>
        <el-button @click="resetForm(postingForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: "",
      username: "",
      comid: "",
      postingForm: {
        jobname: "",
        kind: "",
        department: "",
        salary: "",
        place: "",
        experience: "",
        academic: "",
        address: "",
        jobdescription: "",
        jobneed: "",
        remail: "",
        hr:"",
      },
      rules: {
        jobname: [
          { required: true, message: "请输入职位名称", trigger: "blur" }
        ],
        kind: [
          { required: true, message: "请选择职位类别", trigger: "blur" }
        ],
        department: [ { required: true, message: "请输入所属部门", trigger: "blur" }],
        salary: [
          { required: true, message: "请输入工资范围", trigger: "blur" }
        ],
        place: [
          { required: true, message: "请输入工作城市", trigger: "blur" }
        ],
        experience: [
          { required: true, message: "请选择工作经验", trigger: "blur" }
        ],
        academic: [
          { required: true, message: "请选择学历要求", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入工作地址", trigger: "blur" }
        ],
        remail: [
          { required: true, message: "请输入接收简历邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        hr: [ {required: true, message: "请输入hr",trigger: "blur"}],
        jobdescription: [
          { required: true, message: "请输入职位描述", trigger: "blur" }
        ],
        jobneed: [
          { required: true, message: "请输入职位需求", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(postingForm) {
      this.$refs.postingForm.validate(valid => {
        console.log(postingForm);
        if (valid) {
          this.$axios
            .post("/postjob", {
              jobname: this.postingForm.jobname,
              kind: this.postingForm.kind,
              department: this.postingForm.department,
              salary:this.postingForm.salary,
              place: this.postingForm.place,
              experience: this.postingForm.experience,
              academic: this.postingForm.academic,
              address: this.postingForm.address,
              jobdescription: this.postingForm.jobdescription,
              jobneed: this.postingForm.jobneed,
              remail: this.postingForm.remail,
              hr: this.postingForm.hr,
              token: this.token,
              username:this.username,
              comid:this.comid
            })
            .then(res => {
              if (res.status == 200) { 
                alert("创建成功");
                this.$refs.postingForm.resetFields();
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(postingForm) {
      this.$refs.postingForm.resetFields();
    }
  },
   mounted() {
    this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    this.comid = this.$cookie.get("comid")
  }
};
</script>

<style scoped>
.posting-title {
  height: 50px;
  width: 300px;
  margin-bottom: 60px;
}
.p-t-l {
  float: left;
  width: 0;
  border-top: 25px solid rgb(252, 70, 70);
  border-left: 25px solid transparent;
  border-bottom: 25px solid rgb(252, 70, 70);
  border-right: 25px solid rgb(252, 70, 70);
}
.p-t-r {
  float: left;
  width: 0px;
  height: 0px;
  /* border-bottom-right-radius: 50%;
  border-top-right-radius: 50%; */
  border-top: 25px solid rgb(252, 70, 70);
  border-right: 25px solid transparent;
  border-bottom: 25px solid rgb(252, 70, 70);
  border-left: 25px solid rgb(252, 70, 70);
  /* background-color:rgba(0, 0, 0, 0.541);  */
}
.p-t-c {
  float: left;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 34px;
  color: white;
  background-color: rgb(252, 70, 70);
}
</style>