<template>
  <div>

    <div>

      <span>
        <el-dialog :visible.sync="dialogVisible" title="课程">

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="内容标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="短标题" prop="subTitle">
              <el-input v-model="ruleForm.subTitle"></el-input>
            </el-form-item>
            <el-form-item lable="上传图片" prop="uppicture">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible1">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
              <p>
                默认首张图片为封面，限制20张图片，支持拓展名为jpg、png、bmp格式图片。
              </p>
            </el-form-item>
            <el-form-item label="内容类目" prop="class">
              <el-cascader :options="options" :props="props" v-model="ruleForm.class" collapse-tags
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="主体内容" prop="content">
              <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.content" maxlength="3000"
                show-word-limit></el-input>
            </el-form-item>

            <el-form-item label="关键词" prop="keyword">
              <el-input maxlength="4" show-word-limit v-model="ruleForm.keyword" type="text"
                style="width: 30%; float: left"></el-input>
              <el-input maxlength="4" show-word-limit v-model="ruleForm.keyword2" type="text"
                style="width: 30%; float: left"></el-input>

              <el-button @click="addnew">新增</el-button>

            </el-form-item>
            <el-form-item label="相关课程" prop="desc">
              <el-input type="text" v-model="ruleForm.desc" style="width: 30%; float: left"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button v-if="ruleForm.iscreate === 0" style="float: right" type="primary"
                @click="submitForm('ruleForm')">立即创建</el-button>

              <el-button v-if="ruleForm.iscreate === 1" style="float: right" type="primary"
                @click="updateForm('ruleForm')">更改</el-button>

              <el-button style="float: right" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-button type="primary" @click="showDialog">+新增</el-button>
        <el-button type="primary" @click="cancelSelected" :disabled="selectedRows.length === 0">取消发布</el-button>
        <el-button type="primary" @click="publishSelected" :disabled="selectedRows.length === 0">一键发布<i
            class="el-icon-upload el-icon--right"></i></el-button>

        <el-cascader ref="myCascader" :options="options" :props="props" collapse-tags clearable v-model="cascaded"
          @change="handleChange"></el-cascader>
        <el-input v-model="inputText" placeholder="请输入内容" style="width: 250px"></el-input>
        <el-button type="primary" @click="search">搜索</el-button>
      </span>
    </div>

    <el-table :data="tableList" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }"
      @selection-change="handleSelectionChange" ref="table">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" :index="indexMethod" width="180">
      </el-table-column>
      <el-table-column prop="title" label="课程标题" width="180">
      </el-table-column>
      <el-table-column prop="isPost_str" label="发布状态" width="180">
      </el-table-column>
      <el-table-column prop="kind_str" label="课程类目" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableList)">删除</el-button>
          <el-button size="mini" @click="handleview(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" @click="handleput(scope.$index, scope.row)">发布</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
import { Dialog } from "element-ui";
import { contentGetAll } from "../api/lesson"
export default {
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      dialogVisible1: false,
      nowTime: "",
      class: "",
      ruleForm: {
        content: "",
        courses: "",
        id: "",
        image: "",
        isPost: "",
        isPost_str: "",
        keyword: "",
        keyword2: "",
        kind: "",
        kind_str: "",
        subKind: "",
        subTitle: "",
        title: "",
        uploadTime: "",
      },
      tableList: [],
      searchlist: [],
      inputText: "",
      filterText: "",
      filterLength: -1,
      cascaded: [],
      ruleForm1: {},
      rules: {
        title: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        class: [
          { required: true, message: "请选择类目", trigger: "blur" },
        ],
        content: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { max: 3000, message: "字数超出限制", trigger: "blur" },
        ],
      },
      option: [
        {
          value: "选项1",
          label: "案例分析",
        },
      ],
      value1: "",
      props: { multiple: true },
      options: [
        {
          value: "产品",
          label: "产品",
          children: [
            {
              value: "案例分享",
              label: "案例分享",
            },
            { value: "行业资讯", label: "行业资讯" },
          ],
        },
        {
          value: "开发",
          label: "开发",
          children: [
            {
              value: "案例分享",
              label: "案例分享",
            },
            {
              value: "行业资讯",
              label: "行业资讯",
            },
          ],
        },
      ],
      tableData: [
        {
          content: "111",
          courses: "111",
          id: "1",
          image: "",
          isPost: "0",
          isPost_str: "草稿",
          keyword: "111",
          keyword2: "111",
          kind: "开发",
          kind_str: "产品-行业资讯",
          subKind: null,
          subTitle: "111",
          title: "Java开发速成",
          updateTime: "2023-04-30",
          isDelete: false,
        },
        {
          content: "111",
          courses: "111",
          id: "1",
          image: "",
          isPost: "0",
          isPost_str: "未发布",
          keyword: "111",
          keyword2: "111",
          kind: "开发",
          kind_str: "产品-行业资讯",
          subKind: null,
          subTitle: "111",
          title: "C++开发速成",
          updateTime: "2023-04-29",
          isDelete: false,
        },
        {
          content: "111",
          courses: "111",
          id: "1",
          image: "",
          isPost: "0",
          isPost_str: "草稿",
          keyword: "111",
          keyword2: "111",
          kind: "1",
          kind_str: "开发-案例分享",
          subKind: "111",
          subTitle: "fdd",
          title: "111",
          updateTime: "2023-04-30",
          isDelete: false,
        },
      ],
      selectedRows: [],
    };
  },
  mounted() {
    this.list = this.states?.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    for (var i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].role == 0) {
        this.tableData[i].isPost_str = "草稿";
      } else {
        this.tableData[i].isPost_str = "已发布";
      }
    }
  },
  created() {
    //    this.getTabledata();
    this.getLessons()
    this.setSlist(this.tableData);
  },
  updated() {
  },
  computed: {
    filtableData() {
      return this.tableData.filter((p) => {
        return p.class.indexOf(this.ruleForm.class) !== -1;
      });
    },
    selectedLable() {
      return this.$refs.myCascader.getLabel();
    },
  },
  methods: {
    getLessons() {
      contentGetAll({
        page: 1,
        pageSize: 999
      }).then(res => {
        console.log(res.data.records)
      })
    },
    // 获取需要渲染到页面中的数据
    setSlist(arr) {
      this.tableList = JSON.parse(JSON.stringify(arr));
    },
    addnew() {
      this.$message({
        message: "add!!",
        type: "success",
      });
    },
    search() {
      if (this.inputText && this.filterLength > 0) {
        var slist = [];
        // 过滤需要的数据
        this.tableData.forEach((item) => {
          // 检测搜索关键字 和 判断是否删除的数据
          if (item.title.indexOf(this.inputText) > -1 && this.filterLength > 0 && item.kind_str.indexOf(this.filterText) > -1 && !item.isDelete) {
            slist.push(item);
          } else if (!item.isDelete) {
            this.searchlist.push(item)
          }
        });
        this.setSlist(slist); // 将过滤后的数据给了tableList 
      }
      else if (this.inputText) {
        var slist = [];
        // 过滤需要的数据
        this.tableData.forEach((item) => {
          // 检测搜索关键字 和 判断是否删除的数据
          if (item.title.indexOf(this.inputText) > -1 && !item.isDelete) {
            slist.push(item);
          } else if (!item.isDelete) {
            this.searchlist.push(item)
          }
        });
        this.setSlist(slist); // 将过滤后的数据给了tableList 
      }
      else if (this.filterLength > 0) {
        var slist = [];
        // 过滤需要的数据
        this.tableData.forEach((item) => {
          // 检测搜索关键字 和 判断是否删除的数据
          if (item.kind_str.indexOf(this.filterText) > -1 && !item.isDelete) {
            slist.push(item);
          } else if (!item.isDelete) {
            this.searchlist.push(item)
          }
        });
        this.setSlist(slist); // 将过滤后的数据给了tableList 
      }
      else {
        // 没有搜索内容，则展示全部数据 但是要判断是否删除的数据
        this.searchlist = []
        this.tableData.forEach((item) => {
          if (!item.isDelete) {
            this.searchlist.push(item)
            this.setSlist(this.searchlist)
          }
        })
      }
    },
    getTabledata() {
      let _that = this;
      this.$axios
        .get("test_consult.txt")
        .then((res) => {
          console.log(res.data.data);
          _that.tableData = res.data.data;
        })
        .catch((err) => {
          this.$message({
            message: "列表数据获取失败",
            type: "success",
          });
        });
      // var _this=this;
      // this.$axios({
      //   method:"get",
      //   //url:"http://localhost:8080/content/getAll"
      //   url:"test.txt"
      // }).then((resp)=>{
      //     _this.tableData=resp.data;
      // })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleview(index, row) {
      this.$message({
        message: "预览了第" + (index + 1) + "项",
        type: "success",
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleSelectionChange(val) {
      this.selectedRows = val;
    },
    // 一键发布选中行
    publishSelected() {
      // 发送请求将选中行的状态改为已发布
      // ...
      this.selectedRows.forEach((row) => {
        row.role = 1;
        this.isPost = 1;
        row.isPost_str = "已发布";
      });
      this.$message({
        message: "已发布选中项",
        type: "success",
      });
      this.$refs.table.clearSelection(); // 清空选中行
    },
    // 一键取消选中行
    cancelSelected() {
      // 发送请求将选中行的状态改为未发布
      // ...
      this.selectedRows.forEach((row) => {
        row.role = 0;
        row.isPost_str = "草稿";
      });
      this.$message({
        message: "已将选中项置于草稿状态",
        type: "success",
      });
      this.$refs.table.clearSelection(); // 清空选中行
    },
    handleput(index, row) {
      this.tableData[index].role = 1;
      row.isPost_str = "已发布";
      console.log(
        index,
        this.tableData[index].role,
        this.tableData[index].isPost_str,
        this.tableData[index].title
      );
      console.log("已提交");
    },
    handleChange(a) {
      var clength = this.cascaded.length;
      this.filterLength = clength;
      console.log(clength);
      console.log(this.cascaded == null);
      console.log(this.cascaded[0][0]);
      console.log(this.cascaded[0][1]);
      var filter = this.cascaded[0][0] + "-" + this.cascaded[0][1];
      console.log(filter);
      this.filterText = filter;
      console.log(this.filterText);
    },
    choose() {
      tihs.filter;
    },
    getCheckedNodes() {
      console.log(this.cascaded, "e");
    },
    handleEdit(index, row) {
      this.tableData[index].iscreate = 1;
      this.ruleForm.iscreate = this.tableData[index].iscreate;
      this.ruleForm.index = index;
      this.dialogVisible = true;
    },
    indexMethod(index) {
      return index + 1;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.tableData[index].isDelete = 1;
      this.$message({
        message: "已删除了对应的行",
        type: "success",
      });
    },
    getNowDate() {
      var date = new Date();
      var sign2 = ":";
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var weekArr = [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期天",
      ];
      var week = weekArr[date.getDay()];
      // 给一位数的数据前面加 “0”
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (day >= 0 && day <= 9) {
        day = "0" + day;
      }
      this.nowTime = year + "-" + month + "-" + day;
    },
    getclass() {
      this.class = this.ruleForm.class[0][0] + "-" + this.ruleForm.class[0][1];
    },
    submitForm(formName) {
      this.getNowDate();
      this.getclass();
      this.$set(this.ruleForm1, "title", this.ruleForm.title);
      this.$set(this.ruleForm1, "subTitle", this.subTitle);
      this.$set(this.ruleForm1, "isPost_str", "草稿");
      this.$set(this.ruleForm1, "kind_str", this.class);
      this.$set(this.ruleForm1, "iscreate", 0);
      this.$set(this.ruleForm1, "updateTime", this.nowTime);
      this.tableData.push(this.ruleForm1);
      console.log(this.tableData, "table");
      console.log(this.ruleForm1.class, "classsss");
      console.log(this.class, "kind_str");
      this.ruleForm1 = {};
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //     console.log(formName);
      //     this.tableData.push(formName);
      //   } else {
      //     this.tableData.push(formName);
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });

      this.setSlist(this.tableData);
      this.dialogVisible = false;
    },

    updateForm(a) {
      this.getNowDate();
      this.getclass();
      this.$set(this.ruleForm1, "title", this.ruleForm.title);
      this.$set(this.ruleForm1, "kind_str", this.class);
      this.$set(this.ruleForm1, "role", 0);
      this.$set(this.ruleForm1, "isPost_str", "草稿");
      this.$set(this.ruleForm1, "iscreate", 0);
      this.$set(this.ruleForm1, "updateTime", this.nowTime);
      this.tableData[this.ruleForm.index].title = this.ruleForm1.title;
      this.tableData[this.ruleForm.index].kind_str = this.ruleForm1.kind_str;
      this.tableData[this.ruleForm.index].isPost_str = this.ruleForm1.isPost_str;
      this.tableData[this.ruleForm.index].role = this.ruleForm1.role;
      this.tableData[this.ruleForm.index].updateTime = this.ruleForm1.updateTime;
      this.setSlist(this.tableData);
      this.dialogVisible = false;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showDialog() {
      this.ruleForm.index = "";
      this.ruleForm.iscreate = 0;
      this.dialogVisible = true;
    },
    formatter(row, column) {
      return row.address;
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
  components: {
    [Dialog.name]: Dialog,
  },
};
</script>
<style>
.button {
  position: relative;
  z-index: 999;
  top: 0;
}

.el-button {
  position: relative;
  z-index: 999;
  top: 0;
}
</style>
  