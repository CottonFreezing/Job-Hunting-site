<template>
  <div>
    <div class="posting-title">
      <div class="p-t-l"></div>
      <div class="p-t-c">有 效 职 位</div>
      <div class="p-t-r"></div>
    </div>

    <el-table :data="postingForm" style="width: 100%" class="etable">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="发布时间" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="职 位" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>职 位: {{ scope.row.jobname }}</p>
            <p>月 薪: {{ scope.row.salary }}</p>
            <p>学 历：{{ scope.row.academic}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.jobname }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="salary" label="月 薪" width="100"></el-table-column>
      <el-table-column prop="academic" label="学历需求" width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click.prevent="handleEdit(scope.$index, postingForm),dialogFormVisible = true"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click.prevent="handleDelete(scope.$index, postingForm,scope.row)"
          >删除</el-button>
          <!-- 编辑 -->
          <el-dialog title="修改职位信息" :visible.sync="dialogFormVisible">
            <el-form
              :model="scope.row"
              :rules="rules"
              ref="postingForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="职位名称：" :label-width="formLabelWidth">
                <el-input v-model="scope.row.jobname" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="职位类别：" :label-width="formLabelWidth">
                <el-input v-model="scope.row.kind" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="所属部门：">
                <el-col :span="17">
                  <el-input v-model="scope.row.department" :disabled="true"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="月 薪：" prop="salary">
                <el-col :span="11">
                  <el-input v-model="scope.row.salary"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="工作城市：" prop="place">
                <el-col :span="11">
                  <el-input v-model="scope.row.place"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item prop="experience" label="工作经验" required>
                <el-col :span="11">
                  <el-select v-model="scope.row.experience">
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
                <el-select v-model="scope.row.academic" placeholder="请选择学历">
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
                  <el-input v-model="scope.row.address"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="职位描述：" prop="jobdescription">
                <el-input
                  :autosize="{ minRows: 4, maxRows: 7}"
                  type="textarea"
                  v-model="scope.row.jobdescription"
                ></el-input>
              </el-form-item>
              <el-form-item label="职位要求：" prop="jobneed">
                <el-input
                  :autosize="{ minRows: 4, maxRows: 7}"
                  type="textarea"
                  v-model="scope.row.jobneed"
                ></el-input>
              </el-form-item>
              <el-form-item label="接受简历邮箱：" prop="remail">
                <el-col :span="11">
                  <el-input v-model="scope.row.remail"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="hr：" prop="hr">
                <el-col :span="17">
                  <el-input v-model="scope.row.hr"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item style="display:none;">
                <el-col :span="17">
                  <el-input v-model="scope.row.jid"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false,resetForm(scope.row)">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false,submitForm(scope.row)">确 定</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: "",
      username: "",
      comid: "",
      postingForm: [
        {
          id: 0,
          jid: "",
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          address: "杭州余杭区阿里巴巴西溪园区",
          experience: "1-3年",
          academic: "本科",
          companyid: "10001",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          headimg: "./static/data/images/3.jpg",
          time: "2020-1-17",
          department: "技术部门",
          remail: "123@qq.com",
          jobdescription:
            "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
          jobneed:
            "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
        }
      ],
      dialogFormVisible: false,
      rules: {
        jobname: [
          { required: true, message: "请输入职位名称", trigger: "blur" }
        ],
        kind: [{ required: true, message: "请选择职位类别", trigger: "blur" }],
        salary: [
          { required: true, message: "请输入工资范围", trigger: "blur" }
        ],
        place: [{ required: true, message: "请输入工作城市", trigger: "blur" }],
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
        hr: [{ required: true, message: "请输入hr", trigger: "blur" }],
        jobdescription: [
          { required: true, message: "请输入职位描述", trigger: "blur" }
        ],
        jobneed: [
          { required: true, message: "请输入职位需求", trigger: "blur" }
        ]
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.$axios
      .get("/postjob/all", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get('username'),
          comid: this.$cookie.get('comid')
        }
      }) //'postjob/all
      .then(res => {
        this.postingForm = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleEdit(index, row) {},
    handleDelete(index, row, m) {
      this.$axios
        .post("/postjob/down", {
          jid: m.jid,
          token: this.token,
          username: this.username,
          comid: this.comid
        })
        .then(res => {
          if (res.data.status === 200) {
            row.splice(index, 1);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm(postingForm) {
      this.$refs.postingForm.validate(valid => {
        console.log(postingForm);
        if (valid) {
          this.$axios
            .post("/postjob/edit", {
              jid: this.postingForm.jid,
              jobname: this.postingForm.jobname,
              department: this.postingForm.department,
              salary: this.postingForm.salary,
              place: this.postingForm.place,
              experience: this.postingForm.experience,
              academic: this.postingForm.academic,
              address: this.postingForm.address,
              jobdescription: this.postingForm.jobdescription,
              jobneed: this.postingForm.jobneed,
              remail: this.postingForm.remail,
              token: this.token,
              username: this.username,
              comid: this.comid
            })
            .then(res => {
              if (res.data.status === 200) {
                alert("修改成功");
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
    this.comid = this.$cookie.get("comid");
  }
};
</script>

<style scoped>
.posting-title {
  height: 50px;
  width: 300px;
  margin-bottom: 40px;
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
.el-table {
  background-color: gray;
}
</style>