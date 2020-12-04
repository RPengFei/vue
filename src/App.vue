<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import bus from "vue-bus"
import Footer from'./components/Footer'
Vue.use(bus);

export default {
    data(){
        return {
        }
    },
    components:{
        Footer
    }
}
</script>

<style>

</style>
