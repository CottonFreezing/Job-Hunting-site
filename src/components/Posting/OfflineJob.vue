<template>
  <div>
    <div class="posting-title">
      <div class="p-t-l"></div>
      <div class="p-t-c">已下线职位</div>
      <div class="p-t-r"></div>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column label="发布时间" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="职 位" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>职 位: {{ scope.row.jobname }}</p>
            <p>月 薪: {{ scope.row.salary }}</p>
            <p>学 历：{{ scope.row.academic }}</p>
            <p>经 验：{{ scope.row.experience }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.jobname }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="salary" label="月 薪：" width="100"></el-table-column>
      <el-table-column prop="academic" label="需求" width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, tableData,scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      token: "",
      username: "",
      comid: ""
    };
  },
  created() {
    this.$axios
      .get("/offlinejob/all", {
        params: {
          token: this.$cookie.get("token"),
          username: this.$cookie.get('username'),
          comid: this.$cookie.get('comid')
        }
      })
      .then(res => {
        if (res.data.status === 200) {
          this.tableData = res.data.message;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleDelete(index, row, m) {
      this.$axios
        .post("/offlinejob/down", {
          jid: m.jid,
          token: this.token,
          username: this.username,
          comid: this.comid
        })
        .then(res => {
          if (res.data.status === 200) {
            row.splice(index, 1);
          }
        })
        .catch(err => {
          console.log(err);
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
.posting-title {
  height: 50px;
  width: 300px;
  margin-bottom: 40px;
}
.p-t-l {
  float: left;
  width: 0;
  border-top: 25px solid rgba(0, 0, 0, 0.541);
  border-left: 25px solid transparent;
  border-bottom: 25px solid rgba(0, 0, 0, 0.541);
  border-right: 25px solid rgba(0, 0, 0, 0.541);
}
.p-t-r {
  float: left;
  width: 0px;
  height: 0px;
  /* border-bottom-right-radius: 50%;
  border-top-right-radius: 50%; */
  border-top: 25px solid rgba(0, 0, 0, 0.541);
  border-right: 25px solid transparent;
  border-bottom: 25px solid rgba(0, 0, 0, 0.541);
  border-left: 25px solid rgba(0, 0, 0, 0.541);
  /* background-color:rgba(0, 0, 0, 0.541);  */
}
.p-t-c {
  float: left;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 34px;
  color: white;
  background-color: rgba(0, 0, 0, 0.541);
}
</style>