<template>
  <div class="candidateslist-session w">
    <el-container>
      <el-main class="candidateslist-main">
        <div class="cdm-h">
          <el-avatar :src="headimg" :size="60"></el-avatar>
          <li class="cdm-name">{{name}}</li>
        </div>
        <div class="base-infor">
          <h3>基本信息</h3>
          <p>
            <span>
              <i class="project-title">性  别：</i>
              {{sex}}
            </span>
            <span>
              <i class="project-title">出生日期：</i>
              {{birth}}
            </span>
          </p>
          <p>
            <span>
              <i class="project-title">邮  箱：</i>
              {{email}}
            </span>
            <span>
              <i class="project-title">电  话：</i>
              {{telephone}}
            </span>
          </p>
          <p>
            <span>
              <i class="project-title">国  籍：</i>
              {{nationality}}
            </span>
          </p>
        </div>

        <div class="desired">
          <h3>期望职位</h3>
          <p>
            <span>{{desiredjob}}</span>
            <span>{{desiredsalary}}</span>
            <span>{{desiredcity}}</span>
          </p>
        </div>

        <div class="edu">
          <h3>教育经验</h3>
          <p>
            <span>{{eschool}}</span>
            <span>{{date1}}-{{date2}}</span>
            <span>{{esubject}}</span>
            <span>{{eacademic}}</span>
          </p>
        </div>

        <div>
          <h3>项目经验</h3>
          <p>
            <span class="project-title">项目名称：</span>
            <span>{{projectname}}</span>
          </p>
          <p>
            <span class="project-title">担任职务：</span>
            <span>{{duty}}</span>
          </p>
          <p>
            <span class="project-title">开始时间：</span>
            <span>{{starttime}}</span>
            <span class="project-title">结束时间：</span>
            <span>{{endtime}}</span>
          </p>
          <p>
            <span class="project-title">项目描述：</span>
            <span>{{description}}</span>
          </p>
        </div>
        <div>
          <h3>自我描述</h3>
          <p>
            <span>{{assessment}}</span>
          </p>
        </div>
      </el-main>
      <!-- aside -->
      <el-aside class="candidateslist-aside">
        <el-button type="primary" class="invitational">邀请面试</el-button>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      sex: "男",
      birth: "1992-2-2",
      nationality: "中国",
      email: "1234@qq.com",
      telephone: "12345678901",
      desiredjob: "IT",
      desiredsalary: "5k-8k",
      desiredcity: "杭州",
      eschool: "安徽科技学院",
      esubject: "计算机专业",
      eacademic: "本科",
      projectname: "IT招聘网站",
      duty: "总揽全局",
      starttime: "20200101",
      endtime: "20200230",
      description:
        "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
      assessment:
        "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",

      date1: "2016-09-01",
      date2: "2020-06-30",
      academic: "本科",
      company: "阿里巴巴",
      stage: "已上市",
      kind: "互联网",
      hr: "金先生",
      time: "2020-1-17",
      candidatesdescription:
        "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
      url: require("./images/baidu.jpg"),
      scale: "1000人以上",
      headimg: require("./images/3.jpg"),
      candidatesneed:
        "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。",
      comintroduce:
        "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
      address: "北京市 朝阳区 望京大厦",
    };
  }
};
</script>

<style scoped>
.candidateslist-session {
  position: relative;
}

/* main部分信息 */
.candidateslist-main {
  padding: 30px 40px;
  background-color: #fff;
  margin-top: 10px;
}
.candidateslist-main h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 10px;
}
.candidateslist-main div {
  margin: 30px 0;
  border-bottom: 1px dotted #9190905b;
  padding-bottom: 10px;
}
.candidateslist-main p {
  font-size: 16px;
  color: #333;
  margin: 5px 20px;
  line-height: 30px;
}
.project-title {
  font-weight: 600;
  color: rgb(107, 106, 106);
}
.edu p span,
.desired p span {
  margin: 0 80px 0 0;
}
.cdm-h {
  position: relative;
  margin: 20px;
}
.cdm-name {
  position: absolute;
  font-size: 24px;
  margin: 10px 20px;
  display: inline-block;
  width: 100px;
  height: 60px;
  top: 10px;
}
.base-infor span {
  display: inline-block;
  width: 330px;
  margin-right: 50px;
}
.base-infor span i {
  margin-right: 7px;
  font-style: normal;
}
/* aside部分信息 */
.candidateslist-aside {
  margin-left: 5px;
  padding: 10px;
  background-color: #fff;
}

.invitational {
  margin: 50px;
}

</style>