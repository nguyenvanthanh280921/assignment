import HomePage from './page/HomePage.js';
import ProductDetail from './page/ProductDetail.js';
import ProductPage from './page/ProductPage.js';
import { parseRequesUrl, $ } from './utils.js';
import Header from './components/Header.js';
import CategoryPage from './page/CategoryPage.js';
import ProductAddPage from './page/ProductAddPage.js';
import AdminProductPage from './page/AdminProductPage.js';
import ContactPage from './page/ContactPage.js';
import AboutPage from './page/AboutPage.js';
import ProductEditPage from './page/ProductEditPage.js';



const routers = {
    '/': HomePage,
    '/products': ProductPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/contact': ContactPage,
    '/about': AboutPage,
    '/editsproduct/:id': ProductEditPage



}
const router = async () => {
    const { resource, id } = parseRequesUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '')
    const page = routers[parseUrl] ? routers[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    await page.afterRender();
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);