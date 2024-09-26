import { getMenu } from '../../../api/index'
export default {
    namespaced: 'home',
    state:{
        list: []
    },
    getter:{},
    mutations:{
        getMenuFn(state){
            getMenu().then(res=>{
                state.list = res.data.list
            })
        }
    }
}