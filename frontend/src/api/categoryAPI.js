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
    add() {

    },
    remove() {

    },
    upload() {

    }
}
export default CategoryAPI;