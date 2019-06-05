import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../container/Home.vue'
import Search from '../container/Search.vue'
import Fication from '../container/Fication.vue'
import Part from '../container/Part.vue'
import Custom from '../container/Custom.vue'
import Payment from '../container/Payment.vue'
import Guarantee from '../container/Guarantee.vue'
import Parameter from '../container/Parameter.vue'
import Receiving from '../container/Receiving.vue'
import Adm from '../container/Adm.vue'
import Order from '../container/Order.vue'
import Shopcar from '../container/Shopcar.vue'
import Overbooking from '../container/Overbooking.vue'
import My from '../container/My.vue'
import Ours from '../container/Ours.vue'
import Name from '../container/Name.vue'
import Head from '../container/Head.vue'
import Login from '../container/Login.vue'
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
},{
    /*订单的质量保障页面*/
    path: '/guarantee',
    name: 'guarantee',
    component:Guarantee
},{
    /*订单的参数页面*/
    path: '/parameter',
    name: 'parameter',
    component:Parameter
},{
    /*填收货地址页面*/
    path: '/receiving',
    name: 'receiving',
    component:Receiving
},{
    /*选择收货地址*/
    path: '/adm',
    name: 'adm',
    component:Adm
},{
    /*订单页面*/
    path: '/order',
    name: 'order',
    component:Order
},{
    /*购物车页面*/
    path: '/shopcar',
    name: 'shopcar',
    component:Shopcar
},{
    /*订单确认*/
    path: '/overbooking',
    name: 'overbooking',
    component:Overbooking
},{
    /*我的页面*/
    path: '/my',
    name: 'my',
    component:My
},{
    /*修改我的资料*/
    path: '/ours',
    name: 'ours',
    component:Ours
},{
    /*修改我的名称*/
    path: '/name',
    name: 'name',
    component:Name
},{
    /*修改我的头像*/
    path: '/head',
    name: 'head',
    component:Head
},{
    /*登陆页面*/
    path: '/login',
    name: 'login',
    component:Login
}]

const router = new VueRouter({
    routes
})


export default router;
