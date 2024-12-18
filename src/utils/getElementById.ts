import { IFinalObject, IUpdateObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

const getElementById = async (
  id: string
): Promise<IUpdateObject | undefined> => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  const oldElement: IFinalObject | undefined = array.find(
    (element) => element.id === id
  );

  if (oldElement) {
    return {
      originalWord: oldElement.original,
      learningWord: oldElement.learning,
      descriptionText: oldElement.description,
    };
  }

  return undefined;
};

export default getElementById;
