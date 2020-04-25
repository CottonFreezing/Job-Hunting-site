<template>
  <div class="unprocessed-session">
    <el-main>
      <h2 class="un-title">待 处 理 简 历</h2>
      <el-divider></el-divider>
      <el-card>
        <div v-for="(u,index) in resumeBox" :key="u.id" @click="candidatesJum(u.cid)">
          <div class="box-card">
            <el-avatar shape="square" :size="80" :src="u.headimg"></el-avatar>
            <div class="un-info clearfix">
              <h2>
                <span class="resumename">{{u.resumename}}</span>
                <span class="un-time">投递时间：{{u.time}}</span>
              </h2>
              <p>
                <span>{{u.name}}</span>
                <span>/</span>
                <span>{{u.sex}}</span>
                <span>/</span>
                <span>{{u.academic}}</span>
                <span>/</span>
                <span>{{u.experience}}</span>
              </p>
              <p>
                <span class="un-job">应聘职位：{{u.desiredjob}}</span>
                <span class="un-result">
                  <a @click="notify(index,u.cid)">通知面试</a>
                  <a @click="unprocessed(index,u.cid)">不合适</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      username: "",
      comid: "",
      resumeBox: [
        {
          id: 0,
          name: "张三三",
          sex: "男",
          salary: "10K",
          desiredjob: "IT",
          place: "上海",
          experience: "应届毕业生",
          academic: "本科",
          birth: "1990-3-4",
          time: "2020-1-17",
          headimg: "./static/data/images/3.jpg",
          nationality: "中国",
          email: "1234@qq.com",
          telephone: "12345678901",
          desiredcity: "杭州",
          school: "安徽科技学院",
          subject: "计算机专业",
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
          favor: "",
          group: ""
        }
      ]
    };
  },
  created() {
    this.$axios
      .get("/bossbase/unprocessed", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get('username'),
          comid: this.$cookie.get('comid')
        }
      })
      .then(res => {
        this.resumeBox = res.data.message;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    notify(index, cid) {
      this.$axios
        .post("/bossbase/unprocessed/notify", {
          cid: cid,
          token: this.token,
          username: this.username,
          comid: this.comid
        })
        .then(res => {
          if (res.status === 200) {
            this.resumeBox.splice(index, 1);
            this.$notify({
              title: "邀请成功",
              type: "success",
              position: "top-right",
              offset: 100
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    unprocessed(index, cid) {
      this.$axios
        .post("/bossbase/unprocessed/unfit", {
          cid: cid,
          token: this.token,
          username: this.username,
          comid: this.comid
        })
        .then(res => {
          if (res.status === 200) {
            this.resumeBox.splice(index, 1);
            this.$notify({
              title: "邀请成功",
              type: "success",
              position: "top-right",
              offset: 100
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  candidatesJum(id) {
    this.$axios
      .get("/bossbase/jumcandidateslist/?cid="+ id)
      .then(res => {
        if (res.status === 200) {
          this.$router.push({ name: "/candidateslist", query: { id: id } });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    this.comid = this.$cookie.get("comid");
  }
};
</script>

<style>
.unprocessed-session {
  padding: 7px 40px;
}
.un-title {
  height: 40px;
  padding: 2px 5px;
  line-height: 40px;
  font-size: 28px;
  color: aliceblue;
  background-color: rgb(252, 70, 70);
  border-radius: 7px;
  display: inline-block;
}
.box-card {
  position: relative;
  width: 670px;
  height: 100px;
  margin: 7px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  border-left: 3px solid rgb(252, 70, 70);
}
.box-card .el-avatar {
  float: left;
}
.box-card p {
  /* position: relative; */
  height: 20px;
}
.un-info {
  float: left;
  margin-left: 15px;
}
.box-card .un-info h2 {
  height: 30px;
}
.box-card .un-info .resumename {
  font-size: 18px;
  color: #333;
}
.box-card .un-info .un-time {
  position: absolute;
  right: 30px;
  color: #999;
}
.un-info span {
  margin: 0 5px;
  color: #333;
}
.box-card .un-info .un-job {
  position: absolute;
  font-size: 14px;
  color: #999;
  margin-top: 12px;
}
.box-card .un-info .un-result {
  position: absolute;
  right: 30px;
  font-size: 16px;
  margin-top: 10px;
}
.un-result a {
  margin: 0 7px;
  color: rgb(252, 70, 70);
  cursor: pointer;
}
</style>