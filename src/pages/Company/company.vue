// 公司信息
<template>
  <div class="w company-session">
    <el-container>
      <el-main>
        <!-- 公司信息导航栏 -->
        <div class="company-info">
          <ul>
            <!-- 公司地点 -->
            <li class="company-place">
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
            <!-- 公司领域 -->
            <li>
              <span>公司领域：</span>
              <span>
                <a href="javascript:;">不限</a>
              </span>
              <span>
                <a href="javascript:;">移动互联网</a>
              </span>
              <span>
                <a href="javascript:;">电 商</a>
              </span>
              <span>
                <a href="javascript:;">金 融</a>
              </span>
              <span>
                <a href="javascript:;">企业服务</a>
              </span>
              <span>
                <a href="javascript:;">教 育</a>
              </span>
              <span>
                <a href="javascript:;">文娱|内容</a>
              </span>
              <span>
                <a href="javascript:;">游 戏</a>
              </span>
              <span>
                <a href="javascript:;">消费生活</a>
              </span>
              <span>
                <a href="javascript:;">硬 件</a>
              </span>
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
.company-session {
  position: relative;
}
.company-info {
  background-color: #fafafa;
  padding: 10px 10px 10px 20px;
}
.company-info ul li {
  margin: 20px 14px;
}
.company-info span {
 margin: 0 7px; 
}
.company-palce {
  position: absolute;
}
/* 下拉地区 */ 
.more p {
  margin: 7px;
}
.more p span {
  margin: 0 7px;
  font-size: 16px;
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