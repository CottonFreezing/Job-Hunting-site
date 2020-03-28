<template>
  <div class="w resumes-session clearfix">
    <el-container>
      <el-main class="resumes-main clearfix" v-if="!dialog">    
          <div class="p-base clearfix">
            <p class="p-name">
              <span>{{ruleForm.name}}</span>
              <i class="el-icon-edit-outline bb-edit" @click="dialog = true"></i></p>
            <p>
              <span><i class="el-icon-sunny"></i>{{ruleForm.birth}}</span>
              <span>|</span>
              <span><i class="el-icon-collection"></i>{{ruleForm.academic}}</span>
              <span>|</span>
              <span><i class="el-icon-suitcase"></i>{{ruleForm.experience}}</span>
              <span>|</span>
              <span><i class="el-icon-location-information"></i>{{ruleForm.nationality}}</span>
              </p>
              <p>
                <span><i class="el-icon-phone-outline"></i>{{ruleForm.telephone}}</span>                
                <span>|</span>
                <span><i class="el-icon-message"></i>{{ruleForm.email}}</span>
              </p>
              <el-divider></el-divider>
          </div>
          <div class="p-base ">
            <p class="p-title"><span></span>自我描述</p>
            <p>{{ruleForm.assessment}}</p>
            <el-divider></el-divider>
          </div>
          <div class="p-base ">
            <p class="p-title"><span></span>期望职位</p>
            <p>
              <span><i class="el-icon-monitor"></i>{{ruleForm.desiredjob}}</span>
              <span><i class="el-icon-coin"></i>{{ruleForm.desiredsalary}}</span>
              <span><i class="el-icon-office-building"></i>{{ruleForm.desiredcity}}</span>
            </p>
            <el-divider></el-divider>
          </div>
          <div class="p-base ">
            <p class="p-title"><span></span>教育经验</p>
            <p>
              <span>{{ruleForm.school}}</span>
              <span>|</span>
              <span>{{ruleForm.date1}}-{{ruleForm.date2}}</span>
              <span>|</span>
              <span>{{ruleForm.subject}}</span>
              <span>|</span>
              <span>{{ruleForm.academic}}</span>
              </p>
              <el-divider></el-divider>
          </div>
          <div class="p-base ">
            <p class="p-title"><span></span>项目经验</p>
            <p><span>项目名称：{{ruleForm.projectname}}</span></p>
            <p><span>时间：{{ruleForm.starttime}}-{{ruleForm.endtime}}</span></p>
            <p><span>担任职务：{{ruleForm.duty}}</span></p>
            <p><span>项目描述：</span></p>
            <p><span> </span>{{ruleForm.description}}</p>
          </div>

      </el-main>
      <!-- 编写个人简历 -->
      <el-main class="resumes-main" v-else>
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
            <el-button type="primary" @click="submitForm(ruleForm)">立即创建</el-button>
            <el-button @click="resetForm(ruleForm)">取消</el-button>
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
    var telephoneTest = (rule, value, callback) => {
      var reg = /^1[3456789]\d{9}$/;
      if (value != "" && reg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确额的手机号"));
      }
    };
    return {
      dialog:false,
      loading: false,
      labelPosition: "right",
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
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],

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
            .post("/resumes", {params:{ruleForm:this.ruleForm}})
            .then(res => {
              if (res.status == 200) {
                alert("创建成功");
                this.dialog = false;
              }
            })
            .catch( err=> {
              console.log(err)
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
       this.$nextTick(()=>{
      this.$refs.ruleForm.resetFields();
      })
      this.dialog = false;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  filters:{
    formatDate(value) {
      let date = new Date(value)
      let y = date.getFullYear
      let MM = date.getMonth()+1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate
      d = d < 10 ? ('0' + d) : d
      let  h = date.getHours
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d

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
  position: relative;
  background-color: #fff;
  color: #333;
  margin-right: 20px;
  margin: 10px 20px 10px 10px;
  padding: 20px;
  overflow: hidden;
}
.resumes-aside {
  height: 250px;
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
/* 显示部分 */

.p-base {
  width: 750px;
  float: left;
  color: #333;
  margin: 10px 20px 7px 20px;
}
.p-base .p-title {
  font-size: 24px;
  color: #3d3d3d;
  line-height: 50px;
  
}
.p-title span {
  display: inline-block;
  height: 15px;
  width: 3px;
  border-left: 3px solid rgb(252, 70, 70) ;
}
.p-base .p-name{
  font-size: 36px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}
.p-base p {
  margin: 17px;
  font-size: 16px;
}
.p-base span {
  margin: 0 3px;
}
.p-base span i {
  margin-right: 2px ;
}
.bb-edit {
  position: absolute;
  float: right;
  font-size: 24px;
  color: rgb(252, 70, 70);
  right: 50px;
  cursor: pointer;
}
</style>