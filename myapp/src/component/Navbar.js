

export default function  Navbar(){
    return(
        <div className="nav-ul">
            <div className="search-icon">
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div className="ul-info">
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>SHOP</a></li>
                    <li><a>FEATURES</a></li>
                    <li><h1>SOBER</h1></li>
                    <li><a>PAGES</a></li>
                    <li><a>BLOG</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
            <div className="shop-car">
                <span><i className="fa-solid fa-cart-shopping"></i></span>
            </div>
        </div>
    )
}
