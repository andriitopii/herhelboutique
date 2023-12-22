
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";


const Nav = () => {
    console.log(document.location.hash);
    const location = useLocation();
        if ( location.pathname.startsWith('/admin') ){
        return (<></>);
    } else
    return ( <header className="header">
    <div className="container">
        <nav className="nav">
            <div className="nav-search-cont">
                <span className="search-icon"></span>
        <input type="search" placeholder="Пошук" className="search-input"/>
            </div>
        

        
            
            <ul className="nav-menu">
                <li className="nav-menu-list"><Link className="nav-menu-item" to="/catalog">Каталог</Link></li>
                <li className="nav-menu-list"><a className="nav-menu-item" href="#">Акції</a></li>
                <li className="nav-menu-list"><Link className="logo" to="/"></Link></li>
                <li className="nav-menu-list"><a className="nav-menu-item" href="#">Про нас</a></li>
                <li className="nav-menu-list"><a className="nav-menu-item" href="#">Контакти</a></li>
            </ul>
            <div className="bascket-cont">
                <button className="bascket-btn" type="button">
                    
                </button>
            </div>
            
        </nav>
    </div>
</header> );
}
 
export default Nav;