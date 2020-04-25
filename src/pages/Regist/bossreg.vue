<template>
  <div class="reg-session">
    <el-container class="w" width="1000px">
      <el-main class="reg-main">
        <el-header>
          <h1 class="el-icon-sunny">
            <span>请填写公司基本信息</span>
          </h1>
        </el-header>
        <div direction="ltr" class="bb-f-l">
          <div class="demo-drawer__content">
            <el-form :model="companyData" :rules="rules" ref="companyData" required>
              <el-form-item label="公司全称" label-width="90px" required>
                <el-input v-model="companyData.company" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所 在城市" label-width="90px" prop="place" required>
                <el-input v-model="companyData.place" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="公司领域" label-width="90px" prop="kind" required>
                <el-input v-model="companyData.kind" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="融 资" label-width="90px" prop="stage" required>
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
              <el-form-item label="规 模" label-width="90px" prop="scale" required>
                <el-select v-model="companyData.scale" placeholder="请选择融资">
                  <el-option label="0-20人" value="0-20人"></el-option>
                  <el-option label="20-99人" value="20-99人"></el-option>
                  <el-option label="100-499人" value="100-499人"></el-option>
                  <el-option label="500-999人" value="500-999人"></el-option>
                  <el-option label="1000-9999人" value="1000-9999人"></el-option>
                  <el-option label="10000人以上" value="1000人以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="公司主页" label-width="90px" prop="url" required>
                <el-input v-model="companyData.url" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="公司简介" label-width="90px" prop="comintroduce" required>
                <el-input type="textarea" v-model="companyData.comintroduce" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="公司地址" label-width="90px" prop="address" required>
                <el-input v-model="companyData.address" autocomplete="off" prop="address"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(companyData)">确认</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token:"",
      comid:"",
      username:"",
      companyData: {
        company: "",
        kind: "",
        place: "",
        stage: "",
        scale: "",
        url: "",
        comintroduce: "",
        address: ""
      },
      rules: {
        company: [{ required: true, message: "请输入公司名", trigger: "blur" }],
        place: [
          { required: true, message: "请输入公司所在城市", trigger: "blur" }
        ],
        kind: [{ required: true, message: "请输入公司领域", trigger: "blur" }],
        stage: [{ required: true, message: "请选择融资", trigger: "change" }],
        scale: [{ required: true, message: "请选择规模", trigger: "change" }],
        url: [{ required: true, message: "请输入公司网址", trigger: "blur" }],
        comintroduce: [
          { required: true, message: "请输入公司描述", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入公司具体地址", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(companyData) {
      this.$refs.companyData.validate(valid => {
        if (valid) {
          this.$axios
            .post("/bossreg", {
              company: this.companyData.company,
              kind: this.companyData.kind,
              place: this.companyData.place,
              stage: this.companyData.stage,
              scale: this.companyData.scale,
              url: this.companyData.url,
              comintroduce: this.companyData.comintroduce,
              address: this.companyData.address,
              token:this.token,
              username:this.username,
              comid:this.comid,
            })
            .then(res => {
              if (res.status == 200) {
                alert("创建成功");
                this.$router.push("/candidates");
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
.reg-session {
  width: 100%;
  background-color: #000;
}
.reg-main {
  position: relative;
  background-color: #fff;
  color: #333;
  margin: 10px 20px 10px 10px;
  padding: 30px;
  border-radius: 10px;
  overflow: hidden;
}
.reg-main .el-header h1 {
  font-size: 30px;
  font-weight: 600;
}
.bb-f-l {
  position: relative;
  width: 600px;
  margin-left: 50px;
  margin: 0 auto;
  padding: 30px;
  /* margin: 10px 0 10px 50px; */
  color: #333;
}
.bb-f-l .el-button {
  margin: 0 300px;
}
</style>>

