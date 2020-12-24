<template>
  <a-layout class="layouter">
    <a-layout-sider v-model="collapsed" :trigger="null" >
      <div class="logo">
        <a-icon type="deployment-unit" style="color:#fff;width:30px"/>
        <span class="tittle">快乐小鲸鱼</span>
      </div>
      <a-menu theme="dark"  mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']">
        <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="1" @click="Option1">
          Option 1
        </a-menu-item>
        <a-menu-item key="2" @click="Option2">
          Option 2
        </a-menu-item>
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
      </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        /> -->
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Home
          v-show="active == 0"
        ></Home>
        <About
          v-show="active == 1"
        ></About>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
// import Home from '@/views/Home.vue';
// import About from "@/views/About.vue";
export default {
  // components: { Home,About },
  data() {
    return {
      active:0,
      collapsed: false,
    };
    
  },
  mounted(){

  },
  methods:{
    Option1(){
      // this.active=0
      // this.$router.push({ path: '/' })
      this.$router.push(`/`);
    },
    Option2(){
      // this.active=1
      // this.$router.push({ path: '../views/About.vue' })
      this.$router.push(`/about`);
    }
  }
};
</script>
<style lang="less">
.layouter{
  // height: 100vh;
  height: 100%;
  // width: 250px;
  // background: #1890ff;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    display: flex;
    align-items: center;
    .tittle{
      font-size: 20px;
      color: #fff;
      height: 32px;
      line-height: 32px;
      // background: #1890ff;
    }
  }
}
// section{
//   background: aqua;
// }
</style>
