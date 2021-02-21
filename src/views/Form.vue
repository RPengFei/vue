<template>
  <div>
    <h3>表单控件</h3>
    <input type="text" v-model.lazy="myinput" @input="inputModel" />
    {{ myinput }}

    <input type="number" v-model.number="num" @input="inputNum" /> {{ num }}
    <br />
    <input type="checkbox" v-model="myboolean" /> {{ myboolean }}
    <br />
    爱好 win subing
    <input type="checkbox" name="1" value="吃" v-model="mylike" />吃
    <input type="checkbox" name="2" value="喝" v-model="mylike" />喝
    <input type="checkbox" name="3" value="玩" v-model="mylike" />玩
    {{ mylike }}

    单选：<br />
    <input type="radio" value="js" v-model="use" /> js
    <input type="radio" value="java" v-model="use" /> java
    <input type="radio" value="php" v-model="use" /> php 单选结果{{ use }}
    <br />
    <input type="checkbox" v-model="isAllChecked" @change="seleAll()" />
    全选

    <div v-for="i in arraylist" :key="i.id">
      <input type="checkbox" v-model="mylikes" :value="i" @change="select" />
      {{ i.like }}
    </div>

    {{ mylikes }}
    <hr />
    事件处理器<br />
    <ul @click.self="clickUl">
      <li @click.stop="clickLi()">1111</li>
      <li @click="clickLi()">22222</li>
    </ul>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Form",
  data() {
    return {
      num: "",
      myinput: "",
      myboolean: false,
      mylike: [],
      use: "",
      mylikes: [],
      arraylist: [
        { like: "吃", id: 1 },
        { like: "喝", id: 2 },
        { like: "玩", id: 3 },
      ],
      isAllChecked: false,
    };
  },
  methods: {
    inputNum: function () {
      console.log(this.num);
      console.log("value变化我就触发");
    },
    clickUl: function name(params) {
      console.log("点击ul");
    },
    clickLi: function name(params) {
      console.log("点击li");
    },
    inputModel: function () {
      console.log("value变化我就触发");
    },
    seleAll: function () {
      if (this.isAllChecked) {
        this.mylikes = this.arraylist;
        console.log(this.mylikes);
      } else {
        this.mylikes = [];
      }
    },
    select: function (params) {
      this.isAllChecked =
        this.arraylist.length === this.mylikes.length ? true : false;
    },
  },
  mounted() {
    axios.get("http://www.mei.com/appapi/search/searchFind/v3").then((res) => {
      console.log(res);
    });
    axios.get("/node/getData").then((res) => {
      console.log(res);
    });

    axios.post("/node/getData").then((res) => {
      console.log(res);
    });
  },
};
</script>

