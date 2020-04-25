<template>
  <div class="joblist-session">
    <el-container>
      <el-header height="200px" class="joblist-header">
        <div class="j-h-left">
          <p class="j-h-jobname">
            <span>{{jobBox.jobname}}</span>
            <span style="color: red">{{jobBox.salary}}</span>
          </p>
          <p>
            <span>{{jobBox.place}}</span>
            <span>*</span>
            <span>{{jobBox.academic}}</span>
            <span>*</span>
            <span>{{jobBox.experience}}</span>
          </p>
          <p>
            <span>{{jobBox.time}}</span>
          </p>
        </div>
        <div class="j-h-right">
          <el-button
            icon="el-icon-star-on"
            :class="{collection:iscollection}"
            @click="collection(iscollection)"
          >{{!iscollection? ' 收 藏 ':'取消搜藏'}}</el-button>
          <el-button type="info" @click="deliver">投 简 历</el-button>
        </div>
      </el-header>
      <el-container class="w">
        <el-main class="joblist-main">
          <div class="jm-h">
            <el-avatar :src="jobBox.headimg" :size="60"></el-avatar>
            <li class="jm-hr">{{jobBox.hr}}</li>
          </div>
          <div>
            <h3>职位描述</h3>
            <p>{{jobBox.jobdescription}}</p>
          </div>

          <div>
            <h3>职位要求</h3>
            <p>{{jobBox.jobneed}}</p>
          </div>

          <div>
            <h3>公司介绍</h3>
            <p>{{companyBox.comintroduce}}</p>
          </div>
          <div>
            <h3>工作地址</h3>
            <p>{{companyBox.address}}</p>
          </div>
        </el-main>
        <!-- 公司基本信息 -->
        <el-aside class="joblist-aside">
          <el-card shadow="hover">
            <div class="ja-card">
              <a href="https://www.alibabagroup.com">
                <img :src="companyBox.logourl" alt="logo" />
                <div class="ja-x">
                  <p class="ja-x-one">{{companyBox.company}}</p>
                  <span>{{companyBox.stage}}</span>
                  <span>{{companyBox.kind}}</span>
                  <span>{{companyBox.scale}}</span>
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
      iscollection: false,
      jobBox: [],
      companyBox: [],
      username: "",
      token: "",
      username: ""
    };
  },
  created() {
    let id = this.$route.query.jid;
    alert(id);
    this.$axios
      .get("/joblist/job/?jid=" + id)
      .then(res => {
        if (res.status === 200) {
          this.jobBox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("/joblist/company/?jid=" + id)
      .then(res => {
        if (res.status === 200) {
          this.companyBox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    collection(iscollection) {
      this.iscollection = !iscollection;
      if (this.iscollection) {
        this.$axios
          .post("/joblist/favor", {
            jid: this.$route.query.jid,
            token: this.token,
            username: this.username
          }) //需不需传入iscollection作为取消收藏
          .then(res => {
            if (res.status === 200) {
            }
          });
      }
    },
    deliver() {
      if (this.token.length <= 0) {
        let c = confirm("请登录");
        if (c) {
          this.$router.push("/login");
        }
      } else {
        let jid = this.$route.query.jid;
        this.$axios
          .post("/joblist/post", {
            jid: jid,
            token: this.token,
            username: this.username
          })
          .then(res => {
            if (res.status === 200) {
              this.$notify({
                title: "投递成功",
                type: "success",
                position: "top-left",
                offset: 100
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.username = this.$cookie.get("username");
    this.token = this.$cookie.get("token");
    this.userid = this.$cookie.get("userid");
    this.cid = this.$cookie.get("cid");
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
  padding: 30px 40px;
  background-color: #fff;
  margin-top: 10px;
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
  text-align: center;
  margin: 0 auto;
  color: #0f0f0f;
}
.ja-x span {
  margin: 5px 3px;
  line-height: 40px;
  text-align: center;
  display: block;
  font-size: 14px;
}
.collection {
  color: red;
}
</style>