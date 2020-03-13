<template>
  <div class="login-body">
    <el-container class="w">
      <div class="login">        
        <div class="login-left">
          <router-link to="/home" class="l-logo">
            <img src="../../../static/data/images/logo.gif" />
            <div>
              <p>IT行业</p>
              <p>找工作</p>
            </div>
          </router-link>
           <!-- 左侧列单显示 -->
          <router-view></router-view>
        </div>
        <div class="login-right">
          <!-- :default-active="activeIndex" --><!--点击切换标识符来识别登录方法-->
          <el-menu class="el-menu-demo login-menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <router-link to="reglogtab1"><el-menu-item index="1" class="on">求职者登录</el-menu-item></router-link>
            <router-link to="reglogtab2"><el-menu-item index="2">BOSS登录</el-menu-item></router-link>
            <!-- <el-menu-item index="3">管理员登录</el-menu-item> -->
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
                <el-button width="400px" style="background-color:black;color:white" @click="submitForm('ruleForm')">登 录</el-button>
              </el-form-item>
            </el-form>
            <p class="login-r">
              没有账号
              <router-link to="/regist" style="color:red">
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
      flag:'1',
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
      this.flag = key
      console.log(this.flag,key, keyPath);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert(this.flag);
          if(this.flag=='1'){
            this.$axios.post("/login",{username:this.loginForm.user,password:this.loginForm.pass})
            .then(res => {
              this.$router.replace('/home')
            })
            .catch(err => {
              alert("登录失败")
            });
          
          }else if(this.flag=='2'){
            this.$axios.post("/login",{username:this.loginForm.user,password:this.loginForm.pass})
            .then(res => {
              this.$router.replace('/candidates')
            })
            .catch(err => {
              alert("登录失败")
            });
            
          }

        } else {
          console.log("账户与密码不符合，请重新输入");
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
  background: url('../../../static/data/images/loginbg.jpg') no-repeat;
  background-size: cover;
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
  box-shadow: -7px -6px 100px white;
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
  box-sizing: border-box;
  background-color: #fff;

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
  background-color: #fff;
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
  /*加上管理员登录后的样式 
  margin: 0 15px; 
  line-height: 60px;
  font-size: 18px;*/
  padding: 0 76px;
  float: left;
  color: #909399;
  line-height: 60px;
  font-size: 18px;
  box-sizing: inherit;
  border-bottom: 2px solid red ;
}
.login-menu .el-menu-item.is-active {
    color: black;
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