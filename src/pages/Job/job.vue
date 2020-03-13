<template>
  <div class="w job-session">
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
        <!-- 导航栏 -->
        <div class="job-info">
          <ul>
            <li v-for="a in info" :key="a.id">
              <div class="info-title">{{a.value}}：</div>
              <div class="into-select">
              <div v-for="b in a.box" :key="b.id">
                <span
                  @click="stylechange(a.id, b.name_id)"
                  :class="[active_id[a.id]==b.name_id ? 'addClass':'']"
                >
                  <a>{{b.value}}</a>
                </span>
                </div>
                <div v-if="(!a.id)">
                  <el-popover placement="bottom" width="550" trigger="hover">
                    <div class="more">
                      <p>ABCDEF</p>
                      <p>
                        <span>
                          <a href="javascript:;">北京</a>
                        </span>
                        <span>
                          <a href="javascript:;">长春</a>
                        </span>
                        <span>
                          <a href="javascript:;">成都</a>
                        </span>
                        <span>
                          <a href="javascript:;">重庆</a>
                        </span>
                        <span>
                          <a href="javascript:;">长沙</a>
                        </span>
                        <span>
                          <a href="javascript:;">常州</a>
                        </span>
                        <span>
                          <a href="javascript:;">东莞</a>
                        </span>
                        <span>
                          <a href="javascript:;">大连</a>
                        </span>
                        <span>
                          <a href="javascript:;">佛山</a>
                        </span>
                        <span>
                          <a href="javascript:;">福州</a>
                        </span>
                      </p>

                      <p>GHIJ</p>
                      <p>
                        <span>
                          <a href="javascript:;">贵阳</a>
                        </span>
                        <span>
                          <a href="javascript:;">广州</a>
                        </span>
                        <span>
                          <a href="javascript:;">哈尔滨</a>
                        </span>
                        <span>
                          <a href="javascript:;">合肥</a>
                        </span>
                        <span>
                          <a href="javascript:;">海口</a>
                        </span>
                        <span>
                          <a href="javascript:;">杭州</a>
                        </span>
                        <span>
                          <a href="javascript:;">惠州</a>
                        </span>
                        <span>
                          <a href="javascript:;">金华</a>
                        </span>
                        <span>
                          <a href="javascript:;">济南</a>
                        </span>
                        <span>
                          <a href="javascript:;">嘉兴</a>
                        </span>
                      </p>

                      <p>KLMN</p>
                      <p>
                        <span>
                          <a href="javascript:;">昆明</a>
                        </span>
                        <span>
                          <a href="javascript:;">廊坊</a>
                        </span>
                        <span>
                          <a href="javascript:;">宁波</a>
                        </span>
                        <span>
                          <a href="javascript:;">南昌</a>
                        </span>
                        <span>
                          <a href="javascript:;">南京</a>
                        </span>
                        <span>
                          <a href="javascript:;">南宁</a>
                        </span>
                        <span>
                          <a href="javascript:;">南通</a>
                        </span>
                      </p>

                      <p>OPQR</p>
                      <p>
                        <span>
                          <a href="javascript:;">青岛</a>
                        </span>
                        <span>
                          <a href="javascript:;">泉州</a>
                        </span>
                      </p>

                      <p>STUV</p>
                      <p>
                        <span>
                          <a href="javascript:;">上海</a>
                        </span>
                        <span>
                          <a href="javascript:;">石家庄</a>
                        </span>
                        <span>
                          <a href="javascript:;">绍兴</a>
                        </span>
                        <span>
                          <a href="javascript:;">沈阳</a>
                        </span>
                        <span>
                          <a href="javascript:;">深圳</a>
                        </span>
                        <span>
                          <a href="javascript:;">苏州</a>
                        </span>
                        <span>
                          <a href="javascript:;">天津</a>
                        </span>
                        <span>
                          <a href="javascript:;">太原</a>
                        </span>
                        <span>
                          <a href="javascript:;">台州</a>
                        </span>
                      </p>

                      <p>WXYZ</p>
                      <p>
                        <span>
                          <a href="javascript:;">武汉</a>
                        </span>
                        <span>
                          <a href="javascript:;">无锡</a>
                        </span>
                        <span>
                          <a href="javascript:;">温州</a>
                        </span>
                        <span>
                          <a href="javascript:;">西安</a>
                        </span>
                        <span>
                          <a href="javascript:;">厦门</a>
                        </span>
                        <span>
                          <a href="javascript:;">烟台</a>
                        </span>
                        <span>
                          <a href="javascript:;">珠海</a>
                        </span>
                        <span>
                          <a href="javascript:;">中山</a>
                        </span>
                        <span>
                          <a href="javascript:;">郑州</a>
                        </span>
                      </p>
                    </div>
                    
                    <div slot="reference"  @click="flag=ture">
                      <a href="javascript:;">其他<i class="el-icon-caret-bottom"></i></a>
                    </div>
                  </el-popover>
                </div>
              </div>
              
            </li>
            </ul>
        </div>
        <!-- 工作列表 -->
        <el-card class="job-card" shadow="always">
          <div v-for="(j,index) in jobBox" :key="j.id">
            <div class="j-card">
              <router-link :to="{name:'/joblist', query:{id:index}}">
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
              </router-link>
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
          :total="jobBox.length"
          v-model="jobBox"
        ></el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      companyBox: [],
      pageSize: 6, //每页的数据
      currentPage: 1, //初始页
      pageNo: 1, //当前页数

      info: [
        {
          id: 0,
          value: "公司地点",
          box: [
            {
              id: 0,
              name_id: "placeAll",
              value: "全国"
            },
            {
              id: 1,
              name_id: "beijing",
              value: "北京"
            },
            {
              id: 2,
              name_id: "shanghai",
              value: "上海"
            },
            {
              id: 3,
              name_id: "hangzhou",
              value: "杭州"
            },
            {
              id: 4,
              name_id: "guangdong",
              value: "广东"
            },
            {
              id: 5,
              name_id: "shenzheng",
              value: "深圳"
            },
            {
              id: 6,
              name_id: "nanjing",
              value: "南京"
            },
            {
              id: 7,
              name_id: "tianjing",
              value: "天津"
            },
            {
              id: 8,
              name_id: "chongqing",
              value: "重庆"
            },
            {
              id: 9,
              name_id: "changsha",
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
              name_id: "workNone",
              value: "不限"
            },
            {
              id: 1,
              name_id: "workIntern",
              value: "实习生"
            },
            {
              id: 2,
              name_id: "workFG",
              value: "应届毕业生"
            },
            {
              id: 3,
              name_id: "workOne",
              value: "3年以下"
            },
            {
              id: 4,
              name_id: "workThree",
              value: "3-5年"
            },
            {
              id: 5,
              name_id: "workFive",
              value: "5-10年"
            },
            {
              id: 6,
              name_id: "workTen",
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
              value: "不限",
              name_id: "acaNone"
            },
            {
              id: 1,
              value: "高中及以下",
              name_id: "acaHeigh"
            },
            {
              id: 2,
              value: "大专",
              name_id: "acaJunior"
            },
            {
              id: 3,
              value: "本科",
              name_id: "acaCollege"
            },
            {
              id: 4,
              value: "硕士",
              name_id: "acaMaster"
            },
            {
              id: 5,
              value: "博士",
              name_id: "acaDoctor"
            }
          ]
        },
       
         {
          id: 3,
          value: "融资阶段",
          box: [
            {
              id: 0,
              value: "不限",
              name_id: "stageNone"
            },
            {
              id: 1,
              value: "未融资",
              name_id: "stageNo"
            },
            {
              id: 2,
              value: "天使轮",
              name_id: "stageAngel"
            },
            {
              id: 3,
              value: "A轮",
              name_id: "stageA"
            },
            {
              id: 4,
              value: "B轮",
              name_id: "stageB"
            },
            {
              id: 5,
              value: "C轮",
              name_id: "stageC"
            },
            {
              id: 6,
              value: "D轮及以上",
              name_id: "stageD"
            },
            {
              id: 7,
              value: "已上市",
              name_id: "stageOn"
            },
            {
              id: 8,
              value: "不需要融资",
              name_id: "stageNoNeed"
            }

          ]
        },
         {
          id: 4,
          value: "公司规模",
          box: [
            {
              id: 0,
              value: "不限",
              name_id: "scaleNone"
            },
            {
              id: 1,
              value: "0-20人",
              name_id: "scale20"
            },
            {
              id: 2,
              value: "20-99人",
              name_id: "scale99"
            },
            {
              id: 3,
              value: "100-499人",
              name_id: "scale499"
            },
            {
              id: 4,
              value: "500-999人",
              name_id: "scale999"
            },
            {
              id: 5,
              value: "1000-9999人",
              name_id: "scale9999"
            },
            {
              id: 6,
              value: "10000人",
              name_id: "scale10000"
            }
          ]
        },
      ],

      active_id: ["placeAll", "workNone", "acaNone","stageNone","scaleNone"],


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
      jobBox: []
    };
  },
  created() {
    this.$axios
      .get("./static/data/job.json")
      .then(res => {
        this.jobBox = res.data.message;
      })
      .catch(err => {
        console.log(err);
      });
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
    },
    handleSizeChange(size) {
      this.pageSize = size;
      console.log(size + "****");
    },
    handleCurrentChange(currentPage) {
      //点击页面项 的函数响应
      this.currentPage = currentPage;
      console.log(this.currentPage);
    },

    stylechange(a, b) {     
      this.active_id.splice(a,1,b)
      console.log(a,this.active_id);
    }
  }
};
</script>

<style>
.addClass {
  background-color: red;
  color:white !important;
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
.job-info .info-title{
  float: left;
  color: #555;
  font-weight: 600;
  margin: 2px 7px;
  padding: 2px;
}
/* .job-info div {
  display: inline-block; 
} */
.job-info .info-select{
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
.el-select {
  width: 700px;
}
.job-card {
  position: relative;
  height: 820px;
  overflow: hidden;
  padding-bottom: 20px;
  margin-top: 10px;
  display: inline-block;
  background-color: #fafafa9f;
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