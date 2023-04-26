<template>
    <div>
    
    <div class="button">
      <div>
      <el-button type="success" size="small" @click="addRow(users)">新增</el-button>
      <el-button type="primary" size="small" @click="removeUsers()">取消发布</el-button>
      <el-button type="primary" size="small" >一键发布<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
      <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
          <el-table-column type="selection" width="60">
          </el-table-column>
          <el-table-column prop="pid"  label="内容编号" width="120" sortable>
          </el-table-column>
          <el-table-column prop="title" label="课程标题" width="100">
          </el-table-column>
          <el-table-column prop="status" label="发布状态" min-width="120">
          </el-table-column>
          <el-table-column prop="category" label="课程类目" min-width="120">
          </el-table-column>
          <el-table-column prop="date" label="日期" min-width="180" sortable>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, users)">删除</el-button>
              <el-button size="small"               @click="msgPreviewTester">预览</el-button>
              <el-button size="small"               @click="msgPublishTester">发布</el-button>
            </template>
          </el-table-column>
      </el-table> 
    </div>
    <el-dialog :title="titleMap[dialogStatus]" :visible.sync="FormVisible" :close-on-click-modal="false" class="edit-form"
    :before-close="handleClose">
      <el-form :model="Form" label-width="80px" :rules="editFormRules" ref="Form">
          <el-form-item label="课程标题" prop="title" >
            <el-input v-model="Form.title" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="短标题">
            <el-input v-model="Form.title"></el-input>
          </el-form-item>
          <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
          
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">

              上传图片
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-form-item label="正文内容">
            <el-input type="textarea" v-model="Form.desc"></el-input>
          </el-form-item>
          <el-form-item label="相关链接">
            <el-input type="textarea" v-model="Form.desc"></el-input>
          </el-form-item>             
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="handleCancel('Form')">取消</el-button>
          <el-button v-if="addBtnshow" type="primary" @click.native="confirmAdd('Form')">确定</el-button>
          <el-button v-if="editBtnshow" type="primary" @click.native="confirmEdit('Form')">确定</el-button>
        </div>
      </el-dialog>      
  </div>
</template>
<script>
  var _index;
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        titleMap: {
            addEquipment:'新增',
            editEquipment: "编辑"
        },
        options: {
          value: '选项1',
          label: '课程'
        }, 
        dialogStatus: "",
        Form: {
		  id: 0,
		  pid: '',
		  title: 0,
          status:'',
          data: '',
          desc: '',      
        },
        users:[
        {pid:'001',title:'一本学姐',status:'草稿',category:'产品-案例分享',date:'2016-05-01'},
        {pid:'002',title:'二本学姐',status:'已发布',category:'产品-案例分享',date:'2016-05-02'},
        {pid:'003',title:'三本学姐',status:'草稿',category:'产品-案例分享',date:'2016-05-02'},
        {pid:'004',title:'四本学姐',status:'草稿',category:'产品-案例分享',date:'2016-05-04'},
        {pid:'005',title:'五本学姐',status:'草稿',category:'产品-案例分享',date:'2016-05-05'}
        ],  
        editFormRules:{
          pid: [
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '请输入商品库存', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请输入商品描述', trigger: 'blur' }
          ],
        },
        FormVisible: false,
        currentRow:[],
        ids:[],
        listLoading:'',
        addBtnshow:false,
        editBtnshow:false,
        editLoading:'', 
        dialogStatus: '',
        selected:[],
        editid:'',
        searchForm:[]
      }
    },
    methods: {
      selsChange:function(val){
        console.log(val);
        this.selected = val;
      },
      msgPreviewTester() {
        this.$message('预览了');
      },
      msgPublishTester() {
        this.$message('发布了');
        this.status="已发布";
      },
      addRow(users,event) {
        this.FormVisible = true;
        this.Form = {
          id: 0,
          pid: '',
          title: 0,
          status:'',
          data:'',
          desc: '',
        };
        this.dialogStatus = "addEquipment"
        this.addBtnshow = true
        this.editBtnshow = false
      },
      confirmAdd() { 
        this.users.push({
        pid: this.Form.pid,
        title: this.Form.title,
        status: this.Form.status,
        data: this.Form.data,
        desc: this.Form.desc
      })
      this.FormVisible = false;      
      },
      handleEdit:function(index, row) {
        this.FormVisible = true;
        this.Form = Object.assign({}, row);
        _index = index;
        console.log(index);
        console.log(_index);
        
        this.dialogStatus = "editEquipment"
        this.addBtnshow = false
        this.editBtnshow = true
      },   
      confirmEdit(){
        var editdata = _index;
        console.log(editdata);
        this.users[editdata].pid=this.Form.pid;
        this.users[editdata].title=this.Form.title;
        this.users[editdata].status=this.Form.status;
        this.users[editdata].data=this.Form.data;
        this.users[editdata].desc=this.Form.desc;
        this.FormVisible = false;
            },
      handleClose(done) {
        this.FormVisible = false;
      },     
      handleCancel(formpid) {
        this.FormVisible = false;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
            delete: row.splice(index, 1)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      removeUsers() {
          this.$confirm('此操作将永久删除 ' + this.selected.length + ' , 是否继续?', '提示', { type: 'warning' })
          .then(() => {
            this.$message.success('取消发布！！');
          })
          .catch(() => {
          this.$Message('已取消操作!');
          });
      }     
    }, 
  }
</script>
<style>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-table{
    background-color: #E9EEF3;
    
    color: #333;
  }
  .button{
    position:relative;
    z-index:999; top:0;
  }
</style>