<template>
  <div id="main-body">
    <br />
    <br />
    <br />
    <div id="title">日历事项</div>
    <div class="directory">事项名称</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    >
    </el-input>
    <div class="directory">事项时间</div>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <div class="directory">关联课程详情页链接</div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    ></el-input>
  </div>
</template>