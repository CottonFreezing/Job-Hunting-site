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
        <!-- 公司信息列表 -->
        <el-card shadow="hover" class="company-card">
          <div v-for="w in jobbox" :key="w.id" >
            <div class="cm-card ">
              <a href="javascript:;">
                <img :src="w.url" class="cm-logo" />
                <div class="cm-x">
                  <p class="cm-x-one">{{w.company}}</p>
                  <p class="cm-x-two">
                    <span>{{w.stage}}</span>
                    <span>|</span>
                    <span>{{w.kind}}</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </el-card>
        <el-footer class="page">
        <!-- 分页栏 -->
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
      jobbox: [
        {
          id: 0,
          url: require("./images/baidu.jpg"),
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网"
        },
        {
          id: 1,
          url: require("./images/baidu.jpg"),
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网"
        },
        {
          id: 2,
          url: require("./images/baidu.jpg"),
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网"
        },
        {
          id: 3,
          url: require("./images/baidu.jpg"),
          company: "阿里巴巴",
          stage: "已上市",
          kind: "互联网"
        }
      ]
    };
  }
};
</script>

<style scoped>
.company-session {
  position: relative;
}
.company-info {
  background-color: #fafafa;
  padding: 10px;
}
.company-info ul li {
  margin: 20px 14px;
}
.company-palce {
  position: absolute;
}

/* 公司卡片 */
.company-card {
    position: relative; 
  padding: -5px;
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
    float: left;
    top: 5px;
    left: 0;
    margin: 2px 5px;
    color: #0f0f0f;
   
}
.cm-x-two {
    position: absolute;
    width: 130px;
    height: 40px;
    bottom: 5px;
    right: 10px;
    display: inline-block;
}
.cm-x-two span {
    margin: 0 5px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
</style>