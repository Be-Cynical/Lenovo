<template>
  <div id="OnlineAnswer">
    <el-row>
      <el-col :span="24" class="header">
        <div class="h-text">
          <p class="h-t-p1">在线解答</p>
          <p class="h-t-p2">记录问题数据 知识点问答 在线问题答疑</p>
        </div>
        <div class="h-img">
          <img src="../../images/back03.png" alt />
        </div>
      </el-col>

      <el-col :offset="1" :span="22" class="main-box">
        <div class="mb-box">
          <!-- 问题库部分 -->
          <p class="mb-p">问题库</p>
          <div class="m-b-tabs">
            <el-tabs
              v-model="activeName"
              type="border-card"
              @tab-click="handleClick"
              style="width: 100%;"
              :cell-style="{height:'30px',padding:'5px'}"
            >
              <!-- 已回复问题 -->
              <el-tab-pane label="已回复提问" name="first">
                <template>
                  <el-table
                    :data="problemY.slice((currentPageY-1)*PageSizeTableY,currentPageY*PageSizeTableY)"
                    style="width:100%"
                    :cell-style="{height:'30px',padding:'5px'}"
                  >
                    <el-table-column prop="subject" label="问题" width="650"></el-table-column>
                    <el-table-column prop="proposeTime" label="发起时间" align="center" width="200"></el-table-column>
                    <el-table-column label="状态" align="center">已解答</el-table-column>
                    <el-table-column label="操作" align="center">
                      <template slot-scope="scope">
                        <i
                          class="el-icon-s-comment"
                          style="vertical-align:middle;font-size:20px;margin-right:3px;color:#409EFF"
                        ></i>
                        <el-button type="text" @click="dialogVisible1 = true">
                          <div style="vertical-align:middle;" @click="answer(scope.row.id)">详情</div>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <template>
                    <div style="text-align:center;margin-top:40px;margin-bottom:10px;">
                      <el-pagination
                        background
                        @size-change="handleSizeChangeY"
                        @current-change="handleCurrentChangeY"
                        :current-page="currentPageY"
                        :page-size="PageSizeTableY"
                        layout="total, prev, pager, next, jumper"
                        :total="this.problemY.length"
                      ></el-pagination>
                    </div>
                  </template>
                </template>
              </el-tab-pane>
              <!-- 未回复问题 -->
              <el-tab-pane label="未回复提问" name="second">
                <template>
                  <el-table
                    :data="problemN.slice((currentPage-1)*PageSizeTable,currentPage*PageSizeTable)"
                    style="width:100%"
                    :cell-style="{height:'30px',padding:'5px'}"
                  >
                    <el-table-column prop="subject" label="问题" width="650"></el-table-column>
                    <el-table-column prop="proposeTime" label="发起时间" align="center" width="200"></el-table-column>
                    <el-table-column label="状态" align="center">
                      <span style="color:red">未解答</span>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                      <template slot-scope="scope">
                        <i
                          class="el-icon-s-comment"
                          style="vertical-align:middle;font-size:20px;margin-right:3px;color:#409EFF"
                        ></i>
                        <el-button type="text" @click="dialogVisible = true">
                          <div style="vertical-align:middle;" @click="answer(scope.row.id)">回复</div>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <template>
                    <div style="text-align:center;margin-top:40px;margin-bottom:10px;">
                      <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="PageSizeTable"
                        layout="total, prev, pager, next, jumper"
                        :total="this.problemN.length"
                      ></el-pagination>
                    </div>
                  </template>
                </template>
              </el-tab-pane>
            </el-tabs>
<<<<<<< HEAD
             <el-dialog
              :visible.sync="dialogVisible1"
              width="50%"
              :before-close="handleClose"
              title="回复在线提问"
=======
            <!-- 点击已回复问题详情的dialog -->
            <el-dialog
              :visible.sync="dialogVisible1"
              width="50%"
              :before-close="handleClose"
              title="已回复问题"
>>>>>>> Ruthless
            >
              <div>
                <div>问题：{{recovered.subject}}</div>
                <div>问题说明：{{recovered.question}}</div>
                <div>提问人：{{recovered.proposeStudentId}}</div>
                <div>提问时间：{{recovered.proposeTime}}</div>
                <div>问题标签：{{recovered.typeName}}</div>
                <div>回复答案：{{recovered.explanation}}</div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
              </span>
            </el-dialog>
<<<<<<< HEAD
=======
            <!-- 点击问题回复的dialog -->
>>>>>>> Ruthless
            <el-dialog
              :visible.sync="dialogVisible"
              width="50%"
              :before-close="handleClose"
              title="回复在线提问"
            >
              <div>
                <div>问题：{{recovered.subject}}</div>
                <div>问题说明：{{recovered.question}}</div>
                <div>提问人：{{recovered.proposeStudentId}}</div>
                <div>提问时间：{{recovered.proposeTime}}</div>
                <div>问题标签：{{recovered.typeName}}</div>
                <div>
                  回复答案：
                  <textarea name id cols="30" rows="4" v-model="textarea"></textarea>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                  <span @click="submitAnswer(recovered.id,textarea)">提 交</span>
                </el-button>
              </span>
            </el-dialog>
          </div>

          <el-divider></el-divider>

          <!-- 意见反馈部分 -->
          <p class="mb-p">意见反馈</p>
          <div class="m-b-tabs">
            <el-tabs
              type="border-card"
              style="width: 100%;"
              :cell-style="{height:'30px',padding:'5px'}"
            >
              <el-tab-pane label="意见处理">
                <template>
                  <el-table
                    :data="opinion.slice((opinionCurrentPage-1)*opinionPageSize,opinionCurrentPage*opinionPageSize)"
                    style="width: 100%;"
                    :cell-style="{height:'30px',padding:'5px'}"
                  >
                    <el-table-column prop="subject" label="意见" width="550"></el-table-column>
                    <el-table-column align="center" prop="typeName" label="类型"></el-table-column>
                    <el-table-column align="center" prop="commitTime" label="时间" width="200"></el-table-column>
                    <el-table-column align="center" prop="isHandle" label="状态">
                      <template slot-scope="scope">
                        <span v-if="scope.row.isHandle==='Y'">已处理</span>
                        <span v-else style="color:red">未处理</span>
                      </template>
                    </el-table-column>
                    <el-table-column align="center" prop="isHandle" label="操作">
                      <template slot-scope="scope">
                        <span v-if="scope.row.isHandle==='Y'">
                          <i
                            class="el-icon-tickets"
                            style="vertical-align:middle;font-size:20px;margin-right:3px;color:#409EFF"
                          ></i>
                          <el-button type="text" @click="dialogVisible2 = true">
                            <span
                              style="vertical-align:middle;color:#409EFF"
                              @click="clickDetails(scope.row.id)"
                            >详情</span>
                          </el-button>
                        </span>
                        <span v-else>
                          <i
                            class="el-icon-s-comment"
                            style="vertical-align:middle;font-size:20px;margin-right:3px;color:#409EFF"
                          ></i>
                          <el-button type="text" @click="dialogVisible3 = true">
                            <span
                              style="vertical-align:middle;color:#409EFF"
                              @click="clickDetails(scope.row.id)"
                            >处理</span>
                          </el-button>
                        </span>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <template>
                    <div style="text-align:center;margin-top:40px;margin-bottom:10px;">
                      <el-pagination
                        background
                        @size-change="opinionSizeChange"
                        @current-change="opinionCurrentChange"
                        :current-page="opinionCurrentPage"
                        :page-size="opinionPageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="this.opinion.length"
                      ></el-pagination>
                    </div>
                  </template>
                  <!-- 意见反馈详情 -->
                  <el-dialog
                    :visible.sync="dialogVisible2"
                    width="50%"
                    :before-close="handleClose"
                    title="意见反馈详情"
                  >
                    <div>
                      <div>反馈问题：{{ details.subject }}</div>
                      <div>反馈人：{{ details.handleUserName }}</div>
                      <div>反馈时间：{{ details.handleTime }}</div>
                      <div>问题标签：{{ details.typeName }}</div>
                      <div>反馈内容：{{ details.handleResult }}</div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible2 = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible2 = false">
                        <span @click="submitDetails(details.id,textarea)">反 馈</span>
                      </el-button>
                    </span>
                  </el-dialog>
                  <!-- 问题反馈回复 -->
                  <el-dialog
                    :visible.sync="dialogVisible3"
                    width="50%"
                    :before-close="handleClose"
                    title="意见反馈回复"
                  >
                    <div>
                      <div>反馈问题：{{ details.subject }}</div>
                      <div>发起人：{{ details.commitUserName }}</div>
                      <div>提交时间：{{ details.commitTime }}</div>
                      <div>问题标签：{{ details.typeName }}</div>
                      <div>
                        我的反馈：
                        <textarea name id cols="30" rows="4" v-model="textarea"></textarea>
                      </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible3 = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible3 = false">
                        <span @click="submitDetails(details.id,textarea)">反 馈</span>
                      </el-button>
                    </span>
                  </el-dialog>
                </template>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "OnlineAnswer",
  data: function() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      activeName: "second",
<<<<<<< HEAD
      //未解答问题：
      problemN: [], //未解答问题
      currentPage: 1, //默认显示第一条
      PageSizeTable: 4, // 默认每页显示的条数（可修改）
      //已解答问题：
      problemY: [], //已解答问题
      currentPageY: 1, //默认显示第一条
      PageSizeTableY: 4, // 默认每页显示的条数（可修改）
      //意见反馈：
      opinion: [], //所有意见
      opinionCurrentPage: 1, //默认显示第一条
      opinionPageSize: 4, // 默认每页显示的条数（可修改）
      page: 1,
      pageSize: 8,
      recovered: {},  //当前问题详情
=======
      arr: [], // 所有问题，包括已解答和未解答
      // 未解答问题：
      problemN: [], // 未解答问题
      currentPage: 1, // 默认显示第一条
      PageSizeTable: 4, // 默认每页显示的条数（可修改）
      // 已解答问题：
      problemY: [], // 已解答问题
      currentPageY: 1, // 默认显示第一条
      PageSizeTableY: 4, // 默认每页显示的条数（可修改）
      // 意见反馈：
      opinion: [], // 所有意见
      opinionCurrentPage: 1, // 默认显示第一条
      opinionPageSize: 4, // 默认每页显示的条数（可修改）
      page: 1,
      pageSize: 999,
      recovered: {}, // 当前问题详情
>>>>>>> Ruthless
      textarea: "",
      details: {}
    };
  },
  methods: {
    // 分页
<<<<<<< HEAD
    //未回复问题分页
=======
    // 未回复问题分页
>>>>>>> Ruthless
    handleSizeChange(val) {
      this.PageSizeTable = val; // 每页显示的条数
    },
    handleCurrentChange(val) {
<<<<<<< HEAD
      this.currentPage = val; //显示第几页
    },
    //已回复问题分页
=======
      this.currentPage = val; // 显示第几页
    },
    // 已回复问题分页
>>>>>>> Ruthless
    handleSizeChangeY(val) {
      this.PageSizeTableY = val;
    },
    handleCurrentChangeY(val) {
      this.currentPageY = val;
    },
<<<<<<< HEAD
    //问题反馈分页
=======
    // 问题反馈分页
>>>>>>> Ruthless
    opinionSizeChange(val) {
      this.opinionPageSize = val;
    },
    opinionCurrentChange(val) {
      this.opinionCurrentPage = val;
    },

    // 关闭delogin
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
<<<<<<< HEAD
=======

    // 获取问题库列表
    getNewList() {
      var app = this;
      // 获取问题库
      app.$http
        .post("/business/studentQuestion/page", {
          page: this.page,
          pageSize: this.pageSize
        })
        .then(function(res) {
          console.log(res);
          app.arr = res.data.data;
          console.log(app.arr);
          var newArr = app.arr;
          for (var i = 0; i < newArr.length; i++) {
            if (newArr[i].explanation == null) {
              app.problemN.push(newArr[i]);
            } else {
              newArr[i].isSolution == "Y";
              app.problemY.push(newArr[i]);
            }
          }
        });
      console.log(app.problemY);
      console.log(app.problemN);
    },

    // 获取意见反馈列表
    getOpinionList() {
      var app = this;
      this.$http
        .post("/business/opinionsSuggestions/pageAll", {
          page: this.page,
          pageSize: this.pageSize
        })
        .then(function(res) {
          // console.log(res.data);
          app.opinion = res.data.data;
        });
    },

>>>>>>> Ruthless
    // 意见反馈回复
    handleClick(tab, event) {
      // console.log(tab, event);
    },

    // 问题库 未回复问题 回复按钮
    answer: function(id) {
      var app = this;
      // console.log(id);
      this.$http
        .get(`/business/studentQuestion/detail/${id}`)
        .then(function(res) {
          app.recovered = res.data;
        });
    },
<<<<<<< HEAD
    // 问题库 提交回复
    submitAnswer(id, explanation) {
      console.log(explanation)
=======

    // 问题库 提交回复
    submitAnswer(id, explanation) {
      console.log(explanation);
>>>>>>> Ruthless
      var app = this;
      this.$http
        .post("/business/studentQuestion/explainQuestion", {
          id,
          explanation
        })
        .then(function(res) {
<<<<<<< HEAD
          console.log(res)
=======
          console.log(res);
>>>>>>> Ruthless
          if (res.data == "") {
            app.textarea = "";
            app.$message.success("提交回复成功");
            app.getNewList();
          }
        });
    },

    // 意见反馈 详情/处理按钮
    clickDetails(id) {
      console.log(id);
      var app = this;
      app.$http
        .get(`/business/opinionsSuggestions/detail/${id}`)
        .then(function(res) {
          app.details = res.data;
        });
    },
<<<<<<< HEAD
=======

>>>>>>> Ruthless
    // 意见反馈 提交处理
    submitDetails(id, handleResult) {
      var app = this;
      this.$http
        .post("/business/opinionsSuggestions/examineComments", {
          id,
          handleResult
        })
        .then(function(res) {
          // console.log(res.data);
          if (res.data == "") {
            app.textarea = "";
            app.$message.success("提交成功");
            app.getOpinionList(); //重新调用获取意见反馈列表
          }
        });
    }
  },
  created() {
    // 组件加载完成之后的生命回调函数,如果页面一加载就需要显示数据,数据就在此获取
<<<<<<< HEAD
    var app = this;
    // 获取问题库
    app.$http
      .post("/business/studentQuestion/page", {
        page: this.page,
        pageSize: this.pageSize
      })
      .then(function(res) {
        var newArr = res.data.data;
        for (var i = 0; i < newArr.length; i++) {
          if (newArr[i].explanation == null) {
            app.problemN.push(newArr[i]);
          } else {
            newArr[i].isSolution == "Y";
            app.problemY.push(newArr[i]);
          }
        }
      });
      console.log(app.problemY)
    // 获取问题反馈
    app.$http
      .post("/business/opinionsSuggestions/pageAll", {
        page: this.page,
        pageSize: this.pageSize
      })
      .then(function(res) {
        app.opinion = res.data.data;
      });
=======
    this.getNewList(); // 调用获取消息列表函数
    this.getOpinionList(); // 调用获取意见反馈列表函数
>>>>>>> Ruthless
  }
};
</script>

<style>
/* 标题部分 */
.header {
  min-height: 144px;
  background: linear-gradient(60deg, #6cc4ce, #65f1ce);
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

/* 主要内容 */
.main-box {
  margin-top: 15px;
  background-color: #fff;
}
.mb-box {
  margin: 20px;
}
.mb-p {
  margin-top: 20px;
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  border-left: 4px solid rgb(74, 192, 224);
  padding-left: 10px;
}
.m-b-tabs {
  margin: 25px 30px 40px 30px;
}
</style>