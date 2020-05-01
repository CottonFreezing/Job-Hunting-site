<template>
  <div class="home-session clearfix w">
    <el-container>
      <!-- 搜索栏 -->
      <el-header height="80px">
        <div class="search">
          <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
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
              v-for="a in position"
              :key="a.id"
            >
              <div class="menu-aside">
                <p v-for="c in a.cvalue" :key="c.id">
                  <span v-for="d in c.dvalue" :key="d.id" @click="dianji(d.value)">
                    <a href="javascript:;">{{d.value}}</a>
                  </span>
                </p>
              </div>
              <p class="menu-title" slot="reference">
                <span class="title-first">{{a.avalue}}</span>
                <span v-for="b in a.bvalue" :key="b.id" @click="dianji(b.value)">
                  <a href="javascript:;">{{b.value}}</a>
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
            <div v-for="o in newworkbox" :key="o.id" @click="showdetail(o.jid)">
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
      keyword: "",
      select: "",
      list: [],
      select: "",
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
      newworkbox: [],
      position: [
        {
          id: 0,
          avalue: "后端开发",
          bvalue: [
            { id: 0, value: "Java" },
            { id: 1, value: "c#" },
            { id: 2, value: "python" },
            { id: 3, value: "PHP" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "后端开发" },
                { id: 1, value: "Java" },
                { id: 2, value: " C++" },
                { id: 3, value: "数据挖掘" },
                { id: 4, value: "Python" },
                { id: 5, value: ".NET" },
                { id: 6, value: "C" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "Hadoop" },
                { id: 1, value: " Delphi" },
                { id: 2, value: "VB" },
                { id: 3, value: "Perl" },
                { id: 4, value: "Ruby" },
                { id: 5, value: "Node.js" },
                { id: 6, value: "PHP" }
              ]
            },
            {
              id: 2,
              dvalue: [
                { id: 0, value: "搜索算法" },
                { id: 1, value: "Golang" },
                { id: 2, value: "推荐算法" },
                { id: 3, value: "Erlang" },
                { id: 4, value: "算法工程师" },
                { id: 5, value: "C#" }
              ]
            },
            {
              id: 3,
              dvalue: [
                { id: 0, value: "语音/视频/图形开发" },
                { id: 1, value: "数据采集" }
              ]
            }
          ]
        },
        {
          id: 1,
          avalue: "移动开发",
          bvalue: [
            { id: 0, value: "HTML5" },
            { id: 1, value: "Android" }
          ],
          cvalue: [
            {
              id: 1,
              dvalue: [
                { id: 0, value: "移动开发" },
                { id: 1, value: "HTML5" },
                { id: 2, value: " iOS" },
                { id: 3, value: "WP" },
                { id: 4, value: "移动web前端" },
                { id: 5, value: "Flash开发" }
              ]
            },
            {
              id: 2,
              dvalue: [
                { id: 0, value: "JavaScript" },
                { id: 1, value: " U3D" },
                { id: 2, value: "COCOS2DX" }
              ]
            }
          ]
        },
        {
          id: 2,
          avalue: "前端开发",
          bvalue: [
            { id: 0, value: "web前端" },
            { id: 1, value: "JavaScript" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "前端开发" },
                { id: 1, value: "web前端" },
                { id: 2, value: " JavaScript" },
                { id: 3, value: "Flash开发" },
                { id: 4, value: "HTML5" }
              ]
            }
          ]
        },
        {
          id: 3,
          avalue: "测 试",
          bvalue: [
            { id: 0, value: "测试工程师" },
            { id: 1, value: "功能测试" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "测试工程师" },
                { id: 1, value: "自动化测试" },
                { id: 2, value: " 功能测试" },
                { id: 3, value: "性能测试" },
                { id: 4, value: "测试开发" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "游戏测试" },
                { id: 1, value: " 硬件测试" },
                { id: 2, value: "软件测试" },
                { id: 3, value: "移动端测试" },
                { id: 4, value: "Flash开发" }
              ]
            }
          ]
        },
        {
          id: 4,
          avalue: "运维/技术支持",
          bvalue: [{ id: 0, value: "网络工程师" }],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "运维工程师" },
                { id: 1, value: "运维开发工程师" },
                { id: 2, value: "网络工程师" },
                { id: 3, value: "系统工程师" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "系统安全" },
                { id: 1, value: " DBA" },
                { id: 2, value: "系统管理员" },
                { id: 3, value: "IT技术支持" },
                { id: 4, value: "网络安全" }
              ]
            }
          ]
        },
        {
          id: 5,
          avalue: "数 据",
          bvalue: [
            { id: 0, value: "ETL工程师" },
            { id: 1, value: "数据架构师" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "数 据" },
                { id: 1, value: "ETL工程师" },
                { id: 2, value: " 数据仓库" },
                { id: 3, value: "数据开发" },
                { id: 4, value: "数据挖掘" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "数据分析师" },
                { id: 1, value: " 数据架构师" },
                { id: 2, value: "算法研究员" }
              ]
            }
          ]
        },
        {
          id: 6,
          avalue: "项目管理",
          bvalue: [
            { id: 0, value: "项目经理" },
            { id: 1, value: "需求分析工程师" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "项目经理" },
                { id: 1, value: "项目主管" },
                { id: 2, value: "项目助理" },
                { id: 3, value: "项目专员" },
                { id: 4, value: "实施顾问" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "需求分析工程师" },
                { id: 1, value: "实施工程师" }
              ]
            }
          ]
        },
        {
          id: 7,
          avalue: "硬件开发",
          bvalue: [
            { id: 0, value: "硬件" },
            { id: 1, value: "嵌入式" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "硬件" },
                { id: 1, value: "嵌入式" },
                { id: 2, value: "自动化" },
                { id: 3, value: "单片机" },
                { id: 4, value: "电路设计" },
                { id: 5, value: "FPGA开发" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "DSP开发" },
                { id: 1, value: " ARM开发" },
                { id: 2, value: "PCB工艺" },
                { id: 3, value: "射频工程师" }
              ]
            }
          ]
        },
        {
          id: 8,
          avalue: "通 信",
          bvalue: [
            { id: 0, value: "光传输工程师" },
            { id: 1, value: "核心网工程师" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "通信技术工程师" },
                { id: 1, value: "通信研发工程师" },
                { id: 2, value: "数据通信工程师" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "电信交换工程师" },
                { id: 1, value: " 有线传输工程师" },
                { id: 2, value: "无线射频工程师" }
              ]
            },
            {
              id: 2,
              dvalue: [
                { id: 0, value: "通信项目专员" },
                { id: 1, value: "通信项目经理" },
                { id: 2, value: "核心网工程师" },
                { id: 3, value: "通信测试工程师" }
              ]
            },
            {
              id: 3,
              dvalue: [
                { id: 0, value: "光通信工程师" },
                { id: 1, value: "光传输工程师" },
                { id: 2, value: "光网络工程师" }
              ]
            },
            {
              id: 4,
              dvalue: [
                { id: 0, value: "移动通信工程师" },
                { id: 1, value: "电信网络工程师" },
                { id: 2, value: "通信电源工程师" }
              ]
            },
            {
              id: 5,
              dvalue: [{ id: 0, value: "通信标准化工程师" }]
            }
          ]
        },
        {
          id: 9,
          avalue: "电子/半导体",
          bvalue: [
            { id: 0, value: "电气工程师" },
            { id: 1, value: "FAE" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "电子工程师" },
                { id: 1, value: "电气工程师" },
                { id: 2, value: "FAE" },
                { id: 3, value: "电气设计工程师" }
              ]
            }
          ]
        },
        {
          id: 10,
          avalue: "高端技术职位",
          bvalue: [
            { id: 0, value: "技术经理" },
            { id: 1, value: "测试经理" }
          ],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "高端技术职位" },
                { id: 1, value: "技术经理" },
                { id: 2, value: "技术总监" },
                { id: 3, value: "测试经理" },
                { id: 4, value: "架构师" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "CTO" },
                { id: 1, value: " 运维总监" },
                { id: 2, value: "技术合伙人" }
              ]
            }
          ]
        },
        {
          id: 11,
          avalue: "人工智能",
          bvalue: [{ id: 0, value: "智能驾驶系统工程师" }],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "智能驾驶系统工程师" },
                { id: 1, value: "反欺诈/风控算法" },
                { id: 2, value: "人工智能" },
                { id: 3, value: "机器学习" }
              ]
            },
            {
              id: 1,
              dvalue: [
                { id: 0, value: "深度学习" },
                { id: 1, value: " 语音识别" },
                { id: 2, value: "图像识别" },
                { id: 3, value: "算法研究员" },
                { id: 4, value: "自然语言处理" }
              ]
            }
          ]
        },
        {
          id: 12,
          avalue: "销售技术支持",
          bvalue: [{ id: 0, value: "售前工程师" }],
          cvalue: [
            {
              id: 0,
              dvalue: [
                { id: 0, value: "销售技术支持" },
                { id: 1, value: "售前工程师" },
                { id: 2, value: "售后工程师" }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$axios
      .get("/home/getjob")
      .then(res => {
        if (res.status === 200) {
          this.newworkbox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    jobSearch() {
      if (this.select === "1") {
        this.$axios
          .get("/home/jobsearch", {
            params: {
              job: this.keyword,
              company: ""
            }
          })
          .then(res => {
            if (res.status === 200) {
             var jb = []
             jb = res.data.data
              alert(jb[1].salary)
              this.$router.push({name:"/job",query:{jb:jb}});
             
            }
          });
      } else if (this.select === "2") {
        this.$axios
          .get("/home/jobsearch", {
            params: { job: "", company: this.keyword }
          })
          .then(res => {
            if (res.status === 200) {
              // var id = res.data.data.jcompany;
              this.$router.push("/company");
            }
          });
      } else {
        alert("请选择职位或公司搜索");
      }
    },
    showdetail(id) {
      this.$axios
        .get("/home/?jid=" + id)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: "/joblist", query: { jid: id } });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    dianji(value) {
      this.$axios
        .get("/home/menu/?value=" + value)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: "/joblist" });
          }
        })
        .catch(err => {
          console.log(err);
        });
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
.el-header .search .el-button {
  background-color: black !important;
  color: #fff !important;
}
.search .el-button:hover {
  background-color: rgb(121, 120, 120);
}
/* menu菜单栏 */
.h-a-l {
  background-color: #fff;
  padding: 3px;
  border-radius: 5px;
}
.menu-title {
  position: relative;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  margin: 7px 0;
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
  /* float: left;
   word-wrap:break-word; */
}

.menu-aside p span {
  margin: 0 17px;
  font-size: 16px;
}
.menu-aside div {
  float: left;
}
/* 侧边栏 */
.home-aside {
  padding: 7px;
  /* background-color: rgb(214, 211, 211); */
  color: #333;
  text-align: center;
  line-height: 200px;
  border-radius: 5px;
  /* border-bottom-left-radius: 5px; */
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
.el-card__body {
    padding: 20px;
    overflow: auto;
}
</style>