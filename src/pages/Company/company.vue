// 公司信息
<template>
  <div class="w company-session">
    <el-container>
      <el-main>
        <!-- 公司信息导航栏 -->
        <div class="company-info">
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
                <span v-if="(!a.id&&b.id==9)">
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
                </span>
              </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 公司信息列表 -->
        <el-card shadow="hover" class="company-card">
          <div v-for="w in companyBox" :key="w.id" >
            <div class="cm-card ">
              <a href="javascript:;">
                <img :src="w.logourl" class="cm-logo" alt="logo" />
                <div class="cm-x">
                  <p class="cm-x-one">{{w.company}}</p>
                  <p class="cm-x-two">
                    <span>{{w.stage}}</span>
                    <span>|</span>
                    <span>{{w.kind}}</span>
                    <span>|</span>
                    <span>{{w.scale}}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </el-card>
        <el-footer class="page">
        <!-- 分页栏 -->
          <el-pagination
          :hide-on-single-page="value"
          @size-change = "handleSizeChange"
            @current-change ="handleCurrentChange"
            background
            :current-page="currentPage"
            :page-size.sync="pageSize"
            layout="prev, pager, next"
            :total="companyBox.length"
            v-model="companyBox"
            
          ></el-pagination>
      </el-footer>
      </el-main>
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
      pageNo:1, //当前页数

      active_id: ["placeAll","stageNone","scaleNone","kindNone"],

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
          id: 2,
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
         {
          id: 3,
          value: "公司领域",
          box: [
            {
              id: 0,
              value: "不限",
              name_id: "kindNone"
            },
            {
              id: 1,
              value: "移动互联网",
              name_id: "mInternet"
            },
            {
              id: 2,
              value: "电商",
              name_id: "e-business"
            },
            {
              id: 3,
              value: "金融",
              name_id: "finance"
            },
            {
              id: 4,
              value: "企业服务",
              name_id: "services"
            },
            {
              id: 5,
              value: "教育",
              name_id: "education"
            },
            {
              id: 6,
              value: "文娱 | 内容",
              name_id: "entertainment"
            },
            {
              id: 7,
              value: "游戏",
              name_id: "game"
            },
            {
              id: 8,
              value: "消费生活",
              name_id: "consumption"
            },
            {
              id: 9,
              value: "硬件",
              name_id: "hardware"
            }
          ]
        }
      ],


    };
  },
  created(){
       this.$axios
      .get("./static/data/company.json")
    .then(res => {
        console.log(res.data);
        this.companyBox = res.data.message;
    })
      .catch(err => {
        console.log(err);
    })
  },
  methods: {

    handleSizeChange(size){
      this.pageSize = size;
            console.log(size+"****");
    },
    handleCurrentChange(currentPage) {
      //点击页面项 的函数响应
      this.currentPage = currentPage;
      console.log(this.currentPage)
    },
    stylechange(a, b) {
      // this.active_id[a] = b;
      this.active_id.splice(a,1,b)
     
      console.log(a,this.active_id);
    }
  },
 
  computed: {
    userdata: function() {
      return this.companyBox.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      ); //分页的核心思想，userdata指当前这一页要展示的数据，就可以用v-for来展示了。
    }
  }
};
</script>

<style scoped>
.addClass {
  background-color: red;
  color:white !important;
}
.company-session {
  position: relative;
}
.company-info {
  background-color: #fafafa;
  padding: 10px 10px 10px 20px;
}
.company-info ul li {
  position: relative;
  margin: 20px 14px;
  overflow: hidden;
}
.company-info .info-title{
  float: left;
  color: #555;
  font-weight: 600;
  margin: 2px 7px;
  padding: 2px;
}
/* .company-info div {
  display: inline-block;
} */
.company-info .info-select{
  width: 940px;
}
.company-info span {
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
/* 公司卡片 */
.company-card {
    position: relative; 
  padding: 1px 1px 20px 1px;
  margin: 20px 0;
  overflow: hidden;
}
.cm-card { 
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
.cm-logo {  
  left: 20px;
  width: 70px;
  height: 70px;
  margin: 10px 20px;
  float: left;
}
.cm-x {
    position: relative;
    margin: 5px 6px;
    width: 230px;
    height: 90px;
    float: left;
}
.cm-x-one {
    position: absolute;
    height: 50px;
    width: 130px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    float: left;
    top: 5px;
    left: 0;
    margin: 2px 5px;
    color: #0f0f0f;
}
.cm-x-two {
    position: absolute;
    width: 200px;
    height: 40px;
    bottom: 5px;
    right: 10px;
    display: inline-block;
}
.cm-x-two span {
    margin: 0 2px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
</style>