<template>
  <div id="MasterSetting" class="ms-box">
    <el-row>
      <el-col :span="22" :offset="1" class="ms-top">
        <div class="m-t-box">
          课程定制
          <span class="m-t-b-span">&nbsp;/&nbsp;内容维护</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="tac">
      <!-- 左侧课程导航列表 -->
      <el-col :span="5" :offset="1" style="background:#fff;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          v-for="(item,index) in arr"
          :key="index"
          :title="item.name"
        >
          <!-- 学期 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu" style="color:#49c0e0"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 课程 -->
            <el-menu-item-group>
              <el-menu-item
                index="'1-'+index"
                v-for="(item,index) in item.childList"
                :key="index"
                :title="item.name"
                @click="course(item.id)"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <!-- 右侧对应课程资源展示 -->
      <el-col :span="17">
        <div class="ms-right">
          <div class="ms-r-btn">
            <el-button @click="addCourse()" type="primary" plain>添加课程</el-button>
            <el-button @click="deleteCourse()" type="primary" plain>删除课程</el-button>
          </div>
          <template>
            <el-table
              ref="multipleTable"
              :data="courseResources"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
              style="width: 100%"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column type="index" label="序号" width="55"></el-table-column>
              <el-table-column prop="name" label="课程名称" width="350">
                <template slot-scope="{$index,row}">
                  <div style="display:inline-block;width:90%">
                    <span v-if="showEdit[$index]">
                      <el-input
                        required
                        v-model="row.name"
                        placeholder="输入课程名称"
                        @keyup.enter.native="saveCustomCourse(row.name,row.id)"
                      ></el-input>
                    </span>
                    <span v-if="!showEdit[$index]">{{row.name}}</span>
                  </div>
                  <div style="display:inline-block">
                    <i
                      id="edit"
                      class="el-icon-edit"
                      @click="handleEdit($index,row)"
                      v-if="!showBtn[row.id]"
                    ></i>
                    <i
                      id="check"
                      class="el-icon-check"
                      @click="handelCancel($index,row)"
                      v-if="showBtn[row.id]"
                    ></i>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="updateTime" label="最后更新时间"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button @click="handleEdit(scope.$index, scope.row)" type="primary" plain>上传资源</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MasterSetting",
  data: function() {
    return {
      arr: [], //学期和对应课程列表
      newResources: "",
      multipleSelection: [], //多选的选中项push
      courseResources: [  //课程对应的课程资源
        {
          id: "",
          name: "",
          createTime: "",
          updateTime: ""
        }
      ],
      //编辑框
      showEdit: [],
      row: "",
      index: "",
      showBtn: []
    };
  },
  methods: {
    //navMenus导航菜单默认事件
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},

    //单击某一学期下的某一课程，获取对应的课程资源
    course(itemId) {
      var app = this;
      console.log(itemId);
      app.$http
        .get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
        .then(function(res) {
          console.log(res.data);
          app.courseResources = res.data;
        });
    },
    //内容维护上传资源
    handleEdit(index, row) {
      // console.log(index, row);
    },

    //点击添加课程
    addCourse() {
      var list = {
        name: this.name,
        createTime: this.createTime,
        updateTime: this.updateTime
      };
      this.courseResources.push(list);
      console.log(this.courseResources);
    },

    saveCustomCourse(name, id) {
      //保存课程，就是当点击对号按钮符号时触发
      console.log(name);
      console.log(id);
      console.log(this.$data.courseResources);
      var itemId = this.$data.courseResources[0].itemId;
      console.log(itemId);
      var app = this;
      this.$http
        .post("/product/majorCustomCourse/save", {
          itemId,
          name,
          id
        })
        .then(function(res) {
          // console.log(res.data);
          if (res.data) {
            console.log("保存课程资源成功!");
            // alert("课程创建成功，请重新刷新页面！");
          }
        });
    },
    handleEdit(index, row) {
      //当为编辑框的时候
      console.log(index); //当前行的下标
      console.log(row); //当前行的数据
      console.log(row.id); //当前行的数据 undefined
      this.row = row;
      this.index = index;
      this.showEdit[index] = true; //修改数组
      this.$set(this.showEdit, index, true); //修改vue内的数据
      this.showBtn[row.id] = true;
      this.$set(this.showBtn, row.id, true);
    },
    handelCancel(index, row) {
      //当取消选框的时候,就是保存数据的时候
      // console.log(index);//5
      // console.log(row);//
      console.log(row.id);
      this.showEdit[index] = false;
      this.showBtn[row.id] = false;
      this.saveCustomCourse(row.name, row.id);
    },

    //选中项
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val; //将选中项保存在multipleSelection数组中
    },
    //删除课程
    deleteCourse() {
      // console.log(this.multipleSelection.id);
      var app = this;
      for (var i = 0; i < app.multipleSelection.length; i++) {
        var id = app.multipleSelection[i].id;
        app.$http
          .get(`/product/customMaterial/delete/${id}`)
          .then(function(res) {
            console.log(res);
          });
      }
    }
  },
  created() {
    // 组件加载完成之后的生命回调函数,如果页面一加载就需要显示数据,数据就在此获取
    var customId = this.$route.params.id;
    var app = this;
    // 获取学期和对应课程列表
    app.$http
      .get(`/product/majorCustomItem/listByCustomIdForAble/${customId}`)
      .then(function(res) {
        // console.log(res.data);
        app.arr = res.data;
      });
  }
};
</script>

<style>
.ms-box {
  background: #eee9e9;
}
.ms-top {
  margin-top: 15px;
  background: #fff;
}
.m-t-box {
  margin-left: 15px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.m-t-b-span {
  color: #909399;
}
.ms-right {
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
}
.ms-r-btn {
  margin-bottom: 15px;
}
</style>