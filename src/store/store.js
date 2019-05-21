import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import Login from "../views/Login";
import Home from "../views/Home";
import Register from "../views/Register";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    Login,
    Home,
    Register
  }
});
