import style from "../NikeButton.module.css";

const NikeButton = ({ variant, text, children }) => {
  return (
    <button
      className={[
        style.btn,
        variant === "black" && style.btnBlack,
        variant === "white" && style.btnWhite,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default NikeButton;
