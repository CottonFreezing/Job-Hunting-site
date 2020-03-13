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
        <!-- 导航栏 -->
        <div class="candidates-info">
          <ul>
            <li v-for="a in info" :key="a.id">
              <div class="info-title">{{a.value}}：</div>
              <div class="info-select">
              <div v-for="b in a.box" :key="b.id">
                <span
                  @click="stylechange(a.id, b.name_id)"
                  :class="[active_id[a.id]==b.name_id ? 'addClass':'']"
                >
                  <a>{{b.value}}</a>
                </span>
                <!-- <span v-if="(!a.id&&b.id==9)">
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
                    <span></span>
                    <span slot="reference">
                      <a href="javascript:;">其他</a>
                      <a href="javascript:;" class="triangle" @click="flag=ture"></a>
                    </span>
                  </el-popover>
                </span> -->
              </div>
              </div>
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

       info: [
        {
          id: 0,
          value: "期望职位",
          box: [
            {
              id: 0,
              name_id: "jobNone",
              value: "不限"
            },
            {
              id: 1,
              name_id: "back",
              value: "后端开发"
            },
            {
              id: 2,
              name_id: "mobile",
              value: "移动开发"
            },
            {
              id: 3,
              name_id: "front",
              value: "前端开发"
            },
            {
              id: 4,
              name_id: "test",
              value: "测 试"
            },
            {
              id: 5,
              name_id: "operation",
              value: "运维/技术支持"
            },
            {
              id: 6,
              name_id: "database",
              value: "数 据"
            },
            {
              id: 7,
              name_id: "project",
              value: "项目"
            },
            {
              id: 8,
              name_id: "hardware",
              value: "硬件开发"
            },
            {
              id: 9,
              name_id: "communication",
              value: "通信"
            },
            {
              id: 10,
              name_id: "AI",
              value: "人工智能"
            },
            {
              id: 11,
              name_id: "HETPosition",
              value: "高端技术职位"
            },
            {
              id: 12,
              name_id: "tel-support",
              value: "销售技术支持"
            },
            {
              id: 13,
              name_id: "electron",
              value: "电子/半导体"
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
      ],

      active_id: ["jobNone", "workNone", "acaNone"],

     
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
.candidates-session {
  position: relative;
}
.candidates-info {
  background-color: #fafafa;
  padding: 10px;
}
.candidates-info ul li {
  position: relative;
  margin: 20px 14px;
  overflow: hidden;
}
.candidates-info .info-title{
  float: left;
  color: #555;
  font-weight: 600;
  margin: 2px 7px;
  padding: 2px;
}
.candidates-info div {
  display: inline-block;
}
.candidates-info .info-select{
  width: 940px;
}
.candidates-info span {
  float: left;
  margin: 1.5px 7px;
  padding: 2px;
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