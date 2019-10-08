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

      <el-col :span="24">
        <div class="mbox">
          <p class="mb-p">问题库</p>

          <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="已回复提问" name="first">
                <template>
<<<<<<< HEAD
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="caozuo" label="详情"></el-table-column>
=======
                  <el-table :data="tableData">
                    <el-table-column prop="problem" label="问题" width="600">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='Y'">{{item.subject}}</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="time" label="发起时间" width="200">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='Y'">{{item.proposeTime}}</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="state" label="状态">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='Y'">已解答</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="handle" label="操作">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='Y'">
                          <img src="../../images/详情.png" alt />
                          <span>详情</span>
                        </span>
                      </div>
                    </el-table-column>
>>>>>>> Ruthless
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="未回复提问" name="second">
                <template>
<<<<<<< HEAD
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="caozuo" label="详情"></el-table-column>
=======
                  <el-table :data="tableData" style="line-height: 39px;">
                    <el-table-column prop="problem" label="问题" width="600">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='N'">{{item.subject}}</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="time" label="发起时间" width="200">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='N'">{{item.proposeTime}}</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="state" label="状态">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='N'">未解答</span>
                      </div>
                    </el-table-column>
                    <el-table-column prop="handle" label="操作">
                      <div v-for="(item,index) in arr" :key="index">
                        <span v-if="item.isSolution=='N'">
                          <img src="../../images/回复.png" style="width:16px;margin-right:5px;" />
                          <el-button type="text" @click="dialogVisible = true">
                            <div style="color:#409EFF" @click="answer(item.id)">回复</div>
                          </el-button>
                        </span>
                      </div>
                    </el-table-column>
>>>>>>> Ruthless
                  </el-table>
                </template>
              </el-tab-pane>
            </el-tabs>
<<<<<<< HEAD
=======
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
>>>>>>> Ruthless
          </template>

          <el-divider></el-divider>

          <p class="mb-p">意见反馈</p>
<<<<<<< HEAD

          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="意见" width="180"></el-table-column>
              <el-table-column prop="name" label="意见类型" width="180"></el-table-column>
              <el-table-column prop="address" label="发起时间"></el-table-column>
              <el-table-column prop="caozuo" label="操作"></el-table-column>
            </el-table>
          </template>
=======
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="problem" label="意见" width="180">
              <div v-for="(item,index) in opinion" :key="index">
                <span>{{item.handleResult}}</span>
              </div>
            </el-table-column>
            <el-table-column prop="time" label="意见类型" width="180">
              <div v-for="(item,index) in opinion" :key="index">
                <span>{{item.typeName}}</span>
              </div>
            </el-table-column>
            <el-table-column prop="state" label="发起时间">
              <div v-for="(item,index) in opinion" :key="index">
                <span>{{item.handleTime}}</span>
              </div>
            </el-table-column>
            <el-table-column prop="handle" label="操作">
              <div v-for="(item,index) in arr" :key="index">
                <span>
                  <img src="../../images/详情.png" style="width:16px;margin-right:5px;" />
                  <el-button type="text" @click="dialogVisibles = true">
                    <span style="color:#409EFF" @click="clickDetails(item.id)">详情</span>
                  </el-button>
                </span>
              </div>
            </el-table-column>
          </el-table>
          <el-dialog
            :visible.sync="dialogVisibles"
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
              <div>
                我的反馈：
                <textarea name id cols="30" rows="4" v-model="textarea"></textarea>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisibles = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisibles = false">
                <span @click="submitDetails(details.id,textarea)">反 馈</span>
              </el-button>
            </span>
          </el-dialog>
>>>>>>> Ruthless
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
<<<<<<< HEAD
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          caozuo: "详情"
=======
      dialogVisible: false,
      dialogVisibles: false,
      activeName: "first",
      tableData: [
        {
          problem: "",
          time: "",
          state: "",
          handle: ""
>>>>>>> Ruthless
        }
      ],
      page: 1,
      pageSize: 3,
<<<<<<< HEAD
      arr: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
=======
      arr: [],
      recovered: {},
      textarea: "",
      opinion: [],
      details: {}
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    answer: function(id) {
      var app = this;
      // console.log(id);
      this.$http
        .get(`/business/studentQuestion/detail/${id}`)
        .then(function(res) {
          // console.log(res.data);
          app.recovered = res.data;
          // console.log(app.recovered);
        });
    },
    submitAnswer(id, explanation) {
      // console.log(id);
      var app = this;
      this.$http
        .post("/business/studentQuestion/explainQuestion", {
          id,
          explanation
        })
        .then(function(res) {
          // console.log(res.data);
          if (res.data == "") {
            app.textarea = "";
            console.log("提交成功");
          }
        });
    },
    clickDetails(id) {
      console.log(id);
      var app = this;
      app.$http
        .get(`/business/opinionsSuggestions/detail/${id}`)
        .then(function(res) {
          console.log(res.data);
          app.details = res.data;
        });
    },
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
            console.log("提交成功");
          }
        });
>>>>>>> Ruthless
    }
  },
  created() {
    // 组件加载完成之后的生命回调函数,如果页面一加载就需要显示数据,数据就在此获取
    var app = this;
    app.$http
      .post("/business/studentQuestion/page", {
        page: this.page,
        pageSize: this.pageSize
      })
      .then(function(res) {
<<<<<<< HEAD
        console.log(res);
        app.arr = res.data.data;
      });
=======
        // console.log(res.data.data);
        app.arr = res.data.data;
      });
    app.$http
      .post("/business/opinionsSuggestions/pageAll", {
        page: this.page,
        pageSize: this.pageSize
      })
      .then(function(res) {
        // console.log(res.data.data);
        app.opinion = res.data.data;
        // console.log(app.opinion);
      });
>>>>>>> Ruthless
  }
};
</script>

<style>
<<<<<<< HEAD
=======
.el-table .cell {
  line-height: 39px;
}
>>>>>>> Ruthless
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
.mbox {
  margin-right: 100px;
  margin-left: 100px;
}
.mb-p {
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  border-left: 4px solid rgb(74, 192, 224);
  padding-left: 10px;
}
</style>