<template>
    <div>
        <hr>
      <h3>{{title}}</h3>
      <div>
          <h4>父组件传递的数据</h4>    
        <ul>
            <li v-for="i in message" :key="i">{{i}}</li>
        </ul>    
      </div><br>
      <input type="text" v-model="senddata">
      <button @click="send">sendbrothers</button>
      
      <h3>插槽</h3>
      <slot></slot>
    </div>
</template>
<script>
    export default {
      name: "SonTwo",
      props:['message'],  //使用props接收父组件传递的信息
      data(){
          return{
            title:'Two子组件',
            senddata:"",
          }
      },
      methods:{
          send:function () {
              this.$bus.$emit('sendOne',this.senddata)
          }
      }
    }
</script>