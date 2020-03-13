<template>
  <div class="regist-body" >
    <el-container>
      <div class="regist">
        <div class="regist-left">
          <router-link to="/home" class="r-logo">
            <img src="../../../static/data/images/logo.gif" />
            <div>
              <p>IT行业</p>
              <p>找工作</p>
            </div>
          </router-link>
          <!-- 左侧列单显示 -->
          <router-view></router-view>
        </div>
        <div class="regist-right">      
          <el-menu class="el-menu-demo regist-menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <router-link to="reglogtab1"><el-menu-item index="1" >求职者注册</el-menu-item></router-link>
           <router-link to="reglogtab2"> <el-menu-item index="2" >boss注册</el-menu-item></router-link>
          </el-menu>

          <div class="r-r-inner">
            <el-form
              :model="registForm"
              status-icon
              :rules="rules"
              ref="registForm"
              label-width="100px"
              
            >
            <div>
              <el-form-item label="账 号：" prop="user" required>
                <el-input v-model="registForm.user"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass" required>
                <el-input type="password" v-model="registForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass" required>
                <el-input type="password" v-model="registForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button width="400px" style="background-color:black;color:white" @click="submitForm('registForm')">登 录</el-button>
              </el-form-item>
            </div>
            </el-form>        
            <p class="regist-r">
              已有账号
              <router-link to="/login" style="color:red">立即登录</router-link>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.registForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeIndex: "1",
      flag:'1',
      registForm: {
        user: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        user: [{ required: true, message: "请输入账户", trigger: "blur" },],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [{required: true,validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.flag = key;
      console.log(key, keyPath);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.flag=='1'){
          this.$router.replace('/home')
          }else if(this.flag=='2'){
            this.$router.replace('/candidates')
          }
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
.regist-body {
 width: 100%;
  height: 100%;
  background: url('../../../static/data/images/loginbg.jpg') no-repeat;
  background-size: cover;
}
.regist {
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
.regist-title {
  align-content: center;
  font-size: 20px;
}
.regist-left {
  float: left;
  width: 240px;
  height: 500px;
  color: #000;
  border-radius: 10px 0 0 10px;
  background-color: #fff;
  box-sizing: border-box;
}

.regist-left img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.r-logo {
  float: none;
  display: block;
  width: auto;
  height: 50px;
  margin: 88px 0 0 40px;
  padding: 0;
}
.r-logo div {
  float: right;
  position: relative;
  bottom: -1px;
  right: 60px;
}
.r-logo div p {
  line-height: 20px;
}
.regist-left ul {
  margin: 50px 0 0 40px;
}
.regist-left li {
  margin-bottom: 50px;
}
.regist-left li i {
  float: left;
  width: 25px;
  height: 42px;
  background-size: 100% auto;
}
.regist-left li > p:first-of-type {
  line-height: 22px;
  color: #8d92a1;
  font-size: 16px;
  font-weight: 700;
}
.regist-left li > p:last-of-type {
  margin-top: 2px;
  line-height: 18px;
  color: #b0b4c1;
  font-size: 13px;
}
.regist-right {
  float: left;
  width: 500px;
  height: 500px;
  color: #000;
  border-radius: 0px 10px 10px 0;
  background-color: #fff;
  box-sizing: border-box;
}
.regist-menu {
  float: left;
  width: 500px;
  height: 60px;
  margin: 40px 0 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.regist-menu .el-menu-item {
  padding: 0 78px;
  float: left;
  color: #909399;
  line-height: 60px;
  font-size: 18px;
  box-sizing: inherit;
  border-bottom: 2px solid red ;
}
.regist-menu .el-menu-item.is-active {
    color: black;
}
.r-r-inner {
  position: relative;
  width: 324px;
  top: 70px;
  margin: 70px auto;
}
.r-r-inner .el-form-item {
  margin: 30px auto;
}
.regist-r {
  position: absolute;
  width: 200px;
  float: right;
  right: 20px;
  font-size: 14px;
  margin-top: 30px;
}
</style>