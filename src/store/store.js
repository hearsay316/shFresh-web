import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import Login from "../views/Login";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    Login
  }
});
