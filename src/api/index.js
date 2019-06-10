import axios from 'axios'
// 获取热门商品
export const hotSearchListFn = ()=>{
    return axios('/mock/hot.json')
}

//获取导航列表
export const getMenu = ()=>{
    return axios('/mock/menu.json')
}