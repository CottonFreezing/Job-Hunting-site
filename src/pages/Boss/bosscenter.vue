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
          <router-link to="changepass">
            <el-menu-item index="2">修改密码</el-menu-item>
          </router-link>
          <el-menu-item index="3">退出登录</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
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
  height: 520px;
}
.bc-aside {
  padding-top: 50px;
  background-color: rgb(214, 211, 211);
  height: 520px;
}
.b-aside .el-menu-item {
  font-size: 16px;
}
</style>