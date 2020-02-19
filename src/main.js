// 入口JS

import Vue from 'vue'
//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'

import app from './App.vue'
import router from './router'
import axios from 'axios'



Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })
Vue.prototype.$axios = axios



new Vue({
    el:'#app',
    render:h => h(app),
    router,
})