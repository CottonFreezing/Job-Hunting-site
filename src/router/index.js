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
import Admin from '../pages/Admin/admin.vue'

//PersonalCenter子路由
import Mybase from '../components/PersonalCenterList/Mybase.vue'
import Changepassword from '../components/PersonalCenterList/Changepassword.vue'
//RegistTab子路由
import RegistTab1 from '../components/RegistTab/RegistTab1.vue'
import RegistTab2 from '../components/RegistTab/RegistTab2'
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

// admin路由及子路由



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
            },
            children: [
                {
                    path: '/',
                    redirect: 'mybase'  ,
                    meta: {
                        showHeaderGuide: true,
                        showFooter: true,
                    },
                },
                {
                    path: 'mybase',
                    component: Mybase,
                    meta: {
                        showHeaderGuide: true,
                        showFooter: true,
                    },
                },
                {
                    path: 'changepass',
                    component: Changepassword,
                    meta: {
                        showHeaderGuide: true,
                        showFooter: true,
                    },
                },
            ],
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
            children: [
                {
                    path: '/',
                    redirect: 'registtab1'
                },
                {
                    path: 'registtab1',
                    component: RegistTab1,
                },
                {
                    path: 'registtab2',
                    component: RegistTab2,
                },
            ],
        },
        {
            path: '/bosscenter',
            component: BossCenter,
            meta: {
                showBossHeader: true,
                showFooter: true,
            },
            children: [
                {
                    path: '/',
                    redirect: 'bossbase',
                },
                {
                    path: 'bossbase',
                    component: BossBase,
                    meta: {
                        showBossHeader: true,
                        showFooter: true,
                    }, 
                },
                {
                    path: 'bosschangepass',
                    component: BossChangePass,
                    meta: {
                        showBossHeader: true,
                        showFooter: true,
                    }, 
                },
                {
                    path: 'unprocessed',
                    component: Unprocessed,
                    meta: {
                        showBossHeader: true,
                        showFooter: true,
                    }, 
                },
                {
                    path: 'notifyinterview',
                    component: NotifyInterview,
                    meta: {
                        showBossHeader: true,
                        showFooter: true,
                    }, 
                },
                {
                    path: 'inappropriate',
                    component: Inappropriate,
                    meta: {
                        showBossHeader: true,
                        showFooter: true,
                    }, 
                },
                
                
            ],
        },
        {
            path: '/candidates',
            component: Candidates,
            meta: {
                showBossHeader: true,
                showFooter: true,
            },
        },
        {
            path: '/candidateslist',
            component: CandidatesList,
            meta: {
                showBossHeader: true,
                showFooter: true,
            },
        },
        {
            path: '/posting',
            component: Posting,
            meta: {
                showBossHeader:true,
                showFooter: true,
            },
            children:[
                {
                    path: '/',
                    redirect: 'postjob',
                    meta: {
                        showBossHeader:true,
                        showFooter: true,
                    },
                },
                {
                    path: 'postjob',
                    component: PostJob,
                    meta: {
                        showBossHeader:true,
                        showFooter: true,
                    },
                },
                {
                    path: 'effectivejob',
                    component: EffectiveJob,
                    meta: {
                        showBossHeader:true,
                        showFooter: true,
                    },
                },
                {
                    path: 'offlinejob',
                    component: OfflineJob,
                    meta: {
                        showBossHeader:true,
                        showFooter: true,
                    },
                },
            ],
        },
        {
            path: '/admin',
            component: Admin,
            meta: {
                showFooter: true,
            }
            
        }
    ]
}
)