export default {
  path: "/",
  component: () => import("../layout/Index"),
  children: [
    // 系统首页
    {
      path: "",
      name: "home",
      component: () => import("../views/home/Home"),
      meta: {
        //路由的数据
        icon: "home",
        title: "首页",
      },
    },
    // 课程管理
    {
      path: "course-manage",
      name: "course-manage",
      component:{
        render: (h) => <router-view />,
      },
      redirect: "/course-manage/course-list",
      meta: {
        icon:"carry-out",
        title: "课程管理",
      },
      children: [
        {
          path: "course-list",
          name: "course-list",
          component: () => import("../views/course/CourseList"),
          meta: {
            title: "课程列表",
          },
          children:[
            {
              path: "add-course",
              name: "add-course",
              component: () => import("../views/course/CourseConsume"),
            }
          ]
        },
        {
          path: "course-consume",
          name: "course-consume",
          component: () => import("../views/course/CourseConsume"),
          meta: {
            title: "课程消耗",
          },
        },
      ],
    },
    // 班级管理
    {
      path: "class-manage",
      name: "class-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/class-manage/class-manage-detail",
      meta: {
        icon:'codepen',
        title: "班级管理",
      },
      children: [
        {
          path: "class-manage-detail",
          name: "class-manage-detail",
          component: () => import("../views/class/ClassManageDetail"),
          meta: {
            title: "班级管理",
          },
        },
        // 课时管理
        {
          path: "lesson-manage",
          name: "lesson-manage",
          component: () => import("../views/class/LessonManage"),
          meta: {
            title: "课时管理",
          },
        },
        // 教室管理
        {
          path: "classroom-manage",
          name: "classroom-manage",
          component: () => import("../views/class/ClassroomManage"),
          meta: {
            title: "教室管理",
          },
        },
        //课程表  
        {
          path: "class-schedule",
          name: "class-schedule",
          component: () => import("../views/class/ClassSchedule"),
          meta: {
            title: "课程表",
          },
        },
      ],
    },
    // 订单管理
    {
      path: "order-manage",
      name: "order-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/order-manage/OrderList",
      meta: {
        icon:'pay-circle',
        title: "订单管理",
      },
      children:[
        {
          path:"order-list",
          name:"order-list",
          component:()=>import("../views/order/OrderList"),
          meta: {
            title: "订单列表",
          },
        },
        {
          path:"refund-manage",
          name:"refund-manage",
          component:()=>import("../views/order/RefundManage"),
          meta: {
            title: "退款管理",
          },
        }
      ]
    },
    // 学员管理
    {
      path: "student-manage",
      name: "student-manage",
      component: () => import("../views/student/StudentManage"),
      meta: {
        icon:'team',
        title: "学员管理",
      },
    },
    // 教师管理
    {
      path: "teacher-manage",
      name: "teacher-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/platform-manage/teacher-manage-detail",
      meta: {
        icon:'user',
        title: "教师管理",
      },
      children: [
        // 校区管理
        {
          path: "campus-manage",
          name: "campus-manage",
          component: () => import("../views/teacher/CampusManage"),
          meta: {
            title: "校区管理",
          },
        },
        // 教师管理
        {
          path: "teacher-manage-detail",
          name: "teacher-manage-detail",
          component: () => import("../views/teacher/TeacherManageDetail"),
          meta: {
            title: "教师管理",
          },
        }
      ],
    },
    // 文章管理
    {
      path: "article-manage",
      name: "article-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/article-manage/banner-manage",
      meta: {
        icon:'folder',
        title: "文章管理",
      },
      children: [
        // 轮播图管理
        {
          path: "banner-manage",
          name: "banner-manage",
          component: () => import("../views/article/BannerManage"),
          meta: {
            title: "轮播图管理",
          },
        },
        // 资讯管理
        {
          path: "information-manage",
          name: "information-manage",
          component: () => import("../views/article/InformationManage"),
          meta: {
            title: "资讯管理",
          },
        },
        //活动管理
        {
          path: "activity-manage",
          name: "activity-manage",
          component: () => import("../views/article/ActivityManage"),
          meta: {
            title: "活动管理",
          },
        },
        //公开课管理
        {
          path: "public-class-manage",
          name: "public-class-manage",
          component: () => import("../views/article/PublicClassManage"),
          meta: {
            title: "公开课管理",
          },
        },
      ],
    },
    // 促销活动
    {
      path: "promotions",
      name: "promotions",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/promotions/spike-activity",
      meta: {
        icon:'shopping',
        title: "促销活动",
      },
      children: [
        {
          path: "spike-activity",
          name: "spike-activity",
          component: () => import("../views/activity/SpikeActivity"),
          meta: {
            title: "秒杀活动",
          },
        },
        {
          path: "coupon-manage",
          name: "coupon-manage",
          component: () => import("../views/activity/CouponManage"),
          meta: {
            title: "优惠券管理",
          },
        }
      ],
    },
    //统计分析
    {
      path: "statistical-analysis",
      name: "statistical-analysis",
      component: () => import("../views/statistical/StatisticalAnalysis"),
      meta: {
        icon:'fund',
        title: "统计分析",
      }
    },
    // 系统设置
    {
      path: "system-setting",
      name: "system-setting",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/system-setting/staff-manage",
      meta: {
        icon:'setting',
        title: "系统设置",
      },
      children: [
        {
          path: "staff-manage",
          name: "staff-manage",
          component: () => import("../views/setting/StaffManage"),
          meta: {
            title: "员工管理",
          },
        },
        {
          path: "roles-manage",
          name: "roles-manage",
          component: () => import("../views/setting/RolesManage"),
          meta: {
            title: "角色管理",
          },
        },
        {
          path: "about-us",
          name: "about-us",
          component: () => import("../views/setting/AboutUs"),
          meta: {
            title: "关于我们",
          },
        },
        {
          path: "general-setting",
          name: "general-setting",
          component: () => import("../views/setting/GeneralSetting"),
          meta: {
            title: "通用设置",
          },
        },
        {
          path: "message",
          name: "message",
          component: () => import("../views/setting/Message"),
          meta: {
            title: "消息",
          },
        },
        {
          path: "operation-log",
          name: "operation-log",
          component: () => import("../views/setting/OperationLog"),
          meta: {
            title: "操作日志",
          },
        }
      ],
    },
    // 权限管理
    {
      path: "rights-manage",
      name: "rights-manage",
      component: () => import("../views/rights/Manage"),
      meta: {
        title: "权限管理",
      }
    },
    {
      path: "add-acount",
      name: "add-acount",
      component: () => import("../views/rights/AddAcount"),
      meta: {
        title: "添加账号",
      }
    },
  ],
};