<template>
  <div id="m_header">
    <el-menu theme="dark" :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a href="#" target="_blank"><img src="../assets/logo.png" style="height: 50px"></img></a></el-menu-item>
      <el-menu-item index="2" style="float: right"><el-button type="primary">Logout</el-button></el-menu-item>
    </el-menu> 
  </div>
</template>
<<script>
export default {
  data () {
      return {}
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log("handle select");
        console.log(key, keyPath);
      }    
  }
}
</script>
