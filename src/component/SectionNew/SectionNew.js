import CardProductDef from "../CardProductDef/CardProductDef";
import "./section-new.css";

const SectionNew = () => {
    return ( <section className="section-new load">
    <div className="container new-flex">
        <div className="head-section">
            <h1 className="head-title">Новинки</h1>
            <a href="/" className="primary-btn" type="button">Перейти в каталог</a>
        </div>
        <div className="content-section">
            <CardProductDef/>
            <CardProductDef/>
            <CardProductDef/>
            <CardProductDef/>
        </div>
    </div>
</section> );
}
 
export default SectionNew;