const SidebarMenu = {
    render() {
        return `
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard 
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/products">
                    <span data-feather="file"></span>
                    Product
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/listcategory">
                    <span data-feather="file"></span>
                    Category
                    </a>
                </li>
            </ul>
        </div>
        `
    }
}
export default SidebarMenu;