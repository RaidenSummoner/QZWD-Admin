
<template>

     <div id="main-body">
        <br>
        <div id="second-line-div">
            <!-- 中间主要内容 -->
            <div id="main-content">
                <!-- 功能条 -->
                <div id="function-bar">
                    <div class="publish-button" style="background-color: rgb(5, 164, 218);color: white;">一键发布</div>
                    <div class="publish-button" style="border-color: black;border-style:solid;box-sizing: border-box;">取消发布</div>
                    <select class="select-button" style="margin-left: 260px;">
                        <option>资讯</option>
                    </select>
                    <input type="text" value="请输入关键词" class="select-button" style="margin-left:10px">
                </div>
                <!-- 列表项 -->
                <ul id="list">
                    <li class="list-item">
                        <div class="square-box"></div>
                        <div class="data-table-name">数据表名称</div>
                        <div class="resource-type">资源类型</div>
                        <div class="import-data">导入日期</div>
                        <div class="operation">操作</div>
                    </li>
                    <li class="list-item">
                        <div class="square-box"></div>
                        <div class="data-table-name">表一</div>
                        <div class="resource-type">资源or课程</div>
                        <div class="import-data">2022-11-21 17:50</div>
                        <div class="operation">
                            <span>发布</span><span style="color: red;">&nbsp;删除</span><span>&nbsp;预览</span>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="square-box"></div>
                        <div class="data-table-name">表一</div>
                        <div class="resource-type">资源or课程</div>
                        <div class="import-data">2022-11-21 17:50</div>
                        <div class="operation">
                            <span>发布</span><span style="color: red;">&nbsp;删除</span><span>&nbsp;预览</span>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="square-box"></div>
                        <div class="data-table-name">表一</div>
                        <div class="resource-type">资源or课程</div>
                        <div class="import-data">2022-11-21 17:50</div>
                        <div class="operation">
                            <span>发布</span><span style="color: red;">&nbsp;删除</span><span>&nbsp;预览</span>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="square-box"></div>
                        <div class="data-table-name">表一</div>
                        <div class="resource-type">资源or课程</div>
                        <div class="import-data">2022-11-21 17:50</div>
                        <div class="operation">取消发布</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    #main-body {
        width: 1000px;
        height: 600px;
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
    #navi-item {
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
        width: 830px;
        height: 400px;
        /* border-style: solid;
        border-color: greenyellow; */
    }
    #function-bar {
        width: 830px;
        height: 50px;
        /* border-style: solid;
        border-color: grey; */
    }
    .publish-button {
        float: left;
        height: 30px;
        line-height: 30px;
        width: 120px;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 8px;

    }
    .select-button {
        float: left;
        height: 30px;
        width: 120px;
        margin-top: 20px;
    }
    #search-icon {
        height: 30px;
        width: 30px;
        margin-top: 20px;
    }
    #list {
        list-style: none;
        height: 300px;
        width: 830px;
        /* border-color: red;
        border-style:solid; */
    }
    .list-item {
        height: 40px;
        width: 800px;
        margin-top: 5px;
        margin-left: 10px;        
        background-color: rgb(215, 215, 215);
    }
    .square-box {
        float: left;
        height: 20px;
        width: 20px;
        margin-left: 10px;
        margin-top: 9px;
        background-color: white;
        border-style: solid;
    }
    .data-table-name {
        float: left;
        height: 30px;
        line-height: 30px;
        width: 180px;
        margin-left: 3px;
        margin-top: 3px;
        text-align: center;
        /* border-color: red;
        border-style:solid; */
    }
    .resource-type {
        float: left;
        height: 30px;
        line-height: 30px;
        width: 180px;
        margin-top: 3px;
        margin-left: 3px;
        text-align: center;
        /* border-color: red;
        border-style:solid; */
    }
    .import-data {
        float: left;
        height: 30px;
        line-height: 30px;
        width: 180px;
        margin-top: 3px;
        margin-left: 3px;
        text-align: center;
        /* border-color: red;
        border-style:solid; */
    }
    .operation {
        float: left;
        height: 30px;
        line-height: 30px;
        width: 180px;
        margin-top: 3px;
        margin-left: 3px;
        text-align: center;
        /* border-color: red;
        border-style:solid; */
    }
</style>