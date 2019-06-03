import Vue from 'vue'
import Vuex from 'vuex'


import Home from './modules/Home/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        home : Home
    }
})

export default store