import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../container/Test.vue'
Vue.use(VueRouter)

/*let Test = {
    template: `
        <div>test</div>
    `
}*/
const routes = [{
    path: '/test',
    component: Test
}]

const router = new VueRouter({
    routes
})


export default router;
