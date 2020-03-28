import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//初始化时用sessionStore.getItem('token') ,这样刷新页面无需重新登录
const state = {
    user:"123",
    user: window.sessionStorage.getItem('user'),
    companyid: window.sessionStorage.getItem('companyid'),
    token: window.sessionStorage.getItem('token')
}
const getters = {
    GET_USER(state) {
        return state.user
    }
}
const mutations = {
    //将token保存到sessionStorage里， token表示登录状态
    SET_TOKEN: (state,data) => {
        state.token = data
        window.sessionStorage.setItem('token', data)
    },
    //获取用户名
    GET_USER: (state, data) => {
        //把用户名字存起来
        state.user = data
        window.sessionStorage.setItem('user', data)
    },
    //获取公司id
    GET_COMPANYID: (state, date) => {
        state.companyid = date
        window.sessionStorage.setItem('companyid', data)
    },
    //退出登录
    LOGOUT: (state) => {
        //退出登录是要清除token
        state.token = null
        state.user = null
        state.companyid = null
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user')
        window.sessionStorage.removeItem('companyid')

    }
}

const actions = {

}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters, 
});
export default store