// 路由模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/home.vue'
import Job from '../pages/Job/job.vue'
import Company from '../pages/Company/company.vue'
import PersonalCenter from '../pages/PersonalCenter/personalcenter.vue'
import Resumes from '../pages/Resumes/resumes.vue'
import Login from '../pages/Login/login.vue'
import Regist from '../pages/Regist/regist.vue'
import Joblist from '../pages/Job/joblist.vue'
//申明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/',
            redirect: '/home'  // 默认的是home
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            },
        },
        {
            path: '/job',
            component: Job,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            },
        },
        {
            path: '/joblist',
            component: Joblist,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/company',
            component: Company,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/personalcenter',
            component: PersonalCenter,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/resumes',
            component: Resumes,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/regist',
            component: Regist,
        },
    ]
}
)