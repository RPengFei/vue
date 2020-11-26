<template>
    <div class="footer">
        <ul class="router">
            <li
                v-for="item in rouerList"
                :key="item.name"
                v-text="item.name"
                @click="toLink(item.link)"
                :class="item.link.indexOf(state) > -1 ? 'active' : ''"
            >
                {{ item.link.indexOf(state) > -1 }}
            </li>
        </ul>
        <!-- <h2>{{ state }}</h2> -->
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            rouerList: [
                { name: "to form", link: "./form" },
                { name: "to data", link: "./data" },
                { name: "to mycomponents", link: "./mycomponents" },
                { name: "to HelloWorld", link: "./HelloWorld" },
            ],
            state: "./HelloWorld",
        };
    },
    methods: {
        toLink: function (params) {
            console.log(this.state);
            console.log(params);

            if (!(params.indexOf(this.state) > -1)) {
                this.$router.push(params);
            }
        },
    },
    mounted: function (params) {
        console.log(this.$route.path);
        let path = this.$route.path
        if (path == "/") {
            this.state = "./HelloWorld";
        } else {
            this.state = this.$route.path;
        }
    },
};
</script>

<style  scoped>

.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
}
.router {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
.router li {
    list-style: none;
    flex: 1;
    text-align: center;
    background: rgb(46, 73, 85);
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 1px;
}
.router li.active {
    background-color: rgb(166, 255, 0);
    color: coral;
}
</style>