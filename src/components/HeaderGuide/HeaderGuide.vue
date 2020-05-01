// 头部导航
<template>
  <div class="header-section clearfix">
    <el-container>
      <!-- header -->
      <el-header class="header-guide">
        <div class="header-border">
          <!--Logo-->
          <div class="float-left">
            <router-link to="/home" class="header-logo" >
              <font color="white" face="楷体" size="6">IT精英招聘网</font>
            </router-link>
          </div>
          <!--Menu-->
          <div class="float-right">
            <div class="main-menu multi-page-menu text-white">
              <ul>
                <li>
                  <router-link to="/home" :class="[isCurrent('/home') ? 'activeClass':'']">首页</router-link>
                </li>
                <li>
                  <router-link to="/job" :class="[isCurrent('/job') ? 'activeClass':'']">职位信息</router-link>
                </li>
                <li>
                  <router-link to="/company" :class="[isCurrent('/company') ? 'activeClass':'']">公司信息</router-link>
                </li>
                <li>
                  <router-link to="/resumes" :class="[isCurrent('/resumes') ? 'activeClass':'']">上传简历</router-link>
                </li>
                <li>
                  <router-link to="/personalcenter" :class="[isCurrent('/personalcenter') ? 'activeClass':'']">个人中心</router-link>
                </li>
              </ul>
            </div>
            <div class="header-social text-white float-right" v-if="!token">
              <router-link to="/login" id="denglu">
                <i class="ion-social-vimeo-outline">登录</i>
              </router-link>
              <span>|</span>

              <router-link to="/regist">
                <i class="ion-social-dribbble-outline">注册</i>
              </router-link>
            </div>
            <div class="header-social text-white float-right" v-else>              
                <a><i class="el-icon-user-solid">{{username}}</i> </a>       
            </div>
          </div>
          <!--Mobile Menu-->
          <div class="mobile-menu-2 multi-page text-white mobile-menu"></div>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:"",
      token:"",
    }
  },
  methods:{
    isCurrent(path){
      console.log(this.$route.meta.parentPath === path)
      return (this.$route.path === path || this.$route.meta.parentPath === path)
    },
  },
  mounted() {
    this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    
  }
};
</script>

<style>
.activeClass{
  color: rgb(255, 4, 4) !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  text-shadow: 0px 0px 80px #fff,0px 0px 72px #fff,0px 0px 150px #fff !important;
}
.header-section {
  position: relative;
  z-index: -9999;
  
}
.header-guide {
  background-color: #070707;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.header-section {
  background-color: #ffffff;
  z-index: 9999;
}
/* .header-transparent {
  background-color: transparent;

} */
.header-border {
  box-sizing: border-box;
  border-bottom: 1px solid rgba(217, 217, 217, 0.3);
  float: left;
  width: 100%;
}
/*Header Logo*/
.header-logo {
  display: block;
  padding: 1px 0;
  box-sizing: border-box;
}

/*Header Buttons*/
.header-section .btn {
  margin: 5px 0;
}
/*Header Social*/
.header-social a {
  color: #ebcdcd;
  display: block;
  float: left;
  padding: 3px 0 3px 18px;
  box-sizing: border-box;
}
.header-social a:first-child {
  margin-left: 0;
}
.header-social a i {
  display: block;
  font-size: 15px;
  line-height: 60px;
}
.header-social a:hover {
  opacity: 0.7;
}
/*Menu*/
.main-menu {
  display: block;
  float: left;
}

.main-menu > ul > li {
  display: block;
  float: left;
  margin-right: 40px;
  
}
.main-menu > ul > li > a {
  color: #3e3e3e;
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 30px;
  text-transform: uppercase;
  padding: 15px 0;
  box-sizing: border-box;
}
.main-menu.text-black > ul > li > a {
  color: #3e3e3e;
}
.main-menu.text-white > ul > li > a {
  color: #ffffff;
}
.main-menu > ul > li:active > a,
.main-menu > ul > li:hover > a {
  color: #a2c4eb;
}

.float-left {
  float: left;
}
.float-right {
  float: right;
}

</style>