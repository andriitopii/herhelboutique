import CardProductDef from "../CardProductDef/CardProductDef";
import HeadTitle from "../HeadTitle/HeadTitle";
import "./section-best.css";

const SectionBest = () => {
    return ( <section className="section-new load">
    <div className="container new-flex">
        <HeadTitle titleSection="Бестселлери"/>
        <div className="content-section">
            <CardProductDef/>
            <CardProductDef/>
            <CardProductDef/>
            <CardProductDef/>
        </div>
    </div>
</section> );
}
 
export default SectionBest;