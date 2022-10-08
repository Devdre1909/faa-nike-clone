import style from "../NikeButton.module.css";

const NikeButton = ({ variant, text }) => {
  return (
    <a
      href="/"
      className={[
        style.btn,
        variant === "black" && style.btnBlack,
        variant === "white" && style.btnWhite,
      ].join(" ")}
    >
      {text}
    </a>
  );
};

export default NikeButton;
