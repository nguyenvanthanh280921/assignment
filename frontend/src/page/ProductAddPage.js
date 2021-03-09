import ProductAPI from '../api/productAPI.js';
import ListProduct from "../components/ListProduct";
import { $ } from '../utils.js';
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBlkWM82lXWZzGoFdOC_lxgXhqnYbcfwhs",
    authDomain: "serene-bliss-306402.firebaseapp.com",
    projectId: "serene-bliss-306402",
    storageBucket: "serene-bliss-306402.appspot.com",
    messagingSenderId: "924123021428",
    appId: "1:924123021428:web:999322d520244ae307d121",
    measurementId: "G-DXTK58FG94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const ProductAddPage = {
    render() {
        return /*html*/`
        <form id="form-add">
            <div class="form-group">
                <input type="text" placeholder="Tên Sản Phẩm" id="product-name" class="form-control" />
            </div>
            <div class="form-group">
                <input type="file" id="product-image" class="form-control" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Giá Sản Phẩm" id="product-price" class="form-control" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Mô Tả Sản Phẩm" id="product-description" class="form-control" />
            </div>

            <div class="form-group">
                <input type="text" placeholder="Categary" id="product-categoryId" class="form-control" />
            </div>

            <div class="form-group">
                <input href="/#/listproduct"  type="submit" class="btn btn-primary submitForm" value="Add Product" />
            </div>
        </form>`
    },
    async afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();

            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function () {
                console.log('Upload thành công');
                storageRef.getDownloadURL().then(async (url) => {
                    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#product-name').value,
                        price: $('#product-price').value,
                        description: $('#product-description').value,
                        categoryId: $('#product-categoryId').value,
                        image: url
                    };

                    console.log(product);
                    ProductAPI.add(product);
                    window.location.href = '#/listProduct';
                })
            })
            // const product = {
            //     id: Math.random().toString(36).substr(2, 9),
            //     name: $('#product-name').value,
            //     image: $('#product-image').value,
            //     price: $('#product-price').value,
            //     description: $('#product-description').value,
            //     categoryId: $('#product-categoryId').value,

            // }

        })
    }
}
export default ProductAddPage;





