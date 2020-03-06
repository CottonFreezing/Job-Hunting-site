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
      <el-form-item label="职位类别：" prop="jobkind">
        <el-select v-model="postingForm.jobkind" placeholder="请选择职位类别">
          <el-option label="后端开发" selected value="jobkind1"></el-option>
            <el-option label="前端开发" selected value="jobkind2"></el-option>
            <el-option label="测试" value="jobkind3"></el-option>
            <el-option label="运维/技术支持" value="jobkind4"></el-option>
            <el-option label="数据" value="jobkind5"></el-option>
            <el-option label="项目管理" value="jobkind6"></el-option>
            <el-option label="硬件开发" value="jobkind7"></el-option>
            <el-option label="移动开发" value="jobkind8"></el-option>
            <el-option label="通信" value="jobkind9"></el-option>
            <el-option label="电子/半导体" value="jobkind10"></el-option>
            <el-option label="高端技术职位" value="jobkind11"></el-option>
            <el-option label="人工智能" value="jobkind12"></el-option>
            <el-option label="销售技术支持" value="jobkind13 "></el-option>
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
      <el-form-item label="工作城市：" prop="workcity">
        <el-col :span="11">
          <el-input v-model="postingForm.workcity"></el-input>
        </el-col>
      </el-form-item>
      <el-divider></el-divider>
      <el-form-item prop="experience" label="工作经验" required>
        <el-col :span="11">
          <el-select v-model="postingForm.experience">
            <el-option label="不限" selected value="none"></el-option>
            <el-option label="实习生" selected value="intern"></el-option>
            <el-option label="应届毕业生" value="student"></el-option>
            <el-option label="三年及以下" value="e1"></el-option>
            <el-option label="3-5年" value="e2"></el-option>
            <el-option label="5-10年" value="e3"></el-option>
            <el-option label="10年以上" value="e4"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item prop="academic " label="学历要求" required>
        <el-col :span="11">
          <el-select v-model="postingForm.academic">
            <el-option label="不限"  value="an1"></el-option>
            <el-option label="高中及以下"  value="an2"></el-option>
            <el-option label="大专" value="an3"></el-option>
            <el-option label="本科" value="an4"></el-option>
            <el-option label="硕士" value="an5"></el-option>
            <el-option label="博士" value="an6"></el-option>
            <el-option label="10年以上" value="an7"></el-option>
          </el-select>
        </el-col>
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('postingForm')">立即发布</el-button>
        <el-button @click="resetForm('postingForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postingForm: {
        jobname: "",
        department: "",
        salary: "",
        workcity: "",
        experience: "",
        academic: "",
        address: "",
        jobdescription: "",
        jobneed: "",
        remail: ""
      },
      rules: {
        jobname: [
          { required: true, message: "请输入职位名称", trigger: "blur" }
        ],
        jobkind: [
          { required: true, message: "请选择职位类别", trigger: "blur" }
        ],
        salary: [ 
          { required: true, message: "请输入工资范围", trigger: "blur" }
        ],
        workcity: [
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
        this.$refs[postingForm].validate((valid) => {
          if (valid) {
            console.log('submit!');
            this.$axios.post('./static/data/candidates.json',postingForm)
          .then(res => {
            if(res.code == 200){
              alert("创建成功")
               that.$router.go(-1)
            }
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(postingForm) {
        this.$refs[postingForm].resetFields();
      }
    }
  }


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
  border-top: 25px solid rgba(0, 0, 0, 0.541);
  border-left: 25px solid transparent;
  border-bottom: 25px solid rgba(0, 0, 0, 0.541);
  border-right: 25px solid rgba(0, 0, 0, 0.541);
}
.p-t-r {
  float: left;
  width: 0px;
  height: 0px;
  /* border-bottom-right-radius: 50%;
  border-top-right-radius: 50%; */
  border-top: 25px solid rgba(0, 0, 0, 0.541);
  border-right: 25px solid transparent;
  border-bottom: 25px solid rgba(0, 0, 0, 0.541);
  border-left: 25px solid rgba(0, 0, 0, 0.541);
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
  background-color: rgba(0, 0, 0, 0.541);
}
</style>