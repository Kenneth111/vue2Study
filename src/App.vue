<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="#" target="_blank">Orders</a></el-menu-item>
    </el-menu>    
    <el-row class="tac">
      <el-col :span="3">
        <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
        </el-menu>
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
  import firstCom from './components/firstCom.vue'
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {firstCom}
  }
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
