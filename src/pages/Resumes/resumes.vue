<template>
  <div class="w resumes-session">
    <el-container>
      <el-main class="resumes-main">
        <el-form
          :model="ruleForm"
          :rules="rules"
          :label-position="labelPosition"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="base-p-info">
            <p class="resumes-title">个人基本信息</p>
            <el-form-item label="姓 名：" prop="name">
              <el-col :span="11">
                <el-input v-model="ruleForm.name"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="性 别：" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生日期：" required>
              <el-col :span="11">
                <el-form-item prop="birth">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.birth"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="国 籍：" required prop="nationality">
              <el-select v-model="ruleForm.nationality">
                <el-option label="中 国" selected value="China"></el-option>
                <el-option label="美 国" value="America"></el-option>
                <el-option label="英 国" value="England"></el-option>
                <el-option label="巴 西" value="Brazil"></el-option>
                <el-option label="加拉大" value="Canada"></el-option>
                <el-option label="俄罗斯" value="Russia"></el-option>
                <el-option label="日 本" value="Japan"></el-option>
                <el-option label="韩 国" value="Korea"></el-option>
                <el-option label="意大利" value="Italy"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="email" label="邮 箱：" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.email"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item prop="telephone" label="电 话：" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.telephone"></el-input>
              </el-col>
            </el-form-item>
          </div>

          <div class="desired-info">
            <p class="resumes-title">期望职位</p>
            <el-col :span="11">
              <el-form-item label="期望职位：" prop="desiredjob">
                <el-select v-model="ruleForm.desiredjob" placeholder="请选择期望职位">
                  <el-option label="后 端" value="d-back"></el-option>
                  <el-option label="移 动" value="d-mobile"></el-option>
                  <el-option label="前 端" value="d-front"></el-option>
                  <el-option label="测 试" value="d-test"></el-option>
                  <el-option label="运维/技术支持" value="d-operation"></el-option>
                  <el-option label="数 据" value="d-database"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="薪资要求：">
                <el-input v-model="ruleForm.desiredsalary"></el-input>
              </el-form-item>
            </el-col>

            <el-form-item label="城 市：">
              <el-col :span="11">
                <el-input v-model="ruleForm.desiredcity"></el-input>
              </el-col>
            </el-form-item>
          </div>

          <div class="education-info">
            <p class="resumes-title">教育经验</p>
            <el-form-item label="时 间：" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" style="text-align:center">—</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="学 校：" prop="eschool" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.eschool"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="专 业：" prop="esubject" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.esubject"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="学 历：" prop="eacademic">
              <el-select v-model="ruleForm.eacademic" placeholder="请选择期望职位">
                <el-option label="高中及以下" value="e-middle"></el-option>
                <el-option label="大 专" value="e-junior"></el-option>
                <el-option label="本 科" value="e-college"></el-option>
                <el-option label="硕 士" value="e-master"></el-option>
                <el-option label="博 士" value="e-doctor"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-aside class="resumes-aside">
        <p class="a-p">附件管理</p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          <el-button size="small" type="info">上传简历</el-button>
        </el-upload>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      ruleForm: {
        name: "",
        sex: "",
        birth: "",
        nationality: "",
        email: "",
        telephone: "",
        desiredjob: "",
        desiredsalary: "",
        desiredcity: "",
        eschool: "",
        esubject: "",
        eacademic: "",
        date1: "",
        date2: "",
         fileList: [
           {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
           {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
           ],

      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birth: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        nationality: [
          { required: true, message: "请选择国籍", trigger: "change" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        telephone: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          {
            type: "number",
            message: "请输入正确的电话号码",
            trigger: ["blur", "change"]
          }
        ],
        desiredjob: [
          { required: true, message: "请选择期望职位", trigger: "change" }
        ],
        eschool: [{ required: true, message: "请输入学校", trigger: "blur" }],
        esubject: [{ required: true, message: "请输入专业", trigger: "blur" }],
        eacademic: [{ required: true, message: "请选择学历", trigger: "blur" }],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }
};
</script>

<style>
.resumes-session {
  position: relative;
}

.resumes-main,
.resumes-aside {
  background-color: #fff;
  color: #333;
  margin-right: 20px;
  margin: 30px 20px 20px 10px;
  padding: 30px;
}
.resumes-aside {
  height: 250px;
}
.base-p-info,
.desired-info {
  border-bottom: 1px dotted #333;
  padding: 10px 0;
  margin: 10px 0;
}
.education-info {
  padding: 10px 0;
  margin: 10px 0;
}
.resumes-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}
body > .el-container {
  margin-bottom: 40px;
}
.a-p {
  font-size: 16px;
  margin: 0 10px 10px 0;
}

/* 国籍 */
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>