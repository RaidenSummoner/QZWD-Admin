import request from "../utils/request"

//分页查询课程
export function contentGetAll(e){
    return request({
        url: `/lesson/page?page=${e.page}&pageSize=${e.pageSize}`,
        method: 'GET'
    })
}

//根据id查询课程
export function lessonById(id){
    return request({
        url: `/lesson?id=${id}`,
        method: 'GET'
    })
}

//删除课程接口
export function lessonDel(id){
    return request({
        url: `/lesson?id=${id}`,
        method: 'DELETE'
    })
}

//新增课程
export function lessonAdd(data){
    return request({
        url: `/lesson`,
        method: 'POST',
        data
    })
}

//发布课程接口
export function lessonPublish(ids){
    return request({
        url: `/lesson/post?ids=${encodeURIComponent(JSON.stringify(ids))}`,
        method: 'PUT',
    })
}

//取消发布课程接口
export function lessonUnpublish(ids){
    return request({
        url: `/lesson/unpost?ids=${encodeURIComponent(JSON.stringify(ids))}`,
        method: 'PUT',
    })
}

//根据类目或关键词筛选
export function lessonPage(data){
    return request({
        url: '/lesson/search',
        method: 'POST',
        data
    })
}