<template>
     <!-- 修改密码 -->
        <div class="mychange">
          <el-form :model="changeForm"
              status-icon
              :rules="rules"
              ref="registForm"
              label-width="100px"
              class="mychangeForm"
              size="medium">
            <el-form-item label="原密码" prop="pass">
                <el-input type="password" v-model="changeForm.pass" autocomplete="off"></el-input>
              </el-form-item>
            <el-form-item label="新密码" prop="newPass">
                <el-input type="password" v-model="changeForm.newPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkNewPass">
                <el-input type="password" v-model="changeForm.checkNewPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="info" @click="submitForm('changeForm')">登 录</el-button>
              </el-form-item>
          </el-form>
          </div>
</template>

<script>
export default {
     data() {
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkNewPass !== "") {
          this.$refs.changeForm.validateField("checkNewPass");
        }
        callback();
      }
    };
    var validateNewPass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changeForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
       changeForm: {
        pass: "",
        newPass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ required: true, message: "请输入原来密码", trigger: "blur" }],
        newPass: [{ validator: validateNewPass, trigger: "blur" }],
        checkNewPass: [{ validator: validateNewPass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
     handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
      submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
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
  margin:50px auto;
}
.mychangeForm .el-form-item {
  margin: 50px 0;
}

</style>