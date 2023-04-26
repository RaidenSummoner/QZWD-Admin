<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu
      @select="handleSelect"
      background-color="#545c64"
      :default-active="this.$router.path"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item index="/contentManager">类目管理</el-menu-item>
      <el-submenu index="2">
        <template slot="title">资源管理</template>
        <el-menu-item index="/consult">咨询管理</el-menu-item>
          <el-menu-item index="/course">课程管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/">词条百科</el-menu-item>
    </el-menu>
  </el-aside>
  </el-container>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>