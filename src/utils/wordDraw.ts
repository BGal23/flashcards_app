import { IFinalObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

const wordDraw = async () => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  if (!array || array.length === 0) {
    return null;
  }
  const onlyActiveWords = array.filter((element) => element.isActive === true);

  const randomNumber: number = getRandomNumber(onlyActiveWords.length);
  return onlyActiveWords[randomNumber];
};

const getRandomNumber = (n: number) => {
  return Math.floor(Math.random() * n);
};

export default wordDraw;
