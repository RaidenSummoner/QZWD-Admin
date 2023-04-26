<template>
  <div>
    <div>
      <span>
        <div class="button">
          <el-button type="primary" @click="showDialog">+新增</el-button>

          <el-button size="mini" @click="getTabeldata()">ces</el-button>
        </div>

        <el-dialog :visible.sync="dialogVisible" title="咨询"
          ><el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="内容标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="短标题" prop="subTitle">
              <el-input v-model="ruleForm.subTitle"></el-input>
            </el-form-item>
            <el-form-item lable="上传图片" prop="uppicture">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
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
              <el-cascader
                :options="options"
                :props="props"
                v-model="ruleForm.class"
                collapse-tags
                clearable
              ></el-cascader>
            </el-form-item>
            <el-form-item label="主体内容" prop="content">
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="ruleForm.content"
                maxlength="3000"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="关键词" prop="keyword">
              <el-input
                maxlength="4"
                show-word-limit
                v-model="ruleForm.keyword"
                type="text"
                style="width: 30%; float: left"
              ></el-input>
              <el-input
                maxlength="4"
                show-word-limit
                v-model="ruleForm.keyword2"
                type="text"
                style="width: 30%; float: left"
              ></el-input>

              <div class="button">
                <el-button @click="addnew">新增</el-button>
              </div>
            </el-form-item>
            <el-form-item label="相关课程(0/1)" prop="desc">
              <el-input
                type="text"
                v-model="ruleForm.desc"
                style="width: 30%; float: left"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                v-if="ruleForm.iscreate === 0"
                style="float: right"
                type="primary"
                @click="submitForm('ruleForm')"
                >立即创建</el-button
              >

              <el-button
                v-if="ruleForm.iscreate === 1"
                style="float: right"
                type="primary"
                @click="updateForm('ruleForm')"
                >更改</el-button
              >

              <el-button style="float: right" @click="resetForm('ruleForm')"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
          <!-- <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm">确 定</el-button>
          </div> -->
        </el-dialog>
        <div class="button">
          <el-button
            type="primary"
            @click="publishSelected"
            :disabled="selectedRows.length === 0"
            >一键发布<i class="el-icon-upload el-icon--right"></i
          ></el-button>
          <el-button
            type="primary"
            @click="cancelSelected"
            :disabled="selectedRows.length === 0"
            >一键取消</el-button
          >
        </div>
        <el-cascader
          ref="myCascader"
          :options="options"
          :props="props"
          collapse-tags
          clearable
          v-model="cascaded"
          @change="handelChange"
        ></el-cascader>
        <el-select v-model="value1" filterable placeholder="请输入关键词">
          <el-option
            v-for="item in option"
            :key="item.value1"
            :label="item.label"
            :value="item.value1"
          >
          </el-option>
        </el-select>
      </span>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      @selection-change="handleSelectionChange"
      ref="table"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" :index="indexMethod" width="180">
      </el-table-column>
      <el-table-column prop="title" label="咨询标题" width="180">
      </el-table-column>
      <el-table-column prop="isPost" label="发布状态" width="180">
      </el-table-column>
      <el-table-column prop="kind" label="咨询类目" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button
          >
          <el-button size="mini" @click="handleview(scope.$index, scope.row)"
            >预览</el-button
          >
          <el-button size="mini" @click="handleput(scope.$index, scope.row)"
            >发布</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import form from "../components/form.vue";
import { Dialog } from "element-ui";
export default {
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      dialogVisible1: false,
      nowTime: "",
      class: "",
      ruleForm: {
        /*
        title: "",
        minname: "",
        status: "草稿",
        class: "",
        content: "",
        keyword: "",
        keyword2: "",
        delivery: false,
        date: "",
        resource: "",
        desc: "",
        role: 0,
        iscreate: 0,
        index: "",
        */
        content: "",
        courses: "",
        id: "",
        image: "",
        isPost: "",
        keyword: "",
        keyword2: "",
        kind: "",
        subKind: "",
        subTitle: "",
        title: "",
        uploadTime: "",
      },
      cascaded: [],
      ruleForm1: {},
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
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
          value: "产品",
          label: "产品",
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
        // {
        //   date: "2016-05-02",
        //   name: "二本学姐",
        //   status: "草稿",
        //   class: "产品-案例分享",
        //   role:0
        // },
      ],
      selectedRows: [],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    for (var i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].role == 0) {
        this.tableData[i].status = "草稿";
      } else {
        this.tableData[i].status = "已发布";
      }
    }
  },
  updated() {
    for (var i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].role == 0) {
        this.tableData[i].status = "草稿";
      } else {
        this.tableData[i].status = "已发布";
      }
    }
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
    getTabeldata() {
      let _that = this;
      this.$axios
        .get("test.txt")
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          this.$message({
            message: "列表数据获取失败",
            type: "success",
          });
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
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
        row.status = "已发布";
      });
      this.$refs.table.clearSelection(); // 清空选中行
    },
    // 一键取消选中行
    cancelSelected() {
      // 发送请求将选中行的状态改为未发布
      // ...
      this.selectedRows.forEach((row) => {
        row.role = 0;
        row.status = "草稿";
      });
      this.$refs.table.clearSelection(); // 清空选中行
    },
    handleput(index, row) {
      this.tableData[index].role = 1;
      row.status = "已发布";
      console.log(
        index,
        this.tableData[index].role,
        this.tableData[index].status,
        this.tableData[index].title
      );
      console.log("已提交");
    },
    handelChange(a) {
      console.log(this.cascaded[0], "this");
      console.log(this, "cascaded");
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
      this.$set(this.ruleForm1, "class", this.class);
      this.$set(this.ruleForm1, "status", this.ruleForm.status);
      this.$set(this.ruleForm1, "role", 0);
      this.$set(this.ruleForm1, "iscreate", 0);
      this.$set(this.ruleForm1, "date", this.nowTime);
      this.tableData.push(this.ruleForm1);
      console.log(this.tableData, "table");
      console.log(this.ruleForm1.class, "classsss");
      console.log(this.class, "class");
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
    },

    updateForm(a) {
      this.getNowDate();
      this.getclass();
      this.$set(this.ruleForm1, "title", this.ruleForm.title);
      this.$set(this.ruleForm1, "class", this.class);
      this.$set(this.ruleForm1, "status", this.ruleForm.status);
      this.$set(this.ruleForm1, "role", 0);
      this.$set(this.ruleForm1, "iscreate", 0);
      this.$set(this.ruleForm1, "date", this.nowTime);
      this.tableData[this.ruleForm.index].title = this.ruleForm1.title;
      this.tableData[this.ruleForm.index].class = this.class;
      this.tableData[this.ruleForm.index].status = this.ruleForm1.status;
      this.tableData[this.ruleForm.index].role = this.ruleForm1.role;
      this.tableData[this.ruleForm.index].date = this.ruleForm1.date;
      this.tableData[this.ruleForm.index].iscreate = this.ruleForm1.iscreate;
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
    form,
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
</style>
  