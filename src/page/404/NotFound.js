import SectionBest from "../../component/SectionBest/SectionBest";
import "./NotFound.css";
import { Link } from "react-router-dom";
import image404 from "./img/404.png";
import { useLocation } from "react-router-dom";




const NotFound = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin') )
  {
    return(<></>);  } else
  return (<>
    <section className="section-404 load">
      <div className="container new-flex">
        <div className="info-not-found">
          <h1 className="info-not-found-title">Упс... Щось пішло не так</h1>

          <Link to="/">
            <picture>
              <source srcset={image404} media="(min-width: 600px)" />
              <img src={image404} alt="MDN" />
            </picture>
          </Link>
          <h1 className="info-not-found-title">Цієї сторінки не існує, але ви завжди можете почати з початку</h1>
        <Link  to="/" className="primary-btn">Повернутись на головну сторінку</Link>
        </div>
        
      </div>
    </section>
    <SectionBest titleSection="Більше пропозицій для Вас" />
    </>
  );
};

export default NotFound;
