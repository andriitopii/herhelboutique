import SectionHero from '../../component/SectionHero/SectionHero';
import BrandSection from '../../component/BrandSection/BrandSection';
import SectionNew from '../../component/SectionNew/SectionNew';
import SectionBest from '../../component/SectionBest/SectionBest';
import SectionTop from "../../component/SectionTop/SectionTop";
import Opnions from '../../component/Opnions/Opnions';
const Main = () => {
    return ( <>
    <SectionHero/>
    <BrandSection/>
    <SectionNew/>
    <SectionBest />
    <SectionTop />
    <SectionBest titleSection="SSSSS" />
    <Opnions/>
    </>  );
}
 
export default Main;