<template>
  <!-- 修改密码 -->
  <div class="mychange">
    <el-form
      :model="changeForm"
      status-icon
      :rules="rules"
      ref="changeForm"
      label-width="100px"
      class="mychangeForm"
      size="medium"
    >
      <el-form-item label="原密码" prop="originalPass">
        <el-input type="password" v-model="changeForm.originalPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="changeForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input type="password" v-model="changeForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="submitForm('changeForm')">修 改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var originalPass = (rule, value, callback) => {
      var reg = /^[a-z0-9]{6,8}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!reg.test(value)) {
          callback(new Error("密码格式不正确,请输入6-8位字母或数字"));
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      var reg = /^[a-z0-9]{6,8}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!reg.test(value)) {
          callback(new Error("密码格式不正确,请输入6-8位字母或数字"));
        } else {
          this.$refs.changeForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changeForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      token: "",
      username: "",
      changeForm: {
        originalPass: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        originalPass: [
          { required: true, validator: originalPass, trigger: "blur" }
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(changeForm) {
      this.$refs.changeForm.validate(valid => {
        if (valid) {
          this.$axios
            .post("/mybase/changepass", {
              username: this.username,
              newpass: this.changeForm.pass,
              token: this.token
            })
            .then(res => {
              if (res.data.status === 200) {
                alert("提交成功");
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
.mychange {
  width: 800px;
  margin: 10px auto;
}
.mychangeForm {
  width: 470px;
  margin: 50px auto;
}
.mychangeForm .el-form-item {
  margin: 50px 0;
}
</style>