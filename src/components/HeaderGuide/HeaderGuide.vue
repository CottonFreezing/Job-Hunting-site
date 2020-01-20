// 头部导航
<template>
  <div class="header-section clearfix">
    <el-container>
      <!-- header -->
      <el-header class="header-guide">
        <div class="header-border">
          <!--Logo-->
          <div class="float-left">
            <a href="javascript:;" class="header-logo">
              <font color="white" face="楷体" size="6">IT精英招聘网</font>
            </a>
          </div>
          <!--Menu-->
          <div class="float-right">
            <div class="main-menu multi-page-menu text-white">
              <ul>
                <li>
                  <a href="javascript:;">首页</a>
                </li>
                <li>
                  <a href="javascript:;">职位信息</a>
                </li>
                <li>
                  <a href="javascript:;">公司信息</a>
                </li>
                <li>
                  <a href="javascript:;">上传简历</a>
                </li>
                <li>
                  <a href="javascript:;">我的</a>
                </li>
              </ul>
            </div>
            <div class="header-social text-white float-right">
              <a href="javascript:;" id="denglu">
                <i class="ion-social-vimeo-outline">登录</i>
              </a>
              <span>|</span>

              <a href="javascript:;">
                <i class="ion-social-dribbble-outline">注册</i>
              </a>
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
export default {};
</script>

<style>
.header-section {
  position: relative;
  
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
  line-height: 60x;
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
.main-menu > ul > li.active > a,
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