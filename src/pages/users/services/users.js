import { PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

//处理获取信息
export function fetch({ page = 1 }) {
    return request(`/api/users?_page=${page}&limit=${PAGE_SIZE}`);
}

//处理用户删除
export function remove(id) {
    return request(`/api/users/${id}`, {
        method: 'DELETE',
    });
}

//处理用户编辑
export function patch(id, values) {
    return request(`/api/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
    });
}
