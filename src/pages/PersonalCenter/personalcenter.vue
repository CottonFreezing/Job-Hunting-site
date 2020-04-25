<template>
  <div class="w pc-session">
    <el-container>
      <el-aside class="pc-aside">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo p-aside"
          @select="handleSelect"
          text-color="#333"
          active-text-color="#ffd04b"
        >
          <router-link to="mybase">
            <el-menu-item index="1">个人信息</el-menu-item>
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
      token: "",
      username: "",
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === "3") {
        var c = confirm("确认退出登录？");
        if (c) {
          this.$cookie.delete("token");
          this.$cookie.delete('userid')
          this.$cookie.delete("username");
          this.$cookie.delete("cid");
          this.$router.replace("/");
          this.$router.go(0)
        
        }
      }
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.username = this.$cookie.get("username")
    this.token =this.$cookie.get("token")
    this.userid = this.$cookie.get('userid')
    this.cid = this.$cookie.get('cid')
  }
};
</script>

<style>
.pc-session {
  margin: 10px auto;
}
.pc-session .el-main {
  background-color: white;
}
.pc-aside {
  /* color: aliceblue; */
  height: 520px;
  margin-right: 20px;
}
.p-aside .el-menu-item {
  font-size: 16px;
}
</style>