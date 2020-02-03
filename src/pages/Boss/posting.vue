<template>
  <div class="w">
    <el-container>
      <el-aside class="posting-aside">
        <div class="posting-p1">
          <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
            <el-menu-item index="0"  class="posting-button">
              <router-link to="postjob">
                <el-button type="info" plain size="medium" >
                  <i class="el-icon-circle-plus-outline"></i>
                  发 布 新 职 位
                </el-button>
              </router-link>
            </el-menu-item>
            <p class="posting-p1">我发布的职位</p>
            <router-link to="effectivejob">
              <el-menu-item index="1" class="el-menu-item-p">有效职位</el-menu-item>
            </router-link>
            <router-link to="offlinejob">
              <el-menu-item index="2" class="el-menu-item-p">已下线职位</el-menu-item>
            </router-link>
          </el-menu>
        </div>
      </el-aside>
      <el-main class="posting-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0"
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
/* 左侧栏 */
.posting-aside {
  margin: 20px 10px 10px 30px;
  background-color: rgb(214, 211, 211);
}
.posting-button {
  margin: 50px 35px 30px;
  font-size: 18px;
}
.posting-button .el-button {
  font-size: 18px; 
}
.posting-p1 p {
  color: #777;
  margin: 0 20px;
  font-size: 18px;
  height: 58px;
  line-height: 58px;
}
.posting-p1 .el-menu-item-p {
  padding: 0 20px;
  font-size: 16px;
  border-top: 1px dotted #777;
  box-sizing: border-box;
}
/* main部分 */
.posting-main {
  margin: 20px 30px 10px 40px;
  background-color: rgb(214, 211, 211);
  padding: 0 50px 60px;
}
</style>