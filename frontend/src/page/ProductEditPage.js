import ProductAPI from "../api/productAPI";
import { parseRequesUrl, $ } from "../utils";

const ProductEditPage = {
    async render() {
        const { id } = parseRequesUrl();
        console.log(id);
        const { data: product } = await ProductAPI.get(id);
        return /*html*/`
            <form id ="form-update-product">
            <div class="form-group">
                <input type ="text" placeholder="Tên Sản Phẩm" id="product-name"  value="${product.name}"  class="form-control"/>
            </div>
            <div class="form-group">
                <input type ="file" id="product-image" class="form-control"   value="${product.image}"/>
            </div>
            <div class="form-group">
                <input type ="text" placeholder="Giá Sản Phẩm" id="product-price" class="form-control" value="${product.price}"/>
            </div>
            <div class="form-group">
                <input type ="text" placeholder="Mô Tả Sản Phẩm" id="product-description" class="form-control" value="${product.description}"/>
            </div>
            <div class="form-group">
                <input  placeholder="Categary" id="product-categoryId" class="form-control" value="${product.categoryId}"/>
            </div>
            <div class ="form-group">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        `
    },
    async afterRender() {
        const { id } = parseRequesUrl();
        const { data: product } = await ProductAPI.get(id);

        $('#form-update-product').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('old', product);
            const newProduct = {
                ...product,
                name: $('#product-name').value,
                price: $('#product-price').value,
                description: $('#product-description').value,
                categoryId: $('#product-categoryId').value,
            };
            ProductAPI.update(id, newProduct);
            window.location.hash = '/listproduct'
        })
    }
}
export default ProductEditPage;