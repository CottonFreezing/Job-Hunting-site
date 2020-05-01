<template>
  <div class="regist-body">
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
          <div class="tab">
            <ul v-if="flag==='0'">
              <li>
                <i class="el-icon-message-solid"></i>
                <p>任性选</p>
                <p>各大行业任你选</p>
              </li>
              <li>
                <i class="el-icon-s-flag"></i>
                <p>突破自我</p>
                <p>迎接新的挑战</p>
              </li>
              <li>
                <i class="el-icon-s-promotion"></i>
                <p>抓住机遇</p>
                <p>实现自我价值</p>
              </li>
            </ul>
            <ul v-else>
              <li>
                <i class="el-icon-notebook-2"></i>
                <p>招聘效果好</p>
                <p>与职场牛人在线开聊</p>
              </li>
              <li>
                <i class="el-icon-collection"></i>
                <p>更多在线牛人</p>
                <p>入职速度快</p>
              </li>
              <li>
                <i class="el-icon-goblet-square-full"></i>
                <p>人才匹配度高</p>
                <p>获取更精准的牛人</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="regist-right">
          <el-menu
            class="el-menu-demo regist-menu"
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="0">求职者注册</el-menu-item>
            <el-menu-item index="1">boss注册</el-menu-item>
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
                <el-form-item label="账 号：" prop="user" >
                  <el-input v-model="registForm.user" on-blur="checkUsername"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" >
                  <el-input type="password" v-model="registForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" >
                  <el-input type="password" v-model="registForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    width="400px"
                    style="background-color:black;color:white"
                    @click="submitForm('registForm')"
                  >注 册</el-button>
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
        if (this.registForm.checkPass !== "") {
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
    var userCheck = (rule, value, callback) => {
      var reg = /^[a-z0-9]{3,8}$/i;
      if (value === "") {
        callback(new Error("请输入账户"));
      } else{
        if (!reg.test(value)) {
          //提示信息
          callback(new Error("请输入3-8个数字或字母"));
        } else {
          //将用户名传入后台校验是否重复
          if (this.flag == "0") {
            this.$axios
              .post("/regist/isExist", {
                user: this.registForm.user,
                pass: "",
              })
              .then(res => {
                console.log(res.data.msg ,this.registForm.user,res.data.status)
                if (res.data.status == 500) {
                  alert(res.data.msg)
                  callback(new Error(res.data.msg));
                  this.registForm.user = ""
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.$axios
              .post("/company/isExist", {
                user: this.registForm.user,
                pass: "",
              })
              .then(res => {
                console.log(res.data.msg ,this.registForm.user,res.data.status)
                if (res.data.status === 500) {
                  alert(new Error(res.data.msg))
                  callback(new Error(res.data.msg));
                  this.registForm.user = ""
                }
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
        callback();
      }
    };
    return {
      activeIndex: "0",
      flag: "0",
      registForm: {
        user: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        user: [{ required: true, validator: userCheck, trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.flag = key;
      console.log(key, keyPath);
    },
    submitForm(registForm) {
      this.$refs.registForm.validate(valid => {
        if (valid) {
          if (this.flag == "0") {
            this.$axios
              .post(
                "/regist",
               {
                  user: this.registForm.user,
                  pass: this.registForm.pass,
                },
              )
              .then(res => {
                if (res.status === 200) {
                   this.$cookie.set('userid',res.data.data.userid)
                  this.$cookie.set('username',res.data.data.username)
                  this.$cookie.set('token',res.data.data.token)
                  this.$cookie.set('cid',res.data.data.cid)
                  // console.log(this.registForm.user,this.registForm.pass)        
                  this.$router.push("candreg");
                }
              })
              .catch(err => {
                console(err);
              });
          }else if (this.flag == "1") {
            this.$axios
              .post("/regist/company", {
                user: this.registForm.user,
                pass: this.registForm.pass,
              })
              .then(res => {
                if (res.status === 200) {
                   this.$cookie.set('username',res.data.data.username)
                  this.$cookie.set('token',res.data.data.token)                  
                  this.$router.push("/bossreg");
                }
              })
              .catch(err => {
                console(err);
              });
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
  background: url("../../../static/data/images/loginbg.jpg") no-repeat;
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
  border-bottom: 2px solid red;
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
/* 左侧栏 */
.tab ul {
  margin: 50px 0 0 40px;
}
.tab li {
  margin-bottom: 50px;
}
.tab li i {
  float: left;
  width: 25px;
  height: 42px;
  color: #8d92a1;
  background-size: 100% auto;
}
.tab li > p:first-of-type {
  line-height: 22px;
  color: #8d92a1;
  font-size: 16px;
  font-weight: 700;
}
.tab li > p:last-of-type {
  margin-top: 2px;
  line-height: 18px;
  color: #b0b4c1;
  font-size: 13px;
}
</style>