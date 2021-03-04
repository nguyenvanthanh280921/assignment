import LitsProduct from "../components/ListProduct.js";
import SidebarMenu from "../components/SidebarMenu.js";

const AdminProductPage = {
    async render() {
        return `
            <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
               ${SidebarMenu.render()}
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button class="btn btn-sm btn-outline-secondary">Share</button>
                    <button class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    This week
                </button>
                </div>
            </div>
            <div class="table-responsive" id="list-products">
                ${await LitsProduct.render()}
            </div>
            </main>
        </div>
        `
    },
    async afterRender() {
        return `${await LitsProduct.afterRender()}`
    }
}
export default AdminProductPage;