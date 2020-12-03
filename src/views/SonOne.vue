<template>
    <div>
        <hr>
      <h3>{{title}}</h3>
      <div>
          <h4>接受父组件传递的数据</h4>    
        <ul>
            <li v-for="i in message" :key="i">{{i}}</li>
        </ul>    
      </div><br>
      <input type="text" v-model="senddata">
      <button @click="send">sendFather</button>
      
      <h3>接受兄弟组件的数据</h3>
      <p>{{brothersData}}</p>
    </div>
</template>
<script>
    export default {
      name: "SonOne",
      props:['message'],  //使用props接收父组件传递的信息
      data(){
          return{
            title:'One子组件',
            senddata:"",
            brothersData:'----',
          }
      },
      methods:{
          send:function () {
              this.$emit('sendMsg',this.senddata)
          }
      },
      mounted:function (params) {
          this.$bus.on('sendOne', (data)=> {
              this.brothersData = data
              console.log(`监听sendOne事件触发了 + ${data}`);
          })
      }
    }
</script>