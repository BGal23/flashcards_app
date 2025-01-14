import { IFinalObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

let previousIndex: number | null = null;

const wordDraw = async (): Promise<IFinalObject | null> => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  if (!array || array.length === 0) {
    return null;
  }
  const onlyActiveWords = array.filter((element) => element.isActive === true);

  if (onlyActiveWords.length === 0) {
    return null;
  }

  let randomNumber: number;
  do {
    randomNumber = getRandomNumber(onlyActiveWords.length);
  } while (randomNumber === previousIndex && onlyActiveWords.length > 1);

  previousIndex = randomNumber;
  return onlyActiveWords[randomNumber];
};

const getRandomNumber = (n: number): number => {
  return Math.floor(Math.random() * n);
};

export default wordDraw;
