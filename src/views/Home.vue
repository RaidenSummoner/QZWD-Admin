<template>
  <div class="myTrees">
    <el-tree
      :data="treeData"
      node-key="id"
      default-expand-all
      @node-click="handleLeftclick"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      ref="tree"
    >
      <span class="custom-tree-node" slot-scope="{node,data}">
          <span>{{ node.label }}</span>
        <span>
          <el-dropdown trigger="click">
               <span class="el-dropdown-link">
                 <i class="el-icon-more"></i>
               </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-show="firstLevel" @click.native="addSameLevelNode">添加</el-dropdown-item>
              <el-dropdown-item v-show="lastLevel" @click.native="addChildNode">添加二级类目</el-dropdown-item>
              <el-dropdown-item @click.native="editNode">编辑</el-dropdown-item>
              <el-dropdown-item @click.native="deleteNode">删除</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </span>
      </span>
    </el-tree>
  </div>
</template>
<script>
  let id = 1000;
  export default {
    name: "list",
    data() {
      return {
        treeData: [
          {
            id: 1,
            label: '咨询类目',
            isEdit: true,
            children: [{
              id: 3,
              label: '产品',
              isEdit: true,
            }, {
              id: 2,
              isEdit: true,
              label: 'AI 大数据',
              disabled: true,
            }]
          },
        {
            id: 1,
            label: '课程类目',
            isEdit: true,
            children: [{
              id: 3,
              label: '产品',
              isEdit: true,
            }, {
              id: 2,
              isEdit: true,
              label: 'AI 大数据',
              disabled: true,
            }]
          },
        ],
        isShow: false,
        currentData: "",
        currentNode: "",
        menuVisible: false,
        firstLevel: false,
        lastLevel:false,
        filterText: "",
        maxexpandId: 4,
      }
    },
    methods: {
      append(data) {
        const newChild = {id: id++, label: 'testtest', children: []};
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild);
      },

      handleLeftclick(data, node) {
        this.currentData=data;
        this.currentNode=node;
        if(node.level!=1){ 
          this.firstLevel=true;
        }else{
          this.firstLevel=false;
        }
      if(node.level!=2){ 
        this.lastLevel=true;
      }else{
        this.lastLevel=false;
      }

      },
      addSameLevelNode() {
        let id = Math.ceil(Math.random() * 100);
        this.$prompt('请输入节点名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          let treeD={id: id, label:value}
          this.$refs.tree.append(treeD, this.currentNode.parent);

        }).catch(() => {

        });

      },

      addChildNode() {
        console.log(this.currentData);
        console.log(this.currentNode);
        if (this.currentNode.level >= 2) {
          this.$message.error("最多只支持2级！");

          return false;
        }
        let id = Math.ceil(Math.random() * 100);
        this.$prompt('请输入类目', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          console.log('>>>>>>>', value);
          let treeD={id:id,label:value}
          this.$refs.tree.append(treeD, this.currentNode);

        }).catch(() => {

        });
      },
      deleteNode() {
        this.$confirm(`确定删除'${this.currentNode.label}'类目?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('>>>>删除', this.currentNode.data.code);
          this.$refs.tree.remove(this.currentNode);
        }).catch(() => {

        });


      },
      editNode() {
        console.log('>>>>>xiugi', this.currentData.code);
        if (this.currentData.isEdit) {
          this.$prompt('内容不能为空', '提示', {
            confirmButtonText: '确定',
            inputValue: this.currentNode.data.label,
            cancelButtonText: '取消',
          }).then(({value}) => {
            console.log('bianji',this.$refs.tree);
            this.$set(this.currentData,'label',value);
          })
        }

      },
   

    }
  }
</script>
<style scoped>
  .myTrees {
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
