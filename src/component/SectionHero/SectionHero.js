import "./section-hero.css";
import image1 from "./img/img.jpg";
import image2 from "./img/img2.jpg";
const SectionHero = () => {
    return ( <section className="section-hero load">
    <div className="container hero-cont">
        <div className="slider-cont">
            <a href="#" className="slide">
                <div className="slide-text purpul-background">
                    <div className="slide-text-cont">
                        <h3 className="slide-title-h3">BIOLOGIQUE RECHERCHE</h3>
                    <h1 className="slide-title-h1">CREME CONTOUR DES YEUX VIP Oz</h1>
                    <ul className="slide-text-choise">
                        <li className="slide-text-list">
                            <span className="list-arrow"></span>
                            <p className="list-text">ОСВІТЛЮЄ ТЕМНІ КОЛА</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow"></span>
                            <p className="list-text">ВИВОДИТЬ ТОКСИНИ</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow"></span>
                            <p className="list-text">НАСИЧУЄ КИСНЕМ</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow"></span>
                            <p className="list-text">макадамія - відновлює</p>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                <div className="slide-img">
                    <img  src={image1} />
                </div>
            </a>
            <a href="#" className="slide">
                <div className="slide-img">
                    <img  src={image2} />
                </div>
                <div className="slide-text gold-background">
                    <div className="slide-text-cont">
                        <h3 className="slide-title-h3">BIOLOGIQUE RECHERCHE</h3>
                    <h1 className="slide-title-h1">PROTECTION U.V.</h1>
                    <ul className="slide-text-choise">
                        <li className="slide-text-list">
                            <span className="list-arrow list-arrow-dark"></span>
                            <p className="list-text">проти темних плям</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow list-arrow-dark"></span>
                            <p className="list-text">дерматологічно протестовано</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow list-arrow-dark"></span>
                            <p className="list-text">водонепроникний</p>
                        </li>
                        <li className="slide-text-list">
                            <span className="list-arrow list-arrow-dark"></span>
                            <p className="list-text">проти старіння</p>
                        </li>
                    </ul>
                    </div>
                </div>
                
            </a>
        </div>
    </div>
</section> );
}
 
export default SectionHero;