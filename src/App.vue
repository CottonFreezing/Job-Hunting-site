<template>
    <div id="app">
       
        <HeaderGuide v-if="$route.meta.showHeaderGuide"></HeaderGuide>
        <router-view></router-view>
        <Footer v-if="$route.meta.showFooter"></Footer>
    </div>   
</template>

<script>
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'
import Footer from './components/Footer/Footer.vue'
export default {
    components:{
       HeaderGuide,
       Footer,
    }
}

</script>
    #app {
        width: 100%;
        height: 100%;
        background:#f5f5f5;
    }
<style>

</style>