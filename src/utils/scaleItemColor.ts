const scaleItemColor = (scale: number): string => {
  const minScale = -30;
  const maxScale = 30;

  const colorStart = { r: 247, g: 200, b: 201 }; // #f7c8c9
  const colorMiddle = { r: 255, g: 255, b: 255 }; // #ffffff
  const colorEnd = { r: 191, g: 241, b: 153 }; // #bff199

  let r, g, b;

  if (scale <= minScale) {
    r = colorStart.r;
    g = colorStart.g;
    b = colorStart.b;
  } else if (scale >= maxScale) {
    r = colorEnd.r;
    g = colorEnd.g;
    b = colorEnd.b;
  } else if (scale < 0) {
    const factor = (scale - minScale) / -minScale;
    r = Math.round(colorStart.r + (colorMiddle.r - colorStart.r) * factor);
    g = Math.round(colorStart.g + (colorMiddle.g - colorStart.g) * factor);
    b = Math.round(colorStart.b + (colorMiddle.b - colorStart.b) * factor);
  } else {
    const factor = (scale - 0) / maxScale;
    r = Math.round(colorMiddle.r + (colorEnd.r - colorMiddle.r) * factor);
    g = Math.round(colorMiddle.g + (colorEnd.g - colorMiddle.g) * factor);
    b = Math.round(colorMiddle.b + (colorEnd.b - colorMiddle.b) * factor);
  }

  return `rgb(${r}, ${g}, ${b})`;
};

export default scaleItemColor;
