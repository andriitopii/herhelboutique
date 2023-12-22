
import "./Footer.css";

import { Link, useLocation } from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    
    if ( location.pathname.startsWith('/admin') ){
        return (<></>);
    } else
  return <footer className="footer">
    <div className="container new-flex">
        <div className="row  row-footer">
            <ul className="footer-menu-listener  footer-menu-newslater">
                <h3 className="footer-menu-title">Підписуйся на новини та оновлення</h3>
                <li className="footer-menu-list">
                    <form action="" className="form-newslater">
                        <input className="input-newslater" type="email" placeholder="Email"></input>
                        <button className="btn-newslater" type="submit">
                            <span className="btn-newslater-text">Підписатись</span>
                            <svg  width="24" height="24" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="btn-newslater-icon" id="arrow_forward_ios" d="M2.00586 19.3077L0.942383 18.2442L9.18661 10L0.942383 1.7558L2.00586 0.692322L11.3136 10L2.00586 19.3077Z" fill="#1C1B1F"/>
</svg>

                        </button>
                    </form>
                    <p className="label-form-newslater">Настискаючи кнопку “Підписатись” , ви погоджуєтесь з Умовами використання</p>
                </li>
                <li className="footer-menu-list">
                    <Link className="logo" to="/"></Link>
                </li>

            </ul>
            <ul className="footer-menu-listener">
                <h3 className="footer-menu-title">Магазин</h3>
                <li className="footer-menu-list">
                    <Link  to="/catalog" className="footer-menu-item">Каталог</Link>
                </li>
                <li className="footer-menu-list">
                    <Link  to="/brand" className="footer-menu-item">Бренди</Link>
                </li>
                <li className="footer-menu-list">
                    <Link  href="/promo" className="footer-menu-item">Акції</Link>
                </li>
                <li className="footer-menu-list">
                    <div className="footer-social-link-cont">
                        <a className="social-link s-link-instagram" target="_blank" href="https://www.instagram.com/herhel.clinic/"></a>
                        <a className="social-link s-link-telegram" href="#"></a>
                    </div>
                </li>
                
            </ul>
            <ul className="footer-menu-listener">
                <h3 className="footer-menu-title">Про Herhel Boutique</h3>
                <li className="footer-menu-list">
                    <Link  to="/about-us" className="footer-menu-item">Про нас</Link>
                </li>
                <li className="footer-menu-list">
                    <Link  to="./pay-and-delivery" className="footer-menu-item">Оплата і доставка</Link>
                </li>
                <li className="footer-menu-list">
                    <Link href="./" className="footer-menu-item">Обмін та повернення</Link>
                </li>
                <li className="footer-menu-list">
                    <a href="#" className="footer-menu-item">Політика приватності</a>
                </li>
                <li className="footer-menu-list">
                    <a href="#" className="footer-menu-item">Угода користувача</a>
                </li>
            </ul>
            <ul className="footer-menu-listener">
                <h3 className="footer-menu-title">Контакти</h3>
                <li className="footer-menu-list">
                    <h4 className="label-kontact">Телефон:</h4>
                    <a className="kontact-link" href="tel:+4874571006">574 - 571 - 006</a>
                </li>
                <li className="footer-menu-list">
                <h4 className="label-kontact">Адреса:</h4>
                <a className="kontact-link" href="https://www.google.pl/maps/@52.235223,20.9851853,3a,75y,8.23h,90t/data=!3m7!1e1!3m5!1sA0uT-oo_g6SjeO9RP0tXPg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DA0uT-oo_g6SjeO9RP0tXPg%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D8.232261%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">Warszawa, ul.Krochmalna 58, 00-864</a>
                </li>
                <li className="footer-menu-list">
                <h4 className="label-kontact">Електронна пошта:</h4>
                <a className="kontact-link" href="mailto:herhel.clinic@gmail.com">herhel.clinic@gmail.com</a>
                </li>
            </ul>
        </div>
        <div className="row">
            <p className="footer-copyright-text">Herhel Boutique© 2023. All Rights Reserved.</p>
            <p className="footer-copyright-text">DESIGNED BY TOPII WEB STUDIO</p>
            <ul className="footer-pay-listener">
                <li className="footer-pay-list f-pay-apple-pay"></li>
                <li className="footer-pay-list f-pay-visa"></li>
                <li className="footer-pay-list f-pay-pay-pal"></li>
                <li className="footer-pay-list f-pay-master"></li>
            </ul>
        </div>
    </div>
  </footer>;
};

export default Footer;
