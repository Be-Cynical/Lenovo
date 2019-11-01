<template>
  <div id="MasterSetting" class="ms-box">
    <!-- 顶部图片部分 -->
    <el-row>
      <el-col :span="24" class="header2">
        <div class="h-text">
          <p class="h-t-p1">我的成长(联想玖要素)</p>
          <p class="h-t-p2">行动3要求 品德5要求 结果1要求</p>
        </div>
        <div class="h-img">
          <img src="../../images/back03.png" alt />
        </div>
      </el-col>
    </el-row>

    <div class="content1">
      <el-row :gutter="10" style="margin-top: 25px;">
        <el-col :span="12">
          <el-row style="border: 1px solid #ccc;border-radius:5px">
            <el-col :span="5" style="background:#FFC125;color:#fff;text-align:center">驻场评语</el-col>
            <el-col :span="19" style="background:#fff">
              <span>&nbsp;&nbsp;&nbsp;你要敲代码！</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row style="border: 1px solid #ccc;border-radius:5px">
            <el-col :span="5" style="background:#FFC125;color:#fff;text-align:center">讲师评语</el-col>
            <el-col :span="19" style="background:#fff">
              <span>&nbsp;&nbsp;&nbsp;暂无评语</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <table>
          <tr>
            <td>序号</td>
            <td>课程名称</td>
            <td>考试时间</td>
            <td>考试成绩</td>
            <td>班级排名</td>
            <td>查看试卷</td>
          </tr>
          <tr>
            <td>1</td>
            <td>WEB前端基础(HTML+CSS)</td>
            <td>2019-10-27</td>
            <td>68</td>
            <td>1</td>
            <td>查看试卷</td>
          </tr>
          <tr>
            <td>2</td>
            <td>JavaScript</td>
            <td>2019-10-28</td>
            <td>缺考</td>
            <td>--</td>
            <td>查看试卷</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vue.js框架开发</td>
            <td>2019-10-29</td>
            <td>缺考</td>
            <td>--</td>
            <td>查看试卷</td>
          </tr>
        </table>
      </el-row>
      <el-row style="margin-top: 25px;" :gutter="60">
        <el-col :span="11" :offset="1">
          <el-row style="color:#fff;font-size:14px;">
            <el-col :span="8" style="background:#ff69b4;text-align:center">联想班学生奖励 9要点</el-col>
            <el-col :span="16" style="background:pink;">
              <span>&nbsp;&nbsp;</span>
              奖励共
              <span></span>次
              共
              <span></span>分
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <div class="block">
              <el-timeline v-for="(item,index) in listPrize" :key="index">
                <el-timeline-item :timestamp="item.createTime" placement="top" color="#0f0">
                  <el-card>
                    <p>奖励项目：{{item.factorName}}</p>
                    <div>
                      加分：
                      <span style="color:#0f0">+2分</span>
                    </div>
                    <p>备注：{{item.fractionDesc}}</p>
                    <div>
                      <span>提交人：{{item.userName}}</span>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <span>提交于：{{item.rewardPenaltyTime}}</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-row>
        </el-col>
        <el-col :span="11">
          <el-row style="color:#fff;font-size:14px;">
            <el-col :span="8" style="background:#00bfff;text-align:center">联想班学生处罚 9要点</el-col>
            <el-col :span="16" style="background:#87cefa;">
              <span>&nbsp;&nbsp;</span>
              处罚共
              <span></span>次
              共
              <span></span>分
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <div class="block">
              <el-timeline v-for="(item,index) in listPenalty" :key="index">
                <el-timeline-item :timestamp="item.createTime" placement="top" color="#f00">
                  <el-card>
                    <p>奖励项目：{{item.factorName}}</p>
                    <div>
                      加分：
                      <span style="color:#f00">-2分</span>
                    </div>
                    <p>备注：{{item.fractionDesc}}</p>
                    <div>
                      <span>提交人：{{item.userName}}</span>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <span>提交于：{{item.rewardPenaltyTime}}</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "searchMain",
  data() {
    return {
      recodeType: 1,
      listPrize: [], //奖励
      listPenalty: [] //处罚
    };
  },
  methods: {},
  created() {
    //页面一开始显示的数据
    //获取联想9要素-奖励和待改进1、联想9要素-奖励和待改进数据
    var app = this;
    this.$http
      .post(
        `/business/nineEssentialFactor/getExcitationListBySemesterOrRecodeType?recodeType=${this.recodeType}`
      )
      .then(function(res) {
        console.log(res);
        // app.list = res.data;
        var list = res.data;
        for (var i = 0; i < list.length; i++) {
          if (list[i].fraction == 2) {
            //奖励
            app.listPrize.push(list[i]);
          } else {
            list[i].fraction == -2; //处罚
            app.listPenalty.push(list[i]);
          }
        }
      });
  }
};
</script>
<style>
/* 容器 */
.ms-box {
  background: #ffffff;
}
/* 标题部分 */
.header2 {
  min-height: 144px;
  background: linear-gradient(60deg, #ee5710, #f19165);
}
.h-text {
  float: left;
  margin-left: 180px;
  color: #ffffff;
}
.h-t-p1 {
  font-size: 27px;
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

.content1 {
  width: 80%;
  margin-left: 10%;
}
table tr td {
  border: 1px solid #000;
  text-align: center;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 25px;
}
</style>