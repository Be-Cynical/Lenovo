<template>
  <div id="navStudentMenus">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img src="../../images/lenovo.png" alt />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">我的专业</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的课程</template>
              <el-menu-item index="2-1">vue项目实战</el-menu-item>
              <el-menu-item index="2-2">web前端工程化</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">我的成长</el-menu-item>
            <el-menu-item index="4">我的参与</el-menu-item>
            <el-menu-item index="5">我的考试</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <ul class="loginUser">
            <li>
              <span style="cursor: pointer; color: #A3A3A4; font-size: 14px;">颜爽</span>
              <span class="ask_title" @click="toOnlineAsk">在线提问</span>
              <span style="cursor: pointer; color: #A3A3A4; font-size: 14px; margin-left: 15px;">退出</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "navStudentMenus",
  data: function() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      if (key == "1") {
        this.$router.push("/Student/profession"); //跳转到学生端我的专业页面
      } else if (key == "3") {
        this.$router.push("/Student/stuStatisticsOverview"); //跳转到学生端我的成长页面
      } else if (key == "4") {
        this.$router.push("/Student/stuEvaluate"); //跳转到学生端我的参与页面
      } else if (key == "5") {
        this.$router.push("/Student/examinationMain"); //跳转到学生端我的考试页面
      }
    },
    toOnlineAsk: function() {
      this.$router.push("/student/OnlineAsk");
    }
  }
};
</script>

<style>
.el-col {
  border-radius: 4px;
  padding-left: 0 !important;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-content img {
  height: 46px;
  display: block;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.loginUser {
  overflow: hidden;
}
.loginUser li {
  float: left;
  margin-left: 20px;
}
.logoutSvg {
  opacity: 0.1;
}
.ask_title {
  background: #49c0e0;
  font-size: 14px;
  color: white;
  padding: 15px 20px;
  margin-left: 15px;
}
.ask_title:hover {
  cursor: pointer;
}
#navMenus .el-badge__content.is-fixed {
  top: 11px;
  line-height: 13px;
  padding: 0px 3px;
  height: 13px;
}
</style>