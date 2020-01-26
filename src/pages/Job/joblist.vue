<template>
  <div class="joblist-session">
    <el-container>
      <el-header height="200px" class="joblist-header">
        <div class="j-h-left">
          <p class="j-h-jobname">
            <span>{{jobname}}</span>
            <span style="color: red">{{salary}}</span>
          </p>
          <p>
            <span>{{place}}</span>
            <span>*</span>
            <span>{{academic}}</span>
            <span>*</span>
            <span>{{experience}}</span>
          </p>
          <p>
            <span>{{time}}</span>
          </p>
        </div>
        <div class="j-h-right">
          <el-button icon="el-icon-star-off">收 藏</el-button>
          <el-button type="info">投 简 历</el-button>
        </div>
      </el-header>
      <el-container class="w">
      <el-main class="joblist-main">
          <div class="jm-h">
                   <el-avatar :src="headimg" :size="60"></el-avatar>
                  <li class="jm-hr">{{hr}}</li>
           </div>
        <div>
          <h3>职位描述</h3>
          <p>{{jobdescription}}</p>
        </div>
        
        <div>
          <h3>职位要求</h3>
          <p>{{jobneed}}</p>
        </div>

        <div>
          <h3>公司介绍</h3>
          <p>{{comintroduce}}</p>          
        </div>
        <div>
          <h3>工作地址</h3>
            <p>{{address}}</p>
        </div>
      </el-main>
      <!-- 公司基本信息 -->
      <el-aside class="joblist-aside">
          <el-card shadow="hover">   
            <div class="ja-card ">
              <a href="https://www.alibabagroup.com">
                <img :src="url"/>
                <div class="ja-x">
                  <p class="ja-x-one">{{company}}</p>
                    <span>{{stage}}</span>
                    <span>{{kind}}</span>
                    <span>{{scale}}</span>
                </div>
              </a>
            </div>
       
        </el-card>
      </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobname: "java工程师",
      salary: "10K-20k",
      place: "上海",
      experience: "1-3年",
      academic: "本科",
      company: "阿里巴巴",
      stage: "已上市",
      kind: "互联网",
      hr: "金先生",
      time: "2020-1-17",
      jobdescription:
        "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        url: require("./images/baidu.jpg"),
         scale: "1000人以上",
         headimg:require("./images/3.jpg"),
         jobneed: "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。",
        comintroduce:"阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
        address:"北京市 朝阳区 望京大厦",    
    };
  }
};
</script>

<style scoped>
.joblist-session {
  position: relative;
}
/* header部分信息 */
.joblist-header {
  margin: 0;
  height: 200px;
  width: 100%;
  padding: 0 60px;
  background: #010718e0;
}
.j-h-left {
  width: 800px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  float: left;
}

.j-h-left span {
  margin: 0 5px;
  font-size: 18px;
  color: #fff;
}
.j-h-left .j-h-jobname {
  margin: 35px 50px 20px 50px;
}
.j-h-left .j-h-jobname span {
  font-size: 30px;
  font-weight: 600;
  margin-right: 50px;
  color: #fff;
}
.j-h-left p {
  margin: 20px 10px 10px 60px;

}
.j-h-left p span {
      font-size: 16px;
}

.j-h-right {
  width: 350px;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  float: left;
  margin: 0 5px;
}
.j-h-right .el-button {
  margin: 20px 70px;
  display: block;
}
/* main部分信息 */
.joblist-main {
    padding:30px 40px;
       background-color: #fff;
       margin-top:10px; 
}
.joblist-main h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 10px;
}
.joblist-main div {
    margin: 30px 0;
    border-bottom: 1px dotted #9190905b;
    padding-bottom: 10px; 
}
.joblist-main p {
    font-size: 16px;
    color: #333;
    margin: 5px 20px;
    line-height: 30px;
}
.jm-h {
    position: relative;
    margin: 20px;
}
.jm-hr {
    position: absolute;
    font-size: 24px;
    margin: 10px 20px;
    display: inline-block;
    width: 100px;
    height: 60px;
    top: 10px;
}
/* aside部分信息 */
.joblist-aside {
    margin-left: 5px;
    padding: 10px;
}
.joblist-aside img {
  left: 20px;
  width: 150px;
  height: 150px;
  margin: 10px 40px;
  border: 1px dotted #333;
}
.ja-x {
    margin: 0 auto;
    width: 220px;
    padding: 5px;

}
.ja-x-one {
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align:center;
    margin: 0 auto;
    color: #0f0f0f;
   
}
.ja-x span {
    margin: 5px 3px;
    line-height: 40px;
    text-align:center;
    display: block;
    font-size: 14px;
}

</style>