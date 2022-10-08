import style from "./LargeActionCard.module.css";
import NikeButton from "../../NikeButton/NikeButton";

const LargeActionCard = ({ image, alt, title }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={image} alt={alt} />
      <div className={style.content}>
        <h4>{title}</h4>
        <NikeButton text="Shop" variant="white" />
      </div>
    </div>
  );
};

export default LargeActionCard;
