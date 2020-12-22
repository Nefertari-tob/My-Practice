<template>
  <div class="home">
    <Layout/>
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <a-input placeholder="Basic usage" />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Layout from './layout.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Layout
  },
  data(){
    return{

    }
  },
  mounted(){
    console.log(123456);
  }
}
</script>
<style lang="less">
// .home{
//   margin: 0 outo;
//   background: aqua;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
</style>
