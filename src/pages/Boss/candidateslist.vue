<template>
  <div class="candidateslist-session w">
    <el-container>
      <el-main class="candidateslist-main">
        <div class="cdm-h">
          <el-avatar :src="candidates.headimg" :size="60"></el-avatar>
          <li class="cdm-name">{{candidates.name}}</li>
        </div>
        <div class="base-infor">
          <h3>基本信息</h3>
          <p>
            <span>
              <i class="project-title">性 别：</i>
              {{candidates.sex}}
            </span>
            <span>
              <i class="project-title">出生日期：</i>
              {{candidates.birth}}
            </span>
          </p>
          <p>
            <span>
              <i class="project-title">邮 箱：</i>
              {{candidates.email}}
            </span>
            <span>
              <i class="project-title">电 话：</i>
              {{candidates.telephone}}
            </span>
          </p>
          <p>
            <span>
              <i class="project-title">国 籍：</i>
              {{candidates.nationality}}
            </span>
          </p>
        </div>

        <div class="desired">
          <h3>期望职位</h3>
          <p>
            <span>{{candidates.desiredjob}}</span>
            <span>{{candidates.salary}}</span>
            <span>{{candidates.desiredcity}}</span>
          </p>
        </div>

        <div class="edu">
          <h3>教育经验</h3>
          <p>
            <span>{{candidates.school}}</span>
            <span>{{candidates.date1}}-{{candidates.date2}}</span>
            <span>{{candidates.subject}}</span>
            <span>{{candidates.academic}}</span>
          </p>
        </div>

        <div>
          <h3>项目经验</h3>
          <p>
            <span class="project-title">项目名称：</span>
            <span>{{candidates.projectname}}</span>
          </p>
          <p>
            <span class="project-title">担任职务：</span>
            <span>{{candidates.duty}}</span>
          </p>
          <p>
            <span class="project-title">开始时间：</span>
            <span>{{candidates.starttime}}</span>
            <span class="project-title">结束时间：</span>
            <span>{{candidates.endtime}}</span>
          </p>
          <p>
            <span class="project-title">项目描述：</span>
            <span>{{candidates.description}}</span>
          </p>
        </div>
        <div>
          <h3>自我描述</h3>
          <p>
            <span>{{candidates.assessment}}</span>
          </p>
        </div>
      </el-main>
      <!-- aside -->
      <el-aside class="candidateslist-aside">
        <el-button type="primary" class="invitational" @click="invitation">邀请面试</el-button>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candidates: [],
      token: "",
      username: "",
      comid: "",
    };
  },
  created() {
    let id = this.$route.query.id;
    this.$axios
      .get("/candidateslist",{params:{ cid: id }})
      .then(res => {
        this.candidates = res.data.message[id];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    invitation() {
      this.$axios
        .post("/candidateslist/interview", {
          token: this.token,
          username:this.username,
          comid:this.comid,
          cid: this.candidates.cid,

        })
        .then(res => {
          if (res.status === 200) {
            this.$notify({
              title: "邀请成功",
              type: "success",
              position: "top-right",
              offset: 100
            });
          }
        });
    }
  },
  mounted() {
    this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    this.comid = this.$cookie.get("comid");
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
  margin-bottom: 10px;
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
  margin-top: 10px;
  margin-bottom: 10px;
}

.invitational {
  margin: 50px;
}
</style>