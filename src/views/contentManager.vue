<template>
  <div>
    <el-row>
      <el-col :span="10">
        <!--资讯，主类目-->
        <el-table
          :data="kind_consult_1"
          highlight-current-row
          v-loading="listLoading"
          @selection-change="selsChange"
          style="width: 100%"
        >
          <el-table-column prop="kind" label="资讯一级类目" width="120">
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <!-- <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">新增</el-button> -->
              <el-button
                type="success"
                size="small"
                @click="addRow(kind_consult_1, 1)"
                >新增</el-button
              >

              <el-button
                type="primary"
                size="small"
                @click="handleEdit(1, scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, kind_consult_1)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <el-dialog
          :title="titleMap[dialogStatus]"
          :visible.sync="FormVisible1"
          :close-on-click-modal="false"
          class="edit-form"
          :before-close="handleClose"
        >
          <el-form
            :model="Form1_1"
            label-width="100px"
            :rules="editFormRules"
            ref="Form1_1"
          >
            <el-form-item label="一级类目：" prop="kind">
              <el-input v-model="Form1_1.kind" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="handleCancel(1, 'Form1_1')"
              >取消</el-button
            >
            <el-button
              v-if="addBtnshow"
              type="primary"
              @click.native="confirmAdd(1, 'Form1_1')"
              >确定</el-button
            >
            <el-button
              v-if="editBtnshow"
              type="primary"
              @click.native="confirmEdit(1, 'Form1_1')"
              >确定</el-button
            >
          </div>
        </el-dialog>
      </el-col>
      <!--资讯，子类目-->
      <el-col :span="10">
        <div>
          <div style="text-align: left"></div>
          <div>
            <el-table
              :data="kind_consult_2"
              highlight-current-row
              v-loading="listLoading"
              @selection-change="selsChange"
              style="width: 100%"
            >
              <el-table-column prop="kind" label="资讯二级类目" width="120">
              </el-table-column>
              <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                  <!-- <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">新增</el-button> -->
                  <el-button
                    type="success"
                    size="small"
                    @click="addRow(kind_consult_1, 2)"
                    >新增</el-button
                  >
                  <el-button
                    type="primary"
                    size="small"
                    @click="handleEdit(2, scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, kind_consult_2)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!--新增/编辑界面-->
          <el-dialog
            :title="titleMap[dialogStatus]"
            :visible.sync="FormVisible2"
            :close-on-click-modal="false"
            class="edit-form"
            :before-close="handleClose"
          >
            <el-form
              :model="Form1_2"
              label-width="100px"
              :rules="editFormRules"
              ref="Form1_2"
            >
              <el-form-item label="二级类目：" prop="kind">
                <el-input v-model="Form1_2.kind" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="handleCancel(2, 'Form1_2')"
                >取消</el-button
              >
              <el-button
                v-if="addBtnshow"
                type="primary"
                @click.native="confirmAdd(2, 'Form1_2')"
                >确定</el-button
              >
              <el-button
                v-if="editBtnshow"
                type="primary"
                @click.native="confirmEdit(2, 'Form1_2')"
                >确定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <!--课程，主类目-->
    <el-row>
      <el-col :span="10">
        <div>
          <div style="text-align: left">
            <!-- <el-input v-model="tableDataName" size="small" placeholder="请输入姓名" style="width:240px"></el-input>
      <el-button type="primary" size="small" @click="searchUser">搜索</el-button> -->
            <!-- <el-button type="primary" size="small" @click="openData">展示数据</el-button> -->

            <!-- <el-button type="success" size="small" @click="handleAdd()">新增</el-button> -->
          </div>
          <div>
            <el-table
              :data="kind_course_1"
              highlight-current-row
              v-loading="listLoading"
              @selection-change="selsChange"
              style="width: 100%"
            >
              <el-table-column prop="kind" label="课程一级类目" width="120">
              </el-table-column>
              <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                  <!-- <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">新增</el-button> -->
                  <el-button
                    type="success"
                    size="small"
                    @click="addRow(kind_consult_1, 3)"
                    >新增</el-button
                  >
                  <el-button
                    type="primary"
                    size="small"
                    @click="handleEdit(3, scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, kind_course_1)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!--新增/编辑界面-->
          <el-dialog
            :title="titleMap[dialogStatus]"
            :visible.sync="FormVisible3"
            :close-on-click-modal="false"
            class="edit-form"
            :before-close="handleClose"
          >
            <el-form
              :model="Form2_1"
              label-width="100px"
              :rules="editFormRules"
              ref="Form2_1"
            >
              <el-form-item label="一级类目" prop="kind">
                <el-input v-model="Form2_1.kind" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="handleCancel(3, 'Form2_1')"
                >取消</el-button
              >
              <el-button
                v-if="addBtnshow"
                type="primary"
                @click.native="confirmAdd(3, 'Form2_1')"
                >确定</el-button
              >
              <el-button
                v-if="editBtnshow"
                type="primary"
                @click.native="confirmEdit(3, 'Form2_1')"
                >确定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </el-col>
      <!--课程，子类目-->

      <el-col :span="10">
        <div>
          <div style="text-align: left">
            <!-- <el-input v-model="tableDataName" size="small" placeholder="请输入姓名" style="width:240px"></el-input>
      <el-button type="primary" size="small" @click="searchUser">搜索</el-button> -->
            <!-- <el-button type="primary" size="small" @click="openData">展示数据</el-button> -->

            <!-- <el-button type="success" size="small" @click="handleAdd()">新增</el-button> -->
          </div>
          <div>
            <el-table
              :data="kind_course_2"
              highlight-current-row
              v-loading="listLoading"
              @selection-change="selsChange"
              style="width: 100%"
            >
              <el-table-column prop="kind" label="课程二级类目" width="120">
              </el-table-column>
              <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                  <!-- <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">新增</el-button> -->
                  <el-button
                    type="success"
                    size="small"
                    @click="addRow(kind_consult_1, 4)"
                    >新增</el-button
                  >
                  <el-button
                    type="primary"
                    size="small"
                    @click="handleEdit(4, scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, kind_course_2)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!--新增/编辑界面-->
          <el-dialog
            :title="titleMap[dialogStatus]"
            :visible.sync="FormVisible4"
            :close-on-click-modal="false"
            class="edit-form"
            :before-close="handleClose"
          >
            <el-form
              :model="Form2_2"
              label-width="100px"
              :rules="editFormRules"
              ref="Form2_2"
            >
              <el-form-item label="二级类目" prop="kind">
                <el-input v-model="Form2_2.kind" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="handleCancel(4, 'Form2_2')"
                >取消</el-button
              >
              <el-button
                v-if="addBtnshow"
                type="primary"
                @click.native="confirmAdd(4, 'Form2_2')"
                >确定</el-button
              >
              <el-button
                v-if="editBtnshow"
                type="primary"
                @click.native="confirmEdit(4, 'Form2_2')"
                >确定</el-button
              >
            </div>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  getKind,
  addKind,
  delKind,
  updateKind,
  getKindById,
  getKindByLevel,
} from "@/api/kind";
var _index;
export default {
  data() {
    return {
      titleMap: {
        addEquipment: "新增",
        editEquipment: "编辑",
      },
      id_temp: null,

      //新增和编辑弹框标题
      dialogStatus: "",
      Form1_1: {
        kind: "",
        id: null,
        level: "1",
      },
      Form1_2: {
        kind: "",
        id: null,
        level: "2",
      },
      Form2_1: {
        kind: "",
        id: null,
        level: "1",
      },
      Form2_2: {
        kind: "",
        id: null,
        level: "2",
      },
      Form: {
        kind: "",
        id: null,
        level: "",
      },
      kind_consult_1: [{ kind: "", level: "1", id: "" }],
      kind_consult_2: [{ kind: "", level: "2", id: "" }],
      kind_course_1: [{ kind: "", level: "1", id: "" }],
      kind_course_2: [{ kind: "", level: "2", id: "" }],
      editFormRules: {
        kind: [{ required: true, message: "请输入 ", trigger: "blur" }],
      },
      FormVisible1: false,
      FormVisible2: false,
      FormVisible3: false,
      FormVisible4: false,
      currentRow: [],
      ids: [],
      listLoading: "",
      addBtnshow: false,
      editBtnshow: false,
      editLoading: "",
      dialogStatus: "",
      selected: [],
      editid: "",
      searchForm: [],
    };
  },
  created() {
    //    this.getTabledata();
    this.getAllKind();
  },
  methods: {
    handleConsultKindLevel() {},
    getAllKind() {
      getKind()
        .then((res) => {
          console.log(res.data);
          console.log(res.data.length);
          console.log(res.data[1].level);
          var a = 0,
            b = 0,
            arrList1 = [],
            arrList2 = [];
          for (var i = 0; i < res.data.length; i++) {
            //对咨询一二级类目进行分类！！！！后期补上course的！！
            if (res.data[i].level == 1) {
              a++;
              arrList1.push(res.data[i]);
            } else if (res.data[i].level == 2) {
              b++;
              arrList2.push(res.data[i]);
            }
          }
          this.kind_consult_1 = arrList1;
          this.kind_consult_2 = arrList2;
          console.log(arrList1);
          console.log(arrList2);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // searchUser(){
    //   console.log(this.searchForm.name)
    //   var username = this.searchForm.name;
    //   let resultdata = this.userlist.filter(users =>{
    //     if(users.name == username|| users.name.indexOf(username) != -1)
    //     {
    //       console.log("已找到！")
    //       return true;
    //     }
    //   });
    //   this.userlist = resultdata;
    // },
    selsChange: function (val) {
      //点击选中
      console.log(val);
      this.selected = val;
    },
    // 直接新增一行空行
    // handleAdd(val) {
    //   this.dialogStatus = 'create';
    //   this.ViewVisible = true;
    //       },
    //       addRow(users,event){//新增一行
    //  //之前一直想不到怎么新增一行空数据，最后幸亏一位朋友提示：表格新增一行，其实就是源数据的新增，从源数据入手就可以实现了，于是 恍然大悟啊！
    //     this.FormVisible = true;
    //     users.push({ name: '', price: '',reserve:'',desc:''})
    //  },
    // 点击新增
    addRow(kind_consult_1, e, event) {
      console.log(e);
      if (e == 1) {
        this.FormVisible1 = true;
        this.Form1_1 = {
          kind: "",
          level: 1,
        };
      } else if (e == 2) {
        this.FormVisible2 = true;
        this.Form1_2 = {
          kind: "",
          level: 2,
        };
      } else if (e == 3) {
        this.FormVisible3 = true;
        this.Form2_1 = {
          kind: "",
          level: 1,
        };
      } else if (e == 4) {
        this.FormVisible4 = true;
        this.Form2_2 = {
          kind: "",
          level: 2,
        };
      }
      this.dialogStatus = "addEquipment";
      this.addBtnshow = true;
      this.editBtnshow = false;
    },
    // 点击确定（新增）
    confirmAdd(e) {
      // this.users = this.users || []
      if (e == 1) {
        addKind(this.Form1_1).then((res) => {
          console.log(res); //请求结果
          if (res.code == 1) {
            this.dialogVisible = false;
            this.kind_consult_1.push({
              kind: this.Form1_1.kind,
            });
            this.FormVisible1 = false;
          } else {
            console.log("新增失败");
          }
        });
      } else if (e == 2) {
        addKind(this.Form1_2).then((res) => {
          console.log(res); //请求结果
          if (res.code == 1) {
            this.dialogVisible = false;
            this.kind_consult_2.push({
              kind: this.Form1_2.kind,
            });
            this.FormVisible2 = false;
          } else {
            console.log("新增失败");
          }
        });
      } else if (e == 3) {
        this.kind_course_1.push({
          kind: this.Form2_1.kind,
        });
        this.FormVisible3 = false;
      } else if (e == 4) {
        this.kind_course_2.push({
          kind: this.Form2_2.kind,
        });
        this.FormVisible4 = false;
      }
      // storage.set('users', this.users);
      this.FormVisible1 = false;
    },
    //点击编辑
    handleEdit: function (e, index, row) {
      if (e == 1) {
        this.FormVisible1 = true;
        this.Form = Object.assign({}, row); //这句是关键！！！
        _index = index;
        console.log(index);
        //获取id！！！
        console.log(this.kind_consult_1[index].id);
        this.id_temp = this.kind_consult_1[index].id;

        console.log(_index);

        this.dialogStatus = "editEquipment";
        this.addBtnshow = false;
        this.editBtnshow = true;
        this.Form1_1.level = 1;
      } else if (e == 2) {
        this.FormVisible2 = true;
        //获取id！！！
        console.log(this.kind_consult_2[index].id);
        this.id_temp = this.kind_consult_2[index].id;
        this.Form = Object.assign({}, row); //这句是关键！！！
        _index = index;
        console.log(index);
        console.log(_index);

        this.dialogStatus = "editEquipment";
        this.addBtnshow = false;
        this.editBtnshow = true;
      } else if (e == 3) {
        this.FormVisible3 = true;
        this.Form = Object.assign({}, row); //这句是关键！！！
        _index = index;
        console.log(index);
        console.log(_index);

        this.dialogStatus = "editEquipment";
        this.addBtnshow = false;
        this.editBtnshow = true;
      } else if (e == 4) {
        this.FormVisible4 = true;
        this.Form = Object.assign({}, row); //这句是关键！！！
        _index = index;
        console.log(index);
        console.log(_index);

        this.dialogStatus = "editEquipment";
        this.addBtnshow = false;
        this.editBtnshow = true;
      }
    },
    // 点击确定（编辑）
    confirmEdit(e) {
      var editdata = _index;
      console.log(editdata);
      console.log(this.id_temp);
      if (e == 1) {
        console.log(this.Form1_1);
        this.Form1_1.id = this.id_temp;
        updateKind(this.Form1_1).then((res) => {
          console.log(res); //请求结果
          if (res.code == 1) {
            this.FormVisible1 = false;

            this.kind_consult_1[editdata].kind = this.Form1_1.kind;
          } else {
            console.log("修改失败");
          }
        });
      } else if (e == 2) {
        console.log(this.Form1_2);
        this.Form1_2.id = this.id_temp;
        updateKind(this.Form1_2).then((res) => {
          console.log(res); //请求结果
          if (res.code == 1) {
            this.FormVisible2 = false;

            this.kind_consult_2[editdata].kind = this.Form1_2.kind;
          } else {
            console.log("修改失败");
          }
        });
      } else if (e == 3) {
        this.kind_course_1[editdata].kind = this.Form2_1.kind;
        this.FormVisible3 = false;
      } else if (e == 4) {
        this.kind_course_2[editdata].kind = this.Form2_2.kind;
        this.FormVisible4 = false;
      }
      // 我的 更新的时候就把弹出来的表单中的数据写到要修改的表格中
      // var postdata = {
      //   name: this.Form.name,
      //    price: this.Form.price,
      //    reserve: this.Form.reserve,
      //    data: this.Form.data,
      //    desc: this.Form.desc,
      // }
      //这里再向后台发个post请求重新渲染表格数据
      // this.$set(this.users,'name')
      // let studenteList=this.Form;
      // console.log(studenteList);
      // let {name,price,reserve,data,desc} = studenteList;
    },
    //点击关闭dialog
    handleClose(done) {
      //  done();
      //  location.reload();
      this.FormVisible1 = false;
    },
    //点击取消
    handleCancel(e, formName) {
      if (e == 1) {
        this.FormVisible1 = false;
      } else if (e == 2) {
        this.FormVisible2 = false;
      } else if (e == 3) {
        this.FormVisible3 = false;
      } else if (e == 4) {
        this.FormVisible4 = false;
      }
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var del_id = row[index].id;
          console.log(del_id);
          delKind(del_id).then((res) => {
            if (res.code == 1) {
              this.$message({
                // delete:row.splice(index, 1),
                type: "success",
                message: "删除成功!",
                delete: row.splice(index, 1), //splice 删除对象是数unfuntion组   如果是对象会出现错误  row.solice not is

                // url: this.$router.push('/')
              });
            } else {
              this.$message({
                message: "删除失败",
                type: "warning",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style>
</style>