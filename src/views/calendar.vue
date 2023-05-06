<template>
  <el-container>
    <div style="margin-top: 5%">
      <div class="zone1">
        <span style="font-size:30px">日历运营查询</span>
        <el-row gutter="49">
          <el-col :span="12">
            事项名称
            <el-input
              v-model="input"
              placeholder="请输入内容"
              size="medium"
              style="width: 250px"
            ></el-input>
          </el-col>
          <el-col :span="12">
            事项时间
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              style="width: 250px"
            >
            </el-date-picker>
          </el-col>
            <el-col :span="12">
              关联课程
              <el-input
                v-model="input2"
                placeholder="请输入内容"
                size="medium"
                style="width: 250px"
              ></el-input>
            </el-col>
            <el-col :span="12">
              事项状态
              <el-select
                v-model="value"
                placeholder="请选择"
                style="width: 250px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          
        </el-row>
        <div class="buttons">
            <el-button>重置</el-button>
            <el-button type="primary">查询</el-button>
        </div>
      </div>
      <br>
      <div class="zone2">
        <el-button type="primary" size="mini">+新增</el-button>
        <el-button type="primary" size="mini">一键提交</el-button>
        <el-button type="primary" size="mini">取消提交</el-button>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            width="77"
            label="事项编号"
            sortable
          >
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="pstatus" label="事项状态" width="80">
          </el-table-column>
          <el-table-column prop="psite" label="关联课程资讯" width="250">
          </el-table-column>
          <el-table-column prop="date" label="事项日期" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button size="mini" type="primary">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
              <el-button size="mini" type="success">提交</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "MySQL教程1",
          pstatus: "草稿",
          psite: "https://b23.tv/BV1Kr4y1i7ru",
        },
        {
          date: "2018-04-02",
          name: "MySQL教程2",
          pstatus: "已发布",
          psite: "https://b23.tv/BV1Kr4y1i7ru",
        },
        {
          date: "2023-05-04",
          name: "MySQL教程3",
          pstatus: "已发布",
          psite: "https://b23.tv/BV1Kr4y1i7ru",
        },
        {
          date: "2023-05-09",
          name: "MySQL教程4",
          pstatus: "已发布",
          psite: "https://b23.tv/BV1Kr4y1i7ru",
        },
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      input: "",
      input2: "",
      value1: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "草稿",
        },
        {
          value: "选项2",
          label: "已提交",
        },
      ],
    };
  },
};
</script>
<style>
.zone1 {
  line-height: 50px;
  margin-left: 2%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.zone2 {
  line-height: 50px;
  text-align: left;
  margin-left: 2%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.buttons{
    text-align: right;
}
</style>