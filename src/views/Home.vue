<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <!-- <a-input placeholder="Basic usage" /> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      collapsed: false
    };
  },
  methods:{
    toggleCollapsed(){
      this.collapsed=!this.collapsed
    }
  }
}
</script>
<style lang="less">
.home{
  background: #fff;
  // height: inherit;
  height: 100%;
}
</style>
