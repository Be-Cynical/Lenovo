import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue-router
import Logined from '@/components/common/Login.vue'       // 引入登录组件
// -----------------------------------------------------------------------------------------------------------------------
import Thome from '@/components/Teachers/Home.vue'        // 引入教师端主页面
import MyMajor from '@/components/Teachers/MyMajor.vue'   // 引入教师端的我教的专业页面
import MyExam from '@/components/Teachers/MyExam.vue'     // 引入教师端的考试管理页面
import StuManagement from '@/components/Teachers/StuManagement.vue'         // 引入教师端学员管理页面
import CourseManagement from '@/components/Teachers/CourseManagement.vue'   // 引入教师端课程管理页面
import MyContribution from '@/components/Teachers/MyContribution.vue'       // 引入教师端我的贡献页面
import OnlineAnswer from '@/components/Teachers/OnlineAnswer.vue'       // 引入教师端在线解答页面


// -----------------------------------------------------------------------------------------------------------------------
import Shome from '@/components/Students/Home.vue'    // 引入学生端主页面
import SearchMain from "@/components/Students/SearchMain.vue"     // 引入学生端在线提问页面
import Profession from "@/components/Students/Profession.vue"     // 引入学生端我的专业页面
import StuStatisticsOverview from "@/components/Students/StuStatisticsOverview.vue" // 引入学生端我的成长页面
import StuEvaluate from "@/components/Students/StuEvaluate.vue"   // 引入学生端我的参与页面
import ExaminationMain from "@/components/Students/ExaminationMain.vue"   // 引入学生端我的考试页面

Vue.use(VueRouter)  // 在vue对象中使用vue-router

const routes = [
  {
    path: "/",
    redirect: "/logined"   // 路由重定向 当用户访问根目录时，重定向到logined路径
  },
  {
    path: "/logined",
    component: Logined
  },
  {
    path: "/teacher",   // 教师端主页面路由
    component: Thome,
    children: [
      {
        path: "MyMajor",    // 教师端我教的专业页面
        component: MyMajor,
        name: "MyMajor"
      },
      {
        path: "MyExam",     // 教师端考试管理页面
        component: MyExam,
        name: "MyExam"
      },
      {
        path: "StuManagement",     // 教师端学员管理页面
        component: StuManagement,
        name: "StuManagement"
      },
      {
        path: "CourseManagement",     // 教师端课程管理页面
        component: CourseManagement,
        name: "CourseManagement"
      },
      {
        path: "MyContribution",     // 教师端我的贡献页面
        component: MyContribution,
        name: "MyContribution"
      },
      {
        path: "OnlineAnswer",     // 教师端在线解答页面
        component: OnlineAnswer,
        name: "OnlineAnswer"
      }
    ]
  },
  {
    path: "/student",   // 学生端主页面路由
    component: Shome,
    children: [
      {
        path: "SearchMain",   // 学生端在线提问路由
        component: SearchMain, 
        name:"SearchMain"
      },
      {
        path:"Profession",   // 学生端我的专业路由
        component: Profession,
        name:"Profession"
      },
      {
        path:"StuStatisticsOverview",   // 学生端我的成长路由
        component: StuStatisticsOverview,
        name:"StuStatisticsOverview"
      },
      {
        path:"StuEvaluate",   // 学生端我的参与路由
        component: StuEvaluate,
        name:"StuEvaluate"
      },
      {
        path:"ExaminationMain",   // 学生端我的考试路由
        component: ExaminationMain,
        name:"ExaminationMain"
      }
    ]
  }
]

const router = new VueRouter({  // 将routes注册到router中
  routes
})

export default router;
