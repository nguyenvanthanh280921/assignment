import ProductAPI from "../api/productAPI";
import { parseRequesUrl } from "../utils";

const CategoryPage = {
    async render() {
        const { id } = parseRequesUrl();
        const { data: products } = await ProductAPI.getAll();
        const result = products.filter(product => product.categoryID == id).map(product => {
            return `
            <div class="col-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="/#/products/${product.id}" class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
            
            
            `
        }).join("");
        return `${result}`
    }
}
export default CategoryPage;