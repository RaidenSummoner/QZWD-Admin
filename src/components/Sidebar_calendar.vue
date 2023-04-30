<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu
      background-color="#545c64"
      :default-active="this.$router.path"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-menu-item index="/uploadContent">数据上传</el-menu-item>
      <el-menu-item index="/formManager">表管理</el-menu-item>
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