<template>
<el-row>
<div id="main-body">
        <!-- 第二行包括左侧导航栏和中间主要内容 -->
        <div id="second-line-div">
            <!-- 左侧导航栏 -->
            <!-- 中间主要内容 -->
            <div id="main-content">
                <!-- 模板下载 -->
                <div id="template-download">
                    <div class="main-content-text">模板下载</div>
                    <ul id="template-ul">
                        <li class="template-item">
                            <div class="download-rightnow">立即下载</div>
                            <div class="table-name">表格名称</div>
                        </li>
                        <li class="template-item">
                            <div class="download-rightnow">立即下载</div>
                            <div class="table-name">表格名称</div>
                        </li>
                        <li class="template-item">
                            <div class="download-rightnow">立即下载</div>
                            <div class="table-name">表格名称</div>
                        </li>
                        <li class="template-item">
                            <div class="download-rightnow">立即下载</div>
                            <div class="table-name">表格名称</div>
                        </li>
                    </ul>
                </div>
               
            </div>
            <div id="data-upload">
                    <div class="main-content-text">数据上传</div>
                    <div id="upload-module">上传</div>
                    <div id="upload-prompt">*只支持上传xlsx、csv、xls类型数据</div>
                </div>
                <!-- 数据导入 -->
                <div id="data-import">
                    <div class="main-content-text">数据导入</div>
                    <ul id="data-ul">
                        <li>数据表1<span class="preview">预览</span><span class="delete">删除</span></li>
                        <li>数据表1<span class="preview">预览</span><span class="delete">删除</span></li>
                        <li>数据表1<span class="preview">预览</span><span class="delete">删除</span></li>
                        <li>数据表1<span class="preview">预览</span><span class="delete">删除</span></li>
                        <li>数据表1<span class="preview">预览</span><span class="delete">删除</span></li>
                    </ul>
                </div>
        </div>
        
    </div>  
     <!-- 数据上传 -->
                
</el-row>

</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    #first-line-div {
        width: 100%;
        height: 50px;
        /* border-color: red;
        border-style:solid;
        border-width:5px; */
        background-color: darkgray;
    }
    #logo {
        float: left;
        width: 150px;
        height: 50px;
    }
    #navi-bar {
        float: left;
        height: 50px;
        list-style: none;
    }
    .navi-item {
        float: left;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    #second-line-div {
        width: 100%;
        height: 500px;
        
    }
    #left-bar {
        float: left;
        width: 150px;
        height: 550px;
        background-color: darkgray;
    }
    #left-bar-item {
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    #main-content {
        float: left;
        width: 800px;
        height: 400px;
        /* border-style: solid;
        border-color: greenyellow; */
    }
    .main-content-text {
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 3px;
    }
    #template-download {
        height: 170px;
        width: 800px;
        /* border-style: solid;
        border-color: grey; */
    }
    #template-ul {
        list-style: none;
        margin-left: 10px;
    }
    .template-item {
        float: left;
        width: 190px;
        height: 125px;
        /* border-style: solid;
        border-color: red; */
        
    }
    .download-rightnow {
        width: 170px;
        height: 90px;
        line-height: 100px;
        text-align: center;
        margin-left: 3px;
        margin-top: 3px;
        background-color: grey;
        border-style: solid;
        border-color: black;
    }
    .table-name {
        width: 170px;
        height: 10px;
        margin-top: 3px;
        text-align: center;
        margin-left: 3px;
    }
    #data-upload {
        height: 170px;
        width: 800px;
        /* border-style: solid; */
        /* border-color: grey; */
    }
    #upload-module {
        float: left;
        height: 110px;
        line-height: 110px;
        text-align: center;
        width: 150px;
        margin-left: 10px;
        margin-top: 3px;
        background-color: grey;
        border-style: solid;
        border-color: black;
    }
    #upload-prompt {
        float: left;
        color: red;
        margin-top: 100px;
    }
    #data-import {
        height: 170px;
        width: 800px;
        /* border-style: solid;
        border-color: grey; */
    }
    #data-ul {
        list-style: none;
        margin-left: 35px;
        margin-top: 3px;
    }
    .preview {
        margin-left: 500px;
    }
    .delete {
        margin-left: 10px;
        color: green;
    }
</style>