<template>
  <div class="zone" style="margin-top: 5%">
    <span>
      <el-button type="primary">一键发布</el-button>
      <el-button>取消发布</el-button>
      <el-button icon="el-icon-search" style="float: right"></el-button>
      <el-input
        placeholder="请输入内容"
        style="width: 12%; float: right"
      ></el-input>

      <el-select style="float: right" placeholder="请选择"> </el-select>
    </span>
    <br />
    <br />
    <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="数据表名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="资源类型" width="180">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="240"> </el-table-column>

      <el-table-column label="操作">
        <template>
          <el-button size="mini" type="success">发布</el-button>
          <el-button size="mini" type="danger">删除</el-button>
          <el-button size="mini" type="primary">预览</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2014-05-04 22:11",
          name: "Form1",
          address: "咨询",
        },
        {
          date: "2017-05-04 22:11",
          name: "Form2",
          address: "咨询",
        },
        {
          date: "2019-05-01 12:09",
          name: "Form3",
          address: "课程",
        },
      ],
    };
  },
};
</script>
<style>
.zone {
  line-height: 15px;
  text-align: left;
}
</style>