import { Link } from "react-router-dom";
import "./card-product-def.css";
import imageProd from "./img/prodimg1.jpg";
const CardProductDef = () => {

  const id = 'sss';
  return (
    <Link to={'catalog/product/' + id} className="card-product-def">
      <div className="img-product-cont">
        <div className="img-prod">
            <img src={imageProd} />
        </div>
      </div>
      <div className="desk-product-cont">
        <h4 className="product-card-title">Антицелюлітний крем для тіла</h4>
        <ul className="product-card-price-brand-cont">
          <li>
            <a href="#" className="brand-name-product">Philip Martins</a>
          </li>
          <li>
            <div className="price-card-cont">
            <span className="price-old">1500</span>
            <span className="price-current">1500</span>
            </div>
            
          </li>
        </ul>
      </div>
      <div className="badge-cont">
        <span className="badge-card badge-new">NEW</span>
        <span className="badge-card badge-hot">HOT</span>
        <span className="badge-card badge-sale">SALE</span>
      </div>
      <div className="btn-cont-buy">
        <a href="#" className="btn-buy-into-card">Купити</a>
        <a href="#" className="add-to-card">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <mask
          id="mask0_342_1340"
          style={{ maskType: "alpha" }}
          width="24"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
        </mask>
        <g mask="url(#mask0_342_1340)">
          <path
            fill="#fff"
            d="M11.65 8.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3h-.7zM7.4 20.85c-.384 0-.704-.129-.963-.387a1.307 1.307 0 01-.387-.963c0-.383.129-.704.387-.962.259-.259.58-.388.963-.388s.704.13.962.388c.259.258.388.579.388.962 0 .384-.13.704-.388.963-.258.258-.579.387-.962.387zm9.2 0c-.384 0-.704-.129-.963-.387a1.307 1.307 0 01-.387-.963c0-.383.129-.704.387-.962.259-.259.58-.388.963-.388s.704.13.962.388c.259.258.388.579.388.962 0 .384-.13.704-.388.963-.258.258-.579.387-.962.387zM2.3 3.35v-.7h2.2l4.05 8.5h6.525c.15 0 .283-.037.4-.112a.98.98 0 00.3-.313L19.15 4.65h.8l-3.6 6.5a1.504 1.504 0 01-.514.513c-.209.125-.438.187-.686.187H8.1l-1.25 2.3c-.134.2-.138.417-.013.65.125.233.313.35.563.35h10.55v.7H7.4c-.534 0-.93-.22-1.188-.662-.258-.442-.262-.888-.012-1.338l1.55-2.75-3.7-7.75H2.3z"
          ></path>
        </g>
      </g>
    </svg>

        </a>
      </div>
    </Link>
  );
};

export default CardProductDef;
