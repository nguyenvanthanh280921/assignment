import ProductAPI from "../api/productAPI";
import { parseRequesUrl } from "../utils";

const CategoryPage = {
    async render() {
        const { id } = parseRequesUrl();
        const { data: products } = await ProductAPI.getAll();
        const result = products.filter(product => product.categoryID == id).map(product => {
            return `
              <div><a href="/#/products/${product.id}">${product.name}</div>
            
            
            `
        }).join("");
        return `${result}`
    }
}
export default CategoryPage;