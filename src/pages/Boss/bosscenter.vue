<template>
  <div class="w bc-session">
    <el-container>
      <el-aside class="bc-aside">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo b-aside"
          @select="handleSelect"
          active-text-color="#ffd04b"
        >
          <router-link to="bossbase">
            <el-menu-item index="1">公司信息</el-menu-item>
          </router-link>
            <el-submenu index="2">
              <template slot="title">我收到的简历</template>
              <router-link to="unprocessed"><el-menu-item index="2-1">待处理简历</el-menu-item></router-link>
              <router-link to="notifyinterview"><el-menu-item index="2-2">已通知面试简历</el-menu-item></router-link>
              <router-link to="inappropriate"><el-menu-item index="2-3">不合适简历</el-menu-item></router-link>
            </el-submenu>
          <router-link to="bosschangepass">
            <el-menu-item index="3">修改密码</el-menu-item>
          </router-link>
          <el-menu-item index="4">退出登录</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="bc-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.bc-session {
  margin: 10px auto;
}
.bc-aside {
  padding-top: 50px;
  background-color: rgb(214, 211, 211);
  height: 520px;
}
.b-aside .el-menu-item, .b-aside .el-submenu {
  font-size: 16px;
}
.bc-main {
  background-color: rgb(214, 211, 211);
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>