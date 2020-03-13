<template>
     <!-- 修改密码 -->
        <div class="mychange">
          <el-form :model="changeForm"
              status-icon
              :rules="rules"
              ref="changeForm"
              label-width="100px"
              class="mychangeForm"
              size="medium">
            <el-form-item label="原密码" prop="pass" required>
                <el-input type="password" v-model="changeForm.originalPass" autocomplete="off"></el-input>
              </el-form-item>
            <el-form-item label="新密码" prop="newPass" required> 
                <el-input type="password" v-model="changeForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkNewPass" required>
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
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
       changeForm: {
        originalPass:'',
        pass: '',
        checkPass: '',
      },
      rules: {
        originalPass: [{ required: true, message: "请输入原来密码", trigger: "blur" }],
        pass: [{ required: true,validator: validatePass, trigger: "blur" }],
        checkPass: [{ required: true,validator: validatePass2, trigger: "blur" }]
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