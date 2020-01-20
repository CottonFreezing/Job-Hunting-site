// 路由模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/home.vue'
import Job from '../pages/Job/job.vue'
import Company from '../pages/Company/company.vue'
import PersonalCenter from '../pages/PersonalCenter/personalcenter.vue'
import Resumes from '../pages/Resumes/resumes.vue'
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
        },
        {
            path: '/job',
            component: Job,
        },
        {
            path: '/company',
            component: Company,
        },
        {
            path: '/personalcenter',
            component: PersonalCenter,
        },
        {
            path: '/resumes',
            component: Resumes,
        },
    ]
}
)