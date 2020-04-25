<template>
  <div class="companylist-session">
    <el-container>
      <el-header height="200px" class="companylist-header">
        <div class="j-h-left">
          <div class="left-logo">
            <el-image :src="companyBox.logourl"></el-image>
          </div>

          <div class="left-center">
            <p class="j-h-companyname">
              <span>{{companyBox.company}}</span>
            </p>
            <p>
              <span>{{companyBox.place}}</span>
              <span>*</span>
              <span>{{companyBox.kind}}</span>
              <span>*</span>
              <span>{{companyBox.stage}}</span>
              <span>*</span>
              <span>{{companyBox.scale}}</span>
            </p>
            <p>
              <span>{{companyBox.time}}</span>
            </p>
          </div>
        </div>
        <!-- <div class="j-h-right">
          <el-button
            icon="el-icon-star-on"
            :class="{collection:iscollection}"
            @click="collection(iscollection)"
          >{{!iscollection? ' 收 藏 ':'取消搜藏'}}</el-button> 
          <el-button type="info" @click="deliver">投 简 历</el-button>
        </div>-->
      </el-header>
      <el-container class="w">
        <el-main class="companylist-main">
          <div class="c-m">
            <h3>公司简介</h3>
            <p>{{companyBox.comintroduce}}</p>
          </div>
            <el-divider></el-divider>
          <div class="c-m">
            <h3>公司地址</h3>
            <p>{{companyBox.address}}</p>
          </div>
          <el-divider></el-divider>
          <div class="bossbase-next">
              <h3>正 在 招 聘 职 位</h3>
            <div v-for="b in jobBox" :key="b.id" @click="jobJum(b.jid)">
              <div class="job-opening clearfix">
                <div class="j-one">
                  <p class="j-f j-jobname">
                    <span>{{b.jobname}}</span>
                    <span class="j-hr">{{b.department}}</span>
                  </p>
                  <p class="j-s">
                    <span class="j-salary">{{b.salary}}</span>
                    <span></span>
                    <span>{{b.place}}</span>
                    <span>|</span>
                    <span>{{b.experience}}</span>
                    <span>|</span>
                    <span>{{b.academic}}</span>
                  </p>
                </div>
                <div class="j-three">
                  <p class="j-f">
                    <span class="j-hr">{{b.hr}}</span>
                  </p>
                  <p class="j-s">
                    <span class="j-time">发布于：{{b.time}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-main>
        <!-- 公司基本信息 -->
        <el-aside class="companylist-aside">
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
      companyBox: [],
      jobBox: [],
      user: "",
      token: ""
    };
  },
  created() {
    let id = this.$route.query.comid;
    this.$axios
      .get("/companylist/job/?comid="+id)
      .then(res => {
        this.jobBox = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("/companylist/company/?comid="+id)
      .then(res => {
        this.companyBox = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // collection(iscollection) {
    //   this.$axios
    //     .post("/companylist/favor/?id=" + this.$route.query.id)
    //     .then(res => {
    //       if (res.status === 200) {
    //         this.iscollection = !iscollection;
    //       }
    //     });
    // },
    jobJum(id){
        this.$axios.get('/companylist/joblist',{params:{comid:this.companyBox.comid,jid:id}})
      .then(res => {
        if(res.status === 200){
          this.$router.push({name:"/joblist", query: {jid:id}})
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    // deliver() {
    //   if (this.token.length <= 0) {
    //     let c = confirm("请登录");
    //     if (c) {
    //       this.$router.push("/login");
    //     }
    //   } else {
    //     this.$axios
    //       .post("/companylist/?id=" + this.$route.query.id)
    //       .then(res => {
    //         if (res.status === 200) {
    //           this.$notify({
    //             title: "投递成功",
    //             type: "success",
    //             position: "top-left",
    //             offset: 100
    //           });
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }
    // }
  },

};
</script>

<style scoped>
.companylist-session {
  position: relative;
}
/* header部分信息 */
.companylist-header {
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

.left-center span {
  margin: 0 5px;
  font-size: 18px;
  color: #fff;
}
.left-logo .el-image {
  float: left;
  border-radius: 5px;
  margin: 20px 10px 20px 30px;
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.j-h-left .j-h-companyname {
  margin: 35px 50px 20px 50px;
}
.j-h-left .j-h-companyname span {
  font-size: 30px;
  font-weight: 600;
  margin-right: 50px;
  color: #fff;
}
.left-center p {
  margin: 20px 10px 10px 30px;
}
.left-center p span {
  font-size: 16px;
}
.left-center {
  /* float: left; */
  display: inline-block;
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
.companylist-main {
  padding: 30px 40px;
  background-color: #fff;
  margin-top: 10px;
}
.companylist-main h3 {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  margin: 10px;
}
.companylist-main .c-m {
  margin: 30px 0;
  padding-bottom: 10px;
}
.c-m p {
  font-size: 16px;
  color: #333;
  margin: 5px 20px;
  line-height: 30px;
}
/* 招聘列表 */
.companylist-main .bossbase-next p {
  position: relative;
  color: #333;
  line-height: 30px;
}

.companylist-main .job-opening {
  position: relative;
  background-color: #fff;
  padding: 15px;
  border-radius: 3px;
  border: 1px dotted #333;
  margin: 3px 0;
  cursor: pointer;
}
.companylist-main .j-one {
  width: 300px;
  margin: 0 10px 0 0;
  float: left;
  height: 70px;
  color: #61687c;
}
.companylist-main .j-f {
  position: absolute;
  padding: 0 5px;
  height: 40px;
  font-weight: 400;
  font-size: 20px;
  box-sizing: border-box;
  line-height: 40px;
}
.companylist-main .j-f span {
  position: absolute;
  float: left;
  height: 40px;
  line-height: 40px;
  top: 0;
}
.companylist-main .j-s {
  height: 30px;
}
.companylist-main .j-s span {
  height: 30px;
  float: left;
  line-height: 30px;
  margin: 0 5px;
  top: 0;
}
.companylist-main .j-one p {
  position: relative;
  width: 350px;
}
.companylist-main .j-jobname {
  color: black;
}
.j-salary {
  right: 10px;
  color: red;
  font-size: 16px;
}
.j-three {
  float: right;
  height: 70px;
  color: #61687c;
  width: 270px;
  margin: 0 7px;
}
.j-three p {
  position: relative;
  width: 270px;
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

/* aside部分信息 */
.companylist-aside {
  margin-left: 5px;
  padding: 10px;
}
.companylist-aside img {
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