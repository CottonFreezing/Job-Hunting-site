<template>
  <div class="home-session clearfix w">
    <el-container>
      <!-- 搜索栏 -->
      <el-header height="80px">
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
      <el-container>
        <!-- 侧边栏 用popover弹出框嵌套信息 -->
        <el-aside class="home-aside" width="380px" height="340px">
          <div>
            <div class="aui-content-menu">
              <div class="aui-content-menu-head">
                <div class="aui-content-menu-head-list">
                  <h2>职能</h2>
                  <a>行政</a>
                  <a>财务</a>
                  <a>人事/HR</a>

                  <i class="aui-content-menu-head-list-arrow"></i>
                </div>
              </div>
              <div class="aui-content-menu-dow aui-ds">
                <dl>
                  <dt>
                    <span>人力资源</span>
                  </dt>
                  <dd>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">人事/HR</a>

                    <a href="zhiwei.html" target="iframe_a" class="aui-a-curr">HRBP</a>
                    <a href="renlizhiyuan.html" target="iframe_a">经理培训</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span>行政</span>
                  </dt>
                  <dd>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">法务</a>
                    <a href="renlizhiyuan.html" target="iframe_a">行政</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span>财务</span>
                  </dt>
                  <dd>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">会计</a>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">出纳</a>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span>高端职位</span>
                  </dt>
                  <dd>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">行政总监/经理</a>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">财务总监/经理</a>
                    <a href="renlizhiyuan.html" target="iframe_a" class="aui-a-curr">HRD/HRM</a>
                    <a href="renlizhiyuan.html" target="iframe_a">CFO</a>
                  </dd>
                </dl>
              </div>
            </div>
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
            <div v-for="o in newworkbox" :key="o.id">
              <router-link to="/joblist">
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
              </router-link>
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
      imagesbox: [
        { id: 0, url: require("./images/1.jpg") },
        { id: 1, url: require("./images/2.jpg") }
      ],
      newworkbox: [
        {
          id: 0,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 1,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 2,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 3,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 4,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 5,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 6,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        },
        {
          id: 7,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "字节跳动",
          hr: "金先生",
          headimg: require("./images/3.jpg")
        }
      ]
    };
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
.el-select {
  width: 700px;
}
/* 侧边栏 */
.home-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
/* main主栏 */
.home-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 10px;
}
/* 轮播图 */
.el-carousel__item img {
  width: 100%;
  /* height: 500px; */
}
/* 职位表 */
.home-card {
  padding: -10px;
  background-color: #d1d4db;
}

.jobh-card {
  position: relative;
  width: 365px;
  height: 140px;
  background-color: rgb(246, 249, 250);
  box-shadow: 2px 2px 2px #d8d5d5;
  margin: 7px 7px;
  float: left;
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
  left: 7px;
}
.salary {
  right: 7px;
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