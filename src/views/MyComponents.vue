<template>
    <div>
        <h3>组件通信</h3>
        <hr>
        <h3>父组件</h3>
        <h4>子组件传过来的数据： {{sondata}}</h4>
        <SonOne :message='list' @sendMsg='setsondata'></SonOne>   
        <SonTwo>
            <div>父组件传递给sonTwo的数据</div>
        </SonTwo>

    </div>
</template>

<script>

import SonOne from '@/views/SonOne'  
import SonTwo from '@/views/SonTwo'  

export default {
    name: "Form",
    data() {
        return {
            myText:"",
            list:['发送给子组件one的数据','1111'],
            sondata:""
        };
    },
    methods: {
        setsondata:function (val) {
            this.sondata = val;
        }
    },
    components:{
        SonOne,
        SonTwo
    }
};


</script>

