<template>
  <div id="app">
    {{msg}}
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
            msg:222222
        }
    },
    components:{
        Footer
    }
}
</script>

<style>

</style>
