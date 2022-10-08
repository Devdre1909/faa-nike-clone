import style from "./SNKRSPricingCard.module.css";
import Image1 from "../../../assets/images/SNKRS/ec50ad80-da49-4064-af84-1d9fb34b71de.webp";

const SNKRSPricingCard = () => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={Image1} alt="image1" />
      </div>
      <div className={style.content}>
        <p className={style.tag}>SNKRS Exclusives</p>
        <h4 className={style.name}>Air Jordan 1 Utility</h4>
        <p className={style.category}>Men's Shoe</p>
        <p className={style.price}>$160</p>
      </div>
    </div>
  );
};

export default SNKRSPricingCard;
