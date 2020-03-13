<template>
    <div id="app">
       
        <HeaderGuide v-if="$route.meta.showHeaderGuide"></HeaderGuide>
        <boss-header v-if="$route.meta.showBossHeader"></boss-header>
        <router-view></router-view>
        <Footer v-if="$route.meta.showFooter"></Footer>
    </div>   
</template>

<script>
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'
import Footer from './components/Footer/Footer.vue'
import BossHeader from './components/HeaderGuide/BossHeader.vue'
export default {
    components:{
       HeaderGuide,
       Footer,
       BossHeader,
    }
}

</script>
    
<style>
#app {
        width: 100%;
        height: 100%;
    }
</style>