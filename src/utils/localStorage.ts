import { IFinalObject, IObject } from "../types/data";
import { v4 as uuidv4 } from "uuid";

export const addToMemory = (object: IObject | undefined) => {
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

export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const generateUuid = (): string => {
  return uuidv4();
};

export const removeItemFromLocalStorageById = (key: string, id: string) => {
  const item = localStorage.getItem(key);

  if (item) {
    const array = JSON.parse(item);
    const updatedArray = array.filter((item: IFinalObject) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedArray));
  }
};

export const changeItemFromLocalStorageById = (key: string, id: string) => {
  const item = localStorage.getItem(key);

  if (item) {
    const array: IFinalObject[] = JSON.parse(item);
    const object: IFinalObject | undefined = array.find(
      (item: IFinalObject) => item.id === id
    );
    const index = array.findIndex((item: IFinalObject) => item.id === id);
    if (object) {
      const isActive = object.isActive;
      object.isActive = !isActive;
      array.splice(index, 1, object);

      localStorage.setItem(key, JSON.stringify(array));
    } else {
      console.error("searched object doesn't exist!");
    }
  }
};
