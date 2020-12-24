<template>
  <div id="app">
    <div class="nav">
      <div class="nav_tittle">
        <a-icon type="deployment-unit" style="color:#fff;width:30px"/>
        </div>
      <div class="nav_buttom">
        <a-layout class="layouter">
          <a-menu theme="dark"  mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']">
            <!-- <span>overflowedIndicator</span> -->
          <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item :key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item :key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>
          <a-menu-item :key="3">
            <router-link to="/layout">layout</router-link>
          </a-menu-item>
        </a-sub-menu>
        </a-menu>
        </a-layout>
      </div>
    </div>
    <div class="navb">
      <div class="top">
        <a-menu  mode="horizontal">
          <a-menu-item :key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item :key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>
          <a-menu-item :key="3">
            <router-link to="/layout">layout</router-link>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="bottom">
      <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      key:""
    };
  },
  methods:{
    
  }
}
</script>
<style lang="less">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  display: flex;
  // max-height: 100vh;
  background:#f0f2f5;
  .nav {
    padding: 0;
    background: #001529;
    max-width: 200px;
    height: 100vh;
    a {
      font-weight: bold;
      // color: #2c3e50;
      // color:#ccc
    }
    // a.router-link-exact-active {
    //   color: #42b983;
    // }
    .nav_tittle{
      background: rgba(255, 255, 255, 0.2);
      margin:15px 15px;
      width: 170px;
      height: 35px;
      color: #f0f2f5;
      line-height: 35px;
    }
    .nav_buttom{
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }
    
  }
  .navb{
    // background: #bbb;
    width: 100%;
    margin: 0 10px;
    max-height: 100%;
    overflow:auto;
    // background:#f0f2f5;
    .top{
      height: 80px;
      margin-bottom: 10px;
      // line-height: 80px;
      background: #fff;
      display: flex;
      align-items: center;
      .ant-menu-item-active{
        border-bottom: none;
      }
      .ant-menu-item{
        border: none;
      }
      .ant-menu-horizontal{
        border:none;
      }
    }
    .bottom{
      height:100%;
    }
  }
}
</style>
