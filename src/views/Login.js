import {HandleLoginUser} from "./LoginApi";

//
const actions = {
    Log_Login({ commit },data){
     return HandleLoginUser(data).then(res=>{
             commit("MULogin","登陆成功",{root:true});
         return res
     }).catch((error)=>{
         throw error})
    }
};
const state = {};
const mutations = {};

export default {
    state,
    actions,
    mutations,
    namespaced: true
}

/*
new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    new Promise((resolve, reject) => {
        console.log("promise2");
        resolve()
    }).then(() => {
        console.log("promise2-1")
    }).then(() => console.log("promise2-2"));

}).then(() => console.log(2)).then(() => console.log(3));
new Promise((resolve, reject)=>{
    console.log(66);
    resolve()
}).then(()=>console.log(77));
Promise.resolve().then(()=>console.log(33));*/
