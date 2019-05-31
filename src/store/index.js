import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/ModuleA'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        a : moduleA
    }
})

export default store