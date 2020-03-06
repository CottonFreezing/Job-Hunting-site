<template>
  <div class="unprocessed-session">
    <el-main>
      <h2 class="un-title">不 合 适 简 历</h2>
      <el-divider></el-divider>
      <el-card>
        <div v-for="(u, index) in resumeBox" :key="u.id">
            <div class="box-card">
          <el-avatar shape="square" :size="80" :src="u.headimg"></el-avatar>
          <div class="un-info clearfix">
            <h2>
              <router-link to="/candidateslist"><span class="resumename">{{u.resumename}}</span></router-link>
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
                <span class="un-result"><i class="el-icon-delete" @click="del(index)">删除</i></span>                
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
      resumeBox:[],
    };
  },
  created() {
      this.$axios.get('./static/data/candidates.json')
      .then(res => {
        this.resumeBox = res.data.message
      })
      .catch( err => {
        console.log(err)
      })
  },
  methods: {
    del(index){
      this.resumeBox.splice(index,1)
    }
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
.box-card .un-info h2{
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
.un-result i {
    margin: 0 7px;
    color: rgb(252, 70, 70);
}
</style>