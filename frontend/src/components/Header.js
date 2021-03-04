import CategoryAPI from "../api/categoryAPI";

const Header = {
    async render() {
        const { data: categorys } = await CategoryAPI.getAll();
        return `
        <p class="h5 my-0 me-md-auto fw-normal"><img src="./images/logomen.jpg" alt="" width="80px " height="60px"></p>
            <nav class="my-2 my-md-0 me-md-3">
                <a class="p-2 text-dark" href="/">Home</a>
                <a class="p-2 text-dark" href="/#/products">Product</a>
                ${categorys.map(category => {
            return `<a class="p-2 text-dark" href="/#/category/${category.id}">${category.name}</a>`
        })
            }
                <a class="p-2 text-dark" href="/#/about">About</a>
                <a class="p-2 text-dark" href="/#/contact">Contact</a>
                <a class="p-2 text-dark" href="/#/listproduct"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg></a>
                
            </nav>
            <a class="btn btn-outline-primary" href="#">Sign up</a>
        `
    }
}
export default Header;