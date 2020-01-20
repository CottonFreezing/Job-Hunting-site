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
        <div class="job-info">
          <ul>
            <!-- 工作地点 -->
            <li class="job-place">
              <span>公司地点：</span>
              <span>
                <a href="javascript:;">全国</a>
              </span>
              <span>
                <a href="javascript:;">北京</a>
              </span>
              <span>
                <a href="javascript:;">上海</a>
              </span>
              <span>
                <a href="javascript:;">杭州</a>
              </span>
              <span>
                <a href="javascript:;">广州</a>
              </span>
              <span>
                <a href="javascript:;">深圳</a>
              </span>
              <span>
                <a href="javascript:;">南京</a>
              </span>
              <span>
                <a href="javascript:;">天津</a>
              </span>
              <span>
                <a href="javascript:;">重庆</a>
              </span>
              <span>
                <a href="javascript:;">长沙</a>
              </span>
              <span class="more">
                <a href="javascript:;">其他</a>
                <a href="javascript:;" class="triangle"></a>
              </span>
              <!-- triangle中隐藏的地点 -->
              <span id="box_expectCity" class="searchlist_expectCity">
                <span class="bot"></span>
                <span class="top"></span>
                <dl>
                  <dt>ABCDEF</dt>
                  <dd>
                    <span>北京</span>
                    <span>长春</span>
                    <span>成都</span>
                    <span>重庆</span>
                    <span>长沙</span>
                    <span>常州</span>
                    <span>东莞</span>
                    <span>大连</span>
                    <span>佛山</span>
                    <span>福州</span>
                  </dd>
                </dl>
                <dl>
                  <dt>GHIJ</dt>
                  <dd>
                    <span>贵阳</span>
                    <span>广州</span>
                    <span>哈尔滨</span>
                    <span>合肥</span>
                    <span>海口</span>
                    <span>杭州</span>
                    <span>惠州</span>
                    <span>金华</span>
                    <span>济南</span>
                    <span>嘉兴</span>
                  </dd>
                </dl>
                <dl>
                  <dt>KLMN</dt>
                  <dd>
                    <span>昆明</span>
                    <span>廊坊</span>
                    <span>宁波</span>
                    <span>南昌</span>
                    <span>南京</span>
                    <span>南宁</span>
                    <span>南通</span>
                  </dd>
                </dl>
                <dl>
                  <dt>OPQR</dt>
                  <dd>
                    <span>青岛</span>
                    <span>泉州</span>
                  </dd>
                </dl>
                <dl>
                  <dt>STUV</dt>
                  <dd>
                    <span>上海</span>
                    <span>石家庄</span>
                    <span>绍兴</span>
                    <span>沈阳</span>
                    <span>深圳</span>
                    <span>苏州</span>
                    <span>天津</span>
                    <span>太原</span>
                    <span>台州</span>
                  </dd>
                </dl>
                <dl>
                  <dt>WXYZ</dt>
                  <dd>
                    <span>武汉</span>
                    <span>无锡</span>
                    <span>温州</span>
                    <span>西安</span>
                    <span>厦门</span>
                    <span>烟台</span>
                    <span>珠海</span>
                    <span>中山</span>
                    <span>郑州</span>
                  </dd>
                </dl>
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
            <!-- 融资阶段 -->
            <li>
              <span>融资阶段：</span>
              <span>
                <a href="javascript:;">不限</a>
              </span>
              <span>
                <a href="javascript:;">未融资</a>
              </span>
              <span>
                <a href="javascript:;">天使轮</a>
              </span>
              <span>
                <a href="javascript:;">A轮</a>
              </span>
              <span>
                <a href="javascript:;">B轮</a>
              </span>
              <span>
                <a href="javascript:;">C轮</a>
              </span>
              <span>
                <a href="javascript:;">D轮及以上</a>
              </span>
              <span>
                <a href="javascript:;">已上市</a>
              </span>
              <span>
                <a href="javascript:;">不需要融资</a>
              </span>
            </li>
            <!-- 公司规模 -->
            <li>
              <span>公司规模：</span>
              <span>
                <a href="javascript:;">不限</a>
              </span>
              <span>
                <a href="javascript:;">0-20人</a>
              </span>
              <span>
                <a href="javascript:;">20-99人</a>
              </span>
              <span>
                <a href="javascript:;">100-499人</a>
              </span>
              <span>
                <a href="javascript:;">500-999人</a>
              </span>
              <span>
                <a href="javascript:;">1000-9999人</a>
              </span>
              <span>
                <a href="javascript:;">10000以上</a>
              </span>
            </li>
          </ul>
        </div>
        <!-- 工作列表 -->
        <el-card class="job-card" shadow="always">
          <div v-for="j in jobbox" :key="j.id">
            <div class="j-card">
              <a href="javascript:;">
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
              </a>
            </div>
          </div>
        </el-card>
      </el-main>
      <el-footer class="page">
        <!-- 分页栏 -->
        <el-pagination background  :page-size="20" layout="prev, pager, next" :total="1000"></el-pagination>
      </el-footer>
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
      jobbox: [
        {
          id: 0,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 1,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 2,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 3,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 4,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 5,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 6,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 7,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
        {
          id: 8,
          jobname: "java工程师",
          salary: "10K",
          place: "上海",
          experience: "1-3年",
          academic: "本科",
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网",
          hr: "金先生",
          time: "2020-1-17"
        },
       
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
.job-session {
  position: relative;
}
.job-info {
  background-color: #fafafa;
  padding: 10px;
}
.job-info ul li {
  margin: 20px 14px;
}
.job-palce {
  position: absolute;
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