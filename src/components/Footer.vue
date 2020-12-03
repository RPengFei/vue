<template>
    <div class="footer">
        <ul class="router">
            <router-link :to="'Form'" tag="li" active-class="active">Form</router-link>
            <router-link :to="'Data'" tag="li" active-class="active">Data</router-link>
            <router-link :to="'MyComponents'" tag="li" active-class="active">MyComponents</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
    methods: {},
    mounted: function (params) {},
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