import axios from "axios"
 // post请求时handle开始  get为show
export const HandleLoginUser= (data)=>{
    return    axios({
       method: 'post',
       withCredentials: true,
       url: 'http://localhost:8080/login',
       data: data
   }).then(res=>res.data).catch(error=>{throw error})
};

export const ShowUser =()=>{
   return    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/Article/user',
   }).then(res=>res.data).catch(error=>401)
};

export const HandelRegister= (data)=>{
   return    axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:8080/register',
      data: data
   }).then(res=>res.data).catch(error=>401)
};