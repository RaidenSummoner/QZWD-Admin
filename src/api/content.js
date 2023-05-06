import request from "../utils/request"

export function contentGetAll(){
    return request({
        url: '/content/getAll',
        method: 'GET'
    })
}

//查询单条资讯
export function contentById(id){
    return request({
        url: `/content?id=${id}`,
        method: 'GET'
    })
}

//新增
export function contentAdd(data){
    return request({
        url: `/content`,
        method: 'POST',
        data
    })
}

//删除
export function contentDel(data){
    return request({
        url: `/content?id=${data}`,
        method: 'DELETE',
    })
}

//分页查询
export function contentPage(data){
    return request({
        url: `/content/page?page=${data.page}&pageSize=${data.pageSize}`,
        method: 'GET',
    })
}

//发布资讯
export function contentPublish(ids){
    return request({
        url: `/content/post?ids=${ids}`,
        //资讯id数组。如果要把所有资讯都发布，传一个空数组即可。如果只发布一条资讯，则传来的数组只有一个id。如果发布多条资讯，则传含有多个id的数组
        method: 'PUT',
    })
}

//取消发布资讯接口
export function contentUnpublish(ids){
    return request({
        url: `/content/unpost?ids=${ids}`,
        method: 'PUT',
    })
}
//根据类目和关键词搜索
export function contentSearch(data){
    return request({
        url: `/content/search`,
        method: 'GET',
        data
    })
}

//修改资讯
export function contentUpdate(data){
    return request({
        url: `/content/update`,
        method: 'PUT',
        data
    })
}
