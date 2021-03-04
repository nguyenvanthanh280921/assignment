import ProductAPI from '../api/productAPI.js';
import { $ } from '../utils.js';
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
                console.log('Upload thành công')
                storageRef.getDownLoadURL().then((url) => {
                    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#product-name').value,
                        image: url
                    };

                    console.log(product);
                    ProductAPI.add(product);
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





