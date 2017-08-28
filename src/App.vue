<template>
  <div id="app" class="container">  
    <m_header></m_header>
    <el-row class="container">
      <el-col :span="3" class="container">
        <m_sidebar class="container"></m_sidebar>
      </el-col>
      <el-col :span="21" class="content">
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
html {
  height: 100%;
}
body {
  font-family: Helvetica, sans-serif;
  height: 100%;
}
.container {
  height: 100%;
}
.content {
  padding: 25px;
}
</style>
