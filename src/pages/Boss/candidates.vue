<template>
  <div class="w candidates-session">
    <el-container>
      <!-- 搜索栏 -->
      <el-header height="70px">
        <div class="search">
          <form action>
            <el-select
              v-model="value"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button
              type="info"
              icon="el-icon-search"
              size="medium"
              style="background-color:black"
            >搜索</el-button>
          </form>
        </div>
      </el-header>
      <el-main>

        <div class="candidates-info">
          <ul>
            <!-- 工作地点 -->
            <li class="candidates-place">
              <span>期望职位：</span>
              <span>
                <a href="javascript:;">后端</a>
              </span>
              <span>
                <a href="javascript:;">移动</a>
              </span>
              <span>
                <a href="javascript:;">前端</a>
              </span>
              <span>
                <a href="javascript:;">测试</a>
              </span>
              <span>
                <a href="javascript:;">运维/技术支持</a>
              </span>
              <span>
                <a href="javascript:;">数据</a>
              </span>
              <span></span>

              <!-- 融资阶段 -->
            </li>
            <!-- 工作经验 -->
            <li>
              <span>工作经验：</span>
              <span>
                <a href="javascript:;">不限</a>
              </span>
              <span>
                <a href="javascript:;">实习生</a>
              </span>
              <span>
                <a href="javascript:;">应届毕业生</a>
              </span>
              <span>
                <a href="javascript:;">三年及以下</a>
              </span>
              <span>
                <a href="javascript:;">3-5年</a>
              </span>
              <span>
                <a href="javascript:;">5-10年</a>
              </span>
              <span>
                <a href="javascript:;">10年以上</a>
              </span>
            </li>
            <!-- 学历要求 -->
            <li>
              <span>学历要求：</span>
              <span>
                <a href="javascript:;">不限</a>
              </span>
              <span>
                <a href="javascript:;">高中及以下</a>
              </span>
              <span>
                <a href="javascript:;">大专</a>
              </span>
              <span>
                <a href="javascript:;">本科</a>
              </span>
              <span>
                <a href="javascript:;">硕士</a>
              </span>
              <span>
                <a href="javascript:;">博士</a>
              </span>
            </li>
          </ul>
        </div>
        <!-- 应聘者列表 -->
        <el-card shadow="hover" class="candidates-card">
          <div v-for="(w,index) in candidatesBox" :key="w.id" >
            <router-link :to="{name:'/candidateslist',query:{id:index}}">
            <div class="cand-card ">
              <a href="javascript:;">
                <img :src="w.headimg" class="cand-logo" alt="头像" />
                <div class="cand-x">
                  <p class="cand-x-one">
                      <span>{{w.name}}</span>
                      <span class="c-x-o-j">{{w.desiredjob}}</span>
                    </p>
                  <p class="cand-x-two">
                      <span>{{w.sex}}</span>
                    <span>|</span>
                    <span>{{w.experience}}</span>
                    <span>|</span>
                    <span>{{w.academic}}</span>
                    <span>|</span>
                    <span>{{w.salary}}</span>
                  </p>
                </div>
              </a>
            </div>
            </router-link>
          </div>
        </el-card>
     

    <!-- 分页栏 -->
      <el-footer class="page">        
        <el-pagination background  :page-size="20" layout="prev, pager, next" :total="1000"></el-pagination>
      </el-footer>
       </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware"
      ],
      candidatesBox:[],
     
    };
  },
  created() {
    this.$axios.get('./static/data/candidates.json')
    .then( res => {
      this.candidatesBox = res.data.message
    })
    .catch(err => {
      console.log(err)
    })
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
};
</script>

<style>
.candidates-session {
  position: relative;
}
.candidates-info {
  background-color: #fafafa;
  padding: 10px;
}
.candidates-info ul li {
  margin: 20px 14px;
}
.candidates-palce {
  position: absolute;
}
.candidates-info span {
  margin: 0 7px;
}
/* 搜索栏 */
.search {
  height: 60px;
  width: 820px;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin: 5px auto;
  line-height: 60px;
}
.el-select {
  width: 700px;
}

/* 卡片栏 */
.candidates-card {
    position: relative; 
  padding: 1px 1px 20px 1px;
  margin: 20px 0;
  overflow: hidden;
  height: 490px;
}
.cand-card { 
  border: 1px dotted #c9c6c6ef;
  box-sizing: border-box;
  width: 360px;
  height: 100px;
  margin: 6px;
  float: left;
  line-height: 100px;
  box-shadow: 2px 2px 2px #d8d5d5;
  overflow: hidden;
}
.cand-logo {  
  left: 20px;
  width: 70px;
  height: 70px;
  margin: 10px 20px;
  float: left;
}
.cand-x {
    position: relative;
    margin: 5px 6px;
    width: 230px;
    height: 90px;
    float: left;
}
.cand-x-one {
    position: absolute;
    height: 50px;
    width: 220px;    
    line-height: 50px;
    text-align: center;
    float: left;
    top: 5px;
    left: 0;
    margin: 2px 5px;
     
}
.cand-x-one span {
    line-height: 50px;
    float: left;
   font-size: 20px;
   color: #0f0f0f; 
}
.cand-x-one .c-x-o-j {
    margin-left: 13px;
    font-size: 16px;
    font-weight: 600;
}
.cand-x-two {
    position: absolute;
    width: 210px;
    height: 40px;
    bottom: 5px;
    right: 10px;
    display: inline-block;
}
.cand-x-two span {
    margin: 0 2px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
</style>