<template>
  <div id="thome">
    <el-container>
      <el-header>
        <nav-studentMenus></nav-studentMenus>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <copy-right></copy-right>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import navStudentMenus from "../common/navStudentMenus.vue";
import copyRight from "../common/copyRight.vue";
export default {
  name: "thome",
  data: function() {
    return {};
  },
  components: {
    navStudentMenus, // 在当前组件注册navMenus头部组件,只有注册之后才能使用.
    copyRight // 在当前组件注册copyRight尾部组件.
  }
};
</script>

<style>
a {
  text-decoration: none;
}

.el-header,
.el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  padding: 0;
}

.el-header {
  width: 1100px;
  margin: auto;
  line-height: 46px;
  height: 46px !important;
  padding-left: 10px !important;
}

#thome ul.el-menu-demo > li {
  height: 46px !important;
  line-height: 46px !important;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 46px !important;
  line-height: 46px !important;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  padding: 0;
  color: #333;
  /*text-align: center;
		line-height: 160px;*/
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
</style>
