<template>
  <div class="main">
    <h style="font-size:30px; text-align=left;">模板下载</h>
    <el-row>
      <el-col :lg="6" :xs="24"
        ><el-skeleton style="width: 200px"> </el-skeleton>
        Form：
        <el-button> 下载 </el-button></el-col
      >
      <el-col :lg="6" :xs="24"
        ><el-skeleton style="width: 200px"> </el-skeleton>
        Form：
        <el-button> 下载 </el-button></el-col
      >
      <el-col :lg="6" :xs="24"
        ><el-skeleton style="width: 200px"> </el-skeleton>
        Form：
        <el-button> 下载 </el-button></el-col
      >
      <el-col :lg="6" :xs="24"
        ><el-skeleton style="width: 200px"> </el-skeleton>
        Form：
        <el-button> 下载 </el-button></el-col
      >
    </el-row>
    <br />
    <el-row>
      <div class="sr">
        <span style="font-size: 30px">数据上传</span>
        <br />
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
          <div slot="tip" class="el-upload__tip">
            只支恃上传 xlsx csv xls 类型数据
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <span style="font-size: 30px">数据导入</span>
      </div>
      <br />
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="名称" width="400"> </el-table-column>
      <el-table-column>
        <el-button size="mini" type="primary">预览</el-button>
      <el-button size="mini" type="danger">删除</el-button>
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
          name: "Datasheet1",
        },
        {
          name: "Datasheet2",
        },
        {
          name: "Datasheet3",
        },
        {
          name: "Datasheet4",
        },
      ],
    };
  },
};
</script>

<style>
.main {
  text-align: left;
  margin-top: 5%;
  line-height: 40px;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
}
.sr {
  text-align: left;
}
</style>