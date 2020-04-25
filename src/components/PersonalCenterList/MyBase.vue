<template>
  <div class="mybase-session w">
    <!-- 个人信息 -->
    <el-main>
      <div class="myinfo clearfix">
        <p class="p-title">个人资料</p>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="float:left"
        >
          <img v-if="myBase.imageUrl" :src="myBase.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <div class="p-base clearfix" v-show="!dialog">
          <p>
            <span>账 户：</span>
            <span>{{username}}</span>
            <i class="el-icon-edit-outline bb-edit" @click="dialog = true"></i>
          </p>
          <p>
            <span>姓 名：</span>
            <span>{{myBase.name}}</span>
          </p>
          <p>
            <span>性 别：</span>
            <span>{{myBase.sex}}</span>
          </p>
        </div>
        <!-- 个人信息修改 -->
        <div class="p-base" v-show="dialog">
          <el-form :model="myBase" :rules="rules" ref="myBase">
            <el-form-item label="姓 名：" label-width="90px" prop="name">
              <el-input v-model="myBase.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性 别：" label-width="90px" prop="sex">
              <el-radio-group v-model="myBase.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button @click="cancelForm(myBase)">取 消</el-button>
            <el-button
              type="primary"
              @click="handleClose"
              :loading="loading"
            >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
          </div>
        </div>
      </div>

      <div class="mybasecard">
        <el-tabs type="card" v-model="activeName">
          <!--@tab-click="handleClick" -->
          <el-tab-pane label="已投公司" name="first">
            <el-card>
              <div v-for="(u,index) in postJobBox" :key="index" >
                <div class="box-card">
                  <!-- <el-avatar shape="square" :size="80" :src="u.headimg"></el-avatar> -->
                  <div class="un-info clearfix">
                    <h2>
                      <!-- <router-link to="/candidateslist"> -->
                      <span class="resumename" @click="jobJum(u.jid)">{{u.jobname}}</span>
                      <span class="un-time">投递时间：{{u.time}}</span>
                    </h2>
                    <p>
                      <span>{{u.company}}</span>
                      <span>/</span>
                      <span>{{u.place}}</span>
                      <span>/</span>
                      <span>{{u.stage}}</span>
                      <span>/</span>
                      <span>{{u.kind}}</span>
                    </p>
                    <p>
                      <span>{{u.academic}}</span>
                      <span>/</span>
                      <span>{{u.experience}}</span>
                      <span class="un-result" @click="del(1,index,u.jid)">
                        <i class="el-icon-delete">删除</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="面试邀约" name="second">
            <el-card>
              <div v-for="(u,index) in jobBox" :key="index">
                <div class="box-card">
                  <!-- <el-avatar shape="square" :size="80" :src="u.headimg"></el-avatar> -->
                  <div class="un-info clearfix">
                    <h2>
                      <!-- <router-link to="/candidateslist"> -->
                      <span class="resumename"  @click="jobJum(u.jid)">{{u.jobname}}</span>
                      <!-- </router-link> -->
                      <span class="un-time">投递时间：{{u.time}}</span>
                    </h2>
                    <p>
                      <span>{{u.company}}</span>
                      <span>/</span>
                      <span>{{u.place}}</span>
                      <span>/</span>
                      <span>{{u.stage}}</span>
                      <span>/</span>
                      <span>{{u.kind}}</span>
                    </p>
                    <p>
                      <span>{{u.academic}}</span>
                      <span>/</span>
                      <span>{{u.experience}}</span>
                      <span class="un-result" @click="del(2,index,u.jid)">
                        <i class="el-icon-delete">删除</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="不合适" name="third">
            <el-card>
              <div v-for="(u,index) in unfitJobBox" :key="index" >
                <div class="box-card">
                  <div class="un-info clearfix">
                    <h2> 
                      <!-- <router-link to="/candidateslist"> -->
                      <span class="resumename" @click="jobJum(u.jid)">{{u.jobname}}</span>
                      <span class="un-time">投递时间：{{u.time}}</span>
                    </h2>
                    <p>
                      <span>{{u.company}}</span>
                      <span>/</span>
                      <span>{{u.place}}</span>
                      <span>/</span>
                      <span>{{u.stage}}</span>
                      <span>/</span>
                      <span>{{u.kind}}</span>
                    </p>
                    <p>
                      <span>{{u.academic}}</span>
                      <span>/</span>
                      <span>{{u.experience}}</span>
                      <span class="un-result" @click="del(3,index,u.jid)">
                        <i class="el-icon-delete">删除</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="收藏职位" name="forth">
            <el-card>
              <div v-for="(u,index) in favorJobBox" :key="index">
                <div class="box-card">
                  <!-- <el-avatar shape="square" :size="80" :src="u.headimg"></el-avatar> -->
                  <div class="un-info clearfix">
                    <h2 >
                      <!-- <router-link to="/candidateslist"> -->
                      <span class="resumename"  @click="jobJum(u.jid)">{{u.jobname}}</span>
                      <!-- </router-link> -->
                      <span class="un-time">投递时间：{{u.time}}</span>
                    </h2>
                    <p>
                      <span>{{u.company}}</span>
                      <span>/</span>
                      <span>{{u.place}}</span>
                      <span>/</span>
                      <span>{{u.stage}}</span>
                      <span>/</span>
                      <span>{{u.kind}}</span>
                    </p>
                    <p>
                      <span>{{u.academic}}</span>
                      <span>/</span>
                      <span>{{u.experience}}</span>
                      <span class="un-result" @click="del(4,index,u.jid)">
                        <i class="el-icon-delete">删除</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <!-- <el-tab-pane label="收藏公司" name="fifth">
            <el-card>
              <div v-for="(u, index) in companyBox" :key="u.id" >
                <div class="box-card">
  
                  <div class="un-info clearfix">
                    <h2>
                  
                      <span class="resumename" @click="jobJum(u.id)">{{u.company}}</span>
                     
                      <span class="un-time">投递时间：{{u.time}}</span>
                    </h2>
                    <p>
                      <span>{{u.place}}</span>
                      <span>/</span>
                      <span>{{u.stage}}</span>
                      <span>/</span>
                      <span>{{u.kind}}</span>
                      <span>/</span>
                      <span>{{u.scale}}</span>
                      
                    </p>
                    <p>
  
                      <span class="un-result" @click="del(index)">
                        <i class="el-icon-delete">删除</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </el-card>
          </el-tab-pane>-->
          <el-tab-pane label="消息中心" name="fifth">消息中心</el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      username: "",
      count: 0,
      dialog: false,
      activeName: "first",
      loading: false,
      myBase: {
        name: "",
        imageUrl: "",
        sex: ""
      },
      jobBox: [],
      postJobBox: [],
      favorJobBox: [],
      unfitJobBox: [],
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }]
      }
    };
  },
  created() {
    // this.$axios
    //   .get("/mybase/base",{params:{token:this.$cookie.get('token')}})
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.myBase = res.data.data;
    //       alert(this.mybase.username)
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });//调试时注释的
    this.$axios //获取已投职位
      .get("/mybase/post", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get("username")
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.postJobBox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios //收藏职位
      .get("/mybase/favor", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get("username")
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.favorJobBox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios //不合适
      .get("/mybase/unsuitable", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get("username")
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.unfitJobBox = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleClose() {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.$axios
            .post("/mybase", {
              name: this.myBase.name,
              imageUrl: this.myBase.imageUrl,
              sex: this.myBase.sex,
              token: this.token,
              username: this.username
            })
            .then(res => {
              if (res.status === 200) {
                this.loading = true;
                this.timer = setTimeout(() => {
                  // done();
                  this.loading = false;
                  this.dialog = false;
                  // 动画关闭需要一定的时间
                  setTimeout(() => {
                    this.loading = false;
                  }, 400);
                }, 2000);
              }
            });
        })
        .catch(_ => {});
    },
    cancelForm(myBase) {
      this.$nextTick(() => {
        this.$refs["myBase"].resetFields();
      });
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    jobJum(jid) {
      this.$axios
        .get("/mybase/joblist/?jid=" + jid)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: "/joblist", query: { jid: jid } });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // handleClick(tab, event) {
    //   if(this.activeName === "first"){
    //      this.$axios //获取已投职位
    //   .get("/mybase/post", { token: this.token, username: this.username })
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.postJobBox = res.data.data;
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    //   }

    //   },
    del(flag, index, id) {
      switch (flag) {
        case 1:
          this.$axios
            .post("/mybase/delpost", {
              token: this.token,
              username: this.username,
              jid: id
            })
            .then(res => {
              if (res.status === 200) {
                event.stopPropagation();
                this.postJobBox.splice(index, 1);
              }
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 4:
          this.$axios
            .post("/mybase/delfavor", {
              token: this.token,
              username: this.username,
              jid: id
            })
            .then(res => {
              if (res.status === 200) {
                event.stopPropagation();
                this.favorJobBox.splice(index, 1);
              }
            })
            .catch(err => {
              console.log(err);
            });
          break;
        default:
          break;
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
.mybase-session {
  width: 840px;
  padding: 0 40px;
  box-sizing: border-box;
}
.mybasecard {
  margin: 20px;
}
.p-title {
  font-size: 24px;
  font-weight: 700;
  color: #3d3d3d;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e0e0e0;
}
.p-base {
  position: relative;
  width: 450px;
  float: left;
  color: #333;
  margin: 40px 20px 40px 50px;
}
.p-base p {
  position: relative;
  margin: 10px;
  font-size: 18px;
}
.p-base span {
  margin: 0 7px;
}
.p-base i {
  position: absolute;
  right: 0;
  cursor: pointer;
  color: rgb(252, 70, 70);
}

/* 上传头像部分 */
.myinfo .avatar-uploader {
  background-color: aliceblue;
  margin: 7px;
  border: 1px dashed #d9d9d9;
  cursor: pointer;
}
.myinfo .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  float: left;
}
.myinfo .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.myinfo .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.myinfo .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.myinfo .demo-drawer__footer {
  text-align: center;
  padding: 0 20px;
}

/* 已投公司 */
.box-card {
  position: relative;
  width: 620px;
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
  margin: 4px auto;
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
  cursor: pointer;
}
.box-card .un-info .un-time {
  position: absolute;
  right: 30px;
  color: #999;
}
.un-info span {
  margin: 0 1px;
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
  cursor: pointer;
}
.un-result i {
  margin: 0 7px;
  color: rgb(252, 70, 70);
}
</style>