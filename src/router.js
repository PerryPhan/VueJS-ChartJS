import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            alias: "/bitcoin",
            name: "bitcoin",
            component: () => import("./pages/BitcoinPage.vue")
        },
        {
            path: "/ethereum",
            name: "ethereum",
            component: () => import("./pages/EthereumPage.vue"),
        },
    ]
})