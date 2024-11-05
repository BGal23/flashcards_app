import { IFinalObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

const wordDraw = async () => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  if (!array || array.length === 0) {
    return null;
  }
  const randomNumber: number = getRandomNumber(array.length);
  return array[randomNumber].original;
};

const getRandomNumber = (n: number) => {
  return Math.floor(Math.random() * n);
};

export default wordDraw;
