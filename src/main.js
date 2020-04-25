// 入口JS

import Vue from 'vue'
//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'

import apiConfig from '../config/api.config'

import app from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index' //仓库

import qs from 'qs'
import VueCookies from 'vue-cookie'
Vue.use(VueCookies)


Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })
Vue.prototype.$axios = axios
//Vue.prototype.$cookie = cookie
Vue.prototype.$qs = qs 
// Vue.prototype.$store = store
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true //让ajax携带cookie
/* eslint-disable no-new */
new Vue({
    el:'#app',
    render:h => h(app),
    router,
    store,
})