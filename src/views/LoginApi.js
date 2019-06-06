
import axios from "../utils/ajaxRequest"
 // post请求时handle开始  get为show
export const HandleLoginUser= (data)=>{
    return    axios.request({
       method: 'post',
       withCredentials: true,
       url: '/login',
       data: data
   })
};


export const ShowUser =()=>{
   return    axios.request({
      method: 'get',
      withCredentials: true,
      url: '/Article/user',
   })
};

export const HandelRegister= (data)=>{
   return    axios.request({
      method: 'post',
      withCredentials: true,
      url: '/register',
      data: data
   })
};