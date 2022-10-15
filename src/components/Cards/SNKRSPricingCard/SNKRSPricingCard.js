import style from "./SNKRSPricingCard.module.css";
import Image1 from "../../../assets/images/SNKRS/ec50ad80-da49-4064-af84-1d9fb34b71de.webp";

const SNKRSPricingCard = ({ product }) => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={product.img} alt={product.img} />
      </div>
      <div className={style.content}>
        <p className={style.tag}>{product.tag}</p>
        <h4 className={style.name}>{product.name}</h4>
        <p className={style.category}>{product.category}</p>
        <p className={style.price}>{product.price}</p>
      </div>
    </div>
  );
};

export default SNKRSPricingCard;
