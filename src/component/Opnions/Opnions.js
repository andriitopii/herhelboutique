import OpinionItem from "./OpinionItem";
import "./Opinions.css";


const Opnions = () => {
    return ( 
        <section className="section-opinions">
            <div className="container cont-opinions">
                <div className="opinions-push">
                    <h1 className="head-title">Відгуки</h1>
                    <p className="opinions-desk">Накращий показник якості продукції та сервісу - це відгуки наших клієнтів. Що вже активно купують у нас і задоволені свої вибором</p>
                    <form>
                    <textarea id="story" name="story"  rows="5" cols="33"/>
                        <button className="primary-btn" type="button">Написати відгук</button>
                    </form>
                    
                </div>
                <div className="opinions-list">
                    <OpinionItem />
                    <OpinionItem />
                    <OpinionItem />
                </div>
            </div>
        </section>
     );
}
 
export default Opnions;