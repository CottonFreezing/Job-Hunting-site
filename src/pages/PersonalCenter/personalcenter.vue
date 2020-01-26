<template>
  <div class="w pc-session">
    <el-container>
      <el-aside class="pc-aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo p-aside"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">个人信息</el-menu-item>
          <el-menu-item index="2">修改密码</el-menu-item>
          <el-menu-item index="3">退出登录</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 个人信息 -->
        <div class="myinfo">
          <p class="p-title">个人资料</p>
          <div class="p-base">
            <p>账户：</p>
            <p>姓名：</p>
          </div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">已投公司</el-menu-item>
            <el-menu-item index="2">面试邀约</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
          </el-menu>
        </div>

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
      </el-main>
    </el-container>
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

<style>
.pc-session {
  margin: 10px auto;
  height: 520px;
}
.pc-aside {
   background-color: #545c64;
    height: 520px;
}
.p-aside .el-menu-item {
  font-size: 16px;
}
.myinfo .mychange {
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
.mychange {
    display: none; /* 不显示*/
}
.p-title {
  font-size: 24px;
  font-weight: 700;
  color: #3d3d3d;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #e0e0e0;
}
.p-base {
  margin: 20px;
}
.p-base p {
  margin: 10px;
  font-size: 18px;
}
</style>