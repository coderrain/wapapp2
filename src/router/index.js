import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../container/Home.vue'
import Search from '../container/Search.vue'
Vue.use(VueRouter)


/*let Test = {
    template: `
        <div>test</div>
    `
}*/
const routes = [{
    path: '/',
    name: 'home',
    component: Home
},{
    path: '/search',
    name: 'search',
    component: Search
}]

const router = new VueRouter({
    routes
})


export default router;
