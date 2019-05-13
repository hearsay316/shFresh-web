<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="login">按钮</button>
    <button @click="GetUser">按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted(){
axios.get("http://localhost:8080/register").then((res)=>{
  console.log(res);
}).catch((error)=>{
  console.log(error);
})
  },
  methods:{
    login(){
      axios({
        method: 'post',
        withCredentials:true,
        url: 'http://localhost:8080/register',
        data: {
          username:"swswd",
          password:"swdswsw"
        }
      });
    },
    GetUser(){
      //("http://localhost:8080/Article/user")
      axios({
        method: 'get',
        withCredentials:true,
        url: 'http://localhost:8080/Article/user',
      }).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })
    }

  },
  components: {
    HelloWorld
  }
}
</script>
