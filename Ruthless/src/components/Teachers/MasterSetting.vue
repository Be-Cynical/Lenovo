<template>
  <div id="MasterSetting" class="ms-box">
    <!-- 顶部图片部分 -->
    <el-row>
      <el-col :span="24" class="header1">
        <div class="h-text">
          <p class="h-t-p1">课程管理</p>
          <p class="h-t-p2">贴合知识点 课程执行力 课程核心和主要内容</p>
        </div>
        <div class="h-img">
          <img src="../../images/back03.png" alt />
        </div>
      </el-col>
    </el-row>
    <!-- 标题部分 -->
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
<<<<<<< HEAD
          default-active="2"
=======
>>>>>>> Ruthless
          class="el-menu-vertical-demo"
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
<<<<<<< HEAD
                index="'1-'+index"
                v-for="(item,index) in item.childList"
                :key="index"
                :title="item.name"
                @click="course(item.id)"
=======
                :index="'1-'+index"
                v-for="(item,index) in item.childList"
                :key="index"
                :title="item.name"
                @click="CourseDetails(item.id)"
>>>>>>> Ruthless
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <!-- 右侧对应课程资源展示 -->
      <el-col :span="17">
        <div class="ms-right">
          <div class="ms-r-btn">
<<<<<<< HEAD
            <el-button @click="addCourse()" type="primary" plain>添加课程</el-button>
            <el-button @click="deleteCourse()" type="primary" plain>删除课程</el-button>
=======
            <el-button @click="addCourse()" type="primary" plain>添加课时</el-button>
            <el-button @click="deleteCourse()" type="primary" plain>删除课时</el-button>
>>>>>>> Ruthless
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
<<<<<<< HEAD
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="updateTime" label="最后更新时间"></el-table-column>
=======
              <el-table-column prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
              <el-table-column prop="updateTime" label="最后更新时间" :formatter="dateFormat"></el-table-column>
>>>>>>> Ruthless
              <el-table-column>
                <template slot-scope="scope">
                  <span @click="clickUpload(scope.row.id)">
                    <el-button type="primary" @click="dialogVisible = true">上传资源</el-button>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <!-- 点击上传资源获取的课程列表信息dialog -->
          <template>
            <el-dialog title="新增课程资源" :visible.sync="dialogVisible" :before-close="handleClose">
              <el-table :data="resource">
                <el-table-column property="id" label="序号"></el-table-column>
                <el-table-column property="typeId" label="文件类型"></el-table-column>
                <el-table-column property="fileName" label="文件名称"></el-table-column>
                <el-table-column property="fileAuthor" label="作者"></el-table-column>
<<<<<<< HEAD
                <el-table-column property="updateTime" label="最后更新时间"></el-table-column>
                <el-table-column property="userName" label="上传人姓名"></el-table-column>
                <el-table-column property="opration" label="操作">
                  <template>
                    <span>
                      <el-button type="text">属性</el-button>
                    </span> |
                    <span>
                      <el-button type="text">删除</el-button>
                    </span> |
                    <el-button type="text">下载</el-button>
=======
                <el-table-column property="updateTime" label="最后更新时间" :formatter="dateFormat"></el-table-column>
                <el-table-column property="userName" label="上传人姓名"></el-table-column>
                <el-table-column property="opration" label="操作">
                  <template slot-scope="scope">
                    <span @click="attributeHandle(scope.row)">
                      <el-button type="text" @click="dialogAttributeVisible = true">属性</el-button>
                    </span> |
                    <span>
                      <el-button type="text" @click="deleteAttribute(scope.row.id)">删除</el-button>
                    </span> |
                    <el-button type="text" @click="downloadAttribute(scope.row.id)">下载</el-button>
>>>>>>> Ruthless
                  </template>
                </el-table-column>
              </el-table>
              <br />
              <span>资源类型:</span>
              <el-radio-group
                @change="resourceType(typeId)"
                v-model="typeId"
                v-for="(item, index) in types"
                :key="index"
              >
                <el-radio :label="item.id">{{ item.name }}</el-radio>
              </el-radio-group>
              <hr style="height:1px;border:none;border-top:1px solid #F0F0F0;" />

              <div>
                <span>上传文件：</span>
<<<<<<< HEAD
                <input type="file" />
=======
                <input type="file" @change="fileUpload($event)" />
                <el-button size="mini" type="primary" @click="resourceSubmit">提 交</el-button>
>>>>>>> Ruthless
              </div>

              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
<<<<<<< HEAD
                <el-button type="primary" @click="dialogVisible = false">
                  <span>确 定</span>
=======
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </template>
          <!-- 上传资源中的每条属性dialog -->
          <template>
            <el-dialog title="编辑属性" :visible.sync="dialogAttributeVisible" width="30%">
              <div>
                作者：
                <input
                  type="text"
                  style="width:100%"
                  :placeholder="attributeObj.fileAuthor"
                  v-model="fileAuthor"
                />
              </div>
              <div style="margin-top:20px">
                描述：
                <textarea
                  name
                  id
                  cols="55"
                  rows="8"
                  :placeholder="attributeObj.shortDescribe"
                  v-model="shortDescVal"
                ></textarea>
              </div>
              <div style="margin-top:20px">
                内容：
                <textarea
                  name
                  id
                  cols="55"
                  rows="8"
                  :placeholder="attributeObj.content"
                  v-model="content"
                ></textarea>
              </div>
              <div style="margin-top:20px">
                上传图片：
                <input type="file" @change="fileImgUpload($event)" />
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAttributeVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogAttributeVisible = false">
                  <span @click="attributeUpdate">更 新</span>
>>>>>>> Ruthless
                </el-button>
              </span>
            </el-dialog>
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
      arr: [], // 学期和对应课程列表
      multipleSelection: [], // 多选的选中项push
      dialogVisible: false, // 上传资源的dialog
      dialogAttributeVisible: false, // 上传资源中属性的dialog
      courseResources: [], // 课程对应的课程资源
      showEdit: [], // 修改编辑课时内容
      row: "", // 当前课时行的数据
      index: "", // 当前课时行的下标
      showBtn: [], // 展示显示编辑 或 图标符号
      delCurrent: [], // 存放删除课程资源的id
      insertId: "", // 课时id
      resource: [], // 资源列表
      types: [], // 资源类型
      typeId: 1, // 默认显示资源类型
      customCourseId: "", // 保存customCourseId：右边table当前行的id
      file: "", // 存放上传视频的路径url
      fileImg: "", // 存放上传图片的路径url
      attributeObj: {}, // 每一行属性对象
      fileAuthor: "", // 属性的作者
      shortDescVal: "", // 属性的描述
      content: "" // 属性的内容
    };
  },
  methods: {
    // 单击某一学期下的某一课程，获取对应的课程资源
<<<<<<< HEAD
    course(itemId) {
      // console.log(itemId);
=======
    CourseDetails(itemId) {
      console.log(itemId);
>>>>>>> Ruthless
      this.insertId = itemId; // 课程id
      var app = this;
      app.$http
        .get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
        .then(function(res) {
          // console.log(res.data);
          app.courseResources = res.data;
        });
    },

    // 点击添加课程
    addCourse() {
      var list = {
        name: this.name,
        createTime: this.createTime,
        updateTime: this.updateTime
      };
      this.courseResources.push(list);
      // console.log(this.courseResources);
    },

    // 保存课程，就是当点击对号按钮符号时触发
    saveCustomCourse(name, id) {
      // console.log(name);
      // console.log(id);
      // console.log(this);
      // console.log(this.insertId);//课程id
      var itemId = this.insertId;
      var app = this;
      this.$http
        .post("/product/majorCustomCourse/save", {
          itemId,
          name,
          id
        })
        .then(function(res) {
          // console.log(res);
          if (res.data == "") {
<<<<<<< HEAD
            console.log("保存课程资源成功!");
            // alert("课程创建成功，请重新刷新页面！");
            app.$message.success("课程创建成功!");
            //再次获取table列表，实现更新
            var itemId = app.insertId;
            console.log(itemId);
            app.$http
              .get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
              .then(function(res) {
                app.courseResources = res.data;
              });
          } else {
            alert("失败的保存");
=======
            // console.log("保存课时资源成功!");
            // alert("课程创建成功，请重新刷新页面！");
            app.$message.success("课时创建成功!");
            //再次获取table列表，实现更新
            app.CourseDetails(app.insertId);
          } else {
            alert("课时创建失败");
>>>>>>> Ruthless
          }
        });
    },

    // 当为编辑框的时候
    handleEdit(index, row) {
      // console.log(index); //当前行的下标
      // console.log(row); //当前行的数据
      // console.log(row.id); //当前行的数据 undefined
      this.row = row;
      this.index = index;
      this.showEdit[index] = true; //修改数组
      this.$set(this.showEdit, index, true); //修改vue内的数据
      this.showBtn[row.id] = true;
      this.$set(this.showBtn, row.id, true);
    },

<<<<<<< HEAD
    // 当取消选框的时候,就是保存数据的时候
    handelCancel(index, row) {
      // console.log(index);
      // console.log(row);
      // console.log(row.id);
      this.showEdit[index] = false;
      this.showBtn[row.id] = false;
      this.saveCustomCourse(row.name, row.id);
    },

=======
>>>>>>> Ruthless
    // 选中项
    handleSelectionChange(val) {
      this.multipleSelection = val; //将选中项保存在multipleSelection数组中
      // console.log(val);
      app.multipleSelection = val.map(item => {
        this.delCurrent.push(item.id);
      });
    },

    // 删除课程
    deleteCourse() {
      // console.log(this.delCurrent);//这里删除的是每一条数据的id所组成的数组
      var app = this;
<<<<<<< HEAD
      if (confirm("确认要删除所选课程吗？")) {
=======
      if (confirm("确认要删除所选课时吗？")) {
>>>>>>> Ruthless
        this.$http
          .post("/product/majorCustomCourse/deletes", this.delCurrent)
          .then(function(res) {
            // console.log(res);
            if (res.data == true) {
<<<<<<< HEAD
              app.$message.success("课程删除成功！");
              //再次获取table列表，实现更新
              var itemId = app.insertId;
              app.$http
                .get(`/product/majorCustomCourse/getListByItemId/${itemId}`)
                .then(function(res) {
                  app.courseResources = res.data;
                });
            } else {
              app.$message.error("删除失败");
=======
              app.$message.success("课时删除成功！");
              //再次获取table列表，实现更新
              app.CourseDetails(app.insertId);
            } else {
              app.$message.error("课时删除失败");
>>>>>>> Ruthless
            }
          });
      }
    },

    // 资源类型选中项发生改变时触发
    resourceType(radio) {
      console.log(radio);
    },

    // dialog小×号点击事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    // 点击上传资源获取课程资源列表信息
    clickUpload(customCourseId) {
      // console.log(customCourseId);
      this.customCourseId = customCourseId; //保存右边table当前行数据id
      var app = this;
      //已有资源列表
      this.$http
        .get(`/product/customMaterial/getListByCourseId/${customCourseId}`)
        .then(function(res) {
          // console.log(res.data);
          app.resource = res.data;
          // console.log(app.gridData);
        });
      //资源类型
      this.$http.get("/product/materialType/listForAble").then(function(res) {
        // console.log(res.data);
        app.types = res.data;
      });
<<<<<<< HEAD
=======
    },

    // 上传文件的选择文件
    fileUpload(event) {
      //上传文件的选择文件
      console.log(event);
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    },

    // 资源提交
    resourceSubmit() {
      // console.log(this.customCourseId); // 当前行的id
      // console.log(this.typeId);
      // console.log(this.file);
      var app = this;
      // 对上传的文件进行包装
      var FormData = new window.FormData(); // 创建一个文件对象
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      FormData.append("file", this.file);
      this.$http
        .post(
          `/product/customMaterial/uploadFile?customCourseId=${this.customCourseId}&typeId=${this.typeId}`,
          FormData,
          config
        )
        .then(function(res) {
          console.log(res.data);
          if (res.data == "") {
            app.$message.success("成功添加一条！");
            // app.uploadResources();//再次调用上传资源函数，重新加载数据
            // this.$options.methods.函数名字();
            var customCourseId = app.customCourseId;
            app.$http
              .get(
                `/product/customMaterial/getListByCourseId/${customCourseId}`
              )
              .then(function(res) {
                // console.log(res.data);
                app.resource = res.data;
                // console.log(app.gridData);
              });
          } else {
            alert("添加失败");
          }
        });
    },

    // 上传的图片选择
    fileImgUpload(e) {
      console.log(e);
      this.fileImg = event.target.files[0];
    },

    // 点击每条资源的属性
    attributeHandle(row) {
      var app = this;
      console.log(row);
      this.attributeObj = row;
      console.log(this.attributeObj);
    },

    // 提交写入的属性数据
    attributeUpdate() {
      var app = this;
      var detailId = this.attributeObj.id;
      // console.log(detailId);
      // console.log(this.fileAuthor);
      // console.log(this.shortDescVal);
      // console.log(this.content);
      var FormData = new window.FormData();
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      FormData.append("file", this.fileImg);
      this.$http
        .post(
          `/product/customMaterial/update?id=${detailId}&fileAuthor=${this.fileAuthor}&shortDescribe=${this.shortDescVal}&content=${this.content}`,
          FormData,
          config
        )
        .then(function(res) {
          // console.log(res);
          // console.log(res.data);
          if (res.data == "") {
            app.$message.success("更新成功！");
            app.fileAuthor = "";
            app.shortDescVal = "";
            app.content = "";
            // app.uploadResources();//再次调用上传资源函数，重新加载数据 报错未修改
            // app.$options.methods.uploadResources();
            var customCourseId = app.customCourseId;
            app.$http
              .get(
                `/product/customMaterial/getListByCourseId/${customCourseId}`
              )
              .then(function(res) {
                // console.log(res.data);
                app.resource = res.data;
                // console.log(app.gridData);
              });
          } else {
            app.$message.error("更新失败!");
          }
        });
    },

    // 删除新增课程资源中的当前条
    deleteAttribute(id) {
      // console.log(id);
      var app = this;
      if (confirm("确认要删除此条数据吗？")) {
        this.$http
          .get(`/product/customMaterial/delete/${id}`)
          .then(function(res) {
            // console.log(res.data);
            if (res.data == "") {
              app.$message.success("删除成功");
              // app.$options.methods.uploadResources();
              var customCourseId = app.customCourseId;
              app.$http
                .get(
                  `/product/customMaterial/getListByCourseId/${customCourseId}`
                )
                .then(function(res) {
                  // console.log(res.data);
                  app.resource = res.data;
                  // console.log(app.gridData);
                });
            } else {
              app.$message.error("删除失败");
            }
          });
      }
    },

    // 下载新增课程资源中的当前条
    downloadAttribute(id) {
      var app = this;
      this.$http
        .get(`/product/customMaterial/downLoadFile/${id}`)
        .then(function(res) {
          console.log(res);
          // console.log(res.data);
          if (res.data == "") {
            app.$message.success("下载成功");
          } else {
            app.$message.error("下载失败");
          }
        });
    },

    // 点击每条资源的属性
    attributeHandle(row) {
      var app = this;
      // console.log(row);
      this.attributeObj = row;
      // console.log(this.attributeObj);
    },

    //时间格式处理
    dateFormat: function(row, column) {
      // console.log(row);
      // console.log(column);
      var date = row[column.property]; // console.log(date)
      if (date == undefined) {
        return "";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:MM:SS");
>>>>>>> Ruthless
    }
  },

  created() {
    // 组件加载完成之后的生命回调函数,如果页面一加载就需要显示数据,数据就在此获取
    var customId = this.$route.params.id;
<<<<<<< HEAD
=======
    // console.log(customId);
>>>>>>> Ruthless
    var app = this;
    // 获取学期和对应课程列表
    app.$http
      .get(`/product/majorCustomItem/listByCustomIdForAble/${customId}`)
      .then(function(res) {
        // console.log(res.data);
        app.arr = res.data;
      });
<<<<<<< HEAD
=======
    app.CourseDetails(248);
>>>>>>> Ruthless
  }
};
</script>

<style>
/* 标题部分 */
.header1 {
  min-height: 144px;
  background: linear-gradient(60deg, #f336aa, #f57ed7);
}
.h-text {
  float: left;
  margin-left: 180px;
  color: #ffffff;
}
.h-t-p1 {
  font-size: 26px;
  font-weight: 400;
}
.h-t-p2 {
  font-weight: 300;
  font-size: 16px;
}
.h-img {
  float: right;
  margin-right: 77px;
}

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
.el-dialog {
<<<<<<< HEAD
  width: 70%;
=======
  width: 75%;
>>>>>>> Ruthless
}
.el-radio__label {
  margin-right: 15px;
}
</style>
