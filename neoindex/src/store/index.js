//  store.js 中都mutation中增加添加和删除token的方法
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {     // 全局管理的数据存储
  IsLoading: false
};
export default new Vuex.Store({
  state,
  mutations:{
	    $_changeIsLoading(state, value){  // 删除token
        state.IsLoading = value;
	    },
	}
})
