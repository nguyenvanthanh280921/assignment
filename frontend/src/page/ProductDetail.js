// import data from '../data.js';
// import axios from 'axios';
import ProductAPI from '../api/productAPI';
import { parseRequesUrl } from '../utils.js';

const ProductDetail = {
    async render() {

        const { id } = parseRequesUrl();
        const { data: product } = await ProductAPI.get(id);
        return `
        
        <div class="product-detail">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                            <div class="product-slider-single normal-slider">
                                <img src="${product.image}" alt="Product Image" width="500">
                            
                            </div>
                    </div>
                    <div class="col-4">
                        <div class="product-content">
                            <div class="title">
                                <h2> ${product.name}</h2>
                            </div>
                            <div class="ratting">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="price">
                                <h4>Price:</h4>
                                <h3> ${product.price}</h3>
                            </div>
                            <div class="p-size">
                                <h4>Size:</h4>
                                <div class="btn-group btn-group-sm">
                                    <button type="button" class="btn">S</button>
                                    <button type="button" class="btn">M</button>
                                    <button type="button" class="btn">L</button>
                                    <button type="button" class="btn">XL</button>
                                </div>
                            </div>
                            <div class="p-color">
                                <h4>Color:</h4>
                                <div class="btn-group btn-group-sm">
                                    <button type="button" class="btn">White</button>
                                    <button type="button" class="btn">Black</button>
                                    <button type="button" class="btn">Blue</button>
                                </div>
                                
                            </div>
                        
                            <div class="Description">
                                <h4>Description:</h4>
                                <h5> ${product.description}</h5>
                            </div>
                            <div class="action">
                            <button type="button" class="btn btn-primary">Add to cart</button>
                            <button type="button" class="btn btn-danger">Buy now</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
export default ProductDetail;