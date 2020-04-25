<template>
  <div class="w reg-session">
    <el-container class="w" width="1000px">
      <el-main class="reg-main">
        <el-header>
          <h1>
            <span>请填写一份简历</span>
          </h1>
        </el-header>
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
                <el-option label="中 国" selected value="中 国"></el-option>
                <el-option label="美 国" value="美 国"></el-option>
                <el-option label="英 国" value="英 国"></el-option>
                <el-option label="巴 西" value="巴 西"></el-option>
                <el-option label="加拉大" value="加拉大"></el-option>
                <el-option label="俄罗斯" value="俄罗斯"></el-option>
                <el-option label="日 本" value="日 本"></el-option>
                <el-option label="韩 国" value="韩 国"></el-option>
                <el-option label="意大利" value="意大利"></el-option>
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
            <el-form-item prop="experience" label="工作经验" required>
              <el-col :span="11">
                <el-select v-model="ruleForm.experience">
                  <el-option label="实习生" selected value="实习生"></el-option>
                  <el-option label="应届毕业生" value="应届毕业生"></el-option>
                  <el-option label="三年及以下" value="三年及以下"></el-option>
                  <el-option label="3-5年" value="3-5年"></el-option>
                  <el-option label="5-10年" value="5-10年"></el-option>
                  <el-option label="10年以上" value="10年以上"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </div>

          <div class="desired-info">
            <p class="resumes-title">期望职位</p>

            <el-form-item label="期望职位：" prop="desiredjob" required>
              <el-col :span="11">
                <el-select v-model="ruleForm.desiredjob" placeholder="请选择期望职位">
                  <el-option label="后端开发" value="后端开发"></el-option>
                  <el-option label="移动开发" value="移动开发"></el-option>
                  <el-option label="前端开发" value="前端开发"></el-option>
                  <el-option label="测 试" value="测 试"></el-option>
                  <el-option label="运维/技术支持" value="运维/技术支持"></el-option>
                  <el-option label="项目" value="项目"></el-option>
                  <el-option label="硬件开发" value="硬件开发"></el-option>
                  <el-option label="通 信" value="通 信"></el-option>
                  <el-option label="人工智能" value="人工智能"></el-option>
                  <el-option label="高端技术职位" value="高端技术职位"></el-option>
                  <el-option label="销售技术支持" value="销售技术支持"></el-option>
                  <el-option label="电子/半导体" value="电子/半导体"></el-option>
                  <el-option label="数 据" value="数 据"></el-option>
                </el-select>
              </el-col>
            </el-form-item>

            <el-form-item label="薪资要求：">
              <el-col :span="10">
                <el-input v-model="ruleForm.desiredsalary"></el-input>
              </el-col>
            </el-form-item>

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
                  <el-date-picker placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="学 校：" prop="school" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.school"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="专 业：" prop="subject" required>
              <el-col :span="11">
                <el-input v-model="ruleForm.subject"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="学 历：" prop="academic">
              <el-select v-model="ruleForm.academic" placeholder="请选择学历">
                <el-option label="高中及以下" value="高中及以下"></el-option>
                <el-option label="大 专" value="大 专"></el-option>
                <el-option label="本 科" value="本 科"></el-option>
                <el-option label="硕 士" value="硕 士"></el-option>
                <el-option label="博 士" value="博 士"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="project-info">
            <p class="resumes-title">项目经验</p>
            <el-form-item label="项目名称：">
              <el-input v-model="ruleForm.projectname"></el-input>
            </el-form-item>
            <el-form-item label="担任职务：">
              <el-input v-model="ruleForm.duty"></el-input>
            </el-form-item>
            <el-form-item label="项目时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="开始日期"
                  v-model="ruleForm.starttime"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2" style="text-align:center">—</el-col>
              <el-col :span="11">
                <el-date-picker placeholder="结束日期" v-model="ruleForm.endtime" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="项目描述：">
              <el-input
                :autosize="{ minRows: 4, maxRows: 7}"
                type="textarea"
                v-model="ruleForm.description"
                maxlength="500"
                show-word-limit
              ></el-input>
            </el-form-item>
          </div>

          <div class="self-description">
            <p class="resumes-title">自我描述</p>
            <el-form-item>
              <el-input
                :autosize="{ minRows: 4, maxRows: 7}"
                type="textarea"
                maxlength="500"
                v-model="ruleForm.assessment"
                show-word-limit
              ></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleForm)">确认</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    var telephoneTest = (rule, value, callback) => {
      var reg = /^1[3456789]\d{9}$/;
      if (value != "" && reg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确额的手机号"));
      }
    };
    return {
      labelPosition: "right",
      token:"",
      username:"",
      ruleForm: {
        name: "",
        sex: "",
        birth: "",
        nationality: "",
        email: "",
        telephone: "",
        experience: "",
        desiredjob: "",
        desiredsalary: "",
        desiredcity: "",
        school: "",
        subject: "",
        academic: "",
        date1: "",
        date2: "",
        projectname: "",
        duty: "",
        starttime: "",
        endtime: "",
        assessment: ""
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
            validator: telephoneTest,
            message: "请输入正确的电话号码",
            trigger: ["blur", "change"]
          }
        ],
        experience: [
          { required: true, message: "请选择工作经验：", trigger: "blur" }
        ],
        desiredjob: [
          { required: true, message: "请选择期望职位", trigger: "change" }
        ],
        school: [{ required: true, message: "请输入学校", trigger: "blur" }],
        subject: [{ required: true, message: "请输入专业", trigger: "blur" }],
        academic: [{ required: true, message: "请选择学历", trigger: "blur" }],

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
    submitForm(ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/candreg", {
              name: this.ruleForm.name,
              sex: this.ruleForm.sex,
              birth: this.ruleForm.birth,
              nationality: this.ruleForm.nationality,
              email: this.ruleForm.email,
              telephone: this.ruleForm.telephone,
              experience: this.ruleForm.experience,
              desiredjob: this.ruleForm.desiredjob,
              desiredsalary: this.ruleForm.desiredsalary,
              desiredcity: this.ruleForm.desiredcity,
              school: this.ruleForm.school,
              subject: this.ruleForm.subject,
              academic: this.ruleForm.academic,
              date1: this.ruleForm.date1,
              date2: this.ruleForm.date2,
              projectname: this.ruleForm.projectname,
              duty: this.ruleForm.duty,
              starttime: this.ruleForm.starttime,
              endtime: this.ruleForm.endtime,
              assessment: this.ruleForm.assessment,
              token:this.token,
              username:this.username
            })
            .then(res => {
              if (res.status == 200) {
                alert("创建成功");
                this.$router.push("/home");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          alert("请检查后再确认");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$nextTick(() => {
        this.$refs.ruleForm.resetFields();
      });
      this.dialog = false;
    }
  },
  mounted() {
     this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    this.userid = this.$cookie.get("userid");
    this.cid = this.$cookie.get("cid");
    
  }
};
</script>

<style scoped>
.reg-session {
  width: 100%;
  background-color: #000;
}
.reg-main {
  position: relative;
  background-color: #fff;
  color: #333;
  margin-right: 20px;
  margin: 10px 20px 10px 10px;
  padding: 30px;
  border-radius: 10px;
  overflow: hidden;
}
.reg-main .el-header h1 {
  font-size: 30px;
  font-weight: 600;
}
.reg-main .el-form {
  margin: 0 auto;
  width: 1000px;
  padding: 0px 20px 20px 20px;
}
.base-p-info,
.desired-info,
.education-info,
.project-info {
  border-bottom: 1px dotted #333;
  padding: 10px 0;
  margin: 10px 0;
}
.self-description {
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
/* 按钮 */
.reg-main .el-button {
  margin: 0 300px;
}
</style>