import Vue from "vue";
import Router from "vue-router"

import NewCalculator from "@/components/NewCalculator";
import ListPagination from "@/components/ListPagination";

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        components: NewCalculator
    },
    {
        path: '/about',
        name: 'About',
        component: ListPagination
    },
]

export default new Router({
    mode: 'history',
    routes
})