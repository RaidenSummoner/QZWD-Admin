<template>
 <span class="base">
    <span class="contentTable_one">
      咨询类目
      <button @click="add_main">添加一级项目</button>
        <button @click="add_sub">添加二级项目</button>
          <button @click="submit">保存</button>
          <br>
           一级类目
      <li v-for="(Catgory,index) in Catgorys_consult">
       
          <input type="text" v-model="Catgory.MainCatgory" v-if="edi===index">
          <span v-else>{{Catgory.MainCatgory}}</span>
          <button @click="mod(index)">修改</button>
          <button @click="save(index)">确定</button>
          <button @click="del(index)">删除</button>
      </li>
      二级类目
      <li v-for="(Catgory,index) in Catgorys_consult_sub">
        
          <input type="text" v-model="Catgory.SubCatgory" v-if="edi===index">
          <span v-else>{{Catgory.SubCatgory}}</span>
          <button @click="mod(index)">修改2</button>
          <button @click="save(index)">确定2</button>
          <button @click="del(index)">删除2</button>
      </li>
    </span>
    <div class="tableContent_two">
    课程类目
      <button @click="add2_main">添加一级项目</button>
        <button @click="add2_sub">添加二级项目</button>
          <button @click="submit">保存</button>
          <br>
           一级类目
      <li v-for="(Catgory,index) in Catgorys_course">
       
          <input type="text" v-model="Catgory.MainCatgory" v-if="edi===index">
          <span v-else>{{Catgory.MainCatgory}}</span>
          <button @click="mod2(index)">修改</button>
          <button @click="save2(index)">确定</button>
          <button @click="del2(index)">删除</button>
      </li>
      二级类目
      <li v-for="(Catgory,index) in Catgorys_course_sub">
        
          <input type="text" v-model="Catgory.SubCatgory" v-if="edi===index">
          <span v-else>{{Catgory.SubCatgory}}</span>
          <button @click="mod2_sub(index)">修改2</button>
          <button @click="save2_sub(index)">确定2</button>
          <button @click="del2_sub(index)">删除2</button>
      </li>
    </div>
  </span>
</template>
 
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        edi:'',
        Catgorys_course: [
        ],
        Catgorys_consult_sub: [
        ],
        Catgorys_consult: [
        ],
        Catgorys_course_sub: [
        ],
      }
    },
    methods: {
      mod:function(index){
        this.edi=index;
      },
      del: function (index) {
        this.Catgorys_consult.splice(index, 1);
      },
      save:function(index){
        this.edi=!index;
      },
      add_main:function(){
        this.Catgorys_consult.push({MainCatgory:'未命名1'})
      },
      
      add_sub:function(){
        this.Catgorys_consult_sub.push({SubCatgory:'未命名2'})
      },
      submit:function () {
        this.edi='';
        console.log(JSON.stringify(this.Catgorys_consult))
      },
      mod2:function(index){
        this.edi=index;
      },
      del2: function (index) {
        this.Catgorys_course.splice(index, 1);
      },
      save2:function(index){
        this.edi=!index;
      },
      
      add2_main:function(){
        this.Catgorys_course.push({MainCatgory:'未命名3'})
      },
      
      add2_sub:function(){
        this.Catgorys_course_sub.push({SubCatgory:'未命名4'})
      },
      submit2:function () {
        this.edi='';
        console.log(JSON.stringify(this.Catgorys_course))
      },
    }
  }
</script>
 
<style scoped>
  input{
    border:none;
    width:150px;
  }
  button{
    border: none;
    background-color:deepskyblue;
    color:white;
  }
  .base{
    position:relative;
    z-index:999; top:0;
  }
.clear {
  clear: both;
}
.contentTable_one{
    column-count:2;
    position:relative;
    z-index:999; top:0;
}
.contentTable_two{
    column-count:2;
    position:relative;
    z-index:999; top:0;
}
</style>