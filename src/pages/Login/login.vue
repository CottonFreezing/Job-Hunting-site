<template>
  <div class="login-body">
    <el-container class="w">
      <div class="login">
        <!-- <el-menu :default-active="activeIndex" class="login-left" @select="handleSelect">                   
                    <el-menu-item index="1">
                         <router-link to="/home" class="l-logo">
                        <img src="./images/logo.gif" />
                     <div>
                         <p>IT行业</p>
                         <p>找工作</p>
                     </div>
                     
                     </router-link>
                    </el-menu-item>
                   <el-menu-item index="2">
                       <router-link to="" class="l-logo">                    
                         <li>
                             <i class="el-icon-lollipop"></i>
                             <p>任性选</p>
                             <p>各大行业任你选</p>
                         </li>
                       </router-link>
                       </el-menu-item>  
                     
                    
        </el-menu>-->
        <div class="login-left">
          <router-link to="/home" class="l-logo">
            <img src="./images/logo.gif" />
            <div>
              <p>IT行业</p>
              <p>找工作</p>
            </div>
          </router-link>
          <ul>
            <li>
              <i class="el-icon-lollipop"></i>
              <p>任性选</p>
              <p>各大行业任你选</p>
            </li>
          </ul>
        </div>
        <div class="login-right">
          <!-- :default-active="activeIndex"                   -->
          <el-menu class="el-menu-demo login-menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="on">求职者登录</el-menu-item><!--点击切换标识符来识别登录方法-->
            <el-menu-item index="2">BOSS登录</el-menu-item>
            <el-menu-item index="3">管理员登录</el-menu-item>
          </el-menu>

          <div class="l-r-inner">
            <el-form
              :model="loginForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
            >
              <el-form-item label="账 号：" prop="user" required>
                <el-input v-model="loginForm.user"></el-input>
              </el-form-item>
              <el-form-item label="密 码：" prop="pass" required>
                <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button width="400px" type="info" @click="submitForm('ruleForm')">登 录</el-button>
              </el-form-item>
            </el-form>
            <p class="login-r">
              没有账号
              <router-link to="/regist">
              立即注册
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {

  data() {
    return {
      activeIndex: '1',
      loginForm: {
        user: "",
        pass: ""
      },
      rules: {
        user: [{ required: true, message: "请输入账户", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
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
    },
  }
};
</script>

<style scoped>
.login-body {
  background-color: #000;
}
.login {
  position: absolute;
  width: 740px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px dotted black;
}
.login-title {
  align-content: center;
  font-size: 20px;
}
.login-left {
  float: left;
  width: 240px;
  height: 500px;
  color: #000;
  border-radius: 10px 0 0 10px;
    background-color: #b7bed1;
  box-sizing: border-box;

}

.login-left img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.l-logo {
  float: none;
  display: block;
  width: auto;
  height: 50px;
  margin: 88px 0 0 40px;
  padding: 0;
}
.l-logo div {
  float: right;
  position: relative;
  bottom: -1px;
  right: 60px;
}
.l-logo div p {
  line-height: 20px;
}
.login-left ul {
  margin: 50px 0 0 40px;
}
.login-left li {
  margin-bottom: 50px;
}
.login-left li i {
  float: left;
  width: 25px;
  height: 42px;
  background-size: 100% auto;
}
.login-left li > p:first-of-type {
  line-height: 22px;
  color: #8d92a1;
  font-size: 16px;
  font-weight: 700;
}
.login-leftli > p:last-of-type {
  margin-top: 2px;
  line-height: 18px;
  color: #b0b4c1;
  font-size: 13px;
}
.login-right {
  float: left;
  width: 500px;
  height: 500px;
  color: #000;
  border-radius: 0px 10px 10px 0;
  box-sizing: border-box;
}
.login-menu {
  float: left;
  width: 500px;
  height: 60px;
  margin: 40px 0 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.login-menu .el-menu-item {
  margin: 0 15px;
  line-height: 60px;
  font-size: 18px;
}
.l-r-inner {
  position: relative;
  width: 324px;
  top: 70px;
  margin: 70px auto;
}
.l-r-inner .el-form-item {
  margin: 50px auto;
}
.login-r {
  position: absolute;
  width: 200px;
  float: right;
  right: 20px;
  font-size: 14px;
  margin-top: 30px;
}
</style>