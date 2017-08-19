<template>
  <div id="app">  
    <m_header></m_header>
    <el-row class="tac">
      <el-col :span="3">
        <m_sidebar></m_sidebar>
      </el-col>
      <el-col :span="21">
        <a href="/first">click me first</a>
        <a href="/second">click me second</a>
        <router-view class="view"></router-view>
      </el-col>
    </el-row>    
  </div>
</template>
<script>
  import m_header from './components/header.vue'
  import m_sidebar from './components/sideBar.vue'
  export default {
    data () {
      return {
      }
    },
    components: {m_header, m_sidebar}
  }
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
