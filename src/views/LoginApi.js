import axios from "axios"
export const LoginUser= (data)=>{
    return    axios({
       method: 'post',
       withCredentials: true,
       url: 'http://localhost:8080/login',
       data: data
   }).then(res=>res.data).catch(error=>401)
};
export const User =()=>{
   return    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/Article/user',
   }).then(res=>res.data).catch(error=>401)
};

export const register= (data)=>{
   return    axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:8080/register',
      data: data
   }).then(res=>res.data).catch(error=>401)
};