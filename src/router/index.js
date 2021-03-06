// 路由模块

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Home from '../pages/Home/home.vue'
import Job from '../pages/Job/job.vue'
import Company from '../pages/Company/company.vue'
import PersonalCenter from '../pages/PersonalCenter/personalcenter.vue'
import Resumes from '../pages/Resumes/resumes.vue'
import Login from '../pages/Login/login.vue'
import Regist from '../pages/Regist/regist.vue'
import Joblist from '../pages/Job/joblist.vue'
import Companylist from '../pages/Company/companylist.vue'

//PersonalCenter子路由
import Mybase from '../components/PersonalCenterList/Mybase.vue'
import Changepassword from '../components/PersonalCenterList/Changepassword.vue'
//Boss路由
import BossCenter from '../pages/Boss/bosscenter.vue'
import Candidates from '../pages/Boss/candidates.vue'
import CandidatesList from '../pages/Boss/candidateslist.vue'
import Posting from '../pages/Boss/posting.vue'

//Posting子路由
import PostJob from '../components/Posting/PostJob.vue'
import EffectiveJob from '../components/Posting/EffectiveJob.vue'
import OfflineJob from '../components/Posting/OfflineJob.vue'

//BossCenter子路由
import BossBase from '../components/BossCenter/BossBase.vue'
import BossChangePass from '../components/BossCenter/BossChangePass.vue'
import Unprocessed from '../components/BossCenter/Unprocessed.vue' //待定简历
import NotifyInterview from '../components/BossCenter/NotifyInterview.vue' //已通知面试简历
import Inappropriate from '../components/BossCenter/InappropriateResume.vue' //不合适简历

// 注册填写信息路由
import CandReg from '../pages/Regist/candreg.vue'
import BossReg from '../pages/Regist/bossreg.vue'



//申明使用插件
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    //所有路由
    routes: [
        {
            path: '/',
            redirect: '/home'  // 默认的是home
        },
        {
            path: '/home',
            name: '/home',
            component: Home,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            },
        },
        {
            path: '/job',
            name: '/job',
            component: Job,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            },
        },
        {
            path: '/joblist',
            name: '/joblist',
            component: Joblist,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/company',
            name: '/company',
            component: Company,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/companylist',
            name: '/companylist',
            component: Companylist,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            }
        },
        {
            path: '/personalcenter',
            name: '/personalcenter',
            component: PersonalCenter,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
            },
            children: [
                {
                    path: '/',
                    redirect: 'mybase',
                    meta: {
                        keepAlive: true,
                        showHeaderGuide: true,
                        showFooter: true,
                        parentPath: '/personalcenter',
                    },
                },
                {
                    path: 'mybase',
                    name: 'mybase',
                    component: Mybase,
                    meta: {
                        keepAlive: true,
                        showHeaderGuide: true,
                        showFooter: true,
                        parentPath: '/personalcenter',
                    },
                },
                {
                    path: 'changepass',
                    name: 'changepass',
                    component: Changepassword,
                    meta: {
                        keepAlive: true,
                        showHeaderGuide: true,
                        showFooter: true,
                        parentPath: '/personalcenter',
                    },
                },
            ],
        },
        {
            path: '/resumes',
            name: '/resumes',
            component: Resumes,
            meta: {
                showHeaderGuide: true,
                showFooter: true,
                // requireAuth: true,//表示进入这个路由需要登录
            }
        },
        {
            path: '/login',
            name: '/login',
            component: Login,

        },
        {
            path: '/regist',
            name: '/regist',
            component: Regist,
        },
        {
            path: '/candreg',
            name: '/candreg',
            component:CandReg,
            meta: {
                
            }
        },
        {
            path: '/bossreg',
            name: '/bossreg',
            component: BossReg,
            meta: {
                
            }
        },
        {
            path: '/bosscenter',
            name: '/bosscenter',
            component: BossCenter,
            meta: {
                showBossHeader: true,
                showFooter: true,
                // requireAuth: true,
            },
            children: [
                {
                    path: '/',
                    redirect: 'bossbase',
                },
                {
                    path: 'bossbase',
                    name: 'bossbase',
                    component: BossBase,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/bosscenter',
                    },
                },
                {
                    path: 'bosschangepass',
                    name: 'bosschangepass',
                    component: BossChangePass,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/bosscenter',
                    },
                },
                {
                    path: 'unprocessed',
                    name: 'unprocessed',
                    component: Unprocessed,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/bosscenter',
                    },
                },
                {
                    path: 'notifyinterview',
                    name: 'notifyinterview',
                    component: NotifyInterview,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/bosscenter',
                    },
                },
                {
                    path: 'inappropriate',
                    name: 'inappropriate',
                    component: Inappropriate,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/bosscenter',
                    },
                },


            ],
        },
        {
            path: '/candidates',
            name: '/candidates',
            component: Candidates,
            meta: {
                showBossHeader: true,
                showFooter: true,
                // requireAuth: true,
            },
        },
        {
            path: '/candidateslist',
            name: '/candidateslist',
            component: CandidatesList,
            meta: {
                showBossHeader: true,
                showFooter: true,
                // requireAuth: true,
            },
        },
        {
            path: '/posting',
            name: '/posting',
            component: Posting,
            meta: {
                showBossHeader: true,
                showFooter: true,
                // requireAuth: true,
            },
            children: [
                {
                    path: '/',
                    redirect: 'postjob',
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/posting',
                    },
                },
                {
                    path: 'postjob',
                    name: 'postjob',
                    component: PostJob,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/posting',
                    },
                },
                {
                    path: 'effectivejob',
                    name: 'effectivejob',
                    component: EffectiveJob,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/posting',
                    },
                },
                {
                    path: 'offlinejob',
                    name: 'offlinejob',
                    component: OfflineJob,
                    meta: {
                        keepAlive: true,
                        showBossHeader: true,
                        showFooter: true,
                        parentPath: '/posting',
                    },
                },
            ],
        },

    ]
}
)

//全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
    const token = store.state.token
    if (to.meta.requireAuth) { //判断是否需要登录权限
        if (token) { //通过vuex state获取当前的token是否存在
            next()
        } else {
            var c = confirm('即将跳转登录页面')
            if (c) {
                next({
                    path: '/login'
                    // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        }
    } else {
        next()
    }
})
export default router