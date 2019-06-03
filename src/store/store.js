import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import Login from "../views/Login";
import Home from "../views/Home";
import Register from "../views/Register";

Vue.use(Vuex);
const myPlugin = store => {
  sessionStorage.state && store.replaceState(JSON.parse(sessionStorage.state));
  store.subscribe((mutation, state) => {
    sessionStorage.state = JSON.stringify(state);
  });
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    Login,
    Home,
    Register
  },
  plugins: [myPlugin]
});
