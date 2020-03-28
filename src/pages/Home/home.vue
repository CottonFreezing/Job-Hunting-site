<template>
  <div class="home-session clearfix w">
    <el-container>
      <!-- 搜索栏 -->
      <el-header height="80px">
        <div class="search">
        
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择" >
              <el-option label="职位" value="1"></el-option>
              <el-option label="公司" value="2"></el-option>
            </el-select>
            <el-button
              type="info"
              icon="el-icon-search"
              size="medium"             
              slot="append"
              @click="jobSearch"
            >搜索</el-button>
          </el-input>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 用popover弹出框嵌套信息 -->
        <el-aside class="home-aside" width="380px" height="340px">
          <div class="h-a-l">
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">后端开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">Java</a>
                  </span>
                  <span>
                    <a href="javascript:;">C++</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据挖掘</a>
                  </span>
                  <span>
                    <a href="javascript:;">Python</a>
                  </span>
                  <span>
                    <a href="javascript:;">.NET</a>
                  </span>
                  <span>
                    <a href="javascript:;">C</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">Hadoop</a>
                  </span>
                  <span>
                    <a href="javascript:;">Delphi</a>
                  </span>
                  <span>
                    <a href="javascript:;">VB</a>
                  </span>
                  <span>
                    <a href="javascript:;">Perl</a>
                  </span>
                  <span>
                    <a href="javascript:;">Ruby</a>
                  </span>
                  <span>
                    <a href="javascript:;">Node.js</a>
                  </span>
                  <span>
                    <a href="javascript:;">PHP</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">搜索算法</a>
                  </span>
                  <span>
                    <a href="javascript:;">Golang</a>
                  </span>
                  <span>
                    <a href="javascript:;">推荐算法</a>
                  </span>
                  <span>
                    <a href="javascript:;">Erlang</a>
                  </span>
                  <span>
                    <a href="javascript:;">算法工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">C#</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">语音/视频/图形开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据采集</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">后端开发</span>
                <span>
                  <a href="javascript:;">Java</a>
                </span>
                <span>
                  <a href="javascript:;">Python</a>
                </span>
                <span>
                  <a href="javascript:;">C#</a>
                </span>
                <span>
                  <a href="javascript:;">PHP</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">移动开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">HTML5</a>
                  </span>
                  <span>
                    <a href="javascript:;">iOS</a>
                  </span>
                  <span>
                    <a href="javascript:;">WP</a>
                  </span>
                  <span>
                    <a href="javascript:;">移动web前端</a>
                  </span>
                  <span>
                    <a href="javascript:;">Flash开发</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">JavaScript</a>
                  </span>
                  <span>
                    <a href="javascript:;">U3D</a>
                  </span>
                  <span>
                    <a href="javascript:;">COCOS2DX</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">移动开发</span>
                <span>
                  <a href="javascript:;">HTML5</a>
                </span>
                <span>
                  <a href="javascript:;">Android</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">测试工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">自动化测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">功能测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">性能测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">测试开发</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">游戏测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">硬件测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">软件测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">移动端测试</a>
                  </span>
                  <span>
                    <a href="javascript:;">Flash开发</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">测 试</span>
                <span>
                  <a href="javascript:;">测试工程师</a>
                </span>
                <span>
                  <a href="javascript:;">功能测试</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">运维工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">运维开发工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">网络工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">系统工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">系统安全 DBA</a>
                  </span>
                  <span>
                    <a href="javascript:;">系统管理员</a>
                  </span>
                  <span>
                    <a href="javascript:;">IT技术支持</a>
                  </span>
                  <span>
                    <a href="javascript:;">网络安全</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">运维/技术支持</span>
                <span>
                  <a href="javascript:;">网络工程师</a>
                </span>
                <span>
                  <a href="javascript:;">运维工程师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">数据</a>
                  </span>
                  <span>
                    <a href="javascript:;">ETL工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据仓库</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据挖掘</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据分析师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">数据架构师</a>
                  </span>
                  <span>
                    <a href="javascript:;">算法研究员</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">数 据</span>
                <span>
                  <a href="javascript:;">ETL工程师</a>
                </span>
                <span>
                  <a href="javascript:;">数据架构师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">项目经理</a>
                  </span>
                  <span>
                    <a href="javascript:;">项目主管</a>
                  </span>
                  <span>
                    <a href="javascript:;">项目助理</a>
                  </span>
                  <span>
                    <a href="javascript:;">项目专员</a>
                  </span>
                  <span>
                    <a href="javascript:;">实施顾问</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">需求分析工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">实施工程师</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">项目管理</span>
                <span>
                  <a href="javascript:;">项目经理</a>
                </span>
                <span>
                  <a href="javascript:;">需求分析工程师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">硬件</a>
                  </span>
                  <span>
                    <a href="javascript:;">嵌入式</a>
                  </span>
                  <span>
                    <a href="javascript:;">自动化</a>
                  </span>
                  <span>
                    <a href="javascript:;">单片机</a>
                  </span>
                  <span>
                    <a href="javascript:;">电路设计</a>
                  </span>
                  <span>
                    <a href="javascript:;">FPGA开发</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">DSP开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">ARM开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">PCB工艺</a>
                  </span>
                  <span>
                    <a href="javascript:;">射频工程师</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">硬件开发</span>
                <span>
                  <a href="javascript:;">硬件</a>
                </span>
                <span>
                  <a href="javascript:;">嵌入式</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">前端开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">web前端</a>
                  </span>
                  <span>
                    <a href="javascript:;">JavaScript</a>
                  </span>
                  <span>
                    <a href="javascript:;">Flash开发</a>
                  </span>
                  <span>
                    <a href="javascript:;">HTML5</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">前端开发</span>
                <span>
                  <a href="javascript:;">web前端</a>
                </span>
                <span>
                  <a href="javascript:;">JavaScript</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">通信技术工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">通信研发工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">数据通信工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">电信交换工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">有线传输工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">无线射频工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">通信项目专员</a>
                  </span>
                  <span>
                    <a href="javascript:;">通信项目经理</a>
                  </span>
                  <span>
                    <a href="javascript:;">核心网工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">通信测试工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">光通信工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">光传输工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">光网络工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">移动通信工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">电信网络工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">通信电源工程师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">通信标准化工程师</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">通 信</span>
                <span>
                  <a href="javascript:;">光传输工程师</a>
                </span>
                <span>
                  <a href="javascript:;">核心网工程师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">电子工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">电气工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">FAE</a>
                  </span>
                  <span>
                    <a href="javascript:;">电气设计工程师</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">电子/半导体</span>
                <span>
                  <a href="javascript:;">电气工程师</a>
                </span>
                <span>
                  <a href="javascript:;">FAE</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">高端技术职位</a>
                  </span>
                  <span>
                    <a href="javascript:;">技术经理</a>
                  </span>
                  <span>
                    <a href="javascript:;">技术总监</a>
                  </span>
                  <span>
                    <a href="javascript:;">测试经理</a>
                  </span>
                  <span>
                    <a href="javascript:;">架构师</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">CTO</a>
                  </span>
                  <span>
                    <a href="javascript:;">运维总监</a>
                  </span>
                  <span>
                    <a href="javascript:;">技术合伙人</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">高端技术职位</span>
                <span>
                  <a href="javascript:;">技术经理</a>
                </span>
                <span>
                  <a href="javascript:;">测试经理</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">智能驾驶系统工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">反欺诈/风控算法</a>
                  </span>
                  <span>
                    <a href="javascript:;">人工智能</a>
                  </span>
                  <span>
                    <a href="javascript:;">机器学习</a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="javascript:;">深度学习</a>
                  </span>
                  <span>
                    <a href="javascript:;">语音识别</a>
                  </span>
                  <span>
                    <a href="javascript:;">图像识别</a>
                  </span>
                  <span>
                    <a href="javascript:;">算法研究员</a>
                  </span>
                  <span>
                    <a href="javascript:;">自然语言处理</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">人工智能</span>
                <span>
                  <a href="javascript:;">智能驾驶系统工程师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
            <el-popover
              placement="right-start"
              width="600"
              trigger="hover"
              visible-arrow="false"
              effect="light"
            >
              <div class="menu-aside">
                <p>
                  <span>
                    <a href="javascript:;">销售技术支持</a>
                  </span>
                  <span>
                    <a href="javascript:;">售前工程师</a>
                  </span>
                  <span>
                    <a href="javascript:;">售后工程师</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">销售技术支持</span>
                <span>
                  <a href="javascript:;">售前工程师</a>
                </span>
                <span>
                  <a href="javascript:;">售后工程师</a>
                </span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </el-popover>
          </div>
        </el-aside>
        <el-main class="home-main" width="810px">
          <!-- 轮播图 -->
          <el-carousel indicator-position="none">
            <el-carousel-item v-for="item in imagesbox" :key="item.id">
              <img :src="item.url" />
            </el-carousel-item>
          </el-carousel>

          <!-- 工作列表 -->
          <el-card shadow="hover" class="home-card">
            <div v-for="o in newworkbox" :key="o.id" @click="showdetail(o.id)">
              <!-- <router-link to="/joblist"> -->
                <div class="jobh-card">
                  <p class="c-one">
                    <span class="workname">{{o.jobname}}</span>
                    <span class="salary">{{o.salary}}</span>
                  </p>
                  <p class="c-two">
                    <span>{{o.place}}</span>
                    <span>|</span>
                    <span>{{o.experience}}</span>
                    <span>|</span>
                    <span>{{o.academic}}</span>
                  </p>
                  <p class="c-three">
                    <span>
                      <el-avatar :src="o.headimg"></el-avatar>
                    </span>
                    <span class="company">{{o.company}}</span>
                    <span class="hr">{{o.hr}}</span>
                  </p>
                </div>
              <!-- </router-link> -->
            </div>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      select:"",
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
      imagesbox: [
        { id: 0, url: require("./images/1.jpg") },
        { id: 1, url: require("./images/2.jpg") }
      ],
      newworkbox: []
    };
  },
  created() {
    this.$axios
      .get("./static/data/job.json")
      .then(res => {
        this.newworkbox = res.data.message;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    jobSearch(){
      if(this.jobSearch == res.data.jobname){

      }
    },
    showdetail(id){
      this.$axios.get('/home/?id='+id)
      .then(res => {
        if(res.status === 200){
          this.$router.push({name:"/joblist", query: {id:id}})
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

  }
};
</script>

<style>
body > .el-container {
  margin-bottom: 40px;
}

.home-session {
  position: relative;
}
.search {
  height: 70px;
  width: 820px;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin: 5px auto;
  line-height: 70px;
}
.search .el-select {
  width: 130px;
}
 .search .el-select .el-input {
    width: 130px;
  }
.el-header .search .el-button{
   background-color:black !important;
   color:#fff !important;
}
.search .el-button:hover {
  background-color: rgb(121, 120, 120);
}
/* menu菜单栏 */
.h-a-l {
  background-color: #fff;
  padding: 7px;
  border-radius: 5px;
}
.menu-title {
  position: relative;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  margin: 5px 0;
  padding: 0 7px;
  line-height: 30px;
  text-align: left;
}
.menu-title i {
  position: absolute;
  line-height: 30px;
  right: 10px;
}
.menu-title span {
  margin: 0 10px;
  color: #333;
}
.title-first {
  font-size: 16px;
  font-weight: 600;
}

.menu-aside p {
  margin: 10px;
}

.menu-aside p span {
  margin: 0 17px;
  font-size: 16px;
}
/* 侧边栏 */
.home-aside {
  padding: 10px;
  /* background-color: rgb(214, 211, 211); */
  color: #333;
  text-align: center;
  line-height: 200px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
/* main主栏 */
.home-main {
  /* background-color: rgb(214, 211, 211); */
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
/* 轮播图 */
.el-carousel__item img {
  border-radius: 5px;
  width: 100%;
  /* height: 500px; */
}
/* 职位表 */
.home-card {
  padding: -10px;
  background-color: rgb(214, 211, 211);
}

.jobh-card {
  position: relative;
  width: 365px;
  height: 140px;
  background-color: rgb(246, 249, 250);
  box-shadow: 2px 2px 2px #d8d5d5;
  margin: 7px 7px;
  float: left;
  border-radius: 5px;
  cursor: pointer;
}
.c-one {
  height: 42px;
  color: #61687c;
}
.c-one span {
  position: absolute;
  float: left;
  height: 40px;
  top: 3px;
  font-size: 16px;
  line-height: 40px;
}
.workname {
  left: 15px;
}
.salary {
  right: 15px;
  color: red;
}
.c-two {
  height: 32px;
  margin: 0 10px;
  border-bottom: 1px dotted #727171;
  box-sizing: border-box;
  color: #8d92a1;
}
.c-two span {
  float: left;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin: 0px 5px;
}
.c-three {
  height: 50px;
  margin: 7px;
  line-height: 50px;
}
.c-three span {
  float: left;
  color: 61687c;
  margin: 0 5px;
}
.company {
  font-size: 20px;
  font-weight: 500;
}
.hr {
  font-size: 14px;
  color: #8d92a1;
  margin-left: 10px;
}
</style>