import getAllData from "../db/getAllData";
import { IObject } from "../types/data";

type GetAllFunction = () => Promise<IObject[]>;
let previousIndex: number | null = null;

const wordDraw = async (
  getAll: GetAllFunction,
  category: string
): Promise<IObject | null> => {
  let fromTheCategory = [];
  const array: IObject[] = await getAllData(getAll);
  if (!array || array.length === 0) {
    return null;
  }
  if (category !== "") {
    fromTheCategory = array.filter((element) => element.category === category);
  } else {
    fromTheCategory = [...array];
  }
  const onlyActiveWords = fromTheCategory.filter(
    (element) => element.isActive === true
  );

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

const getRandomNumber = (n: number) => {
  return Math.floor(Math.random() * n);
};

export default wordDraw;
