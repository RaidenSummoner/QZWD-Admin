<template>
<div>
  <el-container>
  <el-header>
    <Framework></Framework>
  </el-header>
  <el-container><router-view/>
  </el-container>
</el-container>
</div>
</template>
<script>
import Framework from '@/components/Framework.vue';
  export default {
  components: { Framework },
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
      }
      
    },
    mounted() {
    }
  }

</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container{
  position: absolute; 
  width: 100%; 
  top: 0px ; 
  left: 0 ; 
  bottom: 0;
}
.el-header{
  padding: 0;
  z-index: 1000;
}
 
.el-header .fr{
  float: right;
}
.el-header .el-menu{
  border-bottom: none;
}
.el-aside, .el-main{
  padding-top: 60px;
}
.el-aside{
  background: #545c64;
}
.el-aside .el-menu{
  border-right: none;
}
</style>