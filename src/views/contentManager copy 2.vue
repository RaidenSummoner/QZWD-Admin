<template>
  <div class="content-box">
    <div class="container">
      <div style="display: flex">
        <el-input
          v-model="inputText"
          placeholder="请输入内容"
          style="width: 250px"
        ></el-input>
        
      </div>

      <el-table
        :data="tableList"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          prop="name"
          label="区域名称"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
          width="180"
        ></el-table-column>
        <el-table-column label="操作管理">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDele(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="search">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "篮球",
          address: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "读书1",
          address: "上海市普陀区金沙江路 1517 弄",
          isDelete:false
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "编程",
          address: "上海市普陀区金沙江路 1519 弄",
          isDelete:false
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "弹琴",
          address: "上海市普陀区金沙江路 1516 弄",
          isDelete:false
        },
        {
          id: 5,
          date: "2016-05-03",
          name: "读书2",
          address: "上海市普陀区金沙江路 1516 弄",
          isDelete:false
        },
        {
          id: 6,
          date: "2016-05-03",
          name: "插画",
          address: "上海市普陀区金沙江路 1516 弄",
          isDelete:false
        },
      ],
      tableList: [],
      searchlist: [],
      inputText: "",
    };
  },
  created() {
    this.setSlist(this.tableData);
  },
  methods: {
    // 获取需要渲染到页面中的数据
    setSlist(arr) {
      this.tableList = JSON.parse(JSON.stringify(arr));
    },
    search() {
      if (this.inputText) {
        var slist = [];
        // 过滤需要的数据
        this.tableData.forEach((item) => {
          // 检测搜索关键字 和 判断是否删除的数据
          if (item.name.indexOf(this.inputText) > -1 && !item.isDelete) {
            slist.push(item);
          } else if(!item.isDelete){
            this.searchlist.push(item)
          }
        });
        this.setSlist(slist); // 将过滤后的数据给了tableList 
      } else {
        // 没有搜索内容，则展示全部数据 但是要判断是否删除的数据
        this.searchlist = []
        this.tableData.forEach((item) => {
          if(!item.isDelete){
            this.searchlist.push(item)
            this.setSlist(this.searchlist)
          }
        })
      }
    },
    handleDele(row) {
      this.tableList.forEach((element, i) => {
        console.log(this.tableData, this.tableList);
        if (element.id == row.id) {
          if(this.tableData.length == 1){
            return this.$message.warning('至少保留一个参与对象')
          }
          if(this.tableData.filter(elm => !elm.isDelete).length == 1){
            return this.$message.warning('至少保留一个参与对象')
          }
          this.tableData.forEach((elm) => {
            if(elm.id == row.id){
              elm.isDelete = true
            }
          })
          this.tableList.splice(i, 1);
        }
      });
      this.setSlist(this.tableList);
    }
  },
};
</script>

<style>

.button {
  position: relative;
  z-index: 999;
  top: 0;
}
.el-button{
  position: relative;
  z-index: 999;
  top: 0;
}
</style>
