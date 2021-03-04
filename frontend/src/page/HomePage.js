
import ProductAPI from '../api/productAPI';

const HomePage = {
    async render() {
        try {
            const { data: products } = await ProductAPI.getAll();
            // const response = await axios('https://5e79b4b817314d00161333da.mockapi.i/products');
            // const products = await response.data();
            const result = products.map(product => {
                return `
                    
                    <div class="col-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text">${product.price}</p>
                                <a href="/#/products/${product.id}" class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>`
            }).join("")
            return `
            <div><h2>New Product</h2></div>
            <div class="row">
                ${result}
            </div>
            `
        } catch (error) {
            console.log(error);
        }
        //const { products } = data;

    }
}
export default HomePage;