import request from "../utils/request"
//类目接口

//查询所有类目
export function getKind(){
    return request({
        url: '/kind',
        method: 'GET'
    })
}

//新增类目
export function addKind(data){
    return request({
        url: '/kind',
        method: 'POST',
        data
    })
}

//删除类目
export function delKind(id){
    return request({
        url: `/kind?id=${id}`,
        method: 'DELETE'
    })
}

//修改类目
export function updateKind(data){
    return request({
        url: '/kind',
        method: 'PUT',
        data
    })
}

//根据id查询类目
export function getKindById(id){
    return request({
        url: `/kind/get?id=${id}`,
        method: 'GET'
    })
}

//查询一级或二级类目
export function getKindByLevel(level){
    return request({
        url: `/kind/category?level=${level}`,
        method: 'GET'
    })
}