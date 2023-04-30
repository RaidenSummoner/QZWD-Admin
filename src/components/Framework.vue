<template>
<div>
  <el-menu
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  :default-active="this.$router.path"
  text-color="#fff"
  router
  active-text-color="#ffd04b">
  
  <el-menu-item index="/calendar">日历运营</el-menu-item>
  <el-menu-item index="/category" >内容管理</el-menu-item>
  <el-menu-item index="/contentImport">内容导入</el-menu-item>
  <el-menu-item index="">数据中心</el-menu-item>
</el-menu>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
         handleSelect(routePath) {
      // 路由跳转时，标记在导航的那个选项下对应的路由
      this.activeIndex = this.$route.path
    },
    
    }
  }

</script>