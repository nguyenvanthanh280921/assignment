import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll() {
        const url = `/categorys`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categorys/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = '/categorys/';
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/categorys/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/categorys/${id}`;
        return axiosClient.put(url, data);
    }
}
export default CategoryAPI;