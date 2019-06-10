import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../container/Home.vue'
import Search from '../container/Search.vue'
import Fication from '../container/Fication.vue'
import Part from '../container/Part.vue'
import Payment from '../container/Payment.vue'
import Receiving from '../container/Receiving.vue'
import Adm from '../container/Adm.vue'
import Order from '../container/Order.vue'
import Shopcar from '../container/Shopcar.vue'
import Overbooking from '../container/Overbooking.vue'
import User from '../container/User.vue'
import Ours from '../container/Ours.vue'
import Username from '../container/Username.vue'
import Portrait from '../container/Portrait.vue'
import Login from '../container/Login.vue'
import Register from '../container/Register.vue'
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
    path: '/part/:id',
    name: 'part',
    component:Part
},{
    name: 'user',
    path: '/user',
    component: User
},{
    /*提交订单*/
    path: '/payment',
    name: 'payment',
    component:Payment
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
    /*修改我的资料*/
    path: '/ours',
    name: 'ours',
    component:Ours
},{
    /*修改我的名称*/
    path: '/username',
    name: 'username',
    component:Username
},{
    /*修改我的头像*/
    path: '/portrait',
    name: 'portrait',
    component:Portrait
},{
    /*登陆页面*/
    path: '/login',
    name: 'login',
    component:Login
},{
    /*注册页面*/
    path: '/register',
    name: 'register',
    component:Register
}]

const router = new VueRouter({
    routes
})


export default router;



