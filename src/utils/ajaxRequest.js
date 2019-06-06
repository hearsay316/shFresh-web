import axios from "axios"
import store from "../store/store"
// 封装axios请求
class AjaxRequest {
    constructor(){
        this.baseURL = process.env.NODE_ENV == "production"?'/':"http://localhost:8080";
        this.timeout = 3000;
        this.queue = {}
    }
    merge(options){
        return{...options,baseURL:this.baseURL,timeout:this.timeout}
    }

    setInterceptor(instance,url){
        instance.interceptors.request.use((config)=>{
            config.withCredentials = true;
            if (Object.keys(this.queue).length===0){
                store.commit("ShowLoading")
            }
            this.queue[url] = url;
            return config;
        });

        instance.interceptors.response.use((res)=>{
            delete this.queue[url];
            if (Object.keys(this.queue).length===0){
                store.commit("HideLoading")
            }
            return res.data;
        },(error)=>{
            delete this.queue[url];
            if (Object.keys(this.queue).length===0){
                store.commit("HideLoading")
            }
            throw error;
        })
    }

    request(options){
        let instance = axios.create();
        this.setInterceptor(instance,options.url)
        let config = this.merge(options);
        return   instance(config);
    }
}


export default new AjaxRequest