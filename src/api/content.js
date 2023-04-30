import request from "../utils/request"

export function contentGetAll(){
    return request({
        url: '/content/getAll',
        method: 'GET'
    })
}