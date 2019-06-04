import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../container/Home.vue'
import Search from '../container/Search.vue'
import Fication from '../container/Fication.vue'
import Part from '../container/Part.vue'
import Custom from '../container/Custom.vue'
import Payment from '../container/Payment.vue'
Vue.use(VueRouter)


/*let Test = {
    template: `
        <div>test</div>
    `
}*/
const routes = [
{
    /*商城首页*/
    path: '/',
    name: 'home',
    component: Home
},{
    /*搜索列表*/
    path: '/search',
    name: 'search',
    component: Search
},{
    /*分类列表*/
    path: '/fication',
    name: 'fication',
    component: Fication
},{
    /*商品详情*/
    path: '/part',
    name: 'part',
    component:Part
},{
    /*选项列表*/
    path: '/custom',
    name: 'custom',
    component:Custom
},{
    /*提交订单*/
    path: '/payment',
    name: 'payment',
    component:Payment
}]

const router = new VueRouter({
    routes
})


export default router;
