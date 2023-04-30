<template>
  <div>
  <el-container>
  <el-container>
    
    <el-aside width="200px"><Sidebar_calendar></Sidebar_calendar></el-aside>
    <el-main>
      
      <router-view/></el-main>
  </el-container>
</el-container>
  </div>
</template>
<style scoped>
  .tree {
    width: 288px;
    background: rebeccapurple;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
