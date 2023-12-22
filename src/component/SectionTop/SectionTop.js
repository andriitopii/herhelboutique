import { Link } from "react-router-dom";
import "./SectionTop.css";
import imageTop from "./img/img1top.png";
import imageTop2 from "./img/top2img.jpg";

const SectionTop = () => {
  return (
    <section className="section-top">
      <div className="container-top">
        <Link to="/product" className="top-product-img-cont">
          <img className="top-prod-img" src={imageTop} />
        </Link>
        <div className="top-product-text">
          <h1 className="top-prod-title">CREME CONTOUR DES YEUX VIP Oz</h1>
          <h4 className="top-prod-brand">BIOLOGIQUE RECHERCHE</h4>
          <p className="top-prod-desk">
            Він містить знаменитий кисневий комплекс Biologique Recherche, який
            освітлює та освітлює шкіру навколо очей, помітно зменшуючи
            набряклість та темні кола. Він нейтралізує забруднення і не дає їм
            проникати вглиб шкіри. Збагачений антивіковими компонентами, він має
            зволожуючу та протизморшкову дію. Шкіра навколо очей виглядає
            відпочившою і сяючою.
          </p>
          <ul className="slide-text-choise">
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">ОСВІТЛЮЄ ТЕМНІ КОЛА</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">ВИВОДИТЬ ТОКСИНИ</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">НАСИЧУЄ КИСНЕМ</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">макадамія - відновлює</p>
            </li>
          </ul>
          <div className="btn-cont-top-prod">
            <button className="primary-btn-black">Детальніше</button>
            <button className="primary-btn">Додати в кошик</button>
          </div>
        </div>
      </div>
      <div className="container-top">
        <div className="top-product-text">
          <h1 className="top-prod-title">CREME CONTOUR DES YEUX VIP Oz</h1>
          <h4 className="top-prod-brand">BIOLOGIQUE RECHERCHE</h4>
          <p className="top-prod-desk">
            Він містить знаменитий кисневий комплекс Biologique Recherche, який
            освітлює та освітлює шкіру навколо очей, помітно зменшуючи
            набряклість та темні кола. Він нейтралізує забруднення і не дає їм
            проникати вглиб шкіри. Збагачений антивіковими компонентами, він має
            зволожуючу та протизморшкову дію. Шкіра навколо очей виглядає
            відпочившою і сяючою.
          </p>
          <ul className="slide-text-choise">
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">ОСВІТЛЮЄ ТЕМНІ КОЛА</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">ВИВОДИТЬ ТОКСИНИ</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">НАСИЧУЄ КИСНЕМ</p>
            </li>
            <li className="slide-text-list">
              <span className="list-arrow list-arrow-dark"></span>
              <p className="list-text list-text-black">макадамія - відновлює</p>
            </li>
          </ul>
          <div className="btn-cont-top-prod">
            <button className="primary-btn-black">Детальніше</button>
            <button className="primary-btn">Додати в кошик</button>
          </div>
        </div>
        <Link to="/product" className="top-product-img-cont">
          <img className="top-prod-img" src={imageTop2} />
        </Link>
      </div>
    </section>
  );
};

export default SectionTop;
