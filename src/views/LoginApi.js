import axios from "axios"
export const LoginUser= (data)=>{
    return    axios({
       method: 'post',
       withCredentials: true,
       url: 'http://localhost:8080/login',
       data: data
   }).then(res=>res.data).catch(error=>401)
};