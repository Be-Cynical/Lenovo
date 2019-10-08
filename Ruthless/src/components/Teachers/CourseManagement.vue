<template>
  <div>
    <el-card class="box-card" v-for="(item, index) in arrs" :key="index">
      <div slot="header" class="clearfix">
        <span>{{ item.name }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">{{ item.majorDescribe }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CourseManagement",
  data: function() {
    return {
      arrs: []
    };
  },
  methods: {},
  created() {
    // 组件加载完成之后的生命回调函数,如果页面一加载就需要显示数据,数据就在此获取
    var app = this;
    this.$http
      .get("/product/majorType/listContainCustomList")
      .then(function(res) {
        console.log(res.data);
        app.arrs = res.data;
      });
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  display: inline-block;
}
</style>