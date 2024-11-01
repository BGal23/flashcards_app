import { IFinalObject, IObject } from "../types/data";
import { v4 as uuidv4 } from "uuid";

const addToMemory = (object: IObject | undefined) => {
  console.log(object);

  if (object) {
    const existingData = getFromLocalStorage("data") || [];
    if (
      existingData.some(
        (value: IFinalObject) =>
          value.original.toLowerCase() === object.originalWord.toLowerCase() ||
          value.learning.toLowerCase() === object.learningWord.toLowerCase()
      )
    ) {
      return false;
    } else {
      const newObject = {
        id: generateUuid(),
        original: object.originalWord,
        learning: object.learningWord,
        description: object.description,
        isActive: true,
        scale: object.scale,
      };

      existingData.push(newObject);
      saveToLocalStorage("data", existingData);
    }
    return true;
  } else if (object === undefined) {
    return;
  } else {
    console.error("error");
  }
};

const saveToLocalStorage = (key: string, value: IObject[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const generateUuid = (): string => {
  return uuidv4();
};

export default addToMemory;
