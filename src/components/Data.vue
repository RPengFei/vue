<template>
    <div>
        <h3>计算属性</h3>
        <p>
            <input type="text" v-model="myText">
        </p>
        <ul>
            <li v-for="i in filter" :key='i'>
                {{i}}
            </li>
        </ul>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            myText:"",
            list:['aa','bb','ab','c','cb','d','cd']
        };
    },
    methods: {
        
    },
    computed:{
        filter:function (params) {
            return this.list.filter((i)=> i.indexOf(this.myText) != -1)
        }
    }
};
</script>

