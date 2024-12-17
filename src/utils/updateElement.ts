import { IFinalObject, IUpdateObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

const updateElement = async (id: string, element: IUpdateObject) => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  const index: number | undefined = array.findIndex(
    (element) => element.id === id
  );
  const newElement: IFinalObject = {
    ...array[index],
    original: element.originalWord,
    learning: element.learningWord,
    description: element.descriptionText,
  };

  array.splice(index, 1, newElement);
  return localStorage.setItem("data", JSON.stringify(array));
};

export default updateElement;
