<template>
  <div class="w job-session">
    <el-container>
      <!-- 搜索栏 -->
      <el-header height="70px">
        <div class="search">
          <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
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
      <el-main>
        <!-- 导航栏 -->
        <div class="job-info">
          <ul>
            <li v-for="a in info" :key="a.id">
              <div class="info-title">{{a.value}}：</div>
              <div class="into-select">
                <div v-for="b in a.box" :key="b.id">
                  <span
                    @click="stylechange(a.id, b.value),addCondition(b.value)"
                    :class="[active_id[a.id]==b.value ? 'addClass':'']"
                  >
                    <a>{{b.value}}</a>
                  </span>
                </div>
                <div v-if="(!a.id)">
                  <el-popover placement="bottom" width="550" trigger="hover">
                    <div class="more">
                      <div v-for="pa in placeBox" :key="pa.id">
                        <p>{{pa.avalue}}</p>
                        <p>
                          <span
                            v-for="n in pa.bvalue"
                            :key="n.id"
                            @click="stylechange(a.id,n.value),addCondition(n.value)"
                            :class="[active_id[a.id]==n.value ? 'addClass':'']"
                          >
                            <a>{{n.value}}</a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div slot="reference" @click="flag=ture">
                      <a href="javascript:;">
                        其他
                        <i class="el-icon-caret-bottom"></i>
                      </a>
                    </div>
                  </el-popover>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 工作列表 -->

        <el-card class="job-card" shadow="always">
          <div v-if="showcard">没有搜索到匹配结果</div>
          <div v-else v-for="j in showJobBox" :key="j.id" @click="jobJum(j.jid)">
            <div class="j-card">
              <!-- <router-link :to="{name:'/joblist', query:{id:index}}"> -->
              <div class="j-one">
                <p class="j-f">
                  <span class="j-jobname">{{j.jobname}}</span>
                  <span class="j-salary">{{j.salary}}</span>
                </p>
                <p class="j-s">
                  <span>{{j.place}}</span>
                  <span>|</span>
                  <span>{{j.experience}}</span>
                  <span>|</span>
                  <span>{{j.academic}}</span>
                </p>
              </div>
              <div class="j-two">
                <p class="j-f">
                  <span>{{j.company}}</span>
                </p>
                <p class="j-s">
                  <span>{{j.stage}}</span>
                  <span>|</span>
                  <span>{{j.kind}}</span>
                </p>
              </div>
              <div class="j-three">
                <p class="j-f">
                  <span class="j-hr">{{j.hr}}</span>
                </p>
                <p class="j-s">
                  <span class="j-time">发布于：{{j.time}}</span>
                </p>
              </div>
              <!-- </router-link> -->
            </div>
          </div>
        </el-card>
      </el-main>
      <el-footer class="page">
        <!-- 分页栏 -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size.sync="pageSize"
          layout="prev, pager, next"
          :total="showJobBox.length"
          v-model="showJobBox"
        ></el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      showcard: false,
      keyword: "",
      keyword2: "",
      value: false,
      companyBox: [],
      pageSize: 10, //每页的数据
      currentPage: 1, //初始页
      pageNo: 1, //当前页数
      position: "",
      job: "",
      placeBox: [
        {
          id: 0,
          avalue: "ABCDEF",
          bvalue: [
            { id: 0, value: "北京" },
            { id: 1, value: "长春" },
            { id: 2, value: "成都" },
            { id: 3, value: "重庆" },
            { id: 4, value: "长沙" },
            { id: 5, value: "常州" },
            { id: 6, value: "东莞" },
            { id: 7, value: "大连" },
            { id: 8, value: "佛山" },
            { id: 9, value: "福州" }
          ]
        },
        {
          id: 1,
          avalue: "GHIJ",
          bvalue: [
            { id: 0, value: "贵阳" },
            { id: 1, value: "广州" },
            { id: 2, value: "哈尔滨" },
            { id: 3, value: "合肥" },
            { id: 4, value: "海口" },
            { id: 5, value: "杭州" },
            { id: 6, value: "惠州" },
            { id: 7, value: "金华" },
            { id: 8, value: "济南" },
            { id: 9, value: "嘉兴" }
          ]
        },
        {
          id: 2,
          avalue: "KLMN",
          bvalue: [
            { id: 0, value: "昆明" },
            { id: 1, value: "廊坊" },
            { id: 2, value: "宁波" },
            { id: 3, value: "南昌" },
            { id: 4, value: "南京" },
            { id: 5, value: "南宁" },
            { id: 6, value: "南通" }
          ]
        },
        {
          id: 3,
          avalue: "OPQR",
          bvalue: [
            { id: 0, value: "青岛" },
            { id: 1, value: "泉州" }
          ]
        },
        {
          id: 4,
          avalue: "STUV",
          bvalue: [
            { id: 0, value: "上海" },
            { id: 1, value: "石家庄" },
            { id: 2, value: "绍兴" },
            { id: 3, value: "沈阳" },
            { id: 4, value: "深圳" },
            { id: 5, value: "苏州" },
            { id: 6, value: "天津" },
            { id: 7, value: "太原" },
            { id: 8, value: "台州" }
          ]
        },
        {
          id: 5,
          avalue: "WXYZ",
          bvalue: [
            { id: 0, value: "武汉" },
            { id: 1, value: "无锡" },
            { id: 2, value: "温州" },
            { id: 3, value: "西安" },
            { id: 4, value: "厦门" },
            { id: 5, value: "烟台" },
            { id: 6, value: "珠海" },
            { id: 7, value: "中山" },
            { id: 8, value: "郑州" }
          ]
        }
      ],

      info: [
        {
          id: 0,
          value: "公司地点",
          box: [
            {
              id: 0,
              value: "全国"
            },
            {
              id: 1,
              value: "北京"
            },
            {
              id: 2,
              value: "上海"
            },
            {
              id: 3,
              value: "杭州"
            },
            {
              id: 4,
              value: "guangdong",
              value: "广东"
            },
            {
              id: 5,
              value: "深圳"
            },
            {
              id: 6,
              value: "南京"
            },
            {
              id: 7,
              value: "天津"
            },
            {
              id: 8,
              value: "重庆"
            },
            {
              id: 9,
              value: "长沙"
            }
          ]
        },
        {
          id: 1,
          value: "工作经验",
          box: [
            {
              id: 0,
              value: "不限"
            },
            {
              id: 1,
              value: "实习生"
            },
            {
              id: 2,
              value: "应届毕业生"
            },
            {
              id: 3,
              value: "3年以下"
            },
            {
              id: 4,
              value: "3-5年"
            },
            {
              id: 5,
              value: "5-10年"
            },
            {
              id: 6,
              value: "10年以上"
            }
          ]
        },
        {
          id: 2,
          value: "学历要求",
          box: [
            {
              id: 0,
              value: "不限"
            },
            {
              id: 1,
              value: "高中及以下"
            },
            {
              id: 2,
              value: "大专"
            },
            {
              id: 3,
              value: "本科"
            },
            {
              id: 4,
              value: "硕士"
            },
            {
              id: 5,
              value: "博士"
            }
          ]
        },

        {
          id: 3,
          value: "融资阶段",
          box: [
            {
              id: 0,
              value: "不限"
            },
            {
              id: 1,
              value: "未融资"
            },
            {
              id: 2,
              value: "天使轮"
            },
            {
              id: 3,
              value: "A轮"
            },
            {
              id: 4,
              value: "B轮"
            },
            {
              id: 5,
              value: "C轮"
            },
            {
              id: 6,
              value: "D轮及以上"
            },
            {
              id: 7,
              value: "已上市"
            },
            {
              id: 8,
              value: "不需要融资"
            }
          ]
        },
        {
          id: 4,
          value: "公司规模",
          box: [
            {
              id: 0,
              value: "不限"
            },
            {
              id: 1,
              value: "0-20人"
            },
            {
              id: 2,
              value: "20-99人"
            },
            {
              id: 3,
              value: "100-499人"
            },
            {
              id: 4,
              value: "500-999人"
            },
            {
              id: 5,
              value: "1000-9999人"
            },
            {
              id: 6,
              value: "10000人"
            }
          ]
        }
      ],

      active_id: ["全国", "不限", "不限", "不限", "不限"],

      flag: false,
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
      jobBox: [],
      showJobBox: []
    };
  },
  created() {
    let jb = this.$route.query.jb
    this.$axios
      .get("/job/search", {
        params: {
          place: this.active_id[0],
          experience: this.active_id[1],
          academic: this.active_id[2],
          stage: this.active_id[3],
          scale: this.active_id[4],
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }
      })
      .then(res => {
        if (res.status === 200) {          
          this.jobBox = res.data.data.rows;
          if(jb.length==0){
          this.showJobBox = this.jobBox;
          }else{
            for(var i in jb){              
                this.showJobBox.push(this.jb[i])  
                alert(this.showJobBox)         
              
            }
          
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      console.log(size + "****");
    },
    handleCurrentChange(currentPage) {
      //点击页面项 的函数响应
      this.currentPage = currentPage;
      this.$axios
        .get("/job/search", {
          params: {
            keyword: this.keyword,
            place: this.active_id[0],
            experience: this.active_id[1],
            academic: this.active_id[2],
            stage: this.active_id[3],
            scale: this.active_id[4],
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {});
      console.log(this.currentPage);
    },

    stylechange(a, b) {
      this.active_id.splice(a, 1, b);
      console.log(a, this.active_id);
    },
    jobSearch() {
      if (this.keyword == "") {
        alert("请输入搜索内容");
        this.showJobBox = this.jobBox;
        return;
      } else {
        this.showJobBox = [];
        this.showcard = false;
        this.$axios
          .get("/job/search", {
            params: {
              keyword: this.keyword,
              place: this.active_id[0],
              experience: this.active_id[1],
              academic: this.active_id[2],
              stage: this.active_id[3],
              scale: this.active_id[4],
              currentPage: this.currentPage,
              pageSize: this.pageSize
            }
          })
          .then(res => {
            if (res.status === 200) {
              for (var i in res.data.data.rows) {
                this.showJobBox.push(res.data.data.rows[i]);
                alert(
                  res.data.data.rows[i].jobname,
                  this.showJobBox[i].company
                );
              }
              if (this.showJobBox.length == 0) {
                this.showcard = true;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
      /*else {
        this.showJobBox = []
        this.showcard = false
       for(var item in this.jobBox) {
          if (
            String(this.jobBox[item].jobname).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].palce).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].experience).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].academic).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].company).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].stage).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 ||
            String(this.jobBox[item].kind).toLowerCase().indexOf(this.keyword.toLowerCase()) != -1
          ) {
            this.showJobBox.push(this.jobBox[item]);
          }
        }
        if (this.showJobBox.length == 0) {
          this.showcard = true
        }
      }*/
    },
    addCondition(label) {
      this.showJobBox = [];
      this.showcard = false;
      this.$axios
        .get("/job/search", {
          params: {
            place: this.active_id[0],
            experience: this.active_id[1],
            academic: this.active_id[2],
            stage: this.active_id[3],
            scale: this.active_id[4],
            keyword: this.keyword,
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          if (res.status === 200) {
            for (var i in res.data.data.rows) {
              this.showJobBox.push(res.data.data.rows[i]);
            }
            if (this.showJobBox.length == 0) {
              this.showcard = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    jobJum(id) {
      this.$axios
        .get("/job/jumjoblist/?jid=" + id) //同companylist
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: "/joblist", query: { jid: id } });
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
.addClass {
  background-color: red;
  color: white !important;
}
.job-session {
  position: relative;
}
.job-info {
  background-color: #fafafa;
  padding: 10px 10px 10px 20px;
}
.job-info ul li {
  position: relative;
  margin: 20px 14px;
  overflow: hidden;
}
.job-info .info-title {
  float: left;
  color: #555;
  font-weight: 600;
  margin: 2px 7px;
  padding: 2px;
}
/* .job-info div {
  display: inline-block; 
} */
.job-info .info-select {
  width: 940px;
}
.job-info span {
  float: left;
  margin: 1px 7px;
  padding: 2px;
}

/* 下拉地区 */
.more p {
  margin: 7px;
}
.more p span {
  margin: 0 7px;
  font-size: 14px;
  color: #333;
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
.search .el-button {
  background-color: black;
  color: #fff !important;
}
.search .el-button:hover {
  background-color: rgb(121, 120, 120);
}
.job-card {
  position: relative;
  /* height: 820px; */
  overflow: hidden;
  padding-bottom: 20px;
  margin-top: 10px;
  display: inline-block;
  background-color: #fafafa9f;
  cursor: pointer;
}
.j-card {
  width: 1100px;
  height: 80px;
  margin: 7px 7px;
  padding: 5px 20px;
  box-sizing: border-box;
  line-height: 80px;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #d8d5d5;
  border: 1px dotted #c9c6c6ef;
  background-color: #fafafa77;
}
.j-one,
.j-two,
.j-three {
  float: left;
  height: 70px;
  color: #61687c;
}
.j-one {
  width: 340px;
  margin: 0 10px 0 0;
}
.j-two {
  width: 340px;
  margin: 0 40px;
}
.j-three {
  width: 270px;
  margin: 0 7px;
}
.j-f {
  position: absolute;
  height: 40px;
  font-weight: 400;
  font-size: 18px;
  box-sizing: border-box;
}
.j-f span {
  position: absolute;
  float: left;
  height: 40px;
  line-height: 40px;
  top: 0;
}
.j-s {
  height: 30px;
}
.j-s span {
  height: 30px;
  float: left;
  line-height: 30px;
  margin: 0 5px;
  top: 0;
}
.j-one p,
.j-two p {
  position: relative;
  width: 350px;
}
.j-three p {
  position: relative;
  width: 270px;
}
.j-jobname {
  color: black;
}
.j-salary {
  right: 10px;
  color: red;
}
.j-hr,
.j-time {
  position: absolute;
  font-size: 16px;
  color: #8d92a1;
  right: 10px;
}
.j-hr {
  color: black;
}
</style>