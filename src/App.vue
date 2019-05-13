<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .no-mp {
    margin-top: 0px;
  }
  .padding-8{
    padding-left:8px;
  }
  a {
    color: #666;
  }
  a:hover{
    color: #ff8800;
  }
  input[type="checkbox"] {
    vertical-align: bottom;
  }
  body, ul, ol, p, h1, h2, h3, h4, h5, h6, dl, dd, select, input, textarea, form {
    margin: 0;
    padding: 0;
  }
  .clearfix:after {
    clear: both;
  }
  a{
    text-decoration: none;
  }

  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #666;
}
</style>
