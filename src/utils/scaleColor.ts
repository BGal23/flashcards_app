import color from "../assets/colors";

const scaleColor = (scale: number) => {
  if (scale >= 5) return color.headerButton;
  else if (scale <= -5) return color.error;
  else return color.activateButton;
};

export default scaleColor;
