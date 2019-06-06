<template>
  <div id="app">
    <Spin fix v-if="$store.state.isShowLoading">
      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },mounted() {
      console.log(this)
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
.demo-spin-col{
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

</style>
